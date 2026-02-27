$ErrorActionPreference = "Stop"

$fpscQuestions3 = @"
                    ,
                    { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], answer: 2, explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions." },
                    { q: "Who is the author of 'War and Peace'?", options: ["Charles Dickens", "Leo Tolstoy", "Mark Twain", "Homer"], answer: 1, explanation: "Leo Tolstoy, a Russian author, is considered one of the greatest authors of all time." },
                    { q: "Which gas is responsible for global warming?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 1, explanation: "Carbon dioxide acts as a greenhouse gas, trapping heat in the Earth's atmosphere." },
                    { q: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: 0, explanation: "Cairo is the capital and largest city of Egypt." },
                    { q: "What is the chemical symbol for Silver?", options: ["Au", "Ag", "Si", "S"], answer: 1, explanation: "Ag comes from the Latin word for silver, argentum." },
                    { q: "Who painted the Sistine Chapel ceiling?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: 1, explanation: "Michelangelo painted the ceiling between 1508 and 1512." },
                    { q: "What is the longest river in Asia?", options: ["Ganges", "Indus", "Yellow River", "Yangtze"], answer: 3, explanation: "The Yangtze is the longest river in Asia and the third longest in the world." },
                    { q: "Which element is a liquid at room temperature?", options: ["Bromine", "Iodine", "Chlorine", "Fluorine"], answer: 0, explanation: "Bromine is a nonmetal that is a reddish-brown liquid at room temperature." },
                    { q: "Who discovered America?", options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "James Cook"], answer: 2, explanation: "Christopher Columbus is credited with discovering the Americas in 1492." },
                    { q: "What is the hardest known natural material?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2, explanation: "Diamonds are the hardest known natural material." },
                    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: 0, explanation: "HTML is the standard markup language for documents designed to be displayed in a web browser." },
                    { q: "Which planet is known as the Ringed Planet?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1, explanation: "Saturn is widely known for its extensive and beautiful ring system." }
"@


$lines = Get-Content -Path "data.js" -Encoding UTF8
$updatedLines = @()

$inFpsc = $false
$fpscInserted = $false

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match 'category: "FPSC Past Papers"') {
        $inFpsc = $true
    }
    
    if ($inFpsc -and -not $fpscInserted -and $line -match '\]\s*$') {
        if ($updatedLines[-1] -match '\}$') {
            $updatedLines[-1] = $updatedLines[-1] + ","
        }
        $updatedLines += $fpscQuestions3
        $fpscInserted = $true
        $inFpsc = $false
    }
    
    $updatedLines += $line
}

$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Added 12 final questions to data.js."

