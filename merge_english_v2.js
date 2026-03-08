const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function mergeEnglishCategories() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    // 1. Manually evaluate the data.js file to get the array robustly.
    // It's a huge file containing: const mainQuizData = [ ... ];

    // Instead of regex, let's just find the index of "English" and parse its subcategories directly.

    // Since we know exactly what is injected at the end, let's find `"name": "English"`
    let englishIdx = fileContent.lastIndexOf('"name": "English"');
    if (englishIdx === -1) {
        console.log("English not found");
        return;
    }

    let objectStartIndex = fileContent.lastIndexOf('{', englishIdx);

    // Now we need to parse from objectStartIndex to the end of the array. Let's do a reliable string extract
    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        const englishObj = arr.find(s => s.name === "English");
        let allQs = [];
        englishObj.subcategories.forEach(sub => {
            allQs = allQs.concat(sub.questions);
        });

        englishObj.subcategories = [
            {
                category: "General English",
                icon: "fa-book-open",
                questions: allQs
            }
        ];

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');
        console.log("Merged safely!");

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

mergeEnglishCategories();
