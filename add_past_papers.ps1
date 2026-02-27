$ErrorActionPreference = "Stop"

$jsonStr = @"
    ,
    {
        name: "Past Papers",
        icon: "fa-file-lines",
        subcategories: [
            {
                category: "PPSC Past Papers",
                icon: "fa-file-pen",
                questions: [
                    { q: "Who was the first President of the Constituent Assembly of Pakistan?", options: ["Liaquat Ali Khan", "Iskander Mirza", "Muhammad Ali Jinnah", "Jogendra Nath Mandal"], answer: 2, explanation: "Quaid-e-Azam Muhammad Ali Jinnah presided over the first session." },
                    { q: "What is the total area of Pakistan in square kilometers?", options: ["796,095", "881,913", "900,000", "650,000"], answer: 1, explanation: "The current official area including Gilgit-Baltistan and AJK is approximately 881,913 sq km." },
                    { q: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 2, explanation: "Nitrogen constitutes about 78% of the Earth's atmosphere. (Everyday Science)" },
                    { q: "When did Pakistan conduct its first public nuclear tests?", options: ["1971", "1988", "1998", "2001"], answer: 2, explanation: "The tests were conducted explicitly on 28 May 1998 (Youm-e-Takbir) at Chagai." },
                    { q: "Which province is the most populous in Pakistan?", options: ["Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Punjab"], answer: 3, explanation: "Punjab houses over 50% of the country's entire population." },
                    { q: "What is the synonym of 'Abundant'?", options: ["Scarce", "Plentiful", "Rare", "Thin"], answer: 1, explanation: "'Abundant' means existing or available in large quantities; plentiful. (English)" },
                    { q: "When was the capital of Pakistan shifted from Karachi to Islamabad?", options: ["1955", "1960", "1967", "1973"], answer: 2, explanation: "Construction began in the 1960s, and it officially became the capital in 1967." },
                    { q: "Who is the longest-serving current Prime Minister of Israel?", options: ["Yair Lapid", "Naftali Bennett", "Ariel Sharon", "Benjamin Netanyahu"], answer: 3, explanation: "Netanyahu has served multiple terms spanning decades. (Current Affairs)" },
                    { q: "The Indus Water Treaty was significantly brokered by which international organization in 1960?", options: ["United Nations", "World Bank", "IMF", "Asian Development Bank"], answer: 1, explanation: "The World Bank negotiated the water-sharing treaty between India and Pakistan." },
                    { q: "Which part of the cell is known as the powerhouse?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], answer: 2, explanation: "Mitochondria generate most of the chemical energy needed to power the cell." },
                    { q: "Who was the first Prime Minister of Pakistan?", options: ["Khawaja Nazimuddin", "Liaquat Ali Khan", "Chaudhry Muhammad Ali", "Huseyn Shaheed Suhrawardy"], answer: 1, explanation: "Liaquat Ali Khan was appointed as the first Prime Minister by the Quaid." },
                    { q: "What is the highest civilian award in Pakistan?", options: ["Nishan-e-Haider", "Nishan-e-Pakistan", "Sitara-e-Jurat", "Tamgha-e-Imtiaz"], answer: 1, explanation: "Nishan-e-Pakistan is the highest civilian award." },
                    { q: "He is good ___ mathematics.", options: ["in", "at", "with", "for"], answer: 1, explanation: "The correct preposition after 'good' to indicate skill or ability is 'at'." },
                    { q: "Which city is the industrial hub of Pakistan, often called 'Manchester of Pakistan'?", options: ["Sialkot", "Faisalabad", "Gujranwala", "Hyderabad"], answer: 1, explanation: "Faisalabad (Lyallpur) is the center of the textile industry." },
                    { q: "Who is the supreme commander of the Pakistan Armed Forces?", options: ["Prime Minister", "Chief of Army Staff", "President", "Minister of Defence"], answer: 2, explanation: "According to the Constitution, the President is the Supreme Commander of the Armed Forces." },
                    { q: "What is the national language of Pakistan?", options: ["Punjabi", "English", "Urdu", "Sindhi"], answer: 2, explanation: "Urdu is the declared national language (Lingua Franca) of Pakistan." },
                    { q: "Which country is constructing the 'Neom' megacity project?", options: ["UAE", "Oman", "Saudi Arabia", "Qatar"], answer: 2, explanation: "Neom is part of Saudi Arabia's Vision 2030." },
                    { q: "The process by which plants make their own food is called?", options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], answer: 1, explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy." },
                    { q: "What is the total number of seats in the National Assembly of Pakistan?", options: ["272", "336", "342", "104"], answer: 1, explanation: "After recent demographic changes and ex-FATA merger adjustments, it is 336 (including reserved seats)." },
                    { q: "Which is the largest province of Pakistan by area?", options: ["Punjab", "Sindh", "Balochistan", "KPK"], answer: 2, explanation: "Balochistan covers nearly 44% of Pakistan's landmass." }
                ]
            },
            {
                category: "FPSC Past Papers",
                icon: "fa-certificate",
                questions: [
                    { q: "What is the name of the AI chatbot developed by OpenAI that sparked the AI boom?", options: ["Gemini", "Claude", "ChatGPT", "Copilot"], answer: 2, explanation: "ChatGPT's release in late 2022 revolutionized public AI usage." },
                    { q: "Which ocean is the deepest in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 3, explanation: "The Pacific Ocean contains the Mariana Trench, the deepest point on Earth." },
                    { q: "Which blood group is known as the universal donor?", options: ["A", "B", "AB", "O"], answer: 3, explanation: "Type O negative blood is often called the universal donor type." },
                    { q: "Who won the TIME Person of the Year in 2023?", options: ["Volodymyr Zelensky", "Taylor Swift", "Elon Musk", "Joe Biden"], answer: 1, explanation: "The pop megastar was recognized for her massive cultural impact." },
                    { q: "Choose the correct synonym for 'Lucid'.", options: ["Confusing", "Clear", "Vague", "Dark"], answer: 1, explanation: "'Lucid' means expressed clearly; easy to understand." },
                    { q: "Which protocol or agreement is currently the main global treaty to combat climate change?", options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Copenhagen Accord"], answer: 2, explanation: "The Paris Agreement was adopted in 2015." },
                    { q: "Which country has the world's largest proven oil reserves?", options: ["Saudi Arabia", "Venezuela", "Canada", "Iran"], answer: 1, explanation: "Venezuela holds the largest proven reserves in the world." },
                    { q: "I am looking forward ___ seeing you.", options: ["to", "for", "in", "about"], answer: 0, explanation: "'Look forward to' is a phrasal verb meaning to await eagerly." },
                    { q: "Which alliance was formed in 2021 by Australia, the UK, and the US?", options: ["Quad", "AUKUS", "NATO", "Five Eyes"], answer: 1, explanation: "AUKUS focuses on defense and developing nuclear-powered submarines for Australia." },
                    { q: "Who is the current Director-General of the World Health Organization (WHO)?", options: ["Tedros Adhanom Ghebreyesus", "Margaret Chan", "Anders Tegnell", "Anthony Fauci"], answer: 0, explanation: "Dr. Tedros has served as DG since 2017." },
                    { q: "Which central bank sets the interest rates for the United States?", options: ["Bank of America", "The Federal Reserve", "US Treasury", "World Bank"], answer: 1, explanation: "The 'Fed' is the central banking system of the US." },
                    { q: "What is the antonym of 'Diligent'?", options: ["Hardworking", "Lazy", "Careful", "Attentive"], answer: 1, explanation: "'Diligent' means showing steady and earnest care and effort; the opposite is lazy." },
                    { q: "Who discovered the law of planetary motion?", options: ["Galileo", "Newton", "Kepler", "Einstein"], answer: 2, explanation: "Johannes Kepler published his three laws of planetary motion between 1609 and 1619." },
                    { q: "Which country is the largest exporter of goods globally?", options: ["USA", "Germany", "China", "Japan"], answer: 2, explanation: "China's massive manufacturing sector leads global exports." },
                    { q: "What does the 'O' in OPEC stand for?", options: ["Oil", "Organization", "Overseas", "Output"], answer: 1, explanation: "Organization of the Petroleum Exporting Countries." },
                    { q: "She has been living here ___ 2015.", options: ["from", "for", "since", "until"], answer: 2, explanation: "'Since' is used to refer to a specific point in time in the past when the action began." },
                    { q: "The energy possessed by a body due to its position is called?", options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Mechanical Energy"], answer: 1, explanation: "Potential energy is the hidden energy in an object because of its position or state." },
                    { q: "Which international body sits in The Hague and prosecutes individuals for crimes against humanity?", options: ["ICJ", "ICC", "UNSC", "ECHR"], answer: 1, explanation: "The International Criminal Court tries individuals." },
                    { q: "What is the main currency used in Japan?", options: ["Yen", "Yuan", "Won", "Ringgit"], answer: 0, explanation: "The Yen is the official currency." },
                    { q: "What type of lens is used to correct myopia (short-sightedness)?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], answer: 1, explanation: "A concave (diverging) lens is used to correct short-sightedness." }
                ]
            }
        ]
    }
"@

$lines = Get-Content -Path "data.js" -Encoding UTF8

$lastIdx = -1
for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match '^\];') {
        $lastIdx = $i
        break
    }
}

if ($lastIdx -ne -1) {
    $prevLine = $lines[$lastIdx - 1]
    if ($prevLine -match '},$') {
        $lines[$lastIdx - 1] = $prevLine -replace '},\s*$', '}'
    }
    
    $part1 = $lines[0..($lastIdx - 1)]
    $part2 = $jsonStr -split "`n"
    $part3 = @("];")
    
    $part1 + $part2 + $part3 | Set-Content -Path "data.js" -Encoding UTF8
    Write-Host "Injected Past Papers successfully."
}
else {
    Write-Host "Could not find '];' in data.js to append subjects."
}
