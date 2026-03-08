document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const screens = {
        categories: document.getElementById('category-screen'),
        set: document.getElementById('set-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    };

    const categoriesGrid = document.getElementById('categories-grid');
    const setsGrid = document.getElementById('sets-grid');
    const setCategoryTitle = document.getElementById('set-category-title');
    const sectionTitle = document.getElementById('main-section-title');
    const homeLogo = document.getElementById('home-logo');
    const backToHomeFromSetsBtn = document.getElementById('back-to-home-from-sets');
    const introScreen = document.getElementById('intro-screen');
    const startQuizBtn = document.getElementById('start-quiz-btn');

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedbackContainer = document.getElementById('feedback-container');
    const explanationText = document.getElementById('explanation-text');

    // Header elements
    const currentCategoryTitle = document.getElementById('current-category-title');
    const questionProgressText = document.getElementById('question-progress-text');
    const progressFill = document.getElementById('progress-fill');
    const backBtn = document.getElementById('back-to-categories');

    // Result elements
    const finalScoreEl = document.getElementById('final-score');
    const totalQuestionsEl = document.getElementById('total-questions');
    const retryBtn = document.getElementById('retry-btn');
    const homeBtn = document.getElementById('home-btn');
    const nextSetBtn = document.getElementById('next-set-btn');
    const resultMessage = document.getElementById('result-message');

    // State
    let currentMainCategory = null;
    let currentSubcategoryData = null;
    let allCategoryQuestions = [];
    let currentSetQuestions = [];
    let currentSetIndex = 0;
    let totalSets = 0;

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOptionIndex = null;
    let hasAnswered = false;

    // Advanced Features State
    let isDarkMode = localStorage.getItem('theme') === 'dark';
    let isSoundEnabled = true;
    let timerInterval;
    const timePerQuestion = 60;
    let timeLeft = timePerQuestion;

    // --- Dynamic SEO & URL Handling ---
    function updateMetaTags(title, parentCategory, isQuizView) {
        const baseTitle = "MCQs Master | Competitive Exam Preparation";
        const newTitle = `${title} MCQs | ${baseTitle}`;
        const newDesc = `Prepare for ${title} under ${parentCategory}. Master top-quality MCQs online for free on MCQs Master.`;
        const newUrl = window.location.origin + window.location.pathname + "#" + encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase());

        // Update Document Title
        document.title = isQuizView ? newTitle : baseTitle;

        // Update Standard Meta
        const metaTitle = document.getElementById('seo-meta-title');
        const metaDesc = document.getElementById('seo-description');
        if (metaTitle) metaTitle.content = newTitle;
        if (metaDesc) metaDesc.content = newDesc;

        // Update Open Graph (OG)
        const ogTitle = document.getElementById('og-title');
        const ogDesc = document.getElementById('og-description');
        const ogUrl = document.getElementById('og-url');
        if (ogTitle) ogTitle.content = newTitle;
        if (ogDesc) ogDesc.content = newDesc;
        if (ogUrl) ogUrl.content = newUrl;

        // Update Twitter Cards
        const twTitle = document.getElementById('twitter-title');
        const twDesc = document.getElementById('twitter-description');
        const twUrl = document.getElementById('twitter-url');
        if (twTitle) twTitle.content = newTitle;
        if (twDesc) twDesc.content = newDesc;
        if (twUrl) twUrl.content = newUrl;

        // Update URL Hash without triggering scroll
        if (isQuizView && history.replaceState) {
            history.replaceState(null, null, "#" + encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase()));
        } else if (!isQuizView && history.replaceState) {
            history.replaceState(null, null, window.location.pathname);
        }
    }

    function checkHashForDeepLink() {
        if (!window.location.hash || window.location.hash.length <= 1) return;

        const hashTarget = decodeURIComponent(window.location.hash.substring(1)).replace(/-/g, ' ').toLowerCase();

        // Try to find matching subcategory and auto-open it
        let found = false;
        mainQuizData.forEach(mainCat => {
            mainCat.subcategories.forEach(subCat => {
                if (subCat.category.toLowerCase() === hashTarget) {
                    selectedMainCategory = mainCat.category;
                    startSubcategory(subCat);
                    found = true;
                }
            });
        });

        if (found) {
            console.log(`Deep linked to: ${hashTarget}`);
        }
    }

    // Call deep link check on load
    window.addEventListener('load', checkHashForDeepLink);

    let isExamMode = false;
    let examTimeLeft = 0;

    // --- Dynamic SEO & URL Handling ---
    function updateMetaTags(title, parentCategory, isQuizView) {
        const baseTitle = "MCQs Master | Competitive Exam Preparation";
        const newTitle = `${title} MCQs | ${baseTitle}`;
        const newDesc = `Prepare for ${title} under ${parentCategory}. Master top-quality MCQs online for free on MCQs Master.`;
        const newUrl = window.location.origin + window.location.pathname + "#" + encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase());

        // Update Document Title
        document.title = isQuizView ? newTitle : baseTitle;

        // Update Standard Meta
        const metaTitle = document.getElementById('seo-meta-title');
        const metaDesc = document.getElementById('seo-description');
        if (metaTitle) metaTitle.content = newTitle;
        if (metaDesc) metaDesc.content = newDesc;

        // Update Open Graph (OG)
        const ogTitle = document.getElementById('og-title');
        const ogDesc = document.getElementById('og-description');
        const ogUrl = document.getElementById('og-url');
        if (ogTitle) ogTitle.content = newTitle;
        if (ogDesc) ogDesc.content = newDesc;
        if (ogUrl) ogUrl.content = newUrl;

        // Update Twitter Cards
        const twTitle = document.getElementById('twitter-title');
        const twDesc = document.getElementById('twitter-description');
        const twUrl = document.getElementById('twitter-url');
        if (twTitle) twTitle.content = newTitle;
        if (twDesc) twDesc.content = newDesc;
        if (twUrl) twUrl.content = newUrl;

        // Update URL Hash without triggering scroll
        if (isQuizView && history.replaceState) {
            history.replaceState(null, null, "#" + encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase()));
        } else if (!isQuizView && history.replaceState) {
            history.replaceState(null, null, window.location.pathname);
        }
    }

    function checkHashForDeepLink() {
        if (!window.location.hash || window.location.hash.length <= 1) return;

        const hashTarget = decodeURIComponent(window.location.hash.substring(1)).replace(/-/g, ' ').toLowerCase();

        // Try to find matching subcategory and auto-open it
        let found = false;
        mainQuizData.forEach(mainCat => {
            mainCat.subcategories.forEach(subCat => {
                if (subCat.category.toLowerCase() === hashTarget) {
                    selectedMainCategory = mainCat.category;
                    startQuiz(subCat.category);
                    found = true;
                }
            });
        });

        if (found) {
            console.log(`Deep linked to: ${hashTarget}`);
        }
    }

    // Call deep link check on load
    window.addEventListener('load', checkHashForDeepLink);
    let examTimerInterval = null;
    let totalExamQuestions = 0;
    let examSelectedSubjects = [];

    // Analytics state
    let quizStartTime = 0;
    let weakTopicsSession = {}; // Tracks mistakes by specific subject/category in this session
    let chartInstance = null;

    // Audio Elements
    const soundCorrect = document.getElementById('sound-correct');
    const soundIncorrect = document.getElementById('sound-incorrect');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const soundToggleBtn = document.getElementById('sound-toggle');
    const timerBar = document.getElementById('timer-bar');
    const timeLeftText = document.getElementById('time-left');

    const translateBtn = document.getElementById('translate-btn');
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const dashboardModal = document.getElementById('dashboard-modal');
    const dashboardToggle = document.getElementById('dashboard-toggle');
    const closeDashboardBtn = document.getElementById('close-dashboard');
    const resetStatsBtn = document.getElementById('reset-stats');

    // Exam Modal Elements
    const examModal = document.getElementById('exam-modal');
    const navExam = document.getElementById('nav-exam');
    const closeExamModalBtn = document.getElementById('close-exam-modal');
    const startExamBtn = document.getElementById('start-exam-btn');
    const examSubjectList = document.getElementById('exam-subject-list');
    const examDurationText = document.getElementById('exam-duration-text');
    const examCountRadios = document.getElementsByName('exam-count');

    function updateNavActiveState(activeId) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeEl = document.getElementById(activeId);
        if (activeEl) activeEl.classList.add('active');
    }

    // Initialize Application
    function init() {
        if (isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
        renderCategories();
        bindEvents();
    }

    function bindEvents() {
        submitBtn.addEventListener('click', checkAnswer);
        nextBtn.addEventListener('click', nextQuestion);
        backBtn.addEventListener('click', handleBackButtonClick);
        homeBtn.addEventListener('click', showMainCategories);
        homeLogo.addEventListener('click', showMainCategories);
        backToHomeFromSetsBtn.addEventListener('click', handleSetsBackButtonClick);
        retryBtn.addEventListener('click', () => startSet(currentSetIndex));

        // Toggles
        themeToggleBtn.addEventListener('click', toggleTheme);
        soundToggleBtn.addEventListener('click', toggleSound);

        if (nextSetBtn) {
            nextSetBtn.addEventListener('click', () => {
                startSet(currentSetIndex + 1);
            });
        }

        const translateBtn = document.getElementById('translate-btn');
        if (translateBtn) {
            translateBtn.addEventListener('click', toggleTranslation);
        }

        const readAloudBtn = document.getElementById('read-aloud-btn');
        if (readAloudBtn) {
            readAloudBtn.addEventListener('click', readAloud);
        }

        if (dashboardToggle) dashboardToggle.addEventListener('click', openDashboard);
        if (closeDashboardBtn) closeDashboardBtn.addEventListener('click', closeDashboard);
        if (resetStatsBtn) resetStatsBtn.addEventListener('click', resetStats);

        const printBtn = document.getElementById('print-btn');
        if (printBtn) printBtn.addEventListener('click', () => window.print());

        const shareBtn = document.getElementById('share-score-btn');
        if (shareBtn) shareBtn.addEventListener('click', shareScore);

        if (bookmarkBtn) bookmarkBtn.addEventListener('click', toggleBookmark);

        const navHome = document.getElementById('nav-home');
        const navDaily = document.getElementById('nav-daily');
        const navMock = document.getElementById('nav-mock');
        const navBookmarks = document.getElementById('nav-bookmarks');

        const navMistakes = document.getElementById('nav-mistakes');
        const navLeaderboard = document.getElementById('nav-leaderboard');

        if (navHome) navHome.addEventListener('click', (e) => { e.preventDefault(); showMainCategories(); });
        if (navDaily) navDaily.addEventListener('click', (e) => { e.preventDefault(); startDailyMCQs(); });
        if (navMock) navMock.addEventListener('click', (e) => { e.preventDefault(); startMockTest(); });
        if (navExam) navExam.addEventListener('click', (e) => { e.preventDefault(); openExamModal(); });
        if (navBookmarks) navBookmarks.addEventListener('click', (e) => { e.preventDefault(); startBookmarksQuiz(); });
        if (navMistakes) navMistakes.addEventListener('click', (e) => { e.preventDefault(); startMistakesQuiz(); });
        if (navLeaderboard) navLeaderboard.addEventListener('click', (e) => { e.preventDefault(); openLeaderboard(); });

        if (closeExamModalBtn) closeExamModalBtn.addEventListener('click', closeExamModal);
        if (startExamBtn) startExamBtn.addEventListener('click', startTimedExam);

        examCountRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                const count = parseInt(e.target.value);
                examDurationText.textContent = count === 100 ? "90 Minutes" : "45 Minutes";
            });
        });

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            const leaderboardModal = document.getElementById('leaderboard-modal');
            if (e.target === dashboardModal) closeDashboard();
            if (e.target === examModal) closeExamModal();
            if (e.target === leaderboardModal) closeLeaderboard();
        });

        const closeLeaderboardBtn = document.getElementById('close-leaderboard');
        if (closeLeaderboardBtn) closeLeaderboardBtn.addEventListener('click', closeLeaderboard);

        // Handle native back button navigation
        window.addEventListener('popstate', (e) => {
            const state = e.state;
            if (!state) {
                // We reached the very first entry (landing). 
                // Stay on main categories and re-push state to "trap" the back button.
                showMainCategories(true);
                history.pushState({ screen: 'categories' }, '', '#categories');
                return;
            }

            if (state.screen === 'categories') {
                if (state.mainCategory) {
                    showSubcategories(state.mainCategory, true);
                } else {
                    showMainCategories(true);
                }
            } else if (state.screen === 'set') {
                if (state.subcategoryData) {
                    startSubcategory(state.subcategoryData, true);
                }
            } else if (state.screen === 'quiz') {
                if (state.setIndex !== undefined) {
                    startSet(state.setIndex, true);
                }
            } else if (screens[state.screen]) {
                switchScreen(state.screen, true);
            }
        });

        // Initialize with a push to ensure a "back" doesn't immediately exit
        history.replaceState({ screen: 'categories' }, '', '#main');
        history.pushState({ screen: 'categories' }, '', '#categories');
    }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    }

    function toggleSound() {
        isSoundEnabled = !isSoundEnabled;
        if (isSoundEnabled) {
            soundToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        } else {
            soundToggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
    }

    function playSound(isCorrect) {
        if (!isSoundEnabled) return;

        const sound = isCorrect ? soundCorrect : soundIncorrect;
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    // Helper: Fisher-Yates array shuffle
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Translation State and Logic
    let isTranslated = false;
    let originalQuestionText = "";
    let originalOptionsText = [];
    const translationCache = new Map();

    async function translateText(text, targetLang = 'ur') {
        if (translationCache.has(text)) return translationCache.get(text);
        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURI(text)}`;
            const response = await fetch(url);
            const data = await response.json();
            const translatedText = data[0].map(item => item[0]).join('');
            translationCache.set(text, translatedText);
            return translatedText;
        } catch (error) {
            console.error("Translation Error:", error);
            return text; // fallback to original
        }
    }

    async function toggleTranslation() {
        if (!translateBtn) return;

        isTranslated = !isTranslated;
        const icon = translateBtn.querySelector('i');
        const textSpan = translateBtn.querySelector('.trans-text');

        // Handle Global Button State
        if (isTranslated) {
            translateBtn.classList.add('active');
            icon.className = 'fa-solid fa-language';
            textSpan.textContent = "English";
        } else {
            translateBtn.classList.remove('active');
            icon.className = 'fa-solid fa-language';
            textSpan.textContent = "اردو";
        }

        // Apply translation only if we are currently viewing a question layout
        if (screens.quiz.classList.contains('active') && originalQuestionText) {
            if (isTranslated) {
                icon.className = 'fa-solid fa-spinner fa-spin'; // Loading state
                textSpan.textContent = "Translating...";

                // Translate Question
                const translatedQ = await translateText(originalQuestionText);
                questionText.textContent = translatedQ;
                questionText.style.direction = "rtl";
                questionText.style.fontFamily = "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif";

                // Translate Options
                const optionBtns = document.querySelectorAll('.option-btn');
                for (let i = 0; i < optionBtns.length; i++) {
                    const translatedOpt = await translateText(originalOptionsText[i]);
                    optionBtns[i].textContent = translatedOpt;
                    optionBtns[i].style.direction = "rtl";
                    optionBtns[i].style.fontFamily = "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif";
                }

                if (isTranslated) { // Check again in case it was toggled back to English rapidly
                    icon.className = 'fa-solid fa-language';
                    textSpan.textContent = "English";
                }
            } else {
                // Revert to English
                questionText.textContent = originalQuestionText;
                questionText.style.direction = "ltr";
                questionText.style.fontFamily = "inherit";

                const optionBtns = document.querySelectorAll('.option-btn');
                for (let i = 0; i < optionBtns.length; i++) {
                    if (originalOptionsText[i]) {
                        optionBtns[i].textContent = originalOptionsText[i];
                        optionBtns[i].style.direction = "ltr";
                        optionBtns[i].style.fontFamily = "inherit";
                    }
                }
            }
        }
    }

    // Dashboard State and Logic... (existing code)

    // --- Timed Exam Logic ---
    function openExamModal() {
        if (!examSubjectList) return;

        // Populate subject list with checkboxes
        examSubjectList.innerHTML = '';
        mainQuizData.forEach(subject => {
            const label = document.createElement('label');
            label.className = 'subject-checkbox-item';
            label.innerHTML = `
                <input type="checkbox" name="exam-subject" value="${subject.name}" checked>
                <span>${subject.name}</span>
            `;
            examSubjectList.appendChild(label);
        });

        examModal.classList.remove('hidden');
    }

    function closeExamModal() {
        if (examModal) examModal.classList.add('hidden');
    }

    function startTimedExam() {
        const selectedSubjectNames = Array.from(document.querySelectorAll('input[name="exam-subject"]:checked'))
            .map(cb => cb.value);

        if (selectedSubjectNames.length === 0) {
            alert("Please select at least one subject.");
            return;
        }

        const countRadio = document.querySelector('input[name="exam-count"]:checked');
        totalExamQuestions = parseInt(countRadio.value);

        // Pool questions from selected subjects
        let pool = [];
        mainQuizData.forEach(subject => {
            if (selectedSubjectNames.includes(subject.name)) {
                subject.subcategories.forEach(sub => {
                    pool = pool.concat(sub.questions);
                });
            }
        });

        if (pool.length === 0) {
            alert("No questions found in selected subjects.");
            return;
        }

        // Shuffle and take required count
        currentSetQuestions = shuffleArray([...pool]).slice(0, totalExamQuestions);
        totalExamQuestions = currentSetQuestions.length; // in case pool < target

        // Initialize Exam State
        isExamMode = true;
        currentQuestionIndex = 0;
        score = 0;
        examTimeLeft = totalExamQuestions === 100 ? 90 * 60 : 45 * 60;

        closeExamModal();
        switchScreen('quiz');
        showQuestion();
        startExamTimer();
    }

    function startExamTimer() {
        clearInterval(examTimerInterval);
        clearInterval(timerInterval); // stop per-question timer

        const timerContainer = document.getElementById('timer-container');
        if (timerContainer) timerContainer.classList.add('hidden'); // Hide per-question timer bar

        // Create or Show Global Exam Timer (if we had a dedicated UI for it, let's reuse timer-text for now or add a floating one)
        // For now, let's just update the existing timer-text but keep it static/global
        if (timeLeftText) timeLeftText.parentElement.style.color = "var(--primary)";

        examTimerInterval = setInterval(() => {
            examTimeLeft--;
            updateExamTimerDisplay();

            if (examTimeLeft <= 0) {
                clearInterval(examTimerInterval);
                finishQuiz();
            }
        }, 1000);
    }

    function updateExamTimerDisplay() {
        const minutes = Math.floor(examTimeLeft / 60);
        const seconds = examTimeLeft % 60;
        if (timeLeftText) {
            timeLeftText.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }
    let userStats = JSON.parse(localStorage.getItem('userStats')) || {
        totalQuizzes: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        subjectStats: {},
        scoreHistory: []
    };

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let mistakesBank = JSON.parse(localStorage.getItem('mistakesBank')) || [];

    // --- Firebase Sync Integration ---
    window.addEventListener('cloudDataLoaded', (e) => {
        const data = e.detail;
        if (data.userStats) userStats = data.userStats;
        if (data.bookmarks) bookmarks = data.bookmarks;
        if (data.mistakesBank) mistakesBank = data.mistakesBank;

        // Persist cloud data to local storage
        localStorage.setItem('userStats', JSON.stringify(userStats));
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        localStorage.setItem('mistakesBank', JSON.stringify(mistakesBank));

        // Refresh UI if open
        if (!dashboardModal.classList.contains('hidden')) {
            renderDashboard();
        }
        console.log('Firebase Cloud data successfully synced and merged into local state.');
    });

    function saveStats() {
        localStorage.setItem('userStats', JSON.stringify(userStats));
        window.dispatchEvent(new CustomEvent('saveToCloud', { detail: { type: 'stats', data: userStats } }));
    }

    function updateStats(subjectName, questionsCount, correctCount) {
        userStats.totalQuizzes++;
        userStats.totalQuestions += questionsCount;
        userStats.totalCorrect += correctCount;

        if (!userStats.subjectStats[subjectName]) {
            userStats.subjectStats[subjectName] = { total: 0, correct: 0 };
        }
        userStats.subjectStats[subjectName].total += questionsCount;
        userStats.subjectStats[subjectName].correct += correctCount;

        // Push recent score percentage
        const currentScorePercent = Math.round((correctCount / questionsCount) * 100);
        if (!userStats.scoreHistory) userStats.scoreHistory = [];
        userStats.scoreHistory.push(currentScorePercent);

        // Keep only last 10 scores for trend
        if (userStats.scoreHistory.length > 10) {
            userStats.scoreHistory.shift();
        }

        saveStats();
    }


    // Bookmark Logic
    function toggleBookmark() {
        const question = currentSetQuestions[currentQuestionIndex];
        // Use a unique ID based on question text
        const qId = question.q.substring(0, 50);

        const existingIndex = bookmarks.findIndex(b => b.qId === qId);

        if (existingIndex > -1) {
            bookmarks.splice(existingIndex, 1);
            if (bookmarkBtn) {
                bookmarkBtn.classList.remove('active');
                bookmarkBtn.querySelector('i').className = 'fa-regular fa-bookmark';
            }
        } else {
            bookmarks.push({
                ...question,
                qId: qId,
                categorySource: currentSubcategoryData.category,
                timestamp: new Date().getTime()
            });
            if (bookmarkBtn) {
                bookmarkBtn.classList.add('active');
                bookmarkBtn.querySelector('i').className = 'fa-solid fa-bookmark';
            }
        }

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        window.dispatchEvent(new CustomEvent('saveToCloud', { detail: { type: 'bookmarks', data: bookmarks } }));
        // Update home screen visibility if needed
    }

    // Mistake Bank Logic
    function addToMistakesBank(question) {
        const qId = question.q.substring(0, 50);
        const existing = mistakesBank.find(m => m.qId === qId);
        if (!existing) {
            mistakesBank.push({
                ...question,
                qId: qId,
                correctStreak: 0,
                addedAt: new Date().getTime()
            });
            saveMistakes();
        }
    }

    function handleMistakeCorrection(questionText) {
        const qId = questionText.substring(0, 50);
        const index = mistakesBank.findIndex(m => m.qId === qId);
        if (index > -1) {
            mistakesBank[index].correctStreak++;
            // If answered correctly twice in a row, remove from mistakes bank
            if (mistakesBank[index].correctStreak >= 2) {
                mistakesBank.splice(index, 1);
            }
            saveMistakes();
        }
    }

    function saveMistakes() {
        localStorage.setItem('mistakesBank', JSON.stringify(mistakesBank));
        window.dispatchEvent(new CustomEvent('saveToCloud', { detail: { type: 'mistakes', data: mistakesBank } }));
    }

    function startMistakesQuiz() {
        updateNavActiveState('nav-mistakes');
        if (mistakesBank.length === 0) {
            alert("No mistakes yet! When you answer questions incorrectly, they will be saved here for review.");
            return;
        }

        currentSetQuestions = shuffleArray([...mistakesBank]);
        currentQuestionIndex = 0;
        score = 0;

        currentSubcategoryData = null; // Important for back button logic
        currentCategoryTitle.textContent = `Mistake Bank Review (${mistakesBank.length})`;
        switchScreen('quiz');
        renderQuestion();
    }

    function openDashboard() {
        renderDashboard();
        dashboardModal.classList.remove('hidden');
    }

    function closeDashboard() {
        dashboardModal.classList.add('hidden');
    }

    // --- Share Logic ---
    async function shareScore() {
        if (!navigator.share) {
            alert("Sharing is not supported on this browser/device. You can take a screenshot!");
            return;
        }

        const catName = currentSubcategoryData ? currentSubcategoryData.category : "a Quiz";
        const shareScoreVal = document.getElementById('final-score').innerText;
        const totalQ = document.getElementById('total-questions').innerText;

        const shareData = {
            title: 'MCQs Master Score!',
            text: `I just scored ${shareScoreVal}/${totalQ} inside the '${catName}' quiz on MCQs Master! Can you beat my score? 🏆`,
            url: window.location.href
        };

        try {
            await navigator.share(shareData);
            console.log('Successfully shared');
        } catch (err) {
            console.error('Error sharing:', err);
        }
    }

    // --- Leaderboard Logic ---
    function openLeaderboard() {
        const modal = document.getElementById('leaderboard-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        fetchLeaderboardData();
    }

    function closeLeaderboard() {
        const modal = document.getElementById('leaderboard-modal');
        if (modal) modal.classList.add('hidden');
    }

    function fetchLeaderboardData() {
        const tbody = document.getElementById('leaderboard-tbody');
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Loading...<i class="fa-solid fa-spinner fa-spin"></i></td></tr>';

        // Dispatch custom event to let Firebase handle fetching
        window.dispatchEvent(new CustomEvent('requestLeaderboard'));
    }

    window.addEventListener('leaderboardDataLoaded', (e) => {
        const data = e.detail;
        const tbody = document.getElementById('leaderboard-tbody');
        tbody.innerHTML = '';

        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No data available yet. Be the first to take a quiz!</td></tr>';
            return;
        }

        data.forEach((user, index) => {
            const rank = index + 1;
            let rankClass = '';
            let rankIcon = rank;
            if (rank === 1) { rankClass = 'rank-1'; rankIcon = '<i class="fa-solid fa-trophy"></i>'; }
            else if (rank === 2) { rankClass = 'rank-2'; rankIcon = '<i class="fa-solid fa-medal"></i>'; }
            else if (rank === 3) { rankClass = 'rank-3'; rankIcon = '<i class="fa-solid fa-medal"></i>'; }

            const totalQ = user.userStats?.totalQuestions || 0;
            const totalC = user.userStats?.totalCorrect || 0;
            const avgScore = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;
            const quizzes = user.userStats?.totalQuizzes || 0;
            const name = user.displayName || "Anonymous Scholar";

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="${rankClass}">${rankIcon}</td>
                <td style="font-weight: 500;">${name}</td>
                <td>${quizzes}</td>
                <td>${totalC}</td>
                <td><span style="background: rgba(16, 185, 129, 0.1); color: var(--success); padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: bold;">${avgScore}%</span></td>
            `;
            tbody.appendChild(tr);
        });
    });

    function resetStats() {
        if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
            userStats = {
                totalQuizzes: 0,
                totalQuestions: 0,
                totalCorrect: 0,
                subjectStats: {},
                scoreHistory: []
            };
            saveStats();
            renderDashboard();
        }
    }

    function renderDashboard() {
        document.getElementById('stats-total-quizzes').textContent = userStats.totalQuizzes;

        const avgScore = userStats.totalQuestions > 0
            ? Math.round((userStats.totalCorrect / userStats.totalQuestions) * 100)
            : 0;
        document.getElementById('stats-avg-score').textContent = `${avgScore}%`;
        document.getElementById('stats-total-correct').textContent = userStats.totalCorrect;

        const list = document.getElementById('subject-progress-list');
        list.innerHTML = '';

        let strongestSubject = { name: "N/A", accuracy: -1 };
        let weakestSubject = { name: "N/A", accuracy: 101 };

        Object.keys(userStats.subjectStats).forEach(subject => {
            const stats = userStats.subjectStats[subject];
            const percentage = Math.round((stats.correct / stats.total) * 100);

            if (percentage > strongestSubject.accuracy) {
                strongestSubject = { name: subject, accuracy: percentage };
            }
            if (percentage < weakestSubject.accuracy) {
                weakestSubject = { name: subject, accuracy: percentage };
            }

            // Determine Mastery Level
            let masteryClass = '';
            let masteryLabel = '';
            if (percentage >= 75) {
                masteryClass = 'mastery-expert';
                masteryLabel = 'Expert';
            } else if (percentage >= 40) {
                masteryClass = 'mastery-intermediate';
                masteryLabel = 'Intermediate';
            } else {
                masteryClass = 'mastery-novice';
                masteryLabel = 'Novice';
            }

            const item = document.createElement('div');
            item.className = 'progress-item';
            item.innerHTML = `
                <div class="progress-label-row">
                    <span>${subject} <span class="mastery-badge ${masteryClass}">${masteryLabel}</span></span>
                    <span>${percentage}% (${stats.correct}/${stats.total})</span>
                </div>
                <div class="progress-bar-small">
                    <div class="progress-fill-small" style="width: ${percentage}%"></div>
                </div>
            `;
            list.appendChild(item);
        });

        // Add Insights if data exists
        if (Object.keys(userStats.subjectStats).length > 0) {
            const insightsDiv = document.createElement('div');
            insightsDiv.className = 'dashboard-insights';
            insightsDiv.innerHTML = `
                <div class="insight-item">
                    <i class="fa-solid fa-crown" style="color: var(--accent);"></i>
                    <span><strong>Strongest:</strong> ${strongestSubject.name} (${strongestSubject.accuracy}%)</span>
                </div>
                <div class="insight-item">
                    <i class="fa-solid fa-arrow-trend-down" style="color: var(--danger);"></i>
                    <span><strong>Weakest:</strong> ${weakestSubject.name} (${weakestSubject.accuracy}%)</span>
                </div>
            `;
            list.prepend(insightsDiv);
        }

        if (Object.keys(userStats.subjectStats).length === 0) {
            list.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 1rem;">No data yet. Take a quiz to see your progress!</p>';
        }

        // Render Score Trend Chart
        const trendChart = document.getElementById('score-trend-chart');
        if (trendChart && userStats.scoreHistory && userStats.scoreHistory.length > 0) {
            trendChart.innerHTML = '';
            userStats.scoreHistory.forEach((score, index) => {
                const barContainer = document.createElement('div');
                barContainer.className = 'trend-bar-container';

                // Color coding based on score
                let bgColor = 'var(--primary)';
                if (score < 50) bgColor = 'var(--danger)';
                else if (score < 75) bgColor = 'var(--accent)';

                barContainer.innerHTML = `
                    <div class="trend-bar" style="height: ${score}%; background: ${bgColor}">
                        <div class="trend-tooltip">Quiz ${index + 1}: ${score}%</div>
                    </div>
                    <div class="trend-label">Q${index + 1}</div>
                `;
                trendChart.appendChild(barContainer);
            });
        } else if (trendChart) {
            trendChart.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem; width: 100%; text-align: center;">Take a quiz to see your score trend!</span>';
        }
    }

    function findMainCategoryBySub(subName) {
        if (subName === 'Daily MCQs' || subName === 'Full Mock Test') return "Mixed Tests";
        for (const mainCat of mainQuizData) {
            if (mainCat.subcategories.some(sub => sub.category === subName)) {
                return mainCat.name;
            }
        }
        return "Others";
    }

    function switchScreen(screenName, isPopState = false, additionalState = {}) {
        stopSpeech(); // Stop audio when leaving screen
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        if (screens[screenName]) screens[screenName].classList.add('active');
        window.scrollTo(0, 0);

        if (!isPopState) {
            const state = { screen: screenName, ...additionalState };
            history.pushState(state, '', '#' + screenName);
        }
    }

    function renderCategories() {
        categoriesGrid.innerHTML = '';
        mainQuizData.forEach((mainCat, index) => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon">
                    <i class="fa-solid ${mainCat.icon || 'fa-book-open'}"></i>
                </div>
                <h3>${mainCat.name}</h3>
                <p style="color: #6B7280; font-size: 0.95rem;">${mainCat.subcategories.length} Topics</p>
            `;
            card.addEventListener('click', () => showSubcategories(mainCat));
            categoriesGrid.appendChild(card);
        });
    }

    function showMainCategories(isPopState = false) {
        updateNavActiveState('nav-home');
        currentMainCategory = null;
        currentSubcategoryData = null;
        if (sectionTitle) sectionTitle.textContent = "Select Main Subject";
        updateMetaTags("Home", "All Topics", false);

        renderCategories();
        switchScreen('categories', isPopState);
    }

    function showSubcategories(mainCat, isPopState = false) {
        currentMainCategory = mainCat;

        categoriesGrid.innerHTML = '';

        mainCat.subcategories.forEach((sub, index) => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon">
                    <i class="fa-solid ${sub.icon || 'fa-book-open'}"></i>
                </div>
                <h3>${sub.category}</h3>
                <p style="color: #6B7280; font-size: 0.95rem;">${sub.questions.length} Questions</p>
            `;
            card.addEventListener('click', () => startSubcategory(sub));
            categoriesGrid.appendChild(card);
        });

        // Update header or title if needed
        const sectionTitleElement = document.querySelector('#category-screen h2');
        if (sectionTitleElement) sectionTitleElement.textContent = mainCat.name;

        updateMetaTags(mainCat.name, "Various Subjects", false);
        switchScreen('categories', isPopState, { mainCategory: mainCat });
    }

    function startSubcategory(subData, isPopState = false) {
        currentSubcategoryData = subData;

        // Deep copy and shuffle questions for this subcategory
        allCategoryQuestions = shuffleArray(JSON.parse(JSON.stringify(subData.questions)));

        // Inject original category into each question for analytics
        allCategoryQuestions.forEach(q => q.originalCategory = subData.category);

        // Calculate total sets (10 questions per set)
        const setSize = 10;
        totalSets = Math.ceil(allCategoryQuestions.length / setSize);

        setCategoryTitle.textContent = subData.category;
        updateMetaTags(subData.category, currentMainCategory?.name || "Topic", true);

        renderSets();
        switchScreen('set', isPopState, { subcategoryData: subData });
    }

    function renderSets() {
        setsGrid.innerHTML = '';
        const setSize = 10;

        for (let i = 0; i < totalSets; i++) {
            const startIdx = i * setSize;
            const endIdx = Math.min((i + 1) * setSize, allCategoryQuestions.length);
            const setQuestionsCount = endIdx - startIdx;
            const setName = `Quiz ${i + 1}`;

            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.padding = '1.5rem 1rem';
            card.innerHTML = `
                <div class="category-icon" style="background: var(--primary); color: white; width: 60px; height: 60px; font-size: 1.5rem; margin-bottom: 0;">
                    <i class="fa-solid fa-layer-group"></i>
                </div>
                <h3 style="margin-top: 0.5rem;">${setName}</h3>
                <p style="color: #6B7280; font-size: 0.9rem;">${setQuestionsCount} Questions</p>
            `;
            card.addEventListener('click', () => startSet(i));
            setsGrid.appendChild(card);
        }
    }

    function handleBackButtonClick() {
        if (isExamMode) {
            if (!confirm("Are you sure you want to exit the exam? All progress will be lost.")) return;
            clearInterval(examTimerInterval);
            isExamMode = false;
        }

        if (currentSubcategoryData) {
            switchScreen('set');
        } else {
            handleSetsBackButtonClick();
        }
    }

    function handleSetsBackButtonClick() {
        showScreenFade('subcategory-categories'); // Use fade function
    }

    // --- Audio Reading (Text-to-Speech) Logic ---
    function readAloud() {
        if (!('speechSynthesis' in window)) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }

        // If currently speaking, stop it and exit (toggle functionality)
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();

            const readBtn = document.getElementById('read-aloud-btn');
            if (readBtn) {
                const icon = readBtn.querySelector('i');
                icon.className = 'fa-solid fa-volume-high';
                icon.classList.remove('pulse');
            }
            return;
        }

        // Otherwise clear queue and start reading
        window.speechSynthesis.cancel();

        const question = currentSetQuestions[currentQuestionIndex];
        if (!question) return;

        // Construct the text to read
        let textToRead = `Question: ${question.q}. `;

        // Add options
        const optionLabels = ['A', 'B', 'C', 'D'];
        question.options.forEach((opt, index) => {
            textToRead += `Option ${optionLabels[index]}: ${opt}. `;
        });

        const utterance = new SpeechSynthesisUtterance(textToRead);

        // Try to pick a clear, English voice
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en-') && v.name.includes('Google'));
        if (enVoice) {
            utterance.voice = enVoice;
        }

        utterance.rate = 0.9; // Slightly slower for clarity
        utterance.pitch = 1;

        // Add visual feedback to button while reading
        const readBtn = document.getElementById('read-aloud-btn');
        if (readBtn) {
            const icon = readBtn.querySelector('i');
            icon.className = 'fa-solid fa-volume-high';
            icon.classList.add('pulse');

            utterance.onend = () => {
                icon.className = 'fa-solid fa-volume-high';
                icon.classList.remove('pulse');
            };
            utterance.onerror = () => {
                icon.className = 'fa-solid fa-volume-high';
                icon.classList.remove('pulse');
            };
        }

        window.speechSynthesis.speak(utterance);
    }

    // Stop speaking when user goes to next question or leaves screen
    function stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        const readBtn = document.getElementById('read-aloud-btn');
        if (readBtn) {
            const icon = readBtn.querySelector('i');
            icon.className = 'fa-solid fa-volume-high';
            icon.classList.remove('pulse');
        }
    }

    function startSet(setIndex, isPopState = false) {
        currentSetIndex = setIndex;
        const setSize = 10;
        const startIdx = setIndex * setSize;
        const endIdx = Math.min((setIndex + 1) * setSize, allCategoryQuestions.length);

        currentSetQuestions = allCategoryQuestions.slice(startIdx, endIdx);
        currentQuestionIndex = 0;
        score = 0;

        currentCategoryTitle.textContent = `${currentSubcategoryData.category} - Quiz ${setIndex + 1} of ${totalSets}`;
        switchScreen('quiz', isPopState, { setIndex: setIndex });
        renderQuestion();
    }

    // Mulberry32 seeded PRNG
    function mulberry32(a) {
        return function () {
            var t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    }

    function startDailyMCQs() {
        updateNavActiveState('nav-daily');
        // Collect all questions
        let allQs = [];
        mainQuizData.forEach(mainCat => {
            mainCat.subcategories.forEach(subCat => {
                allQs = allQs.concat(subCat.questions);
            });
        });

        // Seed RNG based on date
        const today = new Date();
        const seed = parseInt(`${today.getFullYear()}${today.getMonth()}${today.getDate()}`, 10);
        const rng = mulberry32(seed);

        // Shuffle all questions using seeded RNG
        for (let i = allQs.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [allQs[i], allQs[j]] = [allQs[j], allQs[i]];
        }

        // Pick top 10
        currentSetQuestions = allQs.slice(0, 10);
        currentQuestionIndex = 0;
        score = 0;

        // Mock currentSubcategoryData so back buttons work gracefully
        currentSubcategoryData = { category: 'Daily MCQs' };
        currentSetIndex = 0;
        totalSets = 1;

        currentCategoryTitle.textContent = "Daily MCQs Challenge";
        switchScreen('quiz');
        renderQuestion();
    }

    function startMockTest() {
        updateNavActiveState('nav-mock');
        // Collect all questions
        let allQs = [];
        mainQuizData.forEach(mainCat => {
            mainCat.subcategories.forEach(subCat => {
                allQs = allQs.concat(subCat.questions);
            });
        });

        // Shuffle all questions randomly
        for (let i = allQs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQs[i], allQs[j]] = [allQs[j], allQs[i]];
        }

        // Pick top 100 or max available
        const testSize = Math.min(100, allQs.length);
        currentSetQuestions = allQs.slice(0, testSize);
        // Ensure source category is tracked
        currentSetQuestions.forEach(q => {
            if (!q.originalCategory) q.originalCategory = "Mock Test";
        });
        currentQuestionIndex = 0;
        score = 0;

        // Mock currentSubcategoryData so back buttons work gracefully
        currentSubcategoryData = { category: 'Full Mock Test' };
        currentSetIndex = 0;
        totalSets = 1;

        currentCategoryTitle.textContent = `Full Mock Test (${testSize} Questions)`;
        switchScreen('quiz');
        renderQuestion();
    }

    function startBookmarksQuiz() {
        updateNavActiveState('nav-bookmarks');
        if (bookmarks.length === 0) {
            alert("No bookmarks yet! Save some questions during a quiz to see them here.");
            return;
        }

        currentSetQuestions = [...bookmarks];
        currentQuestionIndex = 0;
        score = 0;

        currentSubcategoryData = { category: 'Bookmarked Questions' };
        currentSetIndex = 0;
        totalSets = 1;

        currentCategoryTitle.textContent = `Your Bookmarks (${bookmarks.length})`;
        switchScreen('quiz');
        renderQuestion();
    }

    function renderQuestion() {
        if (currentQuestionIndex === 0) {
            quizStartTime = Date.now();
            weakTopicsSession = {}; // Reset session mistakes for analytics
        }

        stopSpeech(); // Stop audio when moving to new question
        hasAnswered = false;
        selectedOptionIndex = null;
        submitBtn.disabled = true;

        submitBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
        feedbackContainer.classList.add('hidden');

        const question = currentSetQuestions[currentQuestionIndex];
        const total = currentSetQuestions.length;

        // Update progress
        questionProgressText.textContent = `${currentQuestionIndex + 1} / ${total}`;
        progressFill.style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;

        // Save original text for translation
        originalQuestionText = question.q;
        originalOptionsText = [...question.options];

        // Ensure English UI reset first
        questionText.style.direction = "ltr";
        questionText.style.fontFamily = "inherit";
        if (translateBtn) {
            translateBtn.classList.remove('active');
            translateBtn.querySelector('i').className = 'fa-solid fa-language';
            translateBtn.querySelector('.trans-text').textContent = "اردو";
        }

        // Render Text
        questionText.textContent = originalQuestionText;
        optionsContainer.innerHTML = '';

        // Render Options
        question.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.style.direction = "ltr";
            btn.style.fontFamily = "inherit";
            btn.addEventListener('click', () => selectOption(index, btn));
            optionsContainer.appendChild(btn);
        });

        // Update Bookmark state
        const qId = question.q.substring(0, 50);
        const isBookmarked = bookmarks.some(b => b.qId === qId);
        if (bookmarkBtn) {
            if (isBookmarked) {
                bookmarkBtn.classList.add('active');
                bookmarkBtn.querySelector('i').className = 'fa-solid fa-bookmark';
            } else {
                bookmarkBtn.classList.remove('active');
                bookmarkBtn.querySelector('i').className = 'fa-regular fa-bookmark';
            }
        }

        // Auto-translate if toggle was kept on
        if (isTranslated) {
            isTranslated = false; // reset temp to let toggle push it back true
            toggleTranslation();
        }

        if (isExamMode) {
            submitBtn.textContent = "Save & Next";
            const timerContainer = document.getElementById('timer-container');
            if (timerContainer) timerContainer.classList.remove('hidden');
            if (timerBar) timerBar.style.width = "100%";
            updateExamTimerDisplay();
        } else {
            submitBtn.textContent = "Check Answer";
            startTimer();
        }
    }

    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = timePerQuestion;
        updateTimerUI();

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerUI();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timeOutHandler();
            }
        }, 1000);
    }

    function updateTimerUI() {
        timeLeftText.textContent = timeLeft;
        const percentage = (timeLeft / timePerQuestion) * 100;
        timerBar.style.width = `${percentage}%`;

        timerBar.classList.remove('warning', 'danger');
        if (timeLeft <= 5 && timeLeft > 0) {
            timerBar.classList.add('danger');
        } else if (timeLeft <= 10) {
            timerBar.classList.add('warning');
        }
    }

    function timeOutHandler() {
        if (hasAnswered) return;
        // Auto check answer as incorrect if time runs out and no valid selection
        selectedOptionIndex = null;
        checkAnswer();
    }

    function selectOption(index, btnNode) {
        if (hasAnswered) return;

        // Remove selection from all
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

        // Add to current
        btnNode.classList.add('selected');
        selectedOptionIndex = index;
        submitBtn.disabled = false;
    }

    function checkAnswer() {
        if (hasAnswered) return;

        const question = currentSetQuestions[currentQuestionIndex];
        const isCorrect = (selectedOptionIndex === question.answer);

        if (isExamMode) {
            if (isCorrect) score++;
            nextQuestion();
            return;
        }

        hasAnswered = true;
        clearInterval(timerInterval); // Stop timer

        const correctIndex = question.answer;
        const optionsNodes = document.querySelectorAll('.option-btn');

        let feedbackIconHTML = '';

        playSound(isCorrect);

        // Apply feedback styles
        optionsNodes.forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctIndex) {
                btn.classList.add('correct');
            } else if (index === selectedOptionIndex) {
                btn.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            score++;
            feedbackContainer.style.borderLeftColor = 'var(--success)';
            feedbackIconHTML = '<i class="fa-solid fa-circle-check" style="color: var(--success);"></i> Correct! Explanation:';
            handleMistakeCorrection(question.q);
        } else {
            feedbackContainer.style.borderLeftColor = 'var(--danger)';
            feedbackIconHTML = '<i class="fa-solid fa-circle-xmark" style="color: var(--danger);"></i> Incorrect or Time Out. Explanation:';
            addToMistakesBank(question);

            // Track weak topics
            const t = question.originalCategory || currentSubcategoryData?.category || "Unknown Topic";
            if (!weakTopicsSession[t]) weakTopicsSession[t] = 0;
            weakTopicsSession[t]++;
        }

        // Show Explanation
        const headingEl = feedbackContainer.querySelector('h4');
        headingEl.innerHTML = feedbackIconHTML;

        let explanationString = question.explanation;
        if (isTranslated) {
            translateText(explanationString).then(translatedExp => {
                explanationText.textContent = translatedExp;
                explanationText.style.direction = "rtl";
                explanationText.style.fontFamily = "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif";
            });
        } else {
            explanationText.textContent = explanationString;
            explanationText.style.direction = "ltr";
            explanationText.style.fontFamily = "inherit";
        }

        feedbackContainer.classList.remove('hidden');

        // Toggle buttons
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentSetQuestions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        if (timerInterval) clearInterval(timerInterval);
        if (examTimerInterval) clearInterval(examTimerInterval);

        finalScoreEl.textContent = score;
        const total = currentSetQuestions.length;
        totalQuestionsEl.textContent = total;

        const trophyIcon = document.querySelector('.trophy-icon');
        const scoreCircle = document.querySelector('.score-circle');
        const percent = (score / total) * 100;

        if (isExamMode) {
            resultMessage.textContent = `Timed Exam Completed! You scored ${percent}%`;
            if (nextSetBtn) nextSetBtn.classList.add('hidden');
            isExamMode = false; // Reset
            // Reset timer text color
            if (timeLeftText) timeLeftText.parentElement.style.color = "inherit";
        } else {
            // Update User Stats
            const mainCatName = findMainCategoryBySub(currentSubcategoryData.category);
            updateStats(mainCatName, total, score);

            if (score === total) {
                resultMessage.textContent = 'Excellent! You mastered this set.';
            } else if (score >= total / 2) {
                resultMessage.textContent = 'Good effort! Keep practicing to secure full marks.';
            } else {
                resultMessage.textContent = 'You need more revision on this topic.';
            }

            // Handle Next Set Button logic
            if (currentSetIndex < totalSets - 1) {
                nextSetBtn.classList.remove('hidden');
            } else {
                nextSetBtn.classList.add('hidden');
            }
        }

        // Show Analytics Report Card
        renderReportCard(total, score);

        // Confetti Celebration
        if (percent >= 80 && typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#059669', '#10b981', '#fbbf24', '#ffffff']
            });
        }

        // Icon styles (shared)
        if (percent >= 80) {
            trophyIcon.style.color = 'var(--accent)';
            trophyIcon.innerHTML = '<i class="fa-solid fa-trophy"></i>';
            scoreCircle.style.borderColor = 'var(--success)';
        } else if (percent >= 50) {
            trophyIcon.style.color = 'var(--primary)';
            trophyIcon.innerHTML = '<i class="fa-solid fa-medal"></i>';
            scoreCircle.style.borderColor = 'var(--primary)';
        } else {
            trophyIcon.style.color = 'var(--danger)';
            trophyIcon.innerHTML = '<i class="fa-solid fa-book-open-reader"></i>';
            scoreCircle.style.borderColor = 'var(--danger)';
        }

        switchScreen('result');
    }

    function renderReportCard(totalQuestions, correctAnswers) {
        const reportCard = document.getElementById('quiz-report-card');
        if (!reportCard) return;

        // Populate basic stats
        const timeTakenMs = Date.now() - quizStartTime;
        const totalSecs = Math.floor(timeTakenMs / 1000);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        document.getElementById('report-time').textContent = `${mins}m ${secs}s`;

        const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
        document.getElementById('report-accuracy').textContent = `${accuracy}%`;

        // Populate Weak Topics
        const weakList = document.getElementById('weak-topics-list');
        weakList.innerHTML = '';
        const weakKeys = Object.keys(weakTopicsSession);

        if (weakKeys.length > 0) {
            weakKeys.sort((a, b) => weakTopicsSession[b] - weakTopicsSession[a]).forEach(topic => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-xmark"></i> ${topic} (${weakTopicsSession[topic]} mistakes)`;
                weakList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.style.background = 'rgba(16, 185, 129, 0.1)';
            li.style.color = 'var(--success)';
            li.innerHTML = `<i class="fa-solid fa-check-double"></i> Perfect! No weak areas identified in this session.`;
            weakList.appendChild(li);
        }

        // Render Chart using userStats history
        renderImprovementChart();

        reportCard.classList.remove('hidden');
    }

    function renderImprovementChart() {
        const ctx = document.getElementById('improvement-chart');
        if (!ctx) return;

        if (chartInstance) {
            chartInstance.destroy();
        }

        const history = userStats.scoreHistory || [];
        const labels = history.map((_, i) => `Q ${i + 1}`);
        const data = history;

        // If history is empty, show just the current
        if (data.length === 0) {
            const currentAcc = Math.round((score / currentSetQuestions.length) * 100);
            labels.push('Now');
            data.push(currentAcc);
        }

        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const gridColor = isDark ? '#374151' : '#E5E7EB';
        const textColor = isDark ? '#9CA3AF' : '#6B7280';

        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Score %',
                    data: data,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: '#10B981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    }
                }
            }
        });
    }

    // Start App
    init();
});
