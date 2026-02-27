$ErrorActionPreference = "Stop"

$islamicQuestions4 = @"
                    ,
                    { q: "Who established the Hijri calendar?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Umar (RA) instituted the Islamic calendar starting from the Hijra." },
                    { q: "Which mountain did Prophet Nuh's (AS) Ark rest upon after the flood?", options: ["Mount Sinai", "Mount Arafat", "Mount Judi", "Mount Hira"], answer: 2, explanation: "The Quran states the Ark came to rest on Mount Judi." },
                    { q: "What was the relation of Hazrat Hamza (RA) with the Holy Prophet (PBUH)?", options: ["Uncle", "Brother", "Cousin", "Nephew"], answer: 0, explanation: "He was the paternal uncle and foster brother of the Prophet." },
                    { q: "Which angel brought the first revelation to Prophet Muhammad (PBUH)?", options: ["Hazrat Mikaeel (AS)", "Hazrat Israfeel (AS)", "Hazrat Jibraeel (AS)", "Hazrat Izraeel (AS)"], answer: 2, explanation: "Jibreel (AS) brought the first verses of Surah Al-Alaq." },
                    { q: "What is the meaning of 'Ghazwa'?", options: ["A battle where the Prophet (PBUH) did not participate", "A battle led by the Prophet (PBUH) himself", "A treaty", "A migration"], answer: 1, explanation: "A Ghazwa is an expedition in which the Prophet personally took part." },
                    { q: "How many Ghazwas are mentioned in the Holy Quran?", options: ["10", "12", "14", "27"], answer: 3, explanation: "While traditions vary, it's widely accepted there were around 27 Ghazawat." },
                    { q: "What is the name of the camel that Prophet Muhammad (PBUH) rode during the migration from Mecca to Medina?", options: ["Buraq", "Al-Qaswa", "Duldul", "Ya'fur"], answer: 1, explanation: "Al-Qaswa was his favorite camel used during the Hijra." },
                    { q: "In which year did the Battle of Uhud take place?", options: ["2 A.H.", "3 A.H.", "4 A.H.", "5 A.H."], answer: 1, explanation: "The Battle of Uhud took place in Shawwal, 3 A.H." },
                    { q: "Which Sahabi was given the title 'Asadullah' (Lion of Allah) by the Prophet (PBUH)?", options: ["Hazrat Hamza (RA)", "Hazrat Ali (RA)", "Hazrat Khalid bin Waleed (RA)", "Both A & B"], answer: 3, explanation: "Both Hazrat Hamza and Hazrat Ali were famously called Lions of Allah." },
                    { q: "What is the penalty for accusing a chaste woman of adultery without four witnesses in Islam?", options: ["60 lashes", "80 lashes", "100 lashes", "Stoning"], answer: 1, explanation: "This crime is called Qazaf, punishable by 80 lashes." },
                    { q: "Which Prophet is known as 'Kaleemullah' (The one who spoke to Allah)?", options: ["Prophet Ibrahim (AS)", "Prophet Musa (AS)", "Prophet Isa (AS)", "Prophet Muhammad (PBUH)"], answer: 1, explanation: "Prophet Musa (AS) was granted the privilege of speaking directly with Allah." },
                    { q: "How many times does the word 'Zakat' appear in the Quran alongside 'Salah'?", options: ["22", "32", "42", "82"], answer: 1, explanation: "They are ordered together in 32 verses of the Holy Quran." },
                    { q: "Who was the first male to accept Islam after the Prophet (PBUH)?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Zaid (RA)"], answer: 2, explanation: "Hazrat Abu Bakr (RA) was the first adult free male to accept Islam." },
                    { q: "What is the name of the spring that gushed forth for Hazrat Hajar and baby Ismail (AS)?", options: ["Kausar", "Salsabeel", "Zamzam", "Tasneem"], answer: 2, explanation: "The miraculous well of Zamzam appeared in the desert of Mecca." },
                    { q: "Which Surah of the Quran protects from the punishment of the grave?", options: ["Surah Yaseen", "Surah Mulk", "Surah Rahman", "Surah Waqiah"], answer: 1, explanation: "The Prophet advised reciting Surah Al-Mulk to intercede against grave punishment." },
                    { q: "Who was the 'Sword of Allah' (Saifullah)?", options: ["Hazrat Hamza (RA)", "Hazrat Ali (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Zubair (RA)"], answer: 2, explanation: "Khalid bin Waleed earned this title for his exceptional military prowess." },
                    { q: "In which battle did approximately 70 Huffaz (memorisers of the Quran) embrace martyrdom?", options: ["Battle of Yamama", "Battle of Uhud", "Battle of Badr", "Battle of Khandaq"], answer: 0, explanation: "This tragedy led to the decision to compile the Quran in a book form." },
                    { q: "What is the compulsory charity given at the end of Ramadan?", options: ["Zakat", "Sadaqah", "Sadaqat-ul-Fitr", "Ushr"], answer: 2, explanation: "Fitrana (Sadaqat-ul-Fitr) must be paid before Eid prayers." },
                    { q: "Which Prophet was known for his beautiful voice and could mold iron?", options: ["Prophet Sulaiman (AS)", "Prophet Dawood (AS)", "Prophet Yusuf (AS)", "Prophet Yahya (AS)"], answer: 1, explanation: "Prophet David (Dawood) (AS) was given the Psalms and the ability to work iron." },
                    { q: "What was the name of Prophet Muhammad's (PBUH) grandfather?", options: ["Abdul Mutalib", "Abu Talib", "Hashim", "Abdullah"], answer: 0, explanation: "Abdul Mutalib took care of him after his mother's demise." },
                    { q: "How many Muslims fought in the Battle of Badr?", options: ["300", "313", "1000", "3000"], answer: 1, explanation: "A small ill-equipped army of 313 Muslims faced 1,000 Quraysh." },
                    { q: "Which Surah is named after an insect?", options: ["Surah Ankabut", "Surah Naml", "Surah Nahl", "All of these"], answer: 3, explanation: "Ankabut (Spider), Naml (Ant), and Nahl (Bee)." },
                    { q: "Who was the first martyr among men in Islam?", options: ["Hazrat Yasir (RA)", "Hazrat Bilal (RA)", "Hazrat Ammar (RA)", "Hazrat Khabbab (RA)"], answer: 0, explanation: "Hazrat Yasir (RA), the husband of Sumayya (RA), was martyred by Abu Jahl." },
                    { q: "What is the term for the sayings and actions of Prophet Muhammad (PBUH)?", options: ["Quran", "Sunnah/Hadith", "Fiqh", "Sharia"], answer: 1, explanation: "Sunnah embodies the practices, customs, and traditions of the Prophet." },
                    { q: "Which companion is known as the 'Ghani' (The Generous)?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 2, explanation: "Hazrat Usman (RA) was famously wealthy and incredibly generous to the Muslim cause." },
                    { q: "What is the meaning of the word 'Jihad'?", options: ["Holy War", "To strive or struggle", "To kill", "To conquer"], answer: 1, explanation: "Jihad means exerting optimal effort to strive in the way of Allah." },
                    { q: "Who introduced the system of police and jails in the Islamic state?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Umar (RA) established many administrative systems including the police (Shurta)." },
                    { q: "Which Surah contains the verse of Ayat-ul-Kursi?", options: ["Surah Al-Imran", "Surah Al-Maidah", "Surah Al-Baqarah", "Surah Al-A'raf"], answer: 2, explanation: "Ayat-ul-Kursi is verse 255 of Surah Al-Baqarah." },
                    { q: "What was the age of Prophet Muhammad (PBUH) at the time of Hijra?", options: ["40", "45", "50", "53"], answer: 3, explanation: "He was 53 years old when he migrated to Medina." },
                    { q: "Which Prophet is known as 'Zabehullah'?", options: ["Prophet Ibrahim (AS)", "Prophet Ismail (AS)", "Prophet Ishaq (AS)", "Prophet Yahya (AS)"], answer: 1, explanation: "Prophet Ishmael (Ismail) (AS) was the one Ibrahim (AS) intended to sacrifice." },
                    { q: "How many Makki and Madani Surahs are there?", options: ["86 & 28", "90 & 24", "80 & 34", "85 & 29"], answer: 0, explanation: "The generally accepted count is 86 Makki and 28 Madani Surahs." },
                    { q: "Who was the commander of the Muslim army in the Battle of Yarmouk?", options: ["Hazrat Abu Ubaidah (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Saad bin Abi Waqqas (RA)", "Hazrat Amr ibn al-Aas (RA)"], answer: 1, explanation: "Khalid bin Waleed (RA) brilliantly commanded the forces against the Byzantines." },
                    { q: "Which month comes after Ramadan?", options: ["Sha'ban", "Shawwal", "Zil-Qadah", "Muharram"], answer: 1, explanation: "Shawwal is the 10th Islamic month; Eid-ul-Fitr is celebrated on its 1st day." },
                    { q: "What is the meaning of 'Akhirat'?", options: ["The Present", "The Past", "The Day of Judgment", "Life Hereafter"], answer: 3, explanation: "Akhirat refers to the everlasting life after death." },
                    { q: "Who was the 'Ameen' (Trustworthy) of the Ummah?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Abu Ubaidah bin Jarrah (RA)", "Hazrat Ali (RA)"], answer: 2, explanation: "The Prophet bestowed this title upon Abu Ubaidah." },
                    { q: "What are the celestial bodies created from, according to Islamic tradition?", options: ["Fire", "Light", "Clay", "Water"], answer: 1, explanation: "Angels are created from Noor (Light)." },
                    { q: "Which Prophet was tested with a severe disease but remained patient?", options: ["Prophet Yunus (AS)", "Prophet Ayyub (AS)", "Prophet Yusha (AS)", "Prophet Idris (AS)"], answer: 1, explanation: "Job (Ayyub) is the archetype of patience." },
                    { q: "Who built the Kaaba first?", options: ["Prophet Adam (AS)", "Prophet Ibrahim (AS)", "Prophet Muhammad (PBUH)", "Angels"], answer: 3, explanation: "Tradition holds that angels or Prophet Adam first established the foundation, later rebuilt by Ibrahim." },
                    { q: "What is the primary theme of the Makki Surahs?", options: ["Laws and Jurisprudence", "Warfare", "Tawheed (Oneness) and the Hereafter", "Social rules"], answer: 2, explanation: "Makki Surahs focus heavily on faith, monotheism, and the Day of Judgment." },
                    { q: "Which companion's name is explicitly mentioned in the Quran?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Zaid bin Haritha (RA)", "Hazrat Umar (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Zaid bin Haritha is mentioned by name in Surah Al-Ahzab (33:37)." },
                    { q: "How many verses are roughly in Surah Al-Baqarah?", options: ["200", "286", "300", "114"], answer: 1, explanation: "It contains exactly 286 verses." },
                    { q: "What is the name of the bridge over Hell that everyone must cross on the Day of Judgment?", options: ["Al-Kausar", "As-Sirat", "Al-A'raf", "Salsabeel"], answer: 1, explanation: "The Sirat is described as thinner than a hair and sharper than a sword." },
                    { q: "Which of the following is an obligatory act in Hajj?", options: ["Visiting Medina", "Tawaf-e-Ziyarat", "Sacrifice", "Drinking Zamzam"], answer: 1, explanation: "Tawaf-e-Ziyarat (Ifadah) is one of the pillars of Hajj." },
                    { q: "Who was the 'Conqueror of Egypt'?", options: ["Tariq bin Ziyad", "Amr ibn al-Aas", "Saad bin Abi Waqqas", "Muhammad bin Qasim"], answer: 1, explanation: "Hazrat Amr ibn al-Aas (RA) led the Muslim conquest of Egypt." },
                    { q: "Which Prophet had the miracle of interpreting dreams accurately?", options: ["Prophet Ibrahim (AS)", "Prophet Yusuf (AS)", "Prophet Yaqub (AS)", "Prophet Musa (AS)"], answer: 1, explanation: "Joseph (Yusuf) interpreted dreams for the Egyptian King." },
                    { q: "What was the dower (Mahr) fixed for Hazrat Fatima (RA) upon her marriage to Hazrat Ali (RA)?", options: ["500 Dirhams", "480 Dirhams", "1000 Dirhams", "200 Dirhams"], answer: 1, explanation: "It was roughly 400-480 Dirhams, known as the Mahr-e-Fatimi." },
                    { q: "In which battle did Abu Sufyan accept Islam?", options: ["Battle of Tabuk", "Conquest of Mecca", "Battle of Hunayn", "Battle of Taif"], answer: 1, explanation: "He converted just before the peaceful Conquest of Mecca." },
                    { q: "What does 'Ibadat' mean?", options: ["Charity", "Worship", "Fasting", "Belief"], answer: 1, explanation: "Ibadat encompasses all acts of worship and obedience to Allah." },
                    { q: "Which Islamic month is known as 'The Month of Allah'?", options: ["Ramadan", "Muharram", "Rajab", "Sha'ban"], answer: 1, explanation: "The Prophet referred to Muharram as the sacred month of Allah." },
                    { q: "Who was the first person to read the Quran publicly in Mecca?", options: ["Hazrat Umar (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Abdullah bin Masud (RA)", "Hazrat Ali (RA)"], answer: 2, explanation: "Abdullah bin Masud (RA) braved the Quraysh by reciting Surah Rahman loudly." }
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
        $updatedLines += $islamicQuestions4
        $islamicInserted = $true
        $inIslamic = $false
    }
    $updatedLines += $line
}
$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Injected 50 more Islamic Studies questions (Total 200)."
