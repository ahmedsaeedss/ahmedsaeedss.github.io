const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

let fileContent = fs.readFileSync(dataPath, 'utf8');

const prefix = "const mainQuizData = ";
const arrayStart = fileContent.indexOf(prefix) + prefix.length;
const arrayEnd = fileContent.lastIndexOf("];") + 1;

let jsonStr = fileContent.substring(arrayStart, arrayEnd);
let arr = JSON.parse(jsonStr);

let engLang = arr.find(s => s.name === "English Language");
if (engLang) {
    console.log("English Language Subcategories:");
    engLang.subcategories.forEach(sub => {
        console.log(`- ${sub.category} (${sub.questions ? sub.questions.length : 0} questions)`);
    });
} else {
    console.log("Not found.");
}
