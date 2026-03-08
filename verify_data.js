const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js', 'utf8');
const prefix = "const mainQuizData = ";
const arrayStart = content.indexOf(prefix) + prefix.length;
const arrayEnd = content.lastIndexOf("];") + 1;
const jsonStr = content.substring(arrayStart, arrayEnd);
try {
    const data = JSON.parse(jsonStr);
    const pastPapers = data.find(s => s.name === "Past Papers");
    if (pastPapers) {
        console.log("Past Papers found.");
        const islamiat = pastPapers.subcategories.find(c => c.category === "Islamic Studies");
        if (islamiat) {
            console.log("Islamic Studies folder found.");
            console.log("IsFolder:", islamiat.isFolder);
            console.log("Sub-topics count:", islamiat.subcategories.length);
        } else {
            console.log("Islamic Studies folder NOT found.");
        }
    } else {
        console.log("Past Papers NOT found.");
    }
} catch (e) {
    console.error("Parse error:", e.message);
}
