const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function flattenEnglishCategories() {
    console.log("Reading data.js for flat merge...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    let englishIdx = fileContent.lastIndexOf('"name": "English"');
    if (englishIdx === -1) {
        console.log("English not found");
        return;
    }

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        const englishObj = arr.find(s => s.name === "English");

        if (englishObj && englishObj.subcategories.length === 1 && englishObj.subcategories[0].category === "General English") {
            // Already merged, but questions might be nested arrays. Let's flatten them.
            let flatQs = [];
            englishObj.subcategories[0].questions.forEach(item => {
                if (Array.isArray(item)) {
                    flatQs = flatQs.concat(item);
                } else {
                    flatQs.push(item);
                }
            });
            englishObj.subcategories[0].questions = flatQs;

            const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
            fs.writeFileSync(dataPath, newStr, 'utf8');
            console.log("Flattened safely!");
        } else {
            console.log("Structure not as expected. Couldn't flatten.");
        }

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

flattenEnglishCategories();
