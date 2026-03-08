const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

let fileContent = fs.readFileSync(dataPath, 'utf8');

const prefix = "const mainQuizData = ";
const arrayStart = fileContent.indexOf(prefix) + prefix.length;
const arrayEnd = fileContent.lastIndexOf("];") + 1;

let jsonStr = fileContent.substring(arrayStart, arrayEnd);
let arr = JSON.parse(jsonStr);

console.log("Subjects in data.js: ");
arr.forEach(subject => {
    console.log(`- ${subject.name} (Subcategories: ${subject.subcategories.length})`);
});
