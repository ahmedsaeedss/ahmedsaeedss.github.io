const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function renameScienceCategories() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let everyDayScience = arr.find(s => s.name === "Everyday Science");

        if (!everyDayScience) {
            console.log("Everyday Science not found.");
            return;
        }

        // Mapping current to new names and icons
        const mapping = {
            "Physics Basics": { name: "Physical Sciences", icon: "fa-atom" },
            "Biology": { name: "Biological Sciences", icon: "fa-dna" },
            "Environmental Science": { name: "Environmental Sciences", icon: "fa-leaf" },
            "General Science Topics": { name: "Food Sciences & Nutrition", icon: "fa-apple-whole" }
        };

        everyDayScience.subcategories.forEach(sub => {
            if (mapping[sub.category]) {
                const newInfo = mapping[sub.category];
                console.log(`Renaming ${sub.category} to ${newInfo.name}`);
                sub.category = newInfo.name;
                sub.icon = newInfo.icon;
            }
        });

        // Ensure icons exist for all subcategories
        everyDayScience.subcategories.forEach(sub => {
            if (!sub.icon) sub.icon = "fa-vial";
        });

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Successfully refined Everyday Science categories!");

    } catch (e) {
        console.log("Error during renaming: ", e);
    }
}

renameScienceCategories();
