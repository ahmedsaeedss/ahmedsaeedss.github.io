const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function addIslamiatPastPapers() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let pastPapersSubj = arr.find(s => s.name === "Past Papers");
        if (!pastPapersSubj) {
            console.log("Past Papers subject not found!");
            return;
        }

        // FPSC - 40 Qs
        const fpsc = [
            { q: "Who was the first Caliph of Islam?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Usman (RA)"], answer: 2, explanation: "Hazrat Abu Bakr (RA) was the first Caliph after the Prophet's (PBUH) demise." },
            { q: "The word 'Islam' literally means:", options: ["Peace", "Submission to the will of Allah", "Both A and B", "None of these"], answer: 2, explanation: "Islam originates from Arabic roots meaning submission and peace." },
            { q: "In which year did the Battle of Badr take place?", options: ["2 AH", "3 AH", "4 AH", "5 AH"], answer: 0, explanation: "The Battle of Badr took place in 2 Hijri (624 CE)." },
            { q: "How many stages (Manzils) are there in the Holy Quran?", options: ["5", "7", "9", "11"], answer: 1, explanation: "The Quran is divided into 7 Manzils for reading convenience over a week." },
            { q: "Which angel is responsible for bringing revelations from Allah to Prophets?", options: ["Hazrat Jibraeel (AS)", "Hazrat Mikaeel (AS)", "Hazrat Israfeel (AS)", "Hazrat Izraeel (AS)"], answer: 0, explanation: "Hazrat Jibraeel (AS) was the angel of revelation." },
            { q: "The first mosque built by Muslims was:", options: ["Masjid-e-Nabawi", "Masjid Quba", "Masjid-al-Haram", "Masjid-e-Aqsa"], answer: 1, explanation: "Masjid Quba was established by the Prophet (PBUH) during his migration." },
            { q: "Which Surah is known as the 'Heart of the Quran'?", options: ["Surah Yaseen", "Surah Rahman", "Surah Fatiha", "Surah Ikhlas"], answer: 0, explanation: "Prophet Muhammad (PBUH) referred to Surah Yaseen as the heart of the Quran." },
            { q: "Who collected the Quranic verses in one volume for the first time?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Zaid bin Thabit (RA)"], answer: 0, explanation: "Upon Hazrat Umar's suggestion, Hazrat Abu Bakr ordered its compilation." },
            { q: "What is the meaning of 'Zakat'?", options: ["To purify", "To increase", "Both A and B", "To pay tax"], answer: 2, explanation: "Zakat linguistically means to purify and to grow." },
            { q: "Which companion is known as 'Saifullah' (Sword of Allah)?", options: ["Hazrat Hamza (RA)", "Hazrat Ali (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Umar (RA)"], answer: 2, explanation: "Hazrat Khalid bin Waleed was bestowed this title for his military genius." },
            { q: "The treaty of Hudaibiya was signed in:", options: ["5 AH", "6 AH", "7 AH", "8 AH"], answer: 1, explanation: "It was a pivotal peace treaty signed in 6 AH." },
            { q: "Which Prophet is known as 'Khalilullah' (Friend of Allah)?", options: ["Hazrat Musa (AS)", "Hazrat Isa (AS)", "Hazrat Ibrahim (AS)", "Hazrat Nuh (AS)"], answer: 2, explanation: "Hazrat Ibrahim (AS) is honored with the title Khalilullah." },
            { q: "How many obligations (Faraiz) are there in Wudu (Ablution)?", options: ["3", "4", "5", "6"], answer: 1, explanation: "Washing face, arms to elbows, wiping head, washing feet to ankles." },
            { q: "The Battle of Uhud was fought in the year:", options: ["2 AH", "3 AH", "4 AH", "5 AH"], answer: 1, explanation: "It took place in 3 Hijri, a year after Badr." },
            { q: "Who is the author of 'Sahih Bukhari'?", options: ["Imam Muslim", "Imam Bukhari", "Imam Malik", "Imam Abu Hanifa"], answer: 1, explanation: "Written by Muhammad ibn Ismail al-Bukhari." },
            { q: "Which Surah does not start with Bismillah?", options: ["Surah Fatiha", "Surah Tauba", "Surah Namal", "Surah Yaseen"], answer: 1, explanation: "Surah At-Tauba is the only Surah without Bismillah at its beginning." },
            { q: "Hazrat Usman (RA) belonged to the tribe of:", options: ["Banu Hashim", "Banu Umayya", "Banu Makhzum", "Banu Asad"], answer: 1, explanation: "He was a wealthy merchant of the Umayyad clan." },
            { q: "What is the third fundamental pillar of Islam?", options: ["Namaz", "Roza (Fasting)", "Zakat", "Hajj"], answer: 2, explanation: "The order is: Kalima, Namaz, Zakat, Roza, Hajj." },
            { q: "Which wife of the Prophet (PBUH) was the daughter of Hazrat Umar (RA)?", options: ["Hazrat Ayesha (RA)", "Hazrat Hafsa (RA)", "Hazrat Zainab (RA)", "Hazrat Khadija (RA)"], answer: 1, explanation: "Hazrat Hafsa bint Umar (RA) married the Prophet (PBUH)." },
            { q: "The first migration of the Companions was made to:", options: ["Madina", "Taif", "Abyssinia (Ethiopia)", "Syria"], answer: 2, explanation: "Due to persecution, early Muslims sought refuge in Abyssinia." },
            { q: "Hazrat Hamza (RA) was martyred in the Battle of:", options: ["Badr", "Uhud", "Khandaq", "Khyber"], answer: 1, explanation: "He was martyred by Wahshi in the Battle of Uhud." },
            { q: "The word 'Ushr' means:", options: ["1/5th", "1/10th", "1/20th", "1/40th"], answer: 1, explanation: "Ushr is a 10% tax on agricultural produce." },
            { q: "Which Prophet's story is related to the splitting of the sea?", options: ["Hazrat Ibrahim (AS)", "Hazrat Musa (AS)", "Hazrat Isa (AS)", "Hazrat Nuh (AS)"], answer: 1, explanation: "Hazrat Musa (AS) led the Israelites across the parted Red Sea." },
            { q: "How many times is the word 'Muhammad' mentioned in the Holy Quran?", options: ["3", "4", "5", "6"], answer: 1, explanation: "His name appears 4 times in the Quran." },
            { q: "Namaze-e-Kasoof is offered during:", options: ["Lunar Eclipse", "Solar Eclipse", "Rain", "Drought"], answer: 1, explanation: "Namaz-e-Kasoof is performed during a solar eclipse." },
            { q: "Fasting was made obligatory in:", options: ["1 AH", "2 AH", "3 AH", "4 AH"], answer: 1, explanation: "Fasting in Ramadan became Fard in 2 AH." },
            { q: "The tragedy of Karbala took place in the year:", options: ["60 AH", "61 AH", "62 AH", "63 AH"], answer: 1, explanation: "It occurred on 10 Muharram 61 AH." },
            { q: "Who was the first female martyr of Islam?", options: ["Hazrat Khadijah (RA)", "Hazrat Sumayya (RA)", "Hazrat Amina (RA)", "Hazrat Fatima (RA)"], answer: 1, explanation: "Hazrat Sumayya bint Khayyat was killed by Abu Jahl." },
            { q: "Where is the cave of Hira located?", options: ["Jabal al-Nour", "Jabal al-Thawr", "Mount Uhud", "Mount Arafat"], answer: 0, explanation: "Jabal al-Nour (The Mountain of Light) near Makkah." },
            { q: "The Holy Prophet (PBUH) belonged to which family of Quraish?", options: ["Umayyad", "Hashimite (Banu Hashim)", "Adi", "Taym"], answer: 1, explanation: "He was born into the Banu Hashim clan of the Quraish." },
            { q: "How many Ruku are there in the Holy Quran?", options: ["540", "558", "600", "500"], answer: 1, explanation: "There are precisely 558 Rukus in the Quran." },
            { q: "Hazrat Ali (RA) shifted the capital from Madina to:", options: ["Makkah", "Kufa", "Damascus", "Baghdad"], answer: 1, explanation: "He relocated the capital to Kufa in Iraq." },
            { q: "What is the nisab of gold for Zakat?", options: ["5.5 Tolas", "7.5 Tolas", "9.5 Tolas", "10 Tolas"], answer: 1, explanation: "7.5 Tolas (approx 87.48 grams) of gold." },
            { q: "Namaz-e-Istisqa is offered for:", options: ["Peace", "Rain", "Forgiveness", "Eclipse"], answer: 1, explanation: "It is a prayer requesting Allah for rain during drought." },
            { q: "Who added the words 'As-salatu Khairum Minan Naum' in the Fajr Azan?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Bilal (RA)", "Prophet Muhammad (PBUH)"], answer: 1, explanation: "Hazrat Umar (RA) initiated this addition." },
            { q: "What was the real name of Imam Abu Hanifa?", options: ["Numan bin Thabit", "Ahmad bin Hanbal", "Muhammad bin Idris", "Malik bin Anas"], answer: 0, explanation: "His actual name was Numan bin Thabit." },
            { q: "How many Surahs of the Holy Quran are Makki?", options: ["86", "28", "114", "94"], answer: 0, explanation: "86 Surahs were revealed in Makkah, while 28 were revealed in Madina." },
            { q: "What was the name of the Prophet's (PBUH) camel during the migration?", options: ["Buraq", "Qaswa", "Zuljanah", "Duldul"], answer: 1, explanation: "Al-Qaswa was the favorite camel of the Prophet (PBUH)." },
            { q: "Conquest of Makkah took place in the year:", options: ["6 AH", "7 AH", "8 AH", "9 AH"], answer: 2, explanation: "Makkah was liberated peacefully in 8 Hijri." },
            { q: "Which angel blows the trumpet on the Day of Judgment?", options: ["Hazrat Jibraeel (AS)", "Hazrat Mikaeel (AS)", "Hazrat Israfeel (AS)", "Hazrat Izraeel (AS)"], answer: 2, explanation: "Hazrat Israfeel (AS) will blow the Soor (trumpet)." }
        ];

        // PPSC - 40 Qs
        const ppsc = [
            { q: "Who was the foster mother of Prophet Muhammad (PBUH)?", options: ["Hazrat Fatima", "Hazrat Halima", "Hazrat Khadija", "Hazrat Ayesha"], answer: 1, explanation: "Hazrat Halima Sadia (RA) was his foster mother." },
            { q: "What is the literal meaning of 'Wahi'?", options: ["Message", "Revelation/Inspiration", "Voice", "Dream"], answer: 1, explanation: "Wahi refers to divine revelation." },
            { q: "How many Idols were placed in the Holy Kaaba before its conquest?", options: ["300", "360", "400", "100"], answer: 1, explanation: "The Kaaba contained 360 idols representing various tribal deities." },
            { q: "Who was the commander of the infidels in the Battle of Badr?", options: ["Abu Sufyan", "Abu Jahl", "Abu Lahab", "Utbah"], answer: 1, explanation: "Abu Jahl led the Quraysh army and was killed in this battle." },
            { q: "Which Surah of the Quran contains two Bismillahs?", options: ["Surah Yaseen", "Surah Namal", "Surah Tauba", "Surah Rahman"], answer: 1, explanation: "Surah An-Namal contains two Bismillahs." },
            { q: "Who proposed the digging of a trench in the Battle of Khandaq?", options: ["Hazrat Ali (RA)", "Hazrat Salman Farsi (RA)", "Hazrat Umar (RA)", "Hazrat Khalid bin Waleed (RA)"], answer: 1, explanation: "Hazrat Salman Farsi (RA) brought this Persian military tactic." },
            { q: "What is the punishment for false accusation of Zina (Qazaf)?", options: ["40 lashes", "80 lashes", "100 lashes", "Stoning"], answer: 1, explanation: "The Quran prescribes 80 lashes for slanderers." },
            { q: "Who is known as 'Sayyid-ush-Shuhada'?", options: ["Hazrat Ali (RA)", "Hazrat Hasan (RA)", "Hazrat Hussain (RA)", "Hazrat Hamza (RA)"], answer: 3, explanation: "Hazrat Hamza is often referred to as the master of martyrs of early Islam." },
            { q: "The first Islamic institution of learning was at the house of:", options: ["Hazrat Arqam", "Hazrat Abu Bakr", "Hazrat Umar", "Hazrat Uthman"], answer: 0, explanation: "Dar-ul-Arqam served as the secret center for Islamic preaching." },
            { q: "Which companion compiled the first complete Mus'haf?", options: ["Hazrat Usman (RA)", "Hazrat Zaid bin Thabit (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Zaid bin Thabit (RA) was the chief scribe." },
            { q: "How many times did the Holy Prophet (PBUH) perform Hajj?", options: ["One", "Two", "Three", "Four"], answer: 0, explanation: "He performed one Hajj, known as Hujjat-ul-Wida, in 10 AH." },
            { q: "The term 'Tawheed' refers to:", options: ["Oneness of Prophets", "Oneness of Allah", "Oneness of Angels", "Day of Judgment"], answer: 1, explanation: "Tawheed is the indivisible oneness concept of monotheism in Islam." },
            { q: "Which caliph established the Hijri calendar?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Umar (RA) instituted it, starting from the Prophet's migration." },
            { q: "What is the meaning of 'Al-Quran'?", options: ["The Book", "The Message", "The Most Read/Recited", "The Truth"], answer: 2, explanation: "Al-Quran literally means 'The Recitation'." },
            { q: "Who was the first person to verify the incident of Miraj?", options: ["Hazrat Ali (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)"], answer: 1, explanation: "Hazrat Abu Bakr immediately believed it, earning him the title 'Siddiq'." },
            { q: "Battle of Mutah was fought against:", options: ["Jews", "Romans", "Persians", "Egyptians"], answer: 1, explanation: "Fought in 8 AH against the Byzantine (Roman) Empire." },
            { q: "Who was the second female to embrace Islam?", options: ["Hazrat Fatima", "Hazrat Lubaba", "Hazrat Asma", "Hazrat Zainab"], answer: 1, explanation: "Hazrat Lubaba bint al-Harith (Umm Fadl) was the second woman after Khadijah." },
            { q: "Hazrat Ali (RA) was martyred by:", options: ["Abd-al-Rahman ibn Muljam", "Abu Lu'lu'a", "Wahshi", "Hajaj bin Yousuf"], answer: 0, explanation: "He was assassinated by Ibn Muljam, a Kharijite." },
            { q: "Qurbani (sacrificing an animal) is performed during which Islamic month?", options: ["Ramadan", "Shawwal", "Zil-Qad", "Zil-Hajj"], answer: 3, explanation: "It is performed from the 10th to 12th of Dhu al-Hijjah." },
            { q: "Hazrat Umar (RA) conquered Jerusalem in which year?", options: ["636 AD", "638 AD", "642 AD", "644 AD"], answer: 1, explanation: "Jerusalem fell to the Muslims in 638 CE during Umar's caliphate." },
            { q: "Which Surah was recited by Prophet (PBUH) at the time of migration?", options: ["Surah Yaseen", "Surah Fatiha", "Surah Tauba", "Surah Ikhlas"], answer: 0, explanation: "He recited verses from Surah Yaseen while passing the assassins." },
            { q: "Hazrat Musa's (AS) staff turned into a:", options: ["Bird", "Serpent/Snake", "Tree", "Sword"], answer: 1, explanation: "His staff miraculously transformed into a giant snake by Allah's command." },
            { q: "Which relative of Prophet Muhammad (PBUH) died precisely in the 'Year of Sorrow' (Aam ul Huzn)?", options: ["His son Ibrahim", "His uncle Abu Talib", "His grandfather", "His mother"], answer: 1, explanation: "Abu Talib and Hazrat Khadija (RA) both died in the Year of Sorrow." },
            { q: "Which companion is termed 'Zun-Noorain' (Possessor of two lights)?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Abu Bakr (RA)"], answer: 2, explanation: "Hazrat Usman (RA) married two daughters of the Prophet (PBUH)." },
            { q: "Who introduced the police system in Islam?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 1, explanation: "Hazrat Umar (RA) modernized the administration and initiated night patrols." },
            { q: "In the Battle of Khyber, the famous Jewish fort Qamus was conquered by:", options: ["Hazrat Umar (RA)", "Hazrat Ali (RA)", "Hazrat Hamza (RA)", "Hazrat Khalid (RA)"], answer: 1, explanation: "The Prophet (PBUH) handed the banner to Hazrat Ali, who breached the fort." },
            { q: "Ghazwa Tabook was fought in:", options: ["7 AH", "8 AH", "9 AH", "10 AH"], answer: 2, explanation: "The Expedition of Tabuk occurred in 9 AH against the Byzantines." },
            { q: "Who is the mother of Hazrat Ismail (AS)?", options: ["Hazrat Sara (AS)", "Hazrat Hajra (AS)", "Hazrat Maryam (AS)", "Hazrat Aasiya (AS)"], answer: 1, explanation: "Hazrat Hajra (Hagar) is the mother of Ismail (AS)." },
            { q: "First revelation happened in the cave of Hira when the Prophet (PBUH) was of what age?", options: ["35 years", "40 years", "45 years", "50 years"], answer: 1, explanation: "He was 40 years old at the time of the first revelation." },
            { q: "The incident of Mubahila took place with the Christians of:", options: ["Najran", "Yemen", "Syria", "Egypt"], answer: 0, explanation: "The event involved Christian envoys from Najran." },
            { q: "What is 'Khatam-e-Nabuwat'?", options: ["Finality of Prophethood", "Beginning of Prophethood", "Miracles of Prophets", "Seal of Angels"], answer: 0, explanation: "It refers to the belief that Prophet Muhammad (PBUH) is the final prophet." },
            { q: "The Prophet's grandfather Addul Muttalib belonged to which tribe?", options: ["Umayyad", "Banu Hashim", "Banu Zuhra", "Banu Makhzum"], answer: 1, explanation: "He was the chieftain of the Banu Hashim." },
            { q: "Namaz-e-Khasoof is offered at the time of:", options: ["Solar Eclipse", "Lunar Eclipse", "Drought", "Earthquake"], answer: 1, explanation: "Khasoof corresponds to a lunar eclipse." },
            { q: "Which angel is tasked with blowing the Trumpet?", options: ["Jibraeel (AS)", "Israfeel (AS)", "Mikaeel (AS)", "Izraeel (AS)"], answer: 1, explanation: "Israfeel will signal the Day of Judgment." },
            { q: "Ghazwat are those battles in which:", options: ["Companions participated", "Prophet (PBUH) participated", "Fought only defensively", "Fought against Persians"], answer: 1, explanation: "Battles directly commanded by the Prophet (PBUH) are Ghazwat." },
            { q: "How many Aayaat are in Surah Al-Fatiha?", options: ["5", "6", "7", "8"], answer: 2, explanation: "There are 7 verses in Surah Al-Fatiha." },
            { q: "What is the pre-Islamic era in Arabia called?", options: ["Ayyam-e-Haq", "Ayyam-e-Jahiliyyah", "Golden Age", "Dark Ages"], answer: 1, explanation: "It means the 'Days of Ignorance'." },
            { q: "Which mountain did the Prophet (PBUH) climb to deliver his last sermon?", options: ["Mount Uhud", "Mount Arafat (Jabal al-Rahmah)", "Mount Sinai", "Mount Safa"], answer: 1, explanation: "The farewell sermon was delivered at Mount Arafat." },
            { q: "How many Muslims fought in the Battle of Badr?", options: ["313", "1000", "3000", "5000"], answer: 0, explanation: "An ill-equipped force of exactly 313 Muslims." },
            { q: "Tayamum means performing ablution with:", options: ["Water", "Leaves", "Clean dust/sand", "Stones"], answer: 2, explanation: "Tayamum is dry ablution using clean earth when water is unavailable." }
        ];

        // SPSC - 40 Qs
        const spsc = [
            { q: "The institution of Khilafat was officially abolished in which year?", options: ["1920", "1922", "1924", "1926"], answer: 2, explanation: "The Ottoman Caliphate was abolished by Mustafa Kemal in 1924." },
            { q: "Sufi saint Lal Shahbaz Qalandar's shrine is situated in:", options: ["Sehwan Sharif", "Multan", "Lahore", "Pakpattan"], answer: 0, explanation: "His shrine is famously located in Sehwan, Sindh." },
            { q: "Which Umayyad Caliph is highly respected for his piety and likened to the Khulafa-e-Rashideen?", options: ["Yazid", "Abdul Malik", "Umar bin Abdul Aziz", "Muawiyah II"], answer: 2, explanation: "He is often dubbed the 5th righteous Caliph due to his just rule." },
            { q: "According to Quran, there are how many recipient categories for Zakat?", options: ["6", "7", "8", "9"], answer: 2, explanation: "Surah At-Tauba (9:60) specifies 8 categories of people eligible to receive Zakat." },
            { q: "The Prophet (PBUH) stayed at whose house in Madina immediately after migration?", options: ["Hazrat Abu Ayyub Ansari (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)", "Hazrat Saad (RA)"], answer: 0, explanation: "His camel stopped at the house of Abu Ayyub al-Ansari." },
            { q: "Where was the Prophet (PBUH) born?", options: ["Madina", "Makkah", "Taif", "Jerusalem"], answer: 1, explanation: "Born in the city of Makkah in 570 CE." },
            { q: "The translation of the Holy Quran into Sindhi was first done by:", options: ["Shah Abdul Latif", "Akhund Azizullah", "Makhdoom Nuh", "Sachal Sarmast"], answer: 1, explanation: "Akhund Azizullah is credited with an early Sindhi translation." },
            { q: "Zakat became obligatory in which Hijri year?", options: ["1 AH", "2 AH", "3 AH", "4 AH"], answer: 1, explanation: "Zakat, along with Roza, became mandatory in 2 AH." },
            { q: "The period of the Pious Caliphate (Khulafa-e-Rashideen) lasted for how many years?", options: ["20 years", "30 years", "40 years", "50 years"], answer: 1, explanation: "It lasted from 632 CE to 661 CE (approx 30 years)." },
            { q: "Ashra Mubashra are those companions who were guaranteed:", options: ["Wealth", "Victory in war", "Paradise (Jannah)", "Caliphate"], answer: 2, explanation: "The 10 prominent companions promised Jannah during their lifetime." },
            { q: "The name of the Prophet's mother is:", options: ["Hazrat Khadija", "Hazrat Halima", "Hazrat Amina", "Hazrat Asiya"], answer: 2, explanation: "Amina bint Wahb was the mother of the Islamic prophet." },
            { q: "The longest Surah in the Holy Quran is:", options: ["Surah Al-Imran", "Surah Al-Baqarah", "Surah An-Nisa", "Surah Al-A'raf"], answer: 1, explanation: "Surah Al-Baqarah consists of 286 verses." },
            { q: "The shortest Surah in the Holy Quran is:", options: ["Surah Ikhlas", "Surah Kausar", "Surah Asr", "Surah Falaq"], answer: 1, explanation: "Surah Al-Kausar consists of only 3 verses." },
            { q: "Surah Namal contains the story of which Prophet?", options: ["Hazrat Musa (AS)", "Hazrat Dawood (AS)", "Hazrat Sulaiman (AS)", "Hazrat Isa (AS)"], answer: 2, explanation: "It mentions Prophet Solomon's interaction with the Queen of Sheba and ants." },
            { q: "Which angel is the custodian of Hell?", options: ["Malik", "Rizwan", "Mikail", "Atid"], answer: 0, explanation: "Maalik is an archangel in Islamic belief who guards Hell." },
            { q: "Which angel is the custodian of Paradise (Jannah)?", options: ["Rizwan", "Malik", "Munkar", "Nakir"], answer: 0, explanation: "Ridwan is the angel maintaining Jannah." },
            { q: "The word Quran literally means:", options: ["The Book", "That which is read frequently", "The Guidance", "The Truth"], answer: 1, explanation: "It stems from 'qara'a', meaning 'to read/recite'." },
            { q: "Which month is known as the month of fasting?", options: ["Muharram", "Rajab", "Ramadan", "Shaban"], answer: 2, explanation: "Ramadan is the 9th Islamic month of fasting." },
            { q: "The battle in which the Prophet (PBUH) lost his teeth (Dandan-e-Mubarak) was:", options: ["Badr", "Uhud", "Khandaq", "Hunain"], answer: 1, explanation: "He was struck in the face during the Battle of Uhud." },
            { q: "Umm-ul-Momineen Hazrat Khadija (RA) passed away in:", options: ["8th Nabvi", "10th Nabvi", "12th Nabvi", "1 AH"], answer: 1, explanation: "She died in the 10th year of Prophethood ('Year of Sorrow')." },
            { q: "Which Sahabi was known as the 'Translater of the Quran' (Tarjuman-ul-Quran)?", options: ["Hazrat Ali (RA)", "Hazrat Abdullah bin Abbas (RA)", "Hazrat Abdullah bin Masud (RA)", "Hazrat Zaid (RA)"], answer: 1, explanation: "He was highly reputed for his deep knowledge of Quranic tafseer." },
            { q: "Salat-ul-Khasoof is associated with:", options: ["Solar Eclipse", "Lunar Eclipse", "Death", "Rain"], answer: 1, explanation: "It's the prayer offered during a lunar eclipse." },
            { q: "Mazar of Shah Abdul Latif Bhittai is located in:", options: ["Hyderabad", "Karachi", "Bhit Shah", "Jacobabad"], answer: 2, explanation: "His shrine rests in the town of Bhit Shah, Sindh." },
            { q: "What is the primary function of Angel Jibraeel (Gabriel)?", options: ["Blowing Trumpet", "Taking out souls", "Bringing rain", "Bringing Wahi (Revelations)"], answer: 3, explanation: "He served as the divine messenger to all prophets." },
            { q: "In which Surah Bismillah is repeated twice?", options: ["Surah Tauba", "Surah Namal", "Surah Rahman", "Surah Falaq"], answer: 1, explanation: "Surah Namal has Bismillah at the beginning and in verse 30." },
            { q: "Jihad became obligatory in which year?", options: ["1 AH", "2 AH", "3 AH", "4 AH"], answer: 1, explanation: "Permisison to fight was granted shortly after migration, culminating in 2 AH." },
            { q: "First female Hafiz-e-Quran was:", options: ["Hazrat Ayesha", "Hazrat Hafsa", "Hazrat Zainab", "Hazrat Khadija"], answer: 1, explanation: "Hazrat Hafsa bint Umar (RA) memorized the Quran." },
            { q: "Makki Surahs were generally revealed before:", options: ["Migration to Abyssinia", "Migration to Madina", "Conquest of Makkah", "Battle of Badr"], answer: 1, explanation: "Makki refers to revelations before the Hijrah to Madina." },
            { q: "How many stages are there in Hajj?", options: ["1", "3", "5", "7"], answer: 2, explanation: "There are 5 core days/stages of Hajj." },
            { q: "Which Caliph ordered the compilation of the Quran for the very first time?", options: ["Hazrat Abu Bakr", "Hazrat Umar", "Hazrat Usman", "Hazrat Ali"], answer: 0, explanation: "Initiated after the Battle of Yamama where many Huffaz were martyred." },
            { q: "The term Hadith refers to:", options: ["Verses of Quran", "Sayings and actions of the Prophet (PBUH)", "Sayings of angels", "Historical decrees"], answer: 1, explanation: "Hadith are the recorded traditions of the Prophet." },
            { q: "To what tribe did Abu Jahl belong?", options: ["Banu Hashim", "Banu Makhzum", "Banu Umayya", "Banu Asad"], answer: 1, explanation: "He was a leader of the Banu Makhzum clan." },
            { q: "Hazrat Hamza (RA) was the _____ of Prophet Muhammad (PBUH).", options: ["Brother", "Uncle", "Cousin", "Grandfather"], answer: 1, explanation: "He was a paternal uncle of the Prophet." },
            { q: "A Muslim male is allowed to wear clothes made of:", options: ["Pure Silk", "Gold threads", "Cotton/Wool", "All of the above"], answer: 2, explanation: "Silk and gold are prohibited for Muslim men." },
            { q: "The Nisab for silver in Zakat is:", options: ["40.5 Tolas", "52.5 Tolas", "60 Tolas", "100 Tolas"], answer: 1, explanation: "52.5 Tolas of silver is the threshold for Zakat liability." },
            { q: "Zabur (Psalms) was revealed to which Prophet?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Dawood (AS)"], answer: 3, explanation: "Prophet David (Dawood) was given the Zabur." },
            { q: "Injeel (Gospel) was revealed to:", options: ["Musa (AS)", "Isa (AS)", "Dawood (AS)", "Nuh (AS)"], answer: 1, explanation: "Prophet Jesus (Isa) was given the Injeel." },
            { q: "Torah was revealed to:", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Yaqoob (AS)"], answer: 0, explanation: "Prophet Moses (Musa) was given the Torah." },
            { q: "Tawaf of Kaaba involves making how many circuits?", options: ["3", "5", "7", "9"], answer: 2, explanation: "Pilgrims circumambulate the Kaaba 7 times." },
            { q: "Which Islamic month follows Ramadan?", options: ["Shaban", "Rajab", "Shawwal", "Zil-Qad"], answer: 2, explanation: "Shawwal starts with the celebration of Eid-ul-Fitr." }
        ];

        // BPSC - 40 Qs
        const bpsc = [
            { q: "Who established the first Islamic state?", options: ["Hazrat Umar", "Hazrat Abu Bakr", "Prophet Muhammad (PBUH)", "Hazrat Ali"], answer: 2, explanation: "The Prophet (PBUH) founded the first Islamic state in Madina." },
            { q: "The book 'Al-Muwatta' was compiled by:", options: ["Imam Abu Hanifa", "Imam Malik", "Imam Shafi'i", "Imam Ahmad"], answer: 1, explanation: "It is the earliest written collection of Hadith, by Imam Malik." },
            { q: "Battle of Yarmouk was fought between Muslims and:", options: ["Persians", "Romans (Byzantines)", "Egyptians", "Tartars"], answer: 1, explanation: "A major battle where Khalid bin Waleed defeated the Byzantine forces." },
            { q: "Who conquered Sindh in 712 AD?", options: ["Mahmud Ghaznavi", "Muhammad bin Qasim", "Qutb-ud-din Aibak", "Babar"], answer: 1, explanation: "Muhammad bin Qasim led the Umayyad conquest of Sindh." },
            { q: "The term 'Ijma' refers to:", options: ["Analogy", "Consensus among Islamic scholars", "Personal decree", "Fasting"], answer: 1, explanation: "Ijma is the universal consensus of the ummah or scholars." },
            { q: "The term 'Qiyas' means:", options: ["Analogical reasoning", "Consensus", "Tradition", "Struggle"], answer: 0, explanation: "Deducing rulings by drawing an analogy from Quran/Hadith." },
            { q: "The incident of Karbala occurred during the reign of which Umayyad Caliph?", options: ["Muawiyah I", "Yazid I", "Marwan", "Abdul Malik"], answer: 1, explanation: "It occurred in 680 AD under Yazid's rule." },
            { q: "Which Abbasid Caliph founded the city of Baghdad?", options: ["Harun al-Rashid", "Al-Mansur", "Al-Mamun", "Al-Amin"], answer: 1, explanation: "Al-Mansur built Baghdad as his capital in 762 AD." },
            { q: "Which companion is known for interpreting dreams?", options: ["Hazrat Abu Bakr", "Hazrat Umar", "Hazrat Ali", "Ibn Sirin (Tabi'in)"], answer: 3, explanation: "Muhammad ibn Sirin was a famous Muslim interpreter of dreams." },
            { q: "Ghazwa Badr occurred in the month of:", options: ["Muharram", "Ramadan", "Shawwal", "Safar"], answer: 1, explanation: "The Battle of Badr took place on 17 Ramadan." },
            { q: "What was the age of Prophet (PBUH) when he married Hazrat Khadija (RA)?", options: ["20", "25", "30", "35"], answer: 1, explanation: "He was 25 and she was 40." },
            { q: "Hazrat Khadija (RA) remained married to the Prophet for how many years?", options: ["15 years", "20 years", "25 years", "30 years"], answer: 2, explanation: "They were married for exactly 25 years until her death." },
            { q: "Sajdah Tilawat is obligatory upon:", options: ["Reciter", "Listener", "Both A and B", "None"], answer: 2, explanation: "Both the reciter and the one listening must perform it." },
            { q: "How many Sajdah Tilawat are in the Holy Quran?", options: ["12", "14", "15", "16"], answer: 1, explanation: "There are 14 distinct verses where bowing down is required." },
            { q: "The first son of the Prophet (PBUH) was:", options: ["Hazrat Qasim", "Hazrat Abdullah", "Hazrat Ibrahim", "Hazrat Tayyab"], answer: 0, explanation: "He was named Abu'l-Qasim after his eldest son Qasim, who died young." },
            { q: "Which Prophet is known as 'Ruhullah'?", options: ["Hazrat Musa", "Hazrat Isa", "Hazrat Nooh", "Hazrat Yaqoob"], answer: 1, explanation: "Isa (Jesus) is titled the 'Spirit of Allah' in the Quran." },
            { q: "Which Prophet was swallowed by a large fish/whale?", options: ["Hazrat Yunus (AS)", "Hazrat Yusuf (AS)", "Hazrat Ayub (AS)", "Hazrat Idrees (AS)"], answer: 0, explanation: "Prophet Jonah (Yunus) was swallowed by a whale." },
            { q: "Hazrat Ayub (AS) is famously known for his:", options: ["Wealth", "Voice", "Patience", "Beauty"], answer: 2, explanation: "He endured immense physical suffering with extraordinary patience." },
            { q: "Al-Masjid an-Nabawi operates in which city?", options: ["Makkah", "Jerusalem", "Madina", "Taif"], answer: 2, explanation: "The Prophet's Mosque is situated in Madina." },
            { q: "During Wudu, washing the elbows is:", options: ["Sunnah", "Fard (Obligatory)", "Mustahab", "Nafl"], answer: 1, explanation: "Washing the arms including the elbows is fundamentally obligatory." },
            { q: "Which companion bought the well of Ruma for Muslims?", options: ["Hazrat Abu Bakr", "Hazrat Umar", "Hazrat Usman", "Hazrat Ali"], answer: 2, explanation: "Hazrat Usman (RA) purchased the well to provide free water." },
            { q: "A Muslim woman is prohibited from marrying:", options: ["A non-Muslim man", "A Muslim man of another sect", "A convert", "None of the above"], answer: 0, explanation: "Islamic law restrict Muslim women to marrying only Muslim men." },
            { q: "The number of daughters of the Prophet Muhammad (PBUH) was:", options: ["2", "3", "4", "5"], answer: 2, explanation: "They were Zainab, Ruqayyah, Umm Kulthum, and Fatima." },
            { q: "Who was the first male to accept Islam?", options: ["Hazrat Ali", "Hazrat Abu Bakr", "Hazrat Zaid", "Hazrat Bilal"], answer: 1, explanation: "Hazrat Abu Bakr (RA) was the first adult free male to accept Islam." },
            { q: "Which mountain in Makkah contains the Cave of Hira?", options: ["Jabal Thawr", "Jabal al-Nour", "Jabal Uhud", "Jabal Abu Qubais"], answer: 1, explanation: "Jabal al-Nour (The Mountain of Light) houses the cave of Hira." },
            { q: "What is 'Istikhara'?", options: ["A prayer for rain", "A prayer seeking guidance in making a decision", "A prayer during eclipse", "A funeral prayer"], answer: 1, explanation: "Istikhara means asking Allah to guide one to the right choice." },
            { q: "The largest Islamic country by population is:", options: ["Saudi Arabia", "Pakistan", "Indonesia", "Egypt"], answer: 2, explanation: "Indonesia hosts the world's largest Muslim population." },
            { q: "The largest Islamic country by area is:", options: ["Algeria", "Saudi Arabia", "Sudan", "Kazakhstan"], answer: 3, explanation: "Kazakhstan is the largest Muslim country by land mass." },
            { q: "First Kalima of Islam is known as:", options: ["Kalima Tayyab", "Kalima Shahadat", "Kalima Tamjeed", "Kalima Tauheed"], answer: 0, explanation: "Kalima Tayyab translates to 'The Word of Purity'." },
            { q: "The term 'Shirk' means:", options: ["Atheism", "Associating partners with Allah", "Lying", "Theft"], answer: 1, explanation: "Shirk is the greatest unforgivable sin in Islam if unrepented." },
            { q: "Prophet Muhammad (PBUH) belonged to which branch of Quraish?", options: ["Umayyad", "Banu Hashim", "Banu Makhzum", "Banu Taym"], answer: 1, explanation: "He belonged to the Banu Hashim." },
            { q: "According to Islamic law, alcohol is:", options: ["Makruh", "Haram", "Mubah", "Halal"], answer: 1, explanation: "Intoxicants are strictly forbidden (Haram)." },
            { q: "Eating pork is explicitly prohibited in which Surah?", options: ["Al-Baqarah", "Yaseen", "Al-Maidah", "Both A and C"], answer: 3, explanation: "Both Al-Baqarah and Al-Maidah mention the prohibition of swine." },
            { q: "A Muslim cannot bequeath more than ____ of their property through a will.", options: ["1/2", "1/3", "1/4", "1/8"], answer: 1, explanation: "A will (Wasiyyat) is restricted to a maximum of one-third of the estate." },
            { q: "Eid prayers consist of how many Rakats?", options: ["2", "3", "4", "None"], answer: 0, explanation: "Eid-ul-Fitr and Eid-ul-Adha prayers have 2 rakats." },
            { q: "Who established the Umayyad Caliphate?", options: ["Yazid", "Marwan", "Ameer Muawiyah", "Abdul Malik"], answer: 2, explanation: "Muawiyah I founded the Umayyad dynasty in 661 CE." },
            { q: "Ghazwa-e-Ahzab is another name for:", options: ["Ghazwa Badr", "Ghazwa Uhud", "Ghazwa Khandaq", "Ghazwa Tabook"], answer: 2, explanation: "Ahzab means 'Confederates', referencing the allied army that laid siege." },
            { q: "Who defeated the Crusaders and recaptured Jerusalem in 1187?", options: ["Tariq bin Ziyad", "Salahuddin Ayyubi", "Nur ad-Din Zangi", "Suleiman the Magnificent"], answer: 1, explanation: "Saladin captured Jerusalem after the Battle of Hattin." },
            { q: "Bait-ul-Hikmah (House of Wisdom) was established in:", options: ["Damascus", "Cordoba", "Baghdad", "Cairo"], answer: 2, explanation: "It was a major Abbasid intellectual center." },
            { q: "The foundation stone of the Qubbat as-Sakhra (Dome of the Rock) was laid by:", options: ["Umar bin Khattab", "Abdul Malik bin Marwan", "Salahuddin", "Al-Walid I"], answer: 1, explanation: "The Umayyad Caliph Abdul Malik ordered its construction." }
        ];

        // KPSC - 40 Qs
        const kpsc = [
            { q: "Aitekaaf is observed during the:", options: ["First 10 days of Ramadan", "Middle 10 days of Ramadan", "Last 10 days of Ramadan", "Entire month of Rajab"], answer: 2, explanation: "Aitekaaf involves retreating to the mosque in the final 10 days of Ramadan." },
            { q: "Fidya for a missed fast (if unable to fast) is equivalent to:", options: ["Feeding one poor person for a day", "Feeding 60 poor people", "Fasting for a month", "Paying Zakat"], answer: 0, explanation: "It equals providing two meals to a poor person per missed fast." },
            { q: "Which angel is appointed to take out the souls?", options: ["Mikaeel", "Jibraeel", "Izraeel", "Israfeel"], answer: 2, explanation: "Azrael (Izraeel) is the Angel of Death." },
            { q: "What is 'Wahi Ghair Matloo'?", options: ["The Quran", "The Hadith", "Dreams", "Opinions"], answer: 1, explanation: "It is the unrecited revelation, interpreted as the Prophet's traditions (Hadith)." },
            { q: "How many stages (Manzils) of the Quran are there?", options: ["3", "5", "7", "10"], answer: 2, explanation: "There are 7 portions to facilitate recital in a week." },
            { q: "Which Sahabi conquered Egypt?", options: ["Hazrat Khalid bin Walid", "Hazrat Amr ibn al-Aas", "Hazrat Saad bin Abi Waqqas", "Hazrat Abu Ubaidah"], answer: 1, explanation: "Amr ibn al-Aas (RA) led the Muslim conquest of Egypt in 640 AD." },
            { q: "The incident of 'Ifk' (the Slander) involves which wife of the Prophet?", options: ["Hazrat Hafsa", "Hazrat Khadija", "Hazrat Ayesha", "Hazrat Safiyya"], answer: 2, explanation: "Surah Nur was revealed proving Hazrat Ayesha's innocence." },
            { q: "Which Surah begins with the name of a fruit?", options: ["Surah Al-Baqarah", "Surah At-Tin", "Surah Al-Fil", "Surah An-Nahl"], answer: 1, explanation: "At-Tin means 'The Fig'." },
            { q: "Hazrat Bilal (RA) was famously tortured by his master named:", options: ["Abu Jahl", "Abu Lahab", "Umayyah bin Khalaf", "Utbah"], answer: 2, explanation: "Umayyah bin Khalaf severely tortured him on the hot sand." },
            { q: "Who freed Hazrat Bilal (RA) from slavery?", options: ["Hazrat Ali", "Hazrat Umar", "Hazrat Abu Bakr", "Hazrat Usman"], answer: 2, explanation: "Hazrat Abu Bakr (RA) purchased and emancipated him." },
            { q: "How many times does the command to establish prayers (Salat) appear in the Quran?", options: ["500", "700", "900", "1000"], answer: 1, explanation: "It is directly mentioned roughly 700 times." },
            { q: "What is the penalty for drinking alcohol in early Islamic caliphates?", options: ["40 lashes", "80 lashes", "Death", "Exile"], answer: 1, explanation: "Caliph Umar formalized the Hadd punishment to 80 lashes." },
            { q: "When did the Battle of Hunain take place?", options: ["6 AH", "7 AH", "8 AH", "9 AH"], answer: 2, explanation: "It took place shortly after the Conquest of Makkah in 8 AH." },
            { q: "What did the Prophet (PBUH) do immediately after entering Makkah victoriously?", options: ["Demolished the idols in the Kaaba", "Ordered executions", "Built a palace", "Restored the market"], answer: 0, explanation: "He cleansed the Kaaba of 360 idols, reciting 'Truth has come...'" },
            { q: "Prophet Muhammad (PBUH) died on:", options: ["12 Rabi-ul-Awwal", "10 Muharram", "27 Rajab", "1st Shawwal"], answer: 0, explanation: "His death is widely recorded as 12 Rabi-ul-Awwal, 11 AH." },
            { q: "Which Caliph fought against the false prophets?", options: ["Hazrat Umar", "Hazrat Abu Bakr", "Hazrat Usman", "Hazrat Ali"], answer: 1, explanation: "Hazrat Abu Bakr launched the Ridda (Apostasy) Wars." },
            { q: "Musaylimah the Liar was killed by:", options: ["Hazrat Ali", "Hazrat Khalid bin Waleed", "Hazrat Wahshi", "Hazrat Hamza"], answer: 2, explanation: "Wahshi ibn Harb killed the false prophet at the Battle of Yamama." },
            { q: "The term 'Ansar' refers to:", options: ["Emigrants from Makkah", "Helpers of Madina", "Jews of Madina", "Christians of Najran"], answer: 1, explanation: "The Ansar explicitly opened their homes to the Muhajireen." },
            { q: "The term 'Muhajireen' implies:", options: ["Warriors", "Scholars", "Emigrants", "Local inhabitants"], answer: 2, explanation: "Those who migrated from Makkah to Madina." },
            { q: "Which tribe did Hazrat Abu Bakr (RA) belong to?", options: ["Banu Hashim", "Banu Taym", "Banu Umayya", "Banu Makhzum"], answer: 1, explanation: "He was a noble of the Banu Taym clan." },
            { q: "Which Surah is considered one-third of the Quran?", options: ["Surah Fatiha", "Surah Ikhlas", "Surah Kausar", "Surah Yaseen"], answer: 1, explanation: "Due to its pure message of Tawheed, the Prophet equated it to 1/3 of the Quran." },
            { q: "How many months are considered sacred in Islam?", options: ["2", "3", "4", "5"], answer: 2, explanation: "Four months: Rajab, Dhu al-Qadah, Dhu al-Hijjah, Muharram." },
            { q: "What is 'Wahi' given to bees referred to in the Quran?", options: ["Words", "Instinct/Inspiration", "Sound", "Dreams"], answer: 1, explanation: "Allah 'inspired' the bees to build hives (Surah Nahl)." },
            { q: "What was the name of Prophet Yaqoob (AS)?", options: ["Ismail", "Ishaq", "Israel", "Elias"], answer: 2, explanation: "The term Bani Israel refers to the children of Yaqoob (Israel)." },
            { q: "Who built the Kaaba first?", options: ["Hazrat Ibrahim", "Hazrat Adam", "Hazrat Nuh", "Hazrat Musa"], answer: 1, explanation: "Islamic tradition holds that Prophet Adam (AS) originally built it, later reconstructed by Ibrahim (AS)." },
            { q: "Hazrat Ibrahim (AS) was born in which modern-day country?", options: ["Saudi Arabia", "Egypt", "Iraq", "Palestine"], answer: 2, explanation: "He was born in the ancient city of Ur in Mesopotamia (modern Iraq)." },
            { q: "Hazrat Musa's (AS) brother, who was also a prophet, was:", options: ["Hazrat Haroon (AS)", "Hazrat Isa (AS)", "Hazrat Shuaib (AS)", "Hazrat Yusuf (AS)"], answer: 0, explanation: "Haroon (Aaron) aided Musa in his mission to Pharaoh." },
            { q: "Who is known as the 'Father of Prophets' (Abu-al-Anbiya)?", options: ["Hazrat Adam (AS)", "Hazrat Nuh (AS)", "Hazrat Ibrahim (AS)", "Hazrat Muhammad (PBUH)"], answer: 2, explanation: "Many major prophets descended from Ibrahim's two sons." },
            { q: "What is the name of the camel that the Prophet rode into Madina?", options: ["Buraq", "Al-Qaswa", "Zuljanah", "Al-Adha"], answer: 1, explanation: "Al-Qaswa was his famous camel." },
            { q: "What is the key to Paradise according to Hadith?", options: ["Zakat", "Hajj", "Fasting", "Salat (Prayer)"], answer: 3, explanation: "The Prophet stated: 'The key to Paradise is prayer.'" },
            { q: "Wajib prayers include:", options: ["Fajr", "Witr", "Tahajjud", "Ishraq"], answer: 1, explanation: "The Witr prayer after Isha is considered Wajib in the Hanafi fiqh." },
            { q: "How many Takbeers are there in a funeral prayer (Janaza)?", options: ["2", "3", "4", "5"], answer: 2, explanation: "Salat al-Janaza requires 4 standing Takbeers without any Ruk'u or Sujood." },
            { q: "What does the word 'Masjid' literally mean?", options: ["House of God", "Place of Prostration", "Place of Gathering", "Holy Sanctuary"], answer: 1, explanation: "Derivative of 'Sajdah', meaning a place where one prostrates." },
            { q: "During Hajj, pilgrims stay in Arafat on which date?", options: ["8th Zil-Hajj", "9th Zil-Hajj", "10th Zil-Hajj", "11th Zil-Hajj"], answer: 1, explanation: "The standing at Arafat on the 9th is the essential pillar of Hajj." },
            { q: "Which angel is the guardian of the mountains?", options: ["Angel of Mountains", "Jibraeel", "Mikaeel", "Israfeel"], answer: 0, explanation: "The Angel of Mountains appeared to the Prophet after the incident of Ta'if." },
            { q: "Which country has the most mosques in the world?", options: ["Saudi Arabia", "Pakistan", "Indonesia", "Egypt"], answer: 2, explanation: "Indonesia, having the highest Muslim population, has over 800,000 mosques." },
            { q: "Which companion was a scribe for the Prophet (PBUH)?", options: ["Hazrat Abu Huraira", "Hazrat Zaid bin Thabit", "Hazrat Khalid", "Hazrat Bilal"], answer: 1, explanation: "Zaid bin Thabit was a primary revelation scribe." },
            { q: "The term 'Malaikah' means:", options: ["Jinns", "Prophets", "Angels", "Books"], answer: 2, explanation: "It is the plural form of Malak (Angel)." },
            { q: "First female to be martyred in Islam:", options: ["Sumayyah", "Asma", "Khadija", "Fatima"], answer: 0, explanation: "Hazrat Sumayyah was killed for her faith by Abu Jahl." },
            { q: "When did the event of Miraj (Night Journey) occur?", options: ["1st year of Prophethood", "5th year of Prophethood", "10th year of Prophethood", "12th year of Prophethood"], answer: 2, explanation: "It traditionally occurred around the 10th-12th year, shortly after the Year of Sorrow." }
        ];

        // 1.
        pastPapersSubj.subcategories.push({
            category: "FPSC Islamiat",
            icon: "fa-file-signature",
            questions: fpsc
        });

        // 2.
        pastPapersSubj.subcategories.push({
            category: "PPSC Islamiat",
            icon: "fa-file-contract",
            questions: ppsc
        });

        // 3.
        pastPapersSubj.subcategories.push({
            category: "SPSC Islamiat",
            icon: "fa-file-invoice",
            questions: spsc
        });

        // 4.
        pastPapersSubj.subcategories.push({
            category: "BPSC Islamiat",
            icon: "fa-copy",
            questions: bpsc
        });

        // 5.
        pastPapersSubj.subcategories.push({
            category: "KPSC Islamiat",
            icon: "fa-paste",
            questions: kpsc
        });

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Successfully added 200 Islamic Studies Past Paper MCQs to 5 commission categories!");

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

addIslamiatPastPapers();
