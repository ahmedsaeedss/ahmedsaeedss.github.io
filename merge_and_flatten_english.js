const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function mergeAndFlattenEnglish() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        const englishObj = arr.find(s => s.name === "English");

        if (englishObj) {
            let allQuestions = [];

            // Loop through all existing subcategories and extract questions into a single flat array
            englishObj.subcategories.forEach(sub => {
                if (Array.isArray(sub.questions)) {
                    sub.questions.forEach(q => {
                        // Sometimes questions were objects, sometimes nested arrays. This normalizes to a flat array of objects.
                        if (Array.isArray(q)) {
                            allQuestions = allQuestions.concat(q);
                        } else {
                            allQuestions.push(q);
                        }
                    });
                }
            });

            // Now overwrite the subcategories array with just ONE element
            englishObj.subcategories = [
                {
                    category: "General English",
                    icon: "fa-book-open",
                    questions: allQuestions
                }
            ];

            const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
            fs.writeFileSync(dataPath, newStr, 'utf8');
            console.log("Merge and Flatten SUCCESSFUL! Total English questions: " + allQuestions.length);
        } else {
            console.log("English subject not found.");
        }
    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

mergeAndFlattenEnglish();
