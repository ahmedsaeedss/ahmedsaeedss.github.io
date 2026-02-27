$ErrorActionPreference = "Stop"

$islamicQuestions5 = @"
                    ,
                    { q: "What was the real name of Hazrat Abu Bakr (RA)?", options: ["Abdullah", "Abdul Kaaba", "Atiq", "Othman"], answer: 0, explanation: "His full name was Abdullah ibn Abi Quhafa. Atiq was his title." },
                    { q: "Which of the following is considered the 'Mother of the Quran' (Umm-ul-Quran)?", options: ["Surah Baqarah", "Surah Yaseen", "Surah Ikhlas", "Surah Fatiha"], answer: 3, explanation: "Surah Al-Fatiha is referred to as Umm-ul-Quran or Umm-ul-Kitab." },
                    { q: "Who was the primary Jewish tribe expelled from Medina after the Battle of Badr?", options: ["Banu Qaynuqa", "Banu Nadir", "Banu Qurayza", "Banu Khazraj"], answer: 0, explanation: "Banu Qaynuqa breached their treaty and were the first expelled." },
                    { q: "What is the penalty for stealing (Theft/Sariqa) if all strict conditions are met?", options: ["Exile", "Flogging", "Amputation of the hand", "Fine"], answer: 2, explanation: "Islamic penal law (Hadd) prescribes amputation under very rigid evidentiary standards." },
                    { q: "Which companion was the first to convert to Islam among the slaves?", options: ["Hazrat Bilal (RA)", "Hazrat Zaid bin Haritha (RA)", "Hazrat Ammar (RA)", "Hazrat Suhaib (RA)"], answer: 1, explanation: "Hazrat Zaid bin Haritha, the freed slave and adopted son of the Prophet, was the first." },
                    { q: "How many obligatory prayers were originally prescribed during Mi'raj?", options: ["5", "10", "40", "50"], answer: 3, explanation: "Allah initially prescribed 50 daily prayers, which were reduced to 5 upon Prophet Musa's advice." },
                    { q: "Who was the 'Zul-Qarnain' mentioned in Surah Al-Kahf?", options: ["Alexander the Great", "Cyrus the Great", "A righteous king", "Opinions differ"], answer: 3, explanation: "Scholars have debated his identity; many associate him with Cyrus the Great or a righteous ancient ruler." },
                    { q: "What is the seventh month of the Islamic calendar?", options: ["Rajab", "Sha'ban", "Jamadi-ul-Awwal", "Rabi-ul-Sani"], answer: 0, explanation: "Rajab is the seventh month and is considered one of the sacred months." },
                    { q: "How many obligatory (Farz) acts are there in Ghusl (Full Ablution)?", options: ["2", "3", "4", "5"], answer: 1, explanation: "The 3 acts are: rinsing the mouth, sniffing water into the nose, and washing the entire body." },
                    { q: "Which battle occurred in 8 A.H. against the Romans?", options: ["Battle of Tabuk", "Battle of Mu'tah", "Battle of Hunayn", "Battle of Yarmouk"], answer: 1, explanation: "The Battle of Mu'tah was fought against the Byzantine Empire." },
                    { q: "Who was the commander-in-chief of the Muslim army in the conquest of Mecca?", options: ["Hazrat Ali (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Abu Ubaidah (RA)", "Prophet Muhammad (PBUH)"], answer: 3, explanation: "The Prophet (PBUH) himself led the 10,000-strong army." },
                    { q: "What was the real name of Imam Abu Hanifa?", options: ["Nu'man bin Thabit", "Malik bin Anas", "Muhammad bin Idris", "Ahmad bin Hanbal"], answer: 0, explanation: "He was Nu'man bin Thabit, the founder of the Hanafi school of jurisprudence." },
                    { q: "In which year of Prophethood did the incident of 'Shaq-e-Sadr' (Splitting of the Chest) occur again?", options: ["1st year", "5th year", "Night of Mi'raj", "During Hijra"], answer: 2, explanation: "It occurred immediately before the Night Journey to purify his heart." },
                    { q: "How many times was the Quran revealed?", options: ["Once", "Twice", "Continuously over 23 years", "Both B and C"], answer: 3, explanation: "It was revealed to the lowest heaven on Laylatul Qadr, then piecemeal over 23 years." },
                    { q: "Which companion compiled the Holy Quran during the caliphate of Hazrat Usman (RA)?", options: ["Hazrat Ali (RA)", "Hazrat Abdullah bin Masud (RA)", "Hazrat Zaid bin Thabit (RA)", "Hazrat Umar (RA)"], answer: 2, explanation: "Zaid bin Thabit (RA) was tasked with creating standard copies." },
                    { q: "What is the Mahr (Dower) in an Islamic marriage?", options: ["A gift to the bride's father", "A mandatory gift given by the groom to the bride", "Wedding feast expenses", "Dowry brought by the bride"], answer: 1, explanation: "Mahr is an obligatory payment to the bride that belongs solely to her." },
                    { q: "Identify the Sahabi who conquered Egypt.", options: ["Hazrat Khalid bin Waleed (RA)", "Hazrat Amr ibn al-Aas (RA)", "Hazrat Saad bin Abi Waqqas (RA)", "Hazrat Tariq bin Ziyad (RA)"], answer: 1, explanation: "Amr ibn al-Aas (RA) led the Muslim conquest of Egypt in 640 CE." },
                    { q: "Which Prophet is known as 'Safiyullah'?", options: ["Prophet Adam (AS)", "Prophet Nuh (AS)", "Prophet Ibrahim (AS)", "Prophet Musa (AS)"], answer: 0, explanation: "Prophet Adam (AS) is called the Chosen One of Allah." },
                    { q: "How many days did Prophet Yunus (AS) spend in the belly of the whale?", options: ["3 days", "7 days", "40 days", "Opinions vary"], answer: 3, explanation: "Islamic traditions vary, commonly citing 3, 7, or 40 days." },
                    { q: "What was the previous name of Medina?", options: ["Bakkah", "Yathrib", "Taif", "Khaibar"], answer: 1, explanation: "The city was called Yathrib before the Prophet's migration." },
                    { q: "Which Surah is considered one-third of the Quran?", options: ["Surah Fatiha", "Surah Yaseen", "Surah Ikhlas", "Surah Kausar"], answer: 2, explanation: "The Prophet stated that reciting Surah Al-Ikhlas is equal to one-third of the Quran." },
                    { q: "Who was the first child to embrace Islam?", options: ["Hazrat Zaid (RA)", "Hazrat Usama (RA)", "Hazrat Ali (RA)", "Hazrat Hasan (RA)"], answer: 2, explanation: "Hazrat Ali (RA) accepted Islam at the age of approximately 10." },
                    { q: "What is the meaning of 'Al-Khulafa-ur-Rashidun'?", options: ["The Rightly Guided Caliphs", "The Four Companions", "The Successors", "The Martyrs"], answer: 0, explanation: "It refers to the first four caliphs who followed the Prophet's path." },
                    { q: "Who led the Muslims in the Battle of Qadisiyyah?", options: ["Hazrat Khalid bin Waleed (RA)", "Hazrat Saad bin Abi Waqqas (RA)", "Hazrat Abu Ubaidah (RA)", "Hazrat Nu'man bin Muqarrin (RA)"], answer: 1, explanation: "Saad bin Abi Waqqas led the decisive victory against the Persian Empire." },
                    { q: "What is the name of the angel who guards Paradise?", options: ["Mikaeel", "Ridwan", "Malik", "Jibraeel"], answer: 1, explanation: "Ridwan is traditionally known as the keeper of Jannah." },
                    { q: "How many stages of Hajj are there (Manasik)?", options: ["3", "5", "7", "Numerous"], answer: 3, explanation: "There are multiple rites including Ihram, Tawaf, Sa'i, Wuquf at Arafat, Rami, and shaving/clipping." },
                    { q: "Which Prophet is associated with the miracle of the staff turning into a snake?", options: ["Prophet Musa (AS)", "Prophet Haroon (AS)", "Prophet Sulaiman (AS)", "Prophet Isa (AS)"], answer: 0, explanation: "Allah granted Moses this miracle to confront the Pharaoh." },
                    { q: "In which year did the Prophet (PBUH) perform his Farewell Pilgrimage (Hajjat-ul-Wida)?", options: ["8 A.H.", "9 A.H.", "10 A.H.", "11 A.H."], answer: 2, explanation: "He performed his only Hajj in the 10th year of Hijra." },
                    { q: "What is the meaning of 'Tafseer'?", options: ["Recitation of Quran", "Memorization of Quran", "Explanation/Exegesis of Quran", "Translation of Quran"], answer: 2, explanation: "Tafseer is the scholarly explanation and interpretation of the Quranic text." },
                    { q: "Who was the foster sister of the Holy Prophet (PBUH)?", options: ["Hazrat Asma", "Hazrat Shima", "Hazrat Fatima", "Hazrat Zainab"], answer: 1, explanation: "Hazrat Shima (or Shaima) was his foster sister from Halimah Saadia." },
                    { q: "Which relative of the Prophet (PBUH) opposed him vehemently and is condemned in Surah Lahab?", options: ["Abu Talib", "Abu Jahl", "Abu Lahab", "Abbas"], answer: 2, explanation: "Abu Lahab (Abdul Uzza) was the Prophet's uncle who fiercely opposed Islam." },
                    { q: "What was the age of Hazrat Khadija (RA) when she married the Prophet (PBUH)?", options: ["25", "30", "35", "40"], answer: 3, explanation: "According to the most prominent historical accounts, she was 40." },
                    { q: "The battle in which angels fought alongside Muslims was?", options: ["Uhud", "Khandaq", "Badr", "Hunayn"], answer: 2, explanation: "Allah sent thousands of angels to assist the Muslims in Badr." },
                    { q: "Which companion is known as 'The Compiler of the Quran'?", options: ["Hazrat Usman (RA)", "Hazrat Ali (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Zaid bin Thabit (RA)"], answer: 3, explanation: "Zaid bin Thabit was the chief scribe who compiled the master copy." },
                    { q: "What does 'Aqeedah' mean in Islam?", options: ["Prayer", "Charity", "Creed/Belief System", "Law"], answer: 2, explanation: "Aqeedah refers to matters which are believed in the heart, essentially the core dogma." },
                    { q: "Who was the 'Khulafa' after Hazrat Ali (RA) for a brief period before renouncing it?", options: ["Imam Hussain (RA)", "Imam Hasan (RA)", "Ameer Muawiya (RA)", "Abdullah bin Zubair (RA)"], answer: 1, explanation: "Imam Hasan (RA) held the caliphate for about six months." },
                    { q: "In which Islamic month is the Night of Power (Laylatul Qadr)?", options: ["Rajab", "Sha'ban", "Ramadan", "Muharram"], answer: 2, explanation: "It is found in the last ten odd nights of Ramadan." },
                    { q: "What is the meaning of 'Sadaqah'?", options: ["Obligatory charity", "Voluntary charity", "Tax", "Loan"], answer: 1, explanation: "Sadaqah is voluntary charity given for the sake of Allah." },
                    { q: "Which tribe was expelled from Medina after the Battle of Khandaq for treason?", options: ["Banu Qaynuqa", "Banu Nadir", "Banu Qurayza", "Banu Mustaliq"], answer: 2, explanation: "Banu Qurayza broke their treaty with the Muslims during the siege." },
                    { q: "Who killed Abu Jahl in the Battle of Badr?", options: ["Hazrat Ali and Hamza", "Two young brothers (Mu'adh and Mu'awwidh)", "Hazrat Bilal", "Hazrat Umar"], answer: 1, explanation: "Two young Ansari boys fatally wounded him." },
                    { q: "What is the penalty for drinking alcohol (Khamr) in classical Islamic law?", options: ["40 or 80 lashes", "100 lashes", "Fine", "Exile"], answer: 0, explanation: "The punishment was formalized to 40 or 80 lashes by the early Caliphs." },
                    { q: "Which Prophet is associated with the patience to endure severe illness and loss?", options: ["Prophet Yunus (AS)", "Prophet Ayyub (AS)", "Prophet Yusuf (AS)", "Prophet Yaqub (AS)"], answer: 1, explanation: "Prophet Ayyub (Job) (AS) is the epitome of patience in Islamic tradition." },
                    { q: "How many times did the Prophet (PBUH) perform Umrah?", options: ["1", "2", "3", "4"], answer: 3, explanation: "He performed Umrah four times after migrating to Medina." },
                    { q: "What is 'Wahy Ghayr Matlu'?", options: ["The Quran", "The Unrecited Revelation (Hadith/Sunnah)", "Songs", "Poetry"], answer: 1, explanation: "It refers to the revelation that is not recited in prayers, i.e., the Sunnah." },
                    { q: "Who was the first woman to memorize the entire Quran?", options: ["Hazrat Ayesha (RA)", "Hazrat Hafsa (RA)", "Hazrat Fatima (RA)", "Hazrat Khadija (RA)"], answer: 1, explanation: "Hazrat Hafsa (RA), daughter of Umar (RA), is considered an early Hafiza." },
                    { q: "Which Islamic month is known as 'The Month of Allah'?", options: ["Ramadan", "Muharram", "Rajab", "Sha'ban"], answer: 1, explanation: "The Prophet referred to Muharram as the sacred month of Allah." },
                    { q: "Who was the first person to read the Quran publicly in Mecca?", options: ["Hazrat Umar (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Abdullah bin Masud (RA)", "Hazrat Ali (RA)"], answer: 2, explanation: "Abdullah bin Masud (RA) braved the Quraysh by reciting Surah Rahman loudly." },
                    { q: "What was the first capital of the Islamic Empire?", options: ["Mecca", "Medina", "Kufa", "Damascus"], answer: 1, explanation: "Medina served as the first capital of the Islamic state." },
                    { q: "What does 'Tawaaf' mean during Hajj?", options: ["Running between Safa and Marwa", "Standing in Arafat", "Circling the Kaaba", "Throwing stones at Jamarat"], answer: 2, explanation: "Tawaaf is the circumambulation of the Kaaba seven times." },
                    { q: "Who is the 'Sayyid-ul-Ayyam' (Master of Days)?", options: ["Monday", "Thursday", "Friday", "Day of Arafah"], answer: 2, explanation: "Friday (Jumu'ah) is considered the best day of the week in Islam." }
"@
$lines = Get-Content -Path "data.js" -Encoding UTF8
$updatedLines = @()
$inIslamic = $false
$islamicInserted = $false

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match 'category: "Islamic Studies Past Papers"') {
        $inIslamic = $true
    }
    
    if ($inIslamic -and -not $islamicInserted -and $line -match '\]\s*$') {
        if ($updatedLines[-1] -match '\}$') {
            $updatedLines[-1] = $updatedLines[-1] + ","
        }
        $updatedLines += $islamicQuestions5
        $islamicInserted = $true
        $inIslamic = $false
    }
    $updatedLines += $line
}
$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Injected 50 more Islamic Studies questions (Total 250)."
