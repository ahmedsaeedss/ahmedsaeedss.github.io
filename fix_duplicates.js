const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function fixDuplicates() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let pastPapersSubj = arr.find(s => s.name === "Past Papers");
        if (!pastPapersSubj) {
            console.log("Past Papers not found.");
            return;
        }

        console.log("Capabilities before fix: " + pastPapersSubj.subcategories.length);

        // We want to keep only the UNIQUE categories based on name
        const uniqueCategories = [];
        const seenNames = new Set();

        for (const sub of pastPapersSubj.subcategories) {
            if (!seenNames.has(sub.category)) {
                seenNames.add(sub.category);
                uniqueCategories.push(sub);
            }
        }

        pastPapersSubj.subcategories = uniqueCategories;
        console.log("Capabilities after fix: " + pastPapersSubj.subcategories.length);

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Successfully removed duplicate categories.");

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

fixDuplicates();
