const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function setupAllPastPapers() {
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

        const subjects = [
            { name: "General Knowledge", icon: "fa-earth-americas" },
            { name: "English", icon: "fa-language" },
            { name: "General Science", icon: "fa-flask" },
            { name: "Mathematics", icon: "fa-calculator" },
            { name: "Pakistan Study", icon: "fa-star-and-crescent" },
            { name: "Urdu", icon: "fa-pen-nib" },
            { name: "Computer", icon: "fa-laptop-code" },
            { name: "Pakistan Affairs", icon: "fa-landmark" },
            { name: "Current Affairs", icon: "fa-newspaper" },
            { name: "Everyday Science", icon: "fa-bolt" }
        ];

        const commissions = [
            { name: "FPSC", icon: "fa-file-signature" },
            { name: "PPSC", icon: "fa-file-contract" },
            { name: "SPSC", icon: "fa-file-invoice" },
            { name: "BPSC", icon: "fa-copy" },
            { name: "KPSC", icon: "fa-paste" }
        ];

        // 1. Identify existing folders and loose sets
        const existingFolders = pastPapersSubj.subcategories.filter(sub => sub.isFolder);
        const looseSets = pastPapersSubj.subcategories.filter(sub => !sub.isFolder);

        // 2. Create "General" folder if there are loose sets
        const newHierarchy = [];
        if (looseSets.length > 0) {
            newHierarchy.push({
                category: "General Past Papers",
                icon: "fa-folder-open",
                isFolder: true,
                subcategories: looseSets
            });
        }

        // 3. Keep existing "Islamic Studies" folder
        const islamiat = existingFolders.find(f => f.category === "Islamic Studies");
        if (islamiat) {
            newHierarchy.push(islamiat);
        }

        // 4. Add all other subject folders
        subjects.forEach(subj => {
            // Avoid duplicating Islamic Studies if already there
            if (subj.name === "Islamic Studies") return;

            // If folder already exists, don't recreate it
            if (existingFolders.find(f => f.category === subj.name)) return;

            const folder = {
                category: subj.name,
                icon: subj.icon,
                isFolder: true,
                subcategories: commissions.map(comm => ({
                    category: `${comm.name} ${subj.name}`,
                    icon: comm.icon,
                    questions: []
                }))
            };
            newHierarchy.push(folder);
        });

        pastPapersSubj.subcategories = newHierarchy;

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Successfully reorganized all Past Papers into subject folders!");

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

setupAllPastPapers();
