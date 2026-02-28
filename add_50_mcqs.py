import json

new_questions = {
    "Seerat-un-Nabi": [
        { "q": "What did the Prophet (PBUH) call the year he lost his wife Hazrat Khadija (RA) and his uncle Abu Talib?", "options": ["Year of Grief (Aam-ul-Huzn)", "Year of the Elephant", "Year of Migration", "Year of Famine"], "answer": 0, "explanation": "It was a very difficult period known as Aam-ul-Huzn (Year of Sorrow/Grief)." },
        { "q": "Which wife was the Prophet (PBUH) with during his final days before passing away?", "options": ["Hazrat Khadija (RA)", "Hazrat Aisha (RA)", "Hazrat Sawda (RA)", "Hazrat Hafsa (RA)"], "answer": 1, "explanation": "The Prophet (PBUH) requested to stay in the room of Hazrat Aisha (RA) during his final illness." },
        { "q": "What was the name of the place where the Prophet (PBUH) delivered his Farewell Sermon?", "options": ["Mount Safa", "Cave Hira", "Mount Arafat (Jabal ar-Rahmah)", "Mina"], "answer": 2, "explanation": "He delivered the historic address on Mount Arafat." },
        { "q": "How many times did the Prophet (PBUH) perform Hajj in his lifetime?", "options": ["One", "Two", "Three", "Four"], "answer": 0, "explanation": "He performed only one Hajj, known as the Farewell Hajj (Hajjat-ul-Wida)." },
        { "q": "What was the profession of the Prophet (PBUH) in his youth before Prophethood?", "options": ["Blacksmith", "Carpenter", "Shepherd and Merchant", "Farmer"], "answer": 2, "explanation": "He tended sheep and later became a successful merchant." },
        { "q": "Who was the first person appointed to call the Adhan (Call to Prayer) in Islam?", "options": ["Hazrat Umar (RA)", "Hazrat Bilal (RA)", "Hazrat Ali (RA)", "Hazrat Zaid (RA)"], "answer": 1, "explanation": "Hazrat Bilal ibn Rabah (RA), known for his beautiful and loud voice, was the first Muazzin." },
        { "q": "Which famous companion proposed the idea of digging a trench during the Battle of Ahzab?", "options": ["Hazrat Salman Farsi (RA)", "Hazrat Khalid bin Walid (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Hamza (RA)"], "answer": 0, "explanation": "Salman Al-Farsi proposed this Persian defensive tactic." },
        { "q": "To which land did the Prophet (PBUH) first send a group of Muslims to migrate for safety?", "options": ["Madinah", "Taif", "Yemen", "Abyssinia (Ethiopia)"], "answer": 3, "explanation": "A group migrated to Abyssinia where the Christian King Najashi gave them refuge." },
        { "q": "What was the age of the Prophet (PBUH) when his mother, Hazrat Aminah, passed away?", "options": ["Four", "Six", "Eight", "Ten"], "answer": 1, "explanation": "She passed away at Abwa when he was six years old." },
        { "q": "Under which tree was the Pledge of Ridwan (Bay'at-e-Ridwan) taken during the Treaty of Hudaibiya?", "options": ["Date palm tree", "Acacia tree", "Olive tree", "Fig tree"], "answer": 1, "explanation": "The Companions pledged their allegiance under an Acacia tree (Samura tree)." }
    ],
    "Quranic Knowledge": [
        { "q": "Which Prophet is known as 'Khalilullah' (Friend of Allah)?", "options": ["Prophet Nuh (AS)", "Prophet Musa (AS)", "Prophet Ibrahim (AS)", "Prophet Isa (AS)"], "answer": 2, "explanation": "Allah took Prophet Ibrahim (AS) as an intimate friend." },
        { "q": "Which Surah is described by the Prophet (PBUH) as being equal to one-third of the Quran?", "options": ["Surah Al-Falaq", "Surah Al-Ikhlas", "Surah Ya-seen", "Surah Al-Fatiha"], "answer": 1, "explanation": "Because it purely discusses the Oneness of Allah (Tawheed)." },
        { "q": "Which Surah was the first to be fully revealed as a whole?", "options": ["Al-Fatiha", "Al-Ikhlas", "Al-Baqarah", "Al-Alaq"], "answer": 0, "explanation": "Surah Al-Fatiha was the first complete chapter revealed." },
        { "q": "What is the longest word in the Quran, comprising 11 letters in Arabic?", "options": ["Fa'asqaynakumoohu", "Fasayakfeekahum", "Layastakhlifannahum", "Anulzimukumooha"], "answer": 0, "explanation": "It translates to 'and We give it to you to drink' (Surah Al-Hijr, 15:22)." },
        { "q": "In the Quran, which Prophet's story is referred to as 'Ahsan al-Qasas' (The Best of Stories)?", "options": ["Prophet Yusuf (AS)", "Prophet Musa (AS)", "Prophet Ibrahim (AS)", "Prophet Nuh (AS)"], "answer": 0, "explanation": "Surah Yusuf contains a continuous, beautiful narrative detailing his life." },
        { "q": "How many Sajdah-e-Tilawat (Prostrations of Recitation) are there in the Quran according to the majority of scholars?", "options": ["11", "14", "15", "12"], "answer": 1, "explanation": "There are 14 agreed-upon instances." },
        { "q": "What is the name of the angel who is responsible for bringing revelation from Allah to the Prophets?", "options": ["Israfeel", "Mikaeel", "Jibreel", "Izraeel"], "answer": 2, "explanation": "Jibreel (AS) is the Messenger Angel." },
        { "q": "Which Surah contains the verse Ayat-ul-Kursi?", "options": ["Surah Al-Baqarah", "Surah Aal-e-Imran", "Surah An-Nisa", "Surah Al-Ma'idah"], "answer": 0, "explanation": "It is verse 255 of Surah Al-Baqarah." },
        { "q": "The change of the Qibla (direction of prayer) took place in which Hijri year?", "options": ["1 AH", "2 AH", "3 AH", "4 AH"], "answer": 1, "explanation": "It occurred in the 2nd year of Hijrah." },
        { "q": "Which female is uniquely mentioned by name in the Quran?", "options": ["Hazrat Khadija (RA)", "Hazrat Fatimah (RA)", "Hazrat Maryam (AS)", "Hazrat Asiya (AS)"], "answer": 2, "explanation": "Maryam (AS), the mother of Prophet Isa, has an entire chapter named after her." }
    ],
    "Islamic History": [
        { "q": "Who built the initial Dome of the Rock (Qubbat al-Sakhrah) in Jerusalem?", "options": ["Umar bin Al-Khattab", "Abdul Malik bin Marwan", "Salahuddin Ayyubi", "Suleiman the Magnificent"], "answer": 1, "explanation": "The Umayyad Caliph Abdul Malik bin Marwan commissioned its construction." },
        { "q": "Who was the founder of the Abbasid Caliphate?", "options": ["Abu Jafar al-Mansur", "Harun al-Rashid", "Abu al-Abbas as-Saffah", "Al-Ma'mun"], "answer": 2, "explanation": "Abu al-Abbas 'as-Saffah' overthrew the Umayyads in 750 AD." },
        { "q": "In which year did Sultan Mehmed II conquer Constantinople?", "options": ["1258", "1453", "1492", "1517"], "answer": 1, "explanation": "The city fell in 1453, ending the Byzantine Empire." },
        { "q": "The famous battle of Hattin was won by which Muslim commander?", "options": ["Khalid bin Walid", "Salahuddin Ayyubi", "Tariq bin Ziyad", "Muhammad bin Qasim"], "answer": 1, "explanation": "Salahuddin decisively defeated the Crusaders in 1187." },
        { "q": "The first Islamic mint and independent currency system was introduced by whom?", "options": ["Umar bin Al-Khattab", "Abdul Malik bin Marwan", "Muawiyah", "Umar bin Abdul Aziz"], "answer": 1, "explanation": "Abdul Malik introduced the Dinar with Islamic inscriptions." },
        { "q": "Who was the famous Muslim commander leading the conquest of Spain?", "options": ["Musa bin Nusayr", "Tariq bin Ziyad", "Abdur Rahman", "Uqba bin Nafi"], "answer": 1, "explanation": "Tariq bin Ziyad famously led the crossing over the Strait of Gibraltar." },
        { "q": "Which city was the capital of the Umayyad Caliphate?", "options": ["Madinah", "Baghdad", "Damascus", "Cairo"], "answer": 2, "explanation": "Damascus was the political and administrative center." },
        { "q": "Who founded the magnificent city of Baghdad in 762 AD?", "options": ["Harun al-Rashid", "Abu Jafar al-Mansur", "Al-Mahdi", "Al-Mutawakkil"], "answer": 1, "explanation": "Al-Mansur established it as the new Abbasid capital." },
        { "q": "Which battle decisively halted the Mongol advance into Egypt/Levant?", "options": ["Battle of Manzikert", "Battle of Ain Jalut", "Battle of Hattin", "Battle of Tours"], "answer": 1, "explanation": "The Mamluks defeated the Mongols at Ain Jalut in 1260." },
        { "q": "Which famous Muslim scholar wrote the comprehensive medical encyclopedia 'The Canon of Medicine'?", "options": ["Al-Farabi", "Ibn Sina (Avicenna)", "Al-Khwarizmi", "Ibn Rushd"], "answer": 1, "explanation": "Ibn Sina's work remained a standard medical text in Europe for centuries." }
    ],
    "Khulafa-e-Rashideen": [
        { "q": "What was the prominent title of Hazrat Abu Bakr (RA)?", "options": ["Al-Farooq", "As-Siddiq", "Zun-Noorain", "Asadullah"], "answer": 1, "explanation": "He was called As-Siddiq (The Truthful) for his unwavering belief." },
        { "q": "How long was the caliphate of Hazrat Umar (RA)?", "options": ["10.5 years", "2.5 years", "12 years", "4 years"], "answer": 0, "explanation": "He ruled justly from 13 AH to 23 AH." },
        { "q": "Which Caliph is known for making a standardized written copy of the Quran and distributing it?", "options": ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], "answer": 2, "explanation": "Hazrat Usman (RA) standardized the Mushaf (Quranic text)." },
        { "q": "Where was Hazrat Ali (RA) martyred?", "options": ["Madinah", "Makkah", "Kufa", "Damascus"], "answer": 2, "explanation": "He was attacked while praying in the Great Mosque of Kufa." },
        { "q": "During whose caliphate was the Battle of Yamama fought against false prophets like Musaylimah?", "options": ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], "answer": 0, "explanation": "Hazrat Abu Bakr (RA) launched the Ridda Wars to restore unity." },
        { "q": "Which companion was nicknamed 'Zun-Noorain' (Possessor of Two Lights)?", "options": ["Hazrat Umar (RA)", "Hazrat Ali (RA)", "Hazrat Usman (RA)", "Hazrat Talha (RA)"], "answer": 2, "explanation": "He married two daughters of the Prophet (PBUH) consecutively." },
        { "q": "To whom did Hazrat Umar (RA) assign the task of leading the Tarawih prayers in congregation?", "options": ["Ubayy bin Ka'b (RA)", "Zaid bin Thabit (RA)", "Abdullah bin Masud (RA)", "Abu Musa al-Ashari (RA)"], "answer": 0, "explanation": "Ubayy bin Ka'b led the congregation efficiently." },
        { "q": "Which Caliph's era saw rapid initial expansion of the Islamic state into Persia, Syria, and Egypt?", "options": ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], "answer": 1, "explanation": "Massive conquests occurred under the administration of Hazrat Umar (RA)." },
        { "q": "The Battle of Siffin took place during the caliphate of:", "options": ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], "answer": 3, "explanation": "It was fought between Hazrat Ali's forces and Muawiyah's forces." },
        { "q": "Who was appointed to compile the very first collection of the Quran during the time of Abu Bakr (RA)?", "options": ["Abdullah bin Abbas", "Zaid bin Thabit", "Ubayy bin Ka'b", "Abdur Rahman bin Auf"], "answer": 1, "explanation": "Zaid bin Thabit (RA), being a primary scribe of revelation, was given this heavy task." }
    ],
    "Arkan-e-Islam": [
        { "q": "In which Islamic month is compulsory fasting observed?", "options": ["Muharram", "Rajab", "Ramadan", "Shawwal"], "answer": 2, "explanation": "Fasting (Sawm) during Ramadan is the fourth pillar of Islam." },
        { "q": "What is the prescribed Nisab for gold to be eligible for Zakat?", "options": ["7.5 Tolas (87.48 grams)", "5 Tolas", "10 Tolas", "52.5 Tolas"], "answer": 0, "explanation": "Wealth equivalent to or exceeding 7.5 Tolas (87.48 grams) of gold is liable for Zakat." },
        { "q": "At what time is the Fajr prayer performed?", "options": ["Before dawn", "After sunrise", "At noon", "Between dawn and sunrise"], "answer": 3, "explanation": "Fajr time starts at true dawn (Subh Sadiq) and ends at sunrise." },
        { "q": "Which pillar of Islam must be performed at least once in a lifetime if one is physically and financially able?", "options": ["Salah", "Zakat", "Sawm", "Hajj"], "answer": 3, "explanation": "Hajj is obligatory once in a lifetime for those with the means." },
        { "q": "The declaration of faith (Shahada) acknowledges that Allah is One and that Prophet Muhammad (PBUH) is His:", "options": ["Messenger/Prophet", "Companion", "Friend", "Scribe"], "answer": 0, "explanation": "The second part affirms he is the final Messenger of Allah." },
        { "q": "What percentage of accumulated qualifying wealth is mandated for Zakat annually?", "options": ["1%", "2.5%", "5%", "10%"], "answer": 1, "explanation": "Zakat is generally calculated at 2.5% of savings held for a lunar year." },
        { "q": "On which date of the month of Dhu al-Hijjah is the Day of Arafah observed?", "options": ["8th", "9th", "10th", "11th"], "answer": 1, "explanation": "The assembly at Arafah on the 9th is the core rite of Hajj." },
        { "q": "How many obligatory (Fard) Rakaahs are in the Maghrib prayer?", "options": ["2", "3", "4", "5"], "answer": 1, "explanation": "The Maghrib prayer consists of 3 Fard Rakaahs." },
        { "q": "Which of the following prayers involves no Adhan and no Iqamah?", "options": ["Eid prayer", "Funeral prayer (Janazah)", "Both A and B", "Tahajjud"], "answer": 2, "explanation": "Both Eid and Janazah prayers are performed without Adhan or Iqamah." },
        { "q": "In the state of Ihram during Hajj or Umrah, which action is strictly prohibited?", "options": ["Drinking water", "Trimming nails or hair", "Sleeping in Mina", "Walking fast during Tawaf"], "answer": 1, "explanation": "Cutting hair or nails is a violation of the rules of Ihram." }
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
        for sub_cat in main_cat.get('subcategories', []):
            cat_name = sub_cat.get('category')
            if cat_name in new_questions:
                sub_cat['questions'].extend(new_questions[cat_name])
                # We can also handle if it's missing, but it should be there.

    new_content = 'const mainQuizData = ' + json.dumps(data, indent=4) + ';\n'
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    inject()
    print("50 MCQs successfully injected!")
