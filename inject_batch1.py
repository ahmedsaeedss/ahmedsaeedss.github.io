import json
import re

new_questions = {
    "Seerat-un-Nabi": [
        { "q": "Who was the foster father of Prophet Muhammad (PBUH)?", "options": ["Harith bin Abdul Uzza", "Abu Talib", "Hamza", "Abu Lahab"], "answer": 0, "explanation": "Harith bin Abdul Uzza was the husband of Halimah Sadia (RA)." },
        { "q": "How many days did the Prophet (PBUH) stay at Quba during Hijrah?", "options": ["14 days", "10 days", "3 days", "7 days"], "answer": 0, "explanation": "He stayed at Quba for 14 days and laid the foundation of Masjid Quba." },
        { "q": "Who was the first female martyr of Islam?", "options": ["Hazrat Khadija (RA)", "Hazrat Sumayyah (RA)", "Hazrat Fatimah (RA)", "Hazrat Asma (RA)"], "answer": 1, "explanation": "Hazrat Sumayyah (RA) was martyred by Abu Jahl." },
        { "q": "In which Hijri year was fasting in Ramadan made obligatory?", "options": ["1 AH", "2 AH", "3 AH", "4 AH"], "answer": 1, "explanation": "Fasting became obligatory in the 2nd year of Hijrah." },
        { "q": "In which Hijri year was Zakat made obligatory?", "options": ["2 AH", "3 AH", "4 AH", "5 AH"], "answer": 0, "explanation": "Zakat was made obligatory in the 2nd year of Hijrah." },
        { "q": "What was the name of the Prophet's (PBUH) sword used in Badr?", "options": ["Zulfiqar", "Al-Battar", "Al-Ma'thur", "Al-Qadib"], "answer": 2, "explanation": "Al-Ma'thur was the first sword he owned, inherited from his father." },
        { "q": "Which companion is known as 'Ameen-ul-Ummah' (Trustee of the Ummah)?", "options": ["Abu Ubaidah bin Al-Jarrah", "Umar bin Khattab", "Usman bin Affan", "Ali bin Abi Talib"], "answer": 0, "explanation": "The Prophet (PBUH) gave this title to Abu Ubaidah (RA)." },
        { "q": "How many times is the name 'Ahmad' mentioned in the Quran for the Prophet (PBUH)?", "options": ["1", "2", "3", "4"], "answer": 0, "explanation": "It is mentioned once in Surah As-Saff." },
        { "q": "What was the age of the Prophet (PBUH) when the Harb-e-Fijar (Sacrilegious War) took place?", "options": ["10", "15", "20", "25"], "answer": 1, "explanation": "He was around 15 years old and gathered arrows for his uncles." },
        { "q": "Which tribe was defeated in the Battle of Hunayn?", "options": ["Banu Hawazin", "Banu Nadir", "Banu Qurayza", "Banu Mustaliq"], "answer": 0, "explanation": "Hawazin and Thaqif were the primary opponents at Hunayn." },
        { "q": "Who accompanied the Prophet (PBUH) during the journey to Taif?", "options": ["Abu Bakr", "Ali", "Zaid bin Harithah", "Umar"], "answer": 2, "explanation": "Zaid bin Harithah (RA) accompanied him and tried to shield him from stones." },
        { "q": "Which angel brought the revelations to the Prophet (PBUH)?", "options": ["Mikaeel", "Israfeel", "Jibreel", "Malik"], "answer": 2, "explanation": "Jibreel (Gabriel) is the angel of revelation." },
        { "q": "Who suggested the Call to Prayer (Adhan)?", "options": ["Umar bin Khattab and Abdullah bin Zaid", "Ali bin Abi Talib", "Abu Bakr", "Bilal"], "answer": 0, "explanation": "Abdullah bin Zaid (RA) had a dream which was supported by Umar (RA)." },
        { "q": "What is the meaning of 'Muhammad'?", "options": ["The Trustworthy", "The Praised One", "The Truthful", "The Chosen One"], "answer": 1, "explanation": "Muhammad means 'The one who is highly praised'." },
        { "q": "In which year did the Muslims migrate to Abyssinia (Ethiopia)?", "options": ["4th year of Prophethood", "5th year of Prophethood", "6th year of Prophethood", "7th year of Prophethood"], "answer": 1, "explanation": "The first migration to Abyssinia occurred in the 5th year of Prophethood." },
        { "q": "Who was the King of Abyssinia who gave shelter to Muslims?", "options": ["Najashi (Negus)", "Heraclius", "Muqawqis", "Khosrow"], "answer": 0, "explanation": "Najashi (Ashama) was a Christian king who treated them justly." },
        { "q": "How many times did the Prophet (PBUH) perform Hajj?", "options": ["One", "Two", "Three", "Four"], "answer": 0, "explanation": "He performed only one Hajj, known as Hajjat-ul-Wida." },
        { "q": "How many Umrahs did the Prophet (PBUH) perform?", "options": ["One", "Two", "Three", "Four"], "answer": 3, "explanation": "He performed four Umrahs in his lifetime." },
        { "q": "What was the name of the Prophet's (PBUH) she-camel?", "options": ["Al-Qaswa", "Al-Adhwa", "Al-Jad'a", "All of the above"], "answer": 3, "explanation": "He possessed all three, but Al-Qaswa is the most famous." },
        { "q": "When did the Battle of Badr take place?", "options": ["2 AH", "3 AH", "4 AH", "5 AH"], "answer": 0, "explanation": "It took place on 17th Ramadan, 2 AH." },
        { "q": "How many Muslims fought in the Battle of Uhud?", "options": ["313", "700", "1000", "3000"], "answer": 1, "explanation": "Originally 1000, but 300 hypocrites deserted, leaving 700." },
        { "q": "Who killed Hazrat Hamza (RA) in the Battle of Uhud?", "options": ["Abu Jahl", "Wahshi bin Harb", "Khalid bin Walid", "Ikrimah"], "answer": 1, "explanation": "Wahshi, an Abyssinian slave, killed him before converting to Islam." },
        { "q": "In which battle was a trench dug around Madinah?", "options": ["Uhud", "Khandaq", "Hunayn", "Khaybar"], "answer": 1, "explanation": "It's also known as the Battle of Ahzab (Confederates)." },
        { "q": "Who suggested digging the trench?", "options": ["Ali", "Umar", "Salman Al-Farsi", "Abu Bakr"], "answer": 2, "explanation": "Salman (RA) suggested the Persian tactic of trench warfare." },
        { "q": "Which Jewish tribe broke their treaty during the Battle of Khandaq?", "options": ["Banu Qaynuqa", "Banu Nadir", "Banu Qurayza", "Banu Mustaliq"], "answer": 2, "explanation": "Banu Qurayza committed treason by colluding with the enemy." },
        { "q": "In which year was the Treaty of Hudaibiya signed?", "options": ["5 AH", "6 AH", "7 AH", "8 AH"], "answer": 1, "explanation": "It was signed in the 6th year of Hijrah." },
        { "q": "Who represented the Quraish in drafting the Treaty of Hudaibiya?", "options": ["Abu Sufyan", "Suhail bin Amr", "Urwah bin Masud", "Mikraz bin Hafs"], "answer": 1, "explanation": "Suhail bin Amr negotiated the terms on behalf of the Quraish." },
        { "q": "When was Makkah conquered by the Muslims?", "options": ["6 AH", "7 AH", "8 AH", "9 AH"], "answer": 2, "explanation": "Makkah was peacefully conquered on 20 Ramadan, 8 AH." },
        { "q": "Which battle was fought immediately after the conquest of Makkah?", "options": ["Mutah", "Tabuk", "Hunayn", "Yamama"], "answer": 2, "explanation": "The Battle of Hunayn was fought against the Hawazin tribe." },
        { "q": "What was the Prophet's (PBUH) age at the time of his passing?", "options": ["60", "61", "62", "63"], "answer": 3, "explanation": "He passed away at the age of 63 in Madinah." },
        { "q": "Where is the Prophet (PBUH) buried?", "options": ["Makkah", "Jerusalem", "Madinah", "Taif"], "answer": 2, "explanation": "He is buried in his room (Hujra of Hazrat Aisha) inside Masjid-e-Nabawi." },
        { "q": "Who gave Ghusl to the Prophet (PBUH) after his passing?", "options": ["Abu Bakr", "Umar", "Ali", "Usman"], "answer": 2, "explanation": "Hazrat Ali (RA), along with Abbas and his sons, performed the final bathing." },
        { "q": "How many sons did the Prophet (PBUH) have?", "options": ["Two", "Three", "Four", "Five"], "answer": 1, "explanation": "He had three sons: Qasim, Abdullah, and Ibrahim." },
        { "q": "How many daughters did the Prophet (PBUH) have?", "options": ["Two", "Three", "Four", "Five"], "answer": 2, "explanation": "He had four daughters: Zainab, Ruqayyah, Umm Kulthum, and Fatimah." },
        { "q": "Who was the maternal grandfather of the Prophet (PBUH)?", "options": ["Hashim", "Abdul Muttalib", "Wahab bin Abdu Manaf", "Qusay"], "answer": 2, "explanation": "Wahab was the father of Aminah (RA)." },
        { "q": "Who was the wet nurse of the Prophet (PBUH) from Banu Sa'd?", "options": ["Thuwaybah", "Halimah", "Umm Ayman", "Sheema"], "answer": 1, "explanation": "Halimah Sadia raised him in the desert." },
        { "q": "When did the 'Year of Sorrow' (Aam-ul-Huzn) occur?", "options": ["7th year of Prophethood", "10th year of Prophethood", "1st year of Hijrah", "10th year of Hijrah"], "answer": 1, "explanation": "It was the year Abu Talib and Khadija (RA) passed away." },
        { "q": "During the Isra and Mi'raj, to which mosque did the Prophet (PBUH) travel first?", "options": ["Masjid Quba", "Masjid Nabawi", "Masjid Al-Aqsa", "Masjid Al-Haram"], "answer": 2, "explanation": "He traveled from Makkah to Al-Aqsa in Jerusalem." },
        { "q": "On which animal did the Prophet (PBUH) travel during Mi'raj?", "options": ["Horse", "Camel", "Buraq", "Mule"], "answer": 2, "explanation": "Buraq was a heavenly creature that carried him." },
        { "q": "How many daily prayers were originally prescribed during Mi'raj?", "options": ["5", "10", "50", "100"], "answer": 2, "explanation": "It was reduced to 5 after advice from Prophet Musa (AS)." },
        { "q": "What relation was Prophet Muhammad (PBUH) to Hazrat Ali (RA)?", "options": ["Nephew", "Uncle", "Cousin", "Brother"], "answer": 2, "explanation": "They were first cousins (Ali was the son of Abu Talib)." },
        { "q": "Which tribe was expelled from Madinah first?", "options": ["Banu Qaynuqa", "Banu Nadir", "Banu Qurayza", "Banu Aus"], "answer": 0, "explanation": "Banu Qaynuqa were expelled in 2 AH." },
        { "q": "What was the name of the Prophet's (PBUH) mother?", "options": ["Fatimah", "Khadija", "Aminah", "Aisha"], "answer": 2, "explanation": "Aminah bint Wahab." },
        { "q": "What was the name of the Prophet's (PBUH) father?", "options": ["Abu Talib", "Abdul Muttalib", "Abdullah", "Hamza"], "answer": 2, "explanation": "Abdullah passed away before the Prophet (PBUH) was born." },
        { "q": "Which companion was known as the 'Sword of Allah'?", "options": ["Ali", "Hamza", "Khalid bin Walid", "Umar"], "answer": 2, "explanation": "Khalid bin Walid (RA) was given the title Saifullah." },
        { "q": "Who served as the Prophet's (PBUH) guide during the Hijrah to Madinah?", "options": ["Abdullah bin Urayqit", "Suraqa bin Malik", "Zaid bin Harithah", "None"], "answer": 0, "explanation": "He was a non-Muslim whom they hired for his knowledge of desert routes." },
        { "q": "At whose house did the Prophet (PBUH) stay when he first arrived in Madinah?", "options": ["Abu Ayyub Al-Ansari", "Sad bin Muadh", "Asad bin Zurara", "Kulthum bin al-Hadm"], "answer": 0, "explanation": "He stayed there while Masjid-e-Nabawi and his living quarters were built." },
        { "q": "What was the name of the monk who recognized the seal of prophethood on the young Muhammad (PBUH) in Syria?", "options": ["Waraqa", "Bahira", "Nestor", "Addas"], "answer": 1, "explanation": "Bahira the monk saw the signs on his first trip to Syria." },
        { "q": "Which wife of the Prophet (PBUH) narrated the most Hadiths?", "options": ["Khadija", "Aisha", "Hafsa", "Umm Salama"], "answer": 1, "explanation": "Hazrat Aisha (RA) narrated over 2,200 Hadiths." },
        { "q": "Who was the first male to embrace Islam?", "options": ["Abu Bakr", "Ali", "Zaid bin Harithah", "Usman"], "answer": 1, "explanation": "Ali (RA) was the first child/male, while Abu Bakr (RA) was the first adult free male." }
    ],
    "Quranic Knowledge": [
        { "q": "How many verses (Ayahs) are there in Surah Al-Baqarah?", "options": ["250", "286", "300", "313"], "answer": 1, "explanation": "Surah Al-Baqarah has exactly 286 verses." },
        { "q": "Which Surah is known as the 'Mother of the Book' (Umm-ul-Kitab)?", "options": ["Al-Fatiha", "Al-Baqarah", "Yaseen", "Al-Ikhlas"], "answer": 0, "explanation": "Al-Fatiha is considered the essence and mother of the Quran." },
        { "q": "How many Surahs are there in the 30th Juz of the Quran?", "options": ["30", "34", "37", "40"], "answer": 2, "explanation": "The 30th Juz (Amma) contains 37 Surahs." },
        { "q": "Which Surah does not start with Bismillah?", "options": ["Al-Ma'idah", "Al-Anfal", "At-Tawbah", "Yunus"], "answer": 2, "explanation": "Surah At-Tawbah does not begin with the Basmala." },
        { "q": "In which Surah is Bismillah mentioned twice?", "options": ["An-Naml", "Al-Qasas", "Al-Hijr", "Al-Waqi'ah"], "answer": 0, "explanation": "Surah An-Naml contains it at the start and in verse 30." },
        { "q": "Which is the longest Surah in the Quran?", "options": ["Aal-e-Imran", "An-Nisa", "Al-Baqarah", "Al-Ma'idah"], "answer": 2, "explanation": "Al-Baqarah spans nearly two and a half Juz." },
        { "q": "Which is the shortest Surah in the Quran?", "options": ["Al-Ikhlas", "Al-Asr", "Al-Kauthar", "An-Nas"], "answer": 2, "explanation": "Surah Al-Kauthar consists of only 3 verses." },
        { "q": "How many Prophets are mentioned by name in the Quran?", "options": ["20", "25", "30", "33"], "answer": 1, "explanation": "Exactly 25 prophets are mentioned by name." },
        { "q": "Which Prophet's name is mentioned the most in the Quran?", "options": ["Ibrahim (AS)", "Muhammad (PBUH)", "Isa (AS)", "Musa (AS)"], "answer": 3, "explanation": "Musa (AS) is mentioned 136 times." },
        { "q": "Which Surah is considered one-third of the Quran in terms of reward?", "options": ["Al-Fatiha", "Al-Ikhlas", "Al-Falaq", "An-Nas"], "answer": 1, "explanation": "The Prophet (PBUH) declared Surah Al-Ikhlas equal to a third of the Quran." },
        { "q": "How many chapters (Surahs) are in the Quran?", "options": ["110", "112", "114", "116"], "answer": 2, "explanation": "There are exactly 114 Surahs." },
        { "q": "Which Surah was the first to be fully revealed?", "options": ["Al-Alaq", "Al-Muddaththir", "Al-Fatiha", "Al-Ikhlas"], "answer": 2, "explanation": "Surah Al-Fatiha was the first complete Surah revealed." },
        { "q": "Which Surah is known as the 'Heart of the Quran'?", "options": ["Ar-Rahman", "Al-Mulk", "Yaseen", "Al-Kahf"], "answer": 2, "explanation": "Surah Yaseen is widely referred to as the heart of the Quran." },
        { "q": "Which Surah is known as 'Aroos-ul-Quran' (The Bride of the Quran)?", "options": ["Al-Waqi'ah", "Ar-Rahman", "Maryam", "Noor"], "answer": 1, "explanation": "Surah Ar-Rahman is called the beauty/bride of the Quran." },
        { "q": "Which angel is responsible for bringing the revelation?", "options": ["Israfeel", "Mikaeel", "Jibreel", "Izraeel"], "answer": 2, "explanation": "Jibreel (AS) brought the Wahi (revelation)." },
        { "q": "How many Makki Surahs are there?", "options": ["86", "28", "90", "114"], "answer": 0, "explanation": "There are 86 Makki and 28 Madani Surahs." },
        { "q": "How many Madani Surahs are there?", "options": ["86", "28", "30", "40"], "answer": 1, "explanation": "There are 28 Madani Surahs." },
        { "q": "What is the meaning of the word 'Ayah'?", "options": ["Chapter", "Verse / Sign", "Book", "Word"], "answer": 1, "explanation": "Ayah literally means 'a sign' or a 'miracle', used for verses." },
        { "q": "Which Surah protects from the torment of the grave?", "options": ["Al-Kahf", "Al-Mulk", "As-Sajdah", "Al-Waqi'ah"], "answer": 1, "explanation": "Surah Al-Mulk defends its companion in the grave." },
        { "q": "Which Surah protects against poverty?", "options": ["Al-Waqi'ah", "Ar-Rahman", "Al-Mulk", "Yaseen"], "answer": 0, "explanation": "Reciting Surah Al-Waqi'ah every night prevents poverty." },
        { "q": "How many times does the word 'Allah' appear in the Quran?", "options": ["1000", "2698", "3000", "5000"], "answer": 1, "explanation": "The word Allah appears 2698 times." },
        { "q": "Which companion's name is explicitly mentioned in the Quran?", "options": ["Abu Bakr", "Umar", "Usman", "Zaid bin Harithah"], "answer": 3, "explanation": "Zaid (RA) is mentioned in Surah Al-Ahzab." },
        { "q": "In which month was the Quran revealed?", "options": ["Muharram", "Rajab", "Ramadan", "Shawwal"], "answer": 2, "explanation": "It was revealed in the month of Ramadan (Laylat al-Qadr)." },
        { "q": "What is the longest verse in the Quran?", "options": ["Ayat-ul-Kursi", "Ayat-ud-Dayn", "Ayat-un-Noor", "None of these"], "answer": 1, "explanation": "Verse 282 of Al-Baqarah, discussing debt, is the longest." },
        { "q": "Who is the only woman mentioned by name in the Quran?", "options": ["Khadija", "Aisha", "Fatimah", "Maryam"], "answer": 3, "explanation": "Maryam (AS), mother of Isa (AS), is the only woman named." },
        { "q": "How many Ghazawat (battles) are mentioned in the Quran?", "options": ["5", "8", "12", "15"], "answer": 2, "explanation": "The Quran directly or indirectly mentions 12 major expeditions." },
        { "q": "Which Surah is named after an insect 'The Ant'?", "options": ["An-Nahl", "An-Naml", "Al-Ankabut", "Al-Fil"], "answer": 1, "explanation": "An-Naml translates to 'The Ant'." },
        { "q": "Which Surah is named after 'The Spider'?", "options": ["An-Naml", "Al-Ankabut", "An-Nahl", "None"], "answer": 1, "explanation": "Al-Ankabut means 'The Spider'." },
        { "q": "Which Surah is named after 'The Bee'?", "options": ["An-Nahl", "An-Naml", "Al-Ankabut", "Al-Fil"], "answer": 0, "explanation": "An-Nahl means 'The Bee'." },
        { "q": "Which Surah was the last to be revealed (entirely)?", "options": ["At-Tawbah", "An-Nasr", "Al-Ma'idah", "Al-Fath"], "answer": 1, "explanation": "Surah An-Nasr is accepted as the last complete Surah revealed." },
        { "q": "Who compiled the first official copy of the Quran?", "options": ["Abu Bakr", "Umar", "Usman", "Ali"], "answer": 0, "explanation": "Hazrat Abu Bakr (RA) initiated the compilation on Umar's advice." },
        { "q": "Who standardized the recitation of the Quran and sent copies to provinces?", "options": ["Abu Bakr", "Umar", "Usman", "Ali"], "answer": 2, "explanation": "Hazrat Usman (RA) is known as the Jami' al-Quran." },
        { "q": "What is the literal meaning of 'Quran'?", "options": ["The Book", "That which is frequently read", "The Guidance", "The Light"], "answer": 1, "explanation": "Quran comes from Qara'a (to read), meaning the recitation." },
        { "q": "Which Surah is named after a metal?", "options": ["Al-Hadid", "Al-Qamar", "An-Najm", "Ash-Shams"], "answer": 0, "explanation": "Al-Hadid means Iron." },
        { "q": "Which Surah mentions the story of the 'Ashab-ul-Kahf' (People of the Cave)?", "options": ["Al-Baqarah", "Yusuf", "Al-Kahf", "Maryam"], "answer": 2, "explanation": "Surah Al-Kahf (18th chapter) contains their story." },
        { "q": "What is the number of Sajdah Tilawat in the Quran according to the majority?", "options": ["11", "12", "14", "15"], "answer": 2, "explanation": "There are 14 universally agreed upon Sajdahs." },
        { "q": "Which Surah contains two Sajdahs?", "options": ["Al-A'raf", "An-Najm", "Al-Hajj", "Al-Alaq"], "answer": 2, "explanation": "Surah Al-Hajj contains a prostration in verse 18 and 77." },
        { "q": "What is the term for the chapters revealed before the Hijrah?", "options": ["Makki", "Madani", "Both", "None"], "answer": 0, "explanation": "Makki Surahs focus mostly on theology and beliefs." },
        { "q": "Which Surah is known as 'The Shield'?", "options": ["Al-Fatiha", "Al-Mulk", "Al-Ikhlas", "Al-Falaq"], "answer": 1, "explanation": "Al-Mulk shields from the punishment of the grave." },
        { "q": "What animal spoke in the Quran (to Prophet Sulaiman)?", "options": ["A dog", "An ant and a hoopoe", "A camel", "A horse"], "answer": 1, "explanation": "The Quran records the speech of an ant and the bird Hudhud." },
        { "q": "Which Prophet's story is described as 'The Best of Stories' (Ahsan al-Qasas)?", "options": ["Musa", "Ibrahim", "Yusuf", "Muhammad"], "answer": 2, "explanation": "Surah Yusuf contains the continuous narrative of Prophet Yusuf." },
        { "q": "How many times do the words 'Dunya' (world) and 'Akhirah' (hereafter) appear in the Quran?", "options": ["Dunya 50, Akhirah 100", "Both 115 times", "Both 50 times", "Dunya 100, Akhirah 50"], "answer": 1, "explanation": "Both appear exactly 115 times, an example of Quranic symmetry." },
        { "q": "Which Surah is considered the 'Chapter of Laws'?", "options": ["Al-Baqarah", "An-Nisa", "Al-Ma'idah", "All of them"], "answer": 3, "explanation": "These major Madani surahs are heavy with Islamic jurisprudence." },
        { "q": "Where does the word 'Islam' first appear in the Quran?", "options": ["Al-Baqarah", "Aal-e-Imran", "Al-Ma'idah", "An-Nisa"], "answer": 1, "explanation": "In Aal-e-Imran 3:19, 'Indeed, the religion in the sight of Allah is Islam.'" },
        { "q": "Which Surah mentions the incident of the Elephant (Abrahah's army)?", "options": ["Al-Fil", "Al-Quraish", "Al-Kauthar", "Al-Ma'un"], "answer": 0, "explanation": "Surah Al-Fil describes how birds with stones defeated the army." },
        { "q": "Which Prophet is known as 'Zun-Noon' in the Quran?", "options": ["Dawood", "Sulaiman", "Yunus", "Ayyub"], "answer": 2, "explanation": "Prophet Yunus (AS) is the Companion of the Fish." },
        { "q": "In which Surah is Ayat-ul-Kursi found?", "options": ["Aal-e-Imran", "An-Nisa", "Al-Baqarah", "Al-Ma'idah"], "answer": 2, "explanation": "It is verse 255 of Surah Al-Baqarah." },
        { "q": "Who was the 'Daughter of Imran'?", "options": ["Aisha", "Fatimah", "Khadija", "Maryam"], "answer": 3, "explanation": "Maryam (AS)." },
        { "q": "What does the word 'Al-Furqan' mean?", "options": ["The Light", "The Book", "The Criterion", "The Message"], "answer": 2, "explanation": "It means the criterion to distinguish truth from falsehood." },
        { "q": "Which Surah promises the Prophet (PBUH) 'The River of Abundance'?", "options": ["Al-Ikhlas", "Al-Kauthar", "Al-Falaq", "An-Nas"], "answer": 1, "explanation": "Al-Kauthar refers to a river/fountain in Paradise." }
    ]
}

def inject():
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    prefix = 'const mainQuizData = '
    start_idx = content.find(prefix) + len(prefix)
    end_idx = content.rfind(';')
    
    json_str = content[start_idx:end_idx].strip()
    data = json.loads(json_str)

    # find the categories
    for main_cat in data:
        for sub_cat in main_cat['subcategories']:
            cat_name = sub_cat['category']
            if cat_name in new_questions:
                sub_cat['questions'].extend(new_questions[cat_name])

    new_content = 'const mainQuizData = ' + json.dumps(data, indent=4) + ';\n'
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    inject()
    print("Batch 1 successfully injected!")
