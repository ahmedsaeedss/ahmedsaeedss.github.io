$ErrorActionPreference = "Stop"

$ppscQuestions2 = @"
                    ,
                    { q: "Who was the first female Governor of a province in Pakistan?", options: ["Begum Ra'ana Liaquat Ali", "Benazir Bhutto", "Begum Shaista Ikramullah", "Fatima Jinnah"], answer: 0, explanation: "Begum Ra'ana Liaquat Ali Khan was the Governor of Sindh from 1973 to 1976." },
                    { q: "What is the square root of 225?", options: ["12", "15", "25", "35"], answer: 1, explanation: "15 * 15 = 225." },
                    { q: "Which gas is used in refrigerators?", options: ["Oxygen", "Ammonia", "Nitrogen", "Freon"], answer: 3, explanation: "Freon (Chlorofluorocarbons) or modern alternatives are used as refrigerants." },
                    { q: "Find the antonym of 'Fragile'.", options: ["Weak", "Delicate", "Strong", "Soft"], answer: 2, explanation: "Fragile means easily broken; strong is the opposite." },
                    { q: "Which Pakistani scientist won the Nobel Prize in Physics?", options: ["Dr. A.Q. Khan", "Dr. Abdus Salam", "Dr. Samar Mubarakmand", "Dr. Atta-ur-Rahman"], answer: 1, explanation: "Dr. Abdus Salam won the Nobel Prize in Physics in 1979." },
                    { q: "He prefers tea ___ coffee.", options: ["than", "over", "to", "against"], answer: 2, explanation: "The correct preposition after 'prefer' when comparing two nouns is 'to'." },
                    { q: "What is the capital of Turkey?", options: ["Istanbul", "Ankara", "Izmir", "Bursa"], answer: 1, explanation: "Ankara is the capital, while Istanbul is the largest city." },
                    { q: "The instrument used to measure blood pressure is?", options: ["Thermometer", "Barometer", "Sphygmomanometer", "Stethoscope"], answer: 2, explanation: "A sphygmomanometer is used to measure blood pressure." },
                    { q: "Which continent has the highest number of countries?", options: ["Asia", "Europe", "Africa", "South America"], answer: 2, explanation: "Africa has 54 recognized sovereign states." },
                    { q: "If 5x = 20, what is the value of 3x?", options: ["12", "15", "8", "10"], answer: 0, explanation: "If 5x = 20, then x = 4. Therefore, 3x = 12." },
                    { q: "When did Pakistan win the Cricket World Cup?", options: ["1987", "1992", "1996", "1999"], answer: 1, explanation: "Pakistan won the ICC Cricket World Cup in 1992 under Imran Khan's captaincy." }
"@

$fpscQuestions2 = @"
                    ,
                    { q: "What is the main function of the kidneys?", options: ["To pump blood", "To digest food", "To filter waste from blood", "To absorb oxygen"], answer: 2, explanation: "Kidneys filter blood to produce urine, removing waste." },
                    { q: "What does the abbreviation 'WWW' stand for?", options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], answer: 0, explanation: "WWW stands for World Wide Web." },
                    { q: "Choose the synonym for 'Obstinate'.", options: ["Flexible", "Stubborn", "Docile", "Weak"], answer: 1, explanation: "Obstinate means stubbornly refusing to change one's opinion." },
                    { q: "What is the unit of power?", options: ["Joule", "Newton", "Watt", "Volt"], answer: 2, explanation: "The watt (W) is a unit of power." },
                    { q: "Who was the founder of the Mughal Empire?", options: ["Akbar", "Babar", "Humayun", "Aurangzeb"], answer: 1, explanation: "Zahir-ud-din Muhammad Babur founded the Mughal Empire in 1526." },
                    { q: "She is good ___ playing the piano.", options: ["in", "at", "with", "on"], answer: 1, explanation: "The correct preposition is 'at' (good at something)." },
                    { q: "Which planet is known as the 'Morning Star' or 'Evening Star'?", options: ["Mars", "Jupiter", "Venus", "Mercury"], answer: 2, explanation: "Venus is often visible shortly before sunrise or after sunset." },
                    { q: "What is 25% of 80?", options: ["15", "20", "25", "30"], answer: 1, explanation: "0.25 * 80 = 20." },
                    { q: "In a computer, what is the function of the ALU?", options: ["Store data", "Perform arithmetic and logical operations", "Control input/output", "Manage memory"], answer: 1, explanation: "The Arithmetic Logic Unit performs all mathematical and logical tasks." },
                    { q: "Which country is the largest by land area?", options: ["Canada", "China", "United States", "Russia"], answer: 3, explanation: "Russia is the largest country in the world by surface area." },
                    { q: "What is the antonym of 'Barren'?", options: ["Empty", "Fertile", "Dry", "Desolate"], answer: 1, explanation: "'Barren' means too poor to produce much vegetation; 'fertile' is the opposite." }
"@

$lines = Get-Content -Path "data.js" -Encoding UTF8
$updatedLines = @()

$inPpsc = $false
$inFpsc = $false
$ppscInserted = $false
$fpscInserted = $false

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match 'category: "PPSC Past Papers"') {
        $inPpsc = $true
    }
    if ($line -match 'category: "FPSC Past Papers"') {
        $inFpsc = $true
    }
    
    if ($inPpsc -and -not $ppscInserted -and $line -match '\]\s*$') {
        if ($updatedLines[-1] -match '\}$') {
            $updatedLines[-1] = $updatedLines[-1] + ","
        }
        $updatedLines += $ppscQuestions2
        $ppscInserted = $true
        $inPpsc = $false
    }
    
    if ($inFpsc -and -not $fpscInserted -and $line -match '\]\s*$') {
        if ($updatedLines[-1] -match '\}$') {
            $updatedLines[-1] = $updatedLines[-1] + ","
        }
        $updatedLines += $fpscQuestions2
        $fpscInserted = $true
        $inFpsc = $false
    }
    
    $updatedLines += $line
}

$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Added ~22 more questions to data.js."

