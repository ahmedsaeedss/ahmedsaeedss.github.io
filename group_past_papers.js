const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function nestPastPapers() {
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

        const targetCategories = ["FPSC Islamiat", "PPSC Islamiat", "SPSC Islamiat", "BPSC Islamiat", "KPSC Islamiat"];

        // Extract out the 5 Islamiat categories
        const islamiatSets = pastPapersSubj.subcategories.filter(sub => targetCategories.includes(sub.category));

        // Keep the rest
        const remainingSets = pastPapersSubj.subcategories.filter(sub => !targetCategories.includes(sub.category));

        if (islamiatSets.length > 0) {
            // Create a folder object
            const islamiatFolder = {
                category: "Islamic Studies",
                icon: "fa-mosque",
                isFolder: true,
                subcategories: islamiatSets
            };

            // Push the folder and the remaining sets back
            pastPapersSubj.subcategories = [...remainingSets, islamiatFolder];

            const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
            fs.writeFileSync(dataPath, newStr, 'utf8');

            console.log(`Successfully grouped ${islamiatSets.length} sets into Islamic Studies folder!`);
        } else {
            console.log("No Islamiat sets found to group. Maybe already grouped?");
        }

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

nestPastPapers();
