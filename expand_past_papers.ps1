$ErrorActionPreference = "Stop"

$ppscQuestions = @"
                    ,
                    { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2, explanation: "Canberra is the capital city of Australia." },
                    { q: "Which programming language is known as the building block of the web alongside HTML and CSS?", options: ["Python", "JavaScript", "C++", "Java"], answer: 1, explanation: "JavaScript allows you to implement complex features on web pages." },
                    { q: "Who wrote the national anthem of Pakistan?", options: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz", "Ahmad Faraz"], answer: 1, explanation: "Hafeez Jalandhari wrote the lyrics for the 'Qaumi Taranah'." },
                    { q: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: 1, explanation: "Au stands for aurum, the Latin word for gold." },
                    { q: "Which planet in our solar system is known as the Red Planet?", options: ["Venus", "Jupiter", "Mars", "Saturn"], answer: 2, explanation: "Mars is called the Red Planet because of iron oxide prevalent on its surface." },
                    { q: "In computer science, what does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"], answer: 1, explanation: "RAM is a form of computer memory that can be read and changed in any order." },
                    { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2, explanation: "Diamonds are the hardest known natural material." },
                    { q: "Who is the founder of the Pakistan Peoples Party (PPP)?", options: ["Benazir Bhutto", "Asif Ali Zardari", "Zulfikar Ali Bhutto", "Bilawal Bhutto Zardari"], answer: 2, explanation: "Zulfikar Ali Bhutto founded the PPP in 1967." },
                    { q: "Which internal organ is the largest in the human body?", options: ["Heart", "Liver", "Lungs", "Kidney"], answer: 1, explanation: "The liver is the largest solid internal organ." },
                    { q: "What does HTTP stand for in web terminology?", options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "Hyper Transfer Text Protocol", "HyperText Transfer Program"], answer: 0, explanation: "HTTP is the foundation of data communication for the World Wide Web." },
                    { q: "Which country is the host of the 2024 Summer Olympics?", options: ["Tokyo, Japan", "Paris, France", "Los Angeles, USA", "London, UK"], answer: 1, explanation: "The 2024 Summer Olympics are scheduled to take place in Paris, France." },
                    { q: "What is the synonym for 'Meticulous'?", options: ["Careless", "Sloppy", "Careful", "Hasty"], answer: 2, explanation: "Meticulous means showing great attention to detail; very careful." },
                    { q: "The highest mountain peak in Pakistan is?", options: ["Nanga Parbat", "K2", "Broad Peak", "Tirich Mir"], answer: 1, explanation: "K2 is the second-highest mountain on Earth, after Mount Everest." },
                    { q: "Which vitamin is also known as Ascorbic Acid?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 2, explanation: "Vitamin C is essential for tissue repair and the enzymatic production of certain neurotransmitters." },
                    { q: "Who was the last Mughal Emperor?", options: ["Akbar", "Aurangzeb", "Shah Jahan", "Bahadur Shah Zafar"], answer: 3, explanation: "Bahadur Shah Zafar II was the twentieth and last Mughal Emperor of India." },
                    { q: "Identify the antonym of 'Transparent'.", options: ["Clear", "Lucid", "Opaque", "Translucent"], answer: 2, explanation: "Opaque means not able to be seen through; not transparent." },
                    { q: "What is the main function of a router in a computer network?", options: ["To store data", "To display graphics", "To forward data packets", "To cool the CPU"], answer: 2, explanation: "A router forwards data packets between computer networks." },
                    { q: "Which is the smallest continent in the world?", options: ["Europe", "Antarctica", "Australia", "South America"], answer: 2, explanation: "Australia is the smallest of the world's continents." },
                    { q: "The 'Rohtas Fort' in Pakistan was built by?", options: ["Akbar", "Sher Shah Suri", "Babar", "Jahangir"], answer: 1, explanation: "Sher Shah Suri built the fort to block the advances of the Mughal emperor Humayun." },
                    { q: "What is the primary language spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: 2, explanation: "Portuguese is the official and national language of Brazil." },
                    { q: "If x + 5 = 12, what is the value of x?", options: ["5", "7", "12", "17"], answer: 1, explanation: "Subtracting 5 from both sides gives x = 7." },
                    { q: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: 1, explanation: "12 * 12 = 144." },
                    { q: "Convert 20% into a fraction.", options: ["1/4", "1/5", "1/2", "1/10"], answer: 1, explanation: "20% means 20/100, which simplifies to 1/5." },
                    { q: "If an item costs $40 and is discounted by 25%, what is the final price?", options: ["$10", "$20", "$30", "$35"], answer: 2, explanation: "25% of 40 is 10. 40 - 10 = 30." },
                    { q: "What is the next number in the series: 2, 6, 12, 20, ...?", options: ["24", "28", "30", "32"], answer: 2, explanation: "The differences are 4, 6, 8, 10. 20 + 10 = 30." },
                    { q: "A man walks 4 km North, then turns right and walks 3 km. How far is he from the starting point?", options: ["5 km", "7 km", "1 km", "12 km"], answer: 0, explanation: "Using the Pythagorean theorem: sqrt(4^2 + 3^2) = sqrt(16 + 9) = sqrt(25) = 5." },
                    { q: "Which is a prime number?", options: ["9", "12", "15", "17"], answer: 3, explanation: "17 is only divisible by 1 and itself." },
                    { q: "What is 15% of 200?", options: ["15", "30", "45", "60"], answer: 1, explanation: "0.15 * 200 = 30." },
                    { q: "She ___ to the market everyday.", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "Singular third-person present tense requires 's' or 'es'." },
                    { q: "He is fond ___ sweets.", options: ["to", "in", "of", "with"], answer: 2, explanation: "The correct preposition is 'of'." },
                    { q: "Identify the correct spelling.", options: ["Occasion", "Ocasion", "Occassion", "Occassion"], answer: 0, explanation: "'Occasion' is the correct spelling." },
                    { q: "The train had left before we ___ the station.", options: ["reach", "reaches", "reached", "had reached"], answer: 2, explanation: "Past perfect is used for the earlier action, simple past for the later one." },
                    { q: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3, explanation: "The Pacific Ocean covers more than 30% of the Earth's surface." },
                    { q: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"], answer: 1, explanation: "Alexander Fleming discovered penicillin in 1928." },
                    { q: "What does CPU stand for?", options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Unit"], answer: 2, explanation: "CPU is the primary component of a computer that acts as its 'brain'." },
                    { q: "Which planet is closest to the Sun?", options: ["Venus", "Mars", "Earth", "Mercury"], answer: 3, explanation: "Mercury is the smallest and innermost planet in the Solar System." },
                    { q: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: 3, explanation: "Ottawa is the capital city of Canada." },
                    { q: "Which organ purifies blood in the human body?", options: ["Heart", "Lungs", "Kidneys", "Liver"], answer: 2, explanation: "Kidneys filter waste products from the blood." },
                    { q: "What is the formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1, explanation: "Water is composed of two hydrogen atoms and one oxygen atom." },
                    { q: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: 2, explanation: "Leonardo da Vinci painted the Mona Lisa." }
"@

$fpscQuestions = @"
                    ,
                    { q: "What is the main function of an operating system?", options: ["Create documents", "Manage hardware and software resources", "Edit photos", "Browse the internet"], answer: 1, explanation: "An OS manages computer hardware and provides common services for computer programs." },
                    { q: "What is the synonym for 'Eminent'?", options: ["Unknown", "Famous", "Hidden", "Poor"], answer: 1, explanation: "Eminent means famous and respected within a particular sphere or profession." },
                    { q: "The 'Durand Line' is the border between Pakistan and?", options: ["India", "Iran", "China", "Afghanistan"], answer: 3, explanation: "It constitutes the international land border between Afghanistan and Pakistan." },
                    { q: "Which unit is used to measure electric resistance?", options: ["Volts", "Amperes", "Ohms", "Watts"], answer: 2, explanation: "The ohm is the SI derived unit of electrical resistance." },
                    { q: "Who was the viceroy of India at the time of Partition in 1947?", options: ["Lord Curzon", "Lord Mountbatten", "Lord Wavell", "Lord Minto"], answer: 1, explanation: "Lord Mountbatten was the last Viceroy of India." },
                    { q: "What is the antonym of 'Abstain'?", options: ["Refrain", "Indulge", "Stop", "Quit"], answer: 1, explanation: "Abstain means restrain oneself from doing or enjoying something; indulge is the opposite." },
                    { q: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "South Korea", "Japan", "Thailand"], answer: 2, explanation: "Japan is often called the 'Land of the Rising Sun' due to its position east of the Asian continent." },
                    { q: "In Microsoft Excel, what does a formula always begin with?", options: ["+", "-", "=", "*"], answer: 2, explanation: "All formulas in Excel must begin with an equals sign (=)." },
                    { q: "What is the atomic number of Oxygen?", options: ["6", "7", "8", "9"], answer: 2, explanation: "The atomic number of oxygen is 8." },
                    { q: "The headquarter of the UN is located in?", options: ["Geneva", "Paris", "New York", "London"], answer: 2, explanation: "The headquarters of the United Nations is in New York City." },
                    { q: "Who was the first woman Prime Minister in the Muslim world?", options: ["Khaleda Zia", "Sheikh Hasina", "Benazir Bhutto", "Megawati Sukarnoputri"], answer: 2, explanation: "Benazir Bhutto served as the Prime Minister of Pakistan." },
                    { q: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Registered Link", "Universal Registry Locator"], answer: 0, explanation: "A URL is colloquially termed a web address." },
                    { q: "Which is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: 1, explanation: "The Nile is generally regarded as the longest river in the world." },
                    { q: "The process of a solid turning directly into a gas is called?", options: ["Melting", "Evaporation", "Sublimation", "Condensation"], answer: 2, explanation: "Sublimation is the transition of a substance directly from the solid to the gas state." },
                    { q: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound Sterling", "Franc"], answer: 2, explanation: "The Pound Sterling (£) is the official currency." },
                    { q: "Which component is considered the 'brain' of the computer?", options: ["RAM", "Hard Drive", "Motherboard", "CPU"], answer: 3, explanation: "The Central Processing Unit (CPU) performs most of the processing." },
                    { q: "Which planet has the most moons?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], answer: 0, explanation: "Saturn currently holds the record for the most known moons in the solar system." },
                    { q: "Who proposes the Theory of Relativity?", options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"], answer: 2, explanation: "Albert Einstein developed the theory of relativity." },
                    { q: "What is the largest bone in the human body?", options: ["Femur", "Tibia", "Fibula", "Humerus"], answer: 0, explanation: "The femur, or thigh bone, is the largest and strongest bone." },
                    { q: "Which of the following is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: 2, explanation: "A keyboard is used to enter data into the computer." },
                     { q: "Solve: 3x - 7 = 14", options: ["5", "6", "7", "8"], answer: 2, explanation: "Add 7 to both sides: 3x = 21. Divide by 3: x = 7." },
                    { q: "What is the average of 10, 20, 30, 40, 50?", options: ["20", "25", "30", "35"], answer: 2, explanation: "Sum = 150. Count = 5. Average = 150 / 5 = 30." },
                    { q: "A car travels 120 miles in 2 hours. What is its speed?", options: ["50 mph", "60 mph", "70 mph", "80 mph"], answer: 1, explanation: "Speed = Distance / Time = 120 / 2 = 60 mph." },
                    { q: "Which number is a multiple of both 4 and 6?", options: ["14", "18", "24", "30"], answer: 2, explanation: "24 is divisible by both 4 and 6. LCM(4, 6) = 12, and 24 is a multiple of 12." },
                    { q: "If the area of a rectangle is 48 and the length is 8, what is the width?", options: ["4", "5", "6", "8"], answer: 2, explanation: "Area = Length * Width. 48 = 8 * W. W = 6." },
                    { q: "Complete the series: 1, 4, 9, 16, ___", options: ["20", "24", "25", "30"], answer: 2, explanation: "The series represents squares of integers: 1^2, 2^2, 3^2, 4^2, 5^2=25." },
                    { q: "What is the probability of rolling a 3 on a standard six-sided die?", options: ["1/2", "1/3", "1/6", "1/4"], answer: 2, explanation: "There is one '3' out of 6 possible outcomes." },
                    { q: "3/4 expressed as a percentage is?", options: ["50%", "60%", "75%", "80%"], answer: 2, explanation: "3 divided by 4 is 0.75, which is 75%." },
                    { q: "Choose the correct sentence.", options: ["He are going.", "He is going.", "He am going.", "He go."], answer: 1, explanation: "'Is' is the correct auxiliary verb for third-person singular present continuous." },
                    { q: "Choose the synonym for 'Abundant'.", options: ["Scarce", "Plentiful", "Rare", "Thin"], answer: 1, explanation: "'Plentiful' is the synonym for abundant." },
                    { q: "He jumped ___ the river.", options: ["in", "into", "on", "at"], answer: 1, explanation: "'Into' signifies movement toward the inside of something." },
                    { q: "The antonym of 'Expand' is?", options: ["Increase", "Grow", "Contract", "Swaken"], answer: 2, explanation: "'Contract' means to decrease in size, number, or range." },
                    { q: "What is the plural of 'Child'?", options: ["Childs", "Children", "Childrens", "Childes"], answer: 1, explanation: "The irregular plural of child is children." },
                    { q: "Which part of speech describes a noun?", options: ["Verb", "Adverb", "Adjective", "Preposition"], answer: 2, explanation: "An adjective modifies or describes a noun or pronoun." },
                    { q: "Identify the correct spelling.", options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"], answer: 2, explanation: "'Accommodate' has two c's and two m's." },
                    { q: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Kyoto"], answer: 2, explanation: "Tokyo is the capital of Japan." },
                    { q: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2, explanation: "Plants absorb carbon dioxide for photosynthesis." },
                    { q: "What is the currency of France?", options: ["Franc", "Pound", "Euro", "Dollar"], answer: 2, explanation: "France uses the Euro as its currency." },
                    { q: "Who is the author of 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: 1, explanation: "William Shakespeare is the author." },
                    { q: "What is the boiling point of water in Celsius?", options: ["0", "50", "100", "212"], answer: 2, explanation: "Water boils at 100 degrees Celsius under standard atmospheric pressure." },
                    { q: "Which metal is liquid at room temperature?", options: ["Iron", "Gold", "Mercury", "Silver"], answer: 2, explanation: "Mercury is the only metal that is liquid at standard conditions for temperature and pressure." },
                    { q: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic Desert"], answer: 3, explanation: "The Antarctic Desert is the largest, though the Sahara is the largest hot desert." },
                    { q: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"], answer: 2, explanation: "Alexander Graham Bell is credited with patenting the first practical telephone." },
                    { q: "Which continent is known as the 'Dark Continent'?", options: ["Asia", "Africa", "South America", "Europe"], answer: 1, explanation: "Africa was historically referred to as the Dark Continent." },
                    { q: "What is the chemical symbol for table salt?", options: ["H2O", "CO2", "NaCl", "KCl"], answer: 2, explanation: "NaCl stands for Sodium Chloride." },
                    { q: "Which of the following is not a primary color of light?", options: ["Red", "Green", "Blue", "Yellow"], answer: 3, explanation: "The primary colors of light are red, green, and blue (RGB)." },
                     { q: "Who is the 'Father of Modern Computer'?", options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"], answer: 1, explanation: "Alan Turing is considered the father of theoretical computer science and artificial intelligence." },
                    { q: "What does GUI stand for?", options: ["Graphic Uniform Interface", "Graphical User Interface", "General Utility Interface", "Global User Identifier"], answer: 1, explanation: "A GUI allows users to interact with electronic devices through graphical icons." }
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
    
    # We find the end of the PPSC questions array
    if ($inPpsc -and -not $ppscInserted -and $line -match '\]\s*$') {
        # Check if previous line needs a comma
        if ($updatedLines[-1] -match '\}$') {
            $updatedLines[-1] = $updatedLines[-1] + ","
        }
        $updatedLines += $ppscQuestions
        $ppscInserted = $true
        $inPpsc = $false
    }
    
    # We find the end of the FPSC questions array
    if ($inFpsc -and -not $fpscInserted -and $line -match '\]\s*$') {
        # Check if previous line needs a comma
        if ($updatedLines[-1] -match '\}$') {
            $updatedLines[-1] = $updatedLines[-1] + ","
        }
        $updatedLines += $fpscQuestions
        $fpscInserted = $true
        $inFpsc = $false
    }
    
    $updatedLines += $line
}

$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Added ~40 PPSC and ~48 FPSC new questions to data.js."

