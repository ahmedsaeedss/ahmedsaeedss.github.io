const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function mergeScience() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let genScience = arr.find(s => s.name === "General Science");
        let everyDayScience = arr.find(s => s.name === "Everyday Science");

        if (!genScience || !everyDayScience) {
            console.log("One or both subjects not found. Maybe already merged?");
            return;
        }

        // 1. Merge Subcategories into Everyday Science
        // Map of target category names for consolidation
        const consolidatedSubcats = everyDayScience.subcategories;

        genScience.subcategories.forEach(gsSub => {
            let targetSubName = gsSub.category;

            // Consolidation logic:
            // "Everyday Science" (sub) -> "General Science" (to avoid name clash with parent)
            if (targetSubName === "Everyday Science") targetSubName = "General Science Topics";
            // "Biology" + "General Biology" -> "Biology"
            if (targetSubName === "Biology") targetSubName = "Biology";

            let esSub = consolidatedSubcats.find(s => s.category === targetSubName || (targetSubName === "Biology" && s.category === "General Biology"));

            if (esSub) {
                // Merge questions
                esSub.questions = [...(esSub.questions || []), ...(gsSub.questions || [])];
                // Standardize name if it was "General Biology"
                esSub.category = targetSubName;
            } else {
                // Add as new subcategory
                consolidatedSubcats.push({
                    category: targetSubName,
                    icon: gsSub.icon || "fa-flask",
                    questions: gsSub.questions || []
                });
            }
        });

        everyDayScience.subcategories = consolidatedSubcats;

        // 2. Remove "General Science" from Main Subjects
        arr = arr.filter(s => s.name !== "General Science");

        // 3. Sync Past Papers
        let pastPapers = arr.find(s => s.name === "Past Papers");
        if (pastPapers) {
            let ppGenScienceIndex = pastPapers.subcategories.findIndex(s => s.category === "General Science");
            if (ppGenScienceIndex > -1) {
                // Check if Everyday Science already has a folder in Past Papers
                let ppEveryday = pastPapers.subcategories.find(s => s.category === "Everyday Science");
                if (ppEveryday) {
                    // Merge questions if any loose ones exist (unlikely in folders but for safety)
                    const looseOld = pastPapers.subcategories[ppGenScienceIndex].subcategories || [];
                    ppEveryday.subcategories = [...(ppEveryday.subcategories || []), ...looseOld];
                    // Remove the old General Science folder
                    pastPapers.subcategories.splice(ppGenScienceIndex, 1);
                } else {
                    // Just rename General Science to Everyday Science in Past Papers
                    pastPapers.subcategories[ppGenScienceIndex].category = "Everyday Science";
                }
            }
        }

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Successfully consolidated General Science and Everyday Science!");

    } catch (e) {
        console.log("Error during merge: ", e);
    }
}

mergeScience();
