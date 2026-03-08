const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function mergeEnglishCategories() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    // We can't simply JSON.parse because the file is `const mainQuizData = [...]`
    // So we extract the JSON part.
    const regex = /const\s+mainQuizData\s*=\s*(\[[\s\S]*?\]);\s*$/;
    const match = fileContent.match(regex);

    if (!match) {
        console.error("Could not find mainQuizData array.");
        return;
    }

    let arr;
    try {
        arr = JSON.parse(match[1]);
    } catch (e) {
        console.error("Failed to parse data.js array:", e);
        return;
    }

    // Find the English subject
    const englishIndex = arr.findIndex(s => s.name === "English");
    if (englishIndex === -1) {
        console.error("English subject not found.");
        return;
    }

    const englishSubject = arr[englishIndex];
    let allQuestions = [];

    // Collect all questions
    englishSubject.subcategories.forEach(sub => {
        allQuestions = allQuestions.concat(sub.questions);
    });

    // Replace subcategories with a single category
    englishSubject.subcategories = [
        {
            category: "General English",
            icon: "fa-book",
            questions: allQuestions
        }
    ];

    // Build the final file content
    const updatedContent = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";

    fs.writeFileSync(dataPath, updatedContent, 'utf8');
    console.log("Successfully merged English subcategories into one!");
}

mergeEnglishCategories();
