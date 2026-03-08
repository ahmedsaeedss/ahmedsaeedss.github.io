/* 
   FIREBASE CLOUD SYNC & AUTHENTICATION MODULE 
   Step 1 Implementation
*/

// ==========================================
// 🔴 IMPORTANT: PASTE YOUR FIREBASE CONFIG HERE
// ==========================================
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
        updateAuthUI(user);

        if (user) {
            console.log("User logged in:", user.displayName);
            fetchCloudData(user.uid);
        } else {
            console.log("User logged out");
        }
    });

    // Attach listener to the login button
    const authBtn = document.getElementById('auth-btn');
    if (authBtn) {
        authBtn.addEventListener('click', handleAuthClick);
    }
}

function handleAuthClick() {
    if (currentUser) {
        // Logout
        auth.signOut().then(() => {
            alert("Successfully logged out.");
        }).catch(err => {
            console.error("Sign out error", err);
        });
    } else {
        // Login with Google
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            console.log("Logged in gracefully");
        }).catch((error) => {
            console.error("Auth Error:", error);
            alert("Login Failed: " + error.message);
        });
    }
}

function updateAuthUI(user) {
    const authBtn = document.getElementById('auth-btn');
    const authLabel = document.getElementById('auth-btn-label');

    if (!authBtn || !authLabel) return;

    if (user) {
        authBtn.classList.remove('auth-btn-unlogged');
        authBtn.classList.add('auth-btn-logged');
        authLabel.textContent = "Logout";
        // Optionally show profile pic
        const icon = authBtn.querySelector('i');
        if (icon) {
            icon.className = 'fa-solid fa-right-from-bracket';
        }
    } else {
        authBtn.classList.add('auth-btn-unlogged');
        authBtn.classList.remove('auth-btn-logged');
        authLabel.textContent = "Log In";
        const icon = authBtn.querySelector('i');
        if (icon) {
            icon.className = 'fa-brands fa-google';
        }
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

            // Dispatch event to script.js to update local state
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

// Initialize on load
document.addEventListener('DOMContentLoaded', initFirebase);
