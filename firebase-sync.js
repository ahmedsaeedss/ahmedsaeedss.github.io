/* 
   FIREBASE CLOUD SYNC & AUTHENTICATION MODULE 
   Step 1 Implementation
*/

// ==========================================
// 🔴 IMPORTANT: PASTE YOUR FIREBASE CONFIG HERE
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyBDptYbPZqxl5gqRv8Bq07dh7WeV9dDeHY",
    authDomain: "mcqs-master-app.firebaseapp.com",
    projectId: "mcqs-master-app",
    storageBucket: "mcqs-master-app.firebasestorage.app",
    messagingSenderId: "787829790061",
    appId: "1:787829790061:web:c832025c0f4be558c93664",
    measurementId: "G-5S767H10N2"
};

// Initialize Firebase
let app, auth, db;
let currentUser = null;

// Function to initialize after checking if config is somewhat valid
function initFirebase() {
    if (firebaseConfig.apiKey === "YOUR_API_KEY") {
        console.warn("Firebase Config not updated. Cloud sync is disabled. Please update firebase-sync.js with your project credentials.");
        return;
    }

    try {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();

        setupAuthListener();
        console.log("Firebase initialized successfully.");
    } catch (e) {
        console.error("Firebase Init Error:", e);
    }
}

// ==========================================
// AUTHENTICATION LOGIC
// ==========================================
function setupAuthListener() {
    auth.onAuthStateChanged(user => {
        currentUser = user;
        // Don't update UI directly here if script.js handles the local state mostly
        // but we can dispatch an event to sync it if needed.
        if (user) {
            console.log("User logged in:", user.displayName || user.email);
            fetchCloudData(user.uid);
            
            // Sync user back to script.js if needed (for UI)
            // But we already updated UI in script.js on success.
        } else {
            console.log("User logged out");
        }
    });

    // Listeners for events dispatched from script.js modal
    window.addEventListener('authSubmit', handleAuthSubmit);
    window.addEventListener('socialLogin', handleSocialLogin);
    window.addEventListener('authLogout', () => {
        if(auth) auth.signOut();
    });
}

function handleAuthSubmit(e) {
    if (!auth) {
        console.warn("Firebase Auth not initialized. Using local fallback.");
        return;
    }

    const { isSignUpMode, email, username, password, role } = e.detail;

    if (isSignUpMode) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return user.updateProfile({ displayName: username })
                    .then(() => {
                        // Save the user role in Firestore upon signup
                        return db.collection('users').doc(user.uid).set({
                            role: role || 'user',
                            displayName: username,
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        }, { merge: true });
                    })
                    .then(() => user);
            })
            .then((user) => {
                alert(`Successfully signed up as ${user.displayName}! (${role})`);
                document.getElementById('login-modal').classList.add('hidden');
                // Trigger local login flow in script.js to update UI is handled by auth state listener 
            })
            .catch((error) => {
                alert("Sign Up Error: " + error.message);
                console.error("Sign Up Error:", error);
            });
    } else {
        // Since we don't have email in login form right now (just username), this requires Firebase 
        // to use email. If they enter email in the username field, it might work, or they use fallback.
        // Assuming they use email in the username field for Firebase login:
        const loginIdentifier = email || username; 
        
        auth.signInWithEmailAndPassword(loginIdentifier, password)
            .then((userCredential) => {
                // Determine if they selected the right role (optional validation could be done via Claims or Firestore check)
                alert("Successfully logged in!");
                document.getElementById('login-modal').classList.add('hidden');
            })
            .catch((error) => {
                console.warn("Firebase login failed, falling back to local admin check if applicable:", error.message);
            });
    }
}

function handleSocialLogin(e) {
    if (!auth) {
        alert("Firebase not configured for social login.");
        return;
    }
    const providerStr = e.detail;
    let provider;
    
    if (providerStr === 'google') {
        provider = new firebase.auth.GoogleAuthProvider();
    } else if (providerStr === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider();
    }

    if (provider) {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(`${providerStr} login successful`, result.user);
                document.getElementById('login-modal').classList.add('hidden');
            }).catch((error) => {
                console.error(`${providerStr} Auth Error:`, error);
                alert(`${providerStr} Login Failed: ` + error.message);
            });
    }
}

// ==========================================
// CLOUD SYNC LOGIC (FIRESTORE)
// ==========================================

async function fetchCloudData(uid) {
    try {
        const docRef = db.collection('users').doc(uid);
        const doc = await docRef.get();
        if (doc.exists) {
            const data = doc.data();
            console.log("Cloud data fetched:", data);

            // Sync the userRole back to script.js if it exists
            if (data.role) {
                // We dispatch an event or simply use localStorage if script.js relies on it
                localStorage.setItem('userRole', data.role);
                // Also trigger UI update event indirectly
                window.dispatchEvent(new CustomEvent('authRoleLoaded', { detail: data.role }));
            }

            // Dispatch event to script.js to update local state like stats
            window.dispatchEvent(new CustomEvent('cloudDataLoaded', {
                detail: data
            }));
        } else {
            console.log("No cloud data found. Starting fresh.");
        }
    } catch (e) {
        console.error("Error fetching cloud data:", e);
    }
}

// Listen to local saves and push to cloud
window.addEventListener('saveToCloud', (e) => {
    if (!currentUser || !db) return; // Ignore if not logged in

    const { type, data } = e.detail;
    const uid = currentUser.uid;
    const docRef = db.collection('users').doc(uid);

    // Prepare update object based on what was saved locally
    const updatePayload = {};
    if (type === 'stats') {
        updatePayload.userStats = data;
    } else if (type === 'bookmarks') {
        updatePayload.bookmarks = data;
    } else if (type === 'mistakes') {
        updatePayload.mistakesBank = data;
    }

    docRef.set(updatePayload, { merge: true })
        .then(() => {
            console.log(`Successfully synced ${type} to cloud.`);
            // Update displayName for leaderboard if it's the first time
            docRef.set({ displayName: currentUser.displayName }, { merge: true });
        })
        .catch(err => console.error(`Error syncing ${type}:`, err));
});

