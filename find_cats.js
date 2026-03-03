const fs = require('fs');
const readline = require('readline');

async function findCategories() {
    const fileStream = fs.createReadStream('data.js');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let lineNumber = 0;
    for await (const line of rl) {
        lineNumber++;
        if (line.includes('"category":')) {
            console.log(`${lineNumber}: ${line.trim()}`);
        }
    }
}

findCategories();
