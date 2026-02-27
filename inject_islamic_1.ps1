$ErrorActionPreference = "Stop"

$islamicQuestions1 = @"
                    { q: "What is the literal meaning of Islam?", options: ["Peace", "Submission", "Both A & B", "None of these"], answer: 2, explanation: "Islam literally means submission to the will of God and attaining peace." },
                    { q: "How many stages are there in the Holy Quran?", options: ["5", "7", "9", "11"], answer: 1, explanation: "The Quran is divided into 7 Manzils (stages) for recitation over a week." },
                    { q: "Which Surah of the Holy Quran is known as the 'Heart of the Quran'?", options: ["Surah Rahman", "Surah Yaseen", "Surah Baqarah", "Surah Ikhlas"], answer: 1, explanation: "Prophet Muhammad (PBUH) referred to Surah Yaseen as the heart of the Quran." },
                    { q: "Who was the first person to accept Islam among women?", options: ["Hazrat Ayesha (RA)", "Hazrat Khadija (RA)", "Hazrat Fatima (RA)", "Hazrat Saudah (RA)"], answer: 1, explanation: "Hazrat Khadija (RA), the Prophet's wife, was the first woman to embrace Islam." },
                    { q: "What is the name of the cave where the first revelation was received?", options: ["Cave of Hira", "Cave of Thawr", "Cave of Uhud", "Cave of Badr"], answer: 0, explanation: "The Archangel Gabriel appeared to the Prophet in the Cave of Hira." },
                    { q: "How many fundamental pillars of Islam are there?", options: ["3", "4", "5", "6"], answer: 2, explanation: "There are Five Pillars: Shahada, Salah, Zakat, Sawm, and Hajj." },
                    { q: "In which Hijri year was fasting (Roza) made obligatory?", options: ["1st Hijri", "2nd Hijri", "3rd Hijri", "4th Hijri"], answer: 1, explanation: "Fasting during Ramadan became obligatory in 2 A.H." },
                    { q: "What was the age of Prophet Muhammad (PBUH) when he received the first revelation?", options: ["35 years", "40 years", "45 years", "50 years"], answer: 1, explanation: "He was approximately 40 years old when he received the first revelation." },
                    { q: "Who is known as 'Sayyid-us-Shuhada' (Chief of the Martyrs)?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Hamza (RA)", "Hazrat Hussain (RA)"], answer: 2, explanation: "Hazrat Hamza (RA), the uncle of the Prophet, earned this title at the Battle of Uhud." },
                    { q: "Which angel is responsible for bringing revelations from Allah to the Prophets?", options: ["Hazrat Mikaeel (AS)", "Hazrat Israfeel (AS)", "Hazrat Jibraeel (AS)", "Hazrat Izraeel (AS)"], answer: 2, explanation: "Jibreel (Gabriel) is the archangel of revelation." },
                    { q: "What is the longest Surah of the Holy Quran?", options: ["Surah Nisa", "Surah Al-Imran", "Surah Baqarah", "Surah Maidah"], answer: 2, explanation: "Surah Al-Baqarah (The Cow) contains 286 verses." },
                    { q: "Who was the second Caliph of Islam?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Umar (RA) succeeded Hazrat Abu Bakr (RA)." },
                    { q: "What is the name of the companion who accompanied the Prophet (PBUH) during the migration (Hijrat)?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Bilal (RA)", "Hazrat Abu Bakr (RA)"], answer: 3, explanation: "Hazrat Abu Bakr (RA) was his companion in the Cave of Thawr." },
                    { q: "Which battle is known as the first battle of Islam?", options: ["Battle of Uhud", "Battle of Khandaq", "Battle of Badr", "Battle of Tabuk"], answer: 2, explanation: "The Battle of Badr occurred in 2 A.H. (624 CE)." },
                    { q: "What is the Zakat percentage on cash/wealth?", options: ["2.0%", "2.5%", "3.0%", "5.0%"], answer: 1, explanation: "The standard rate of Zakat on accumulated wealth is 2.5%." },
                    { q: "How many times is the word 'Muhammad' mentioned in the Holy Quran?", options: ["3", "4", "5", "6"], answer: 1, explanation: "The name Muhammad is mentioned explicitly 4 times in the Quran." },
                    { q: "Which prophet was swallowed by a large fish/whale?", options: ["Prophet Musa (AS)", "Prophet Yunus (AS)", "Prophet Ibrahim (AS)", "Prophet Nuh (AS)"], answer: 1, explanation: "Prophet Yunus (Jonah) (AS) was swallowed by a fish." },
                    { q: "Which Surah does not start with Bismillah?", options: ["Surah Yaseen", "Surah Tauba", "Surah Naml", "Surah Rahman"], answer: 1, explanation: "Surah Al-Tauba (or Bara'ah) is the only Surah without Bismillah at the beginning." },
                    { q: "Who collected the Holy Quran in the form of a book for the first time?", options: ["Hazrat Ali (RA)", "Hazrat Usman (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)"], answer: 2, explanation: "Hazrat Abu Bakr (RA) initiated the compilation of the Quran." },
                    { q: "In which year did the Tragedy of Karbala occur?", options: ["60 A.H.", "61 A.H.", "62 A.H.", "65 A.H."], answer: 1, explanation: "The Battle of Karbala took place in 61 A.H." },
                    { q: "Who was the first Mu'azzin of Islam?", options: ["Hazrat Ammar (RA)", "Hazrat Bilal (RA)", "Hazrat Zaid (RA)", "Hazrat Salman Farsi (RA)"], answer: 1, explanation: "Hazrat Bilal ibn Rabah (RA) was the first to call the Adhan." },
                    { q: "Which river did Prophet Musa (AS) cross when escaping from the Pharaoh?", options: ["River Nile", "Red Sea", "River Jordan", "Euphrates"], answer: 1, explanation: "According to Abrahamic traditions, he parted the Red Sea." },
                    { q: "What is the third kalima called?", options: ["Kalima Tayyiba", "Kalima Shahadat", "Kalima Tamjeed", "Kalima Tauheed"], answer: 2, explanation: "The third Kalima is 'Tamjeed' (Glorification of Allah)." },
                    { q: "How many Makki Surahs are there in the Quran?", options: ["86", "90", "28", "114"], answer: 0, explanation: "There are 86 Makki Surahs and 28 Madani Surahs." },
                    { q: "Which Prophet is known as 'Khalilullah' (Friend of Allah)?", options: ["Prophet Musa (AS)", "Prophet Ibrahim (AS)", "Prophet Isa (AS)", "Prophet Muhammad (PBUH)"], answer: 1, explanation: "Prophet Ibrahim (Abraham) (AS) holds this title." },
                    { q: "When was the Treaty of Hudaybiyyah signed?", options: ["5 A.H.", "6 A.H.", "7 A.H.", "8 A.H."], answer: 1, explanation: "This pivotal treaty was signed in 6 A.H. between Muslims and the Quraysh." },
                    { q: "Who added the words 'As-Salatu Khairum Minan Naum' in the Fajr Adhan?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Umar (RA) instituted this addition." },
                    { q: "Which angel will blow the Trumpet (Soor) on the Day of Judgment?", options: ["Jibraeel (AS)", "Mikaeel (AS)", "Israfeel (AS)", "Izraeel (AS)"], answer: 2, explanation: "Hazrat Israfeel (AS) will blow the trumpet to signal the end of the world." },
                    { q: "What is the meaning of the word 'Quran'?", options: ["The Book", "That which is Read/Recited", "The Guidance", "The Law"], answer: 1, explanation: "Quran literally means 'that which is read' or 'the recitation'." },
                    { q: "How many sons did Prophet Muhammad (PBUH) have?", options: ["2", "3", "4", "5"], answer: 1, explanation: "He had three sons: Qasim, Abdullah, and Ibrahim (all died in infancy)." },
                    { q: "Who is known as the 'Sword of Allah' (Saifullah)?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Hamza (RA)"], answer: 2, explanation: "Khalid bin Waleed (RA) earned this title for his military brilliance." },
                    { q: "What was the tribal name of Prophet Muhammad (PBUH)?", options: ["Banu Hashim", "Quraysh", "Banu Umayya", "Banu Makhzum"], answer: 1, explanation: "His tribe was Quraysh, and his specific clan was Banu Hashim." },
                    { q: "What is the nisab of Zakat for Gold?", options: ["5.5 Tolas", "7.5 Tolas", "10 Tolas", "52.5 Tolas"], answer: 1, explanation: "The minimum threshold (nisab) for gold is 7.5 tolas (approx 87.48 grams)." },
                    { q: "Which Prophet had the miracle of curing the blind and raising the dead by Allah's will?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Dawood (AS)"], answer: 1, explanation: "Prophet Isa (Jesus) (AS) was granted these miracles." },
                    { q: "Who was the foster mother of Prophet Muhammad (PBUH)?", options: ["Halimah Saadia (RA)", "Umm Ayman", "Khadija (RA)", "Fatima (RA)"], answer: 0, explanation: "Hazrat Halimah Saadia (RA) nursed the Prophet in his early childhood." },
                    { q: "In which year was the Qibla changed from Jerusalem to Mecca?", options: ["1st Hijri", "2nd Hijri", "3rd Hijri", "4th Hijri"], answer: 1, explanation: "The change of Qibla occurred in the 2nd year of Hijra." },
                    { q: "What are the Al-Mu'awwidhatayn?", options: ["Surah Ikhlas & Falaq", "Surah Falaq & Nas", "Surah Baqarah & Imran", "Surah Tauba & Anfal"], answer: 1, explanation: "Surah Al-Falaq and Surah An-Nas are chapters of refuge." },
                    { q: "Who proposed the digging of a trench in the Battle of Khandaq?", options: ["Hazrat Umar (RA)", "Hazrat Ali (RA)", "Hazrat Salman Farsi (RA)", "Hazrat Abu Bakr (RA)"], answer: 2, explanation: "Salman the Persian suggested this defensive tactic." },
                    { q: "How many verses (Ayats) are there in the Holy Quran?", options: ["6666", "6236", "6326", "6000"], answer: 1, explanation: "There are precisely 6,236 verses according to the standard Kufic count." },
                    { q: "Which companion is titled 'Zun-Noorain' (Possessor of Two Lights)?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 2, explanation: "Hazrat Usman (RA) married two daughters of the Prophet, earning this title." },
                    { q: "What does 'Tawheed' mean?", options: ["Fasting", "Charity", "Oneness of Allah", "Prayer"], answer: 2, explanation: "Tawheed is the indivisible oneness concept of monotheism in Islam." },
                    { q: "Which month of the Islamic calendar is Ramadan?", options: ["7th", "8th", "9th", "10th"], answer: 2, explanation: "Ramadan is the ninth month of the Islamic lunar calendar." },
                    { q: "Who succeeded Prophet Muhammad (PBUH) as the first Caliph?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Abu Bakr (RA)"], answer: 3, explanation: "Hazrat Abu Bakr Siddiq (RA) was the first Caliph." },
                    { q: "In which Surah is the incident of 'Ashab-e-Kahf' (Companions of the Cave) mentioned?", options: ["Surah Maryam", "Surah Al-Kahf", "Surah Taha", "Surah Yaseen"], answer: 1, explanation: "Surah Al-Kahf narrates the story of the sleeping youths." },
                    { q: "What is the penalty for accusing someone of adultery falsely (Qazaf)?", options: ["40 lashes", "80 lashes", "100 lashes", "Death"], answer: 1, explanation: "Under Islamic jurisprudence, the punishment is 80 stripes." },
                    { q: "Which Prophet could understand the language of birds and animals?", options: ["Prophet Sulaiman (AS)", "Prophet Dawood (AS)", "Prophet Yusuf (AS)", "Prophet Idrees (AS)"], answer: 0, explanation: "Prophet Solomon (Sulaiman) (AS) was given this unique ability." },
                    { q: "What is the meaning of 'Wahi'?", options: ["Inspiration/Revelation", "Angels", "Message", "Miracle"], answer: 0, explanation: "Wahi refers to the divine revelation sent by Allah to His messengers." },
                    { q: "Which angel is responsible for taking out the soul (Angel of Death)?", options: ["Jibraeel", "Israfeel", "Izraeel", "Mikaeel"], answer: 2, explanation: "Hazrat Izraeel (AS) is the angel of death." },
                    { q: "Who compiled the first authentic book of Hadith, Sahih Bukhari?", options: ["Imam Muslim", "Imam Malik", "Imam Abu Hanifa", "Imam Bukhari"], answer: 3, explanation: "Muhammad ibn Ismail al-Bukhari compiled the Sahih al-Bukhari." },
                    { q: "Which city is known as 'City of Prophets'?", options: ["Mecca", "Medina", "Jerusalem", "Damascus"], answer: 2, explanation: "Jerusalem (Al-Quds) is historically associated with numerous prophets." }
"@
$lines = Get-Content -Path "data.js" -Encoding UTF8
$updatedLines = @()
$inPastPapers = $false
$islamicInserted = $false
$targetCategory = "category: `"PPSC Past Papers`""

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match 'name: "Past Papers"') {
        $inPastPapers = $true
    }
    
    # We will insert the new category before the PPSC category
    if ($inPastPapers -and -not $islamicInserted -and $line -match 'category: "PPSC Past Papers"') {
        $newCategory = @"
            {
                category: "Islamic Studies Past Papers",
                icon: "fa-book-quran",
                questions: [
$islamicQuestions1
                ]
            },
"@
        $updatedLines += $newCategory -split "`n"
        $islamicInserted = $true
    }
    
    $updatedLines += $line
}
$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Injected first batch (50 Qs) of Islamic Studies Past Papers."