// Listener for Leaderboard
window.addEventListener('requestLeaderboard', async () => {
    if (!db) return;
    try {
        const querySnapshot = await db.collection('users')
            .orderBy('userStats.totalCorrect', 'desc')
            .limit(50)
            .get();

        const leaderboardData = [];
        querySnapshot.forEach(doc => {
            leaderboardData.push(doc.data());
        });

        window.dispatchEvent(new CustomEvent('leaderboardDataLoaded', { detail: leaderboardData }));
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        window.dispatchEvent(new CustomEvent('leaderboardDataLoaded', { detail: [] }));
    }
});

// ==========================================
// PHASE 7: LIVE DATABASE SYNC (FIRESTORE)
// ==========================================

// Function to initiate real-time listener on the mcq_categories collection
function initFirestoreSync() {
    if (!db) return;

    db.collection('mcq_categories').onSnapshot((snapshot) => {
        if (snapshot.empty) {
            console.log("No categories found in Firestore (database is empty). Using local data.js");
            // Dispatch event so script.js initializes with local data
            window.dispatchEvent(new CustomEvent('firebaseDataLoaded'));
            return;
        }

        const cloudQuizData = [];
        snapshot.forEach(doc => {
            // Reconstruct the array format that the app expects
            cloudQuizData.push(doc.data());
        });

        // The app expects mainQuizData to be a global array containing category objects.
        // We replace it completely with the live data from Firebase
        window.mainQuizData = cloudQuizData;

        console.log("Real-time data synced from Firestore successfully!");
        
        // Dispatch an event so script.js knows the data is ready to be rendered
        window.dispatchEvent(new CustomEvent('firebaseDataLoaded'));
    }, (error) => {
        console.error("Error syncing with Firestore:", error);
    });
}

// Admin utility to migrate the local data.js file to Firestore
window.migrateDataToFirestore = async function() {
    if (!db) {
        alert("Firebase is not initialized.");
        return;
    }
    if (!window.mainQuizData || window.mainQuizData.length === 0) {
        alert("Local data.js is not loaded or is empty.");
        return;
    }

    try {
        const batch = db.batch();
        const categoriesRef = db.collection('mcq_categories');

        window.mainQuizData.forEach((mainCat) => {
            // We use the category name as the document ID for easy reference later
            const docId = mainCat.name.replace(/\s+/g, '_'); 
            const docRef = categoriesRef.doc(docId);
            batch.set(docRef, mainCat);
        });

        await batch.commit();
        alert("Migration Successful! All offline Data has been securely uploaded to Firebase Firestore.");
    } catch (error) {
        console.error("Migration Failed:", error);
        alert("Migration Failed: " + error.message);
    }
};

// Start the real-time sync after initialization
function onFirebaseReady() {
    initFirestoreSync();
}

// Write events receivers from script.js
window.addEventListener('submitPendingQuestion', async (e) => {
    const { userQ, onSuccess, onError } = e.detail;
    if (!db) {
        if(onError) onError("Firebase is not initialized.");
        return;
    }
    try {
        await db.collection('pending_mcqs').add(userQ);
        if(onSuccess) onSuccess();
    } catch (error) {
        console.error("Error submitting pending question:", error);
        if(onError) onError(error.message);
    }
});

window.addEventListener('updateCategoryInFirestore', async (e) => {
    const { mainCat, onSuccess, onError } = e.detail;
    if (!db) {
        if(onError) onError("Firebase is not initialized.");
        return;
    }
    try {
        const docId = mainCat.name.replace(/\s+/g, '_'); 
        await db.collection('mcq_categories').doc(docId).set(mainCat);
        if(onSuccess) onSuccess();
    } catch (error) {
        console.error("Error updating category in Firestore:", error);
        if(onError) onError(error.message);
    }
});

// Admin Pending questions management
window.addEventListener('fetchPendingQuestions', async (e) => {
    const { onSuccess, onError } = e.detail;
    if (!db) {
        if(onError) onError("Firebase not active.");
        return;
    }
    try {
        const snap = await db.collection('pending_mcqs').get();
        const pending = [];
        snap.forEach(doc => {
            pending.push({ id: doc.id, ...doc.data() });
        });
        if(onSuccess) onSuccess(pending);
    } catch(err) {
        if (onError) onError(err.message);
    }
});

window.addEventListener('resolvePendingQuestion', async (e) => {
    const { action, docId, mcqData, targetMainObj, onSuccess, onError } = e.detail;
    if (!db) {
        if(onError) onError("Firebase not active.");
        return;
    }
    try {
        const batch = db.batch();
        // Remove from pending
        batch.delete(db.collection('pending_mcqs').doc(docId));
        
        // If approve, also update targeting main document
        if (action === 'approve' && targetMainObj) {
            const catDocId = targetMainObj.name.replace(/\s+/g, '_');
            batch.set(db.collection('mcq_categories').doc(catDocId), targetMainObj);
        }
        
        await batch.commit();
        if(onSuccess) onSuccess();
    } catch(err) {
        if(onError) onError(err.message);
    }
});

// Override the original initFirebase to include onFirebaseReady
const originalInitFirebase = initFirebase;
initFirebase = function() {
    originalInitFirebase();
    if (db) {
        onFirebaseReady();
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', initFirebase);
