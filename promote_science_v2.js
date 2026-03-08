const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function reorganizeScienceSubjects() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let genScienceSubj = arr.find(s => s.name === "General Science");
        let pastPapersSubj = arr.find(s => s.name === "Past Papers");

        if (!genScienceSubj || !pastPapersSubj) {
            console.log("Subjects not found.");
            return;
        }

        const targetSubjects = ["Botany", "Zoology", "Chemistry", "Physics"];
        const icons = {
            "Botany": "fa-leaf",
            "Zoology": "fa-hippo",
            "Chemistry": "fa-vial",
            "Physics": "fa-atom"
        };

        const commissions = [
            { name: "FPSC", icon: "fa-file-signature" },
            { name: "PPSC", icon: "fa-file-contract" },
            { name: "SPSC", icon: "fa-file-invoice" },
            { name: "BPSC", icon: "fa-copy" },
            { name: "KPSC", icon: "fa-paste" }
        ];

        // 1. Promote to Main Subjects on Home Screen
        targetSubjects.forEach(name => {
            // Find existing subcategory in General Science
            const existingSub = genScienceSubj.subcategories.find(s => s.category === name);

            // Check if already a root subject
            if (!arr.find(s => s.name === name)) {
                const newSubject = {
                    name: name,
                    icon: icons[name] || "fa-microscope",
                    subcategories: [
                        {
                            category: "General " + name,
                            icon: "fa-book",
                            questions: existingSub ? existingSub.questions : []
                        }
                    ]
                };
                // insert before Past Papers (usually at bottom)
                const ppIndex = arr.indexOf(pastPapersSubj);
                arr.splice(ppIndex, 0, newSubject);
                console.log(`Promoted ${name} to Root Subject.`);
            }
        });

        // 2. Remove from General Science
        genScienceSubj.subcategories = genScienceSubj.subcategories.filter(s => !targetSubjects.includes(s.category));

        // 3. Add/Update folders in Past Papers
        targetSubjects.forEach(name => {
            let folder = pastPapersSubj.subcategories.find(s => s.category === name && s.isFolder);
            if (!folder) {
                folder = {
                    category: name,
                    icon: icons[name] || "fa-microscope",
                    isFolder: true,
                    subcategories: []
                };
                pastPapersSubj.subcategories.push(folder);
            }

            // Ensure 5 commissions exist in the folder
            commissions.forEach(comm => {
                const commCatName = `${comm.name} ${name}`;
                if (!folder.subcategories.find(s => s.category === commCatName)) {
                    folder.subcategories.push({
                        category: commCatName,
                        icon: comm.icon,
                        questions: []
                    });
                }
            });
        });

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Successfully reorganized science subjects and updated past paper folders!");

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

reorganizeScienceSubjects();
