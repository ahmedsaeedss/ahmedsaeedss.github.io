$ErrorActionPreference = "Stop"

$islamicQuestions6 = @"
                    ,
                    { q: "During which Hajj ritual do pilgrims run seven times between two hills?", options: ["Tawaf", "Wuquf", "Rami", "Sa'i"], answer: 3, explanation: "Sa'i is the practice of walking back and forth between Safa and Marwa." },
                    { q: "What does the word 'Sunnah' literally mean?", options: ["Law", "A clear and well-trodden path", "Sayings", "Practice"], answer: 1, explanation: "In linguistic terms, it means a path or a way." },
                    { q: "Which caliph was martyred while reading the Holy Quran?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 2, explanation: "Hazrat Usman (RA) was assassinated in his home while reciting the Quran." },
                    { q: "What is the primary objective of Fasting (Sawm) according to the Quran?", options: ["To understand hunger", "To save money", "To attain Taqwa (piety/God-consciousness)", "To punish the body"], answer: 2, explanation: "Surah Al-Baqarah explicitly states fasting is prescribed 'so that you may attain Taqwa'." },
                    { q: "Who was the father of Hazrat Ayesha (RA)?", options: ["Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)", "Hazrat Abu Bakr (RA)"], answer: 3, explanation: "Hazrat Ayesha (RA) was the daughter of Hazrat Abu Bakr As-Siddiq (RA)." },
                    { q: "Which Prophet is known as 'Khateeb-ul-Anbiya' (Orator of the Prophets)?", options: ["Prophet Musa (AS)", "Prophet Shoaib (AS)", "Prophet Dawood (AS)", "Prophet Haroon (AS)"], answer: 1, explanation: "Prophet Shoaib (AS) was known for his eloquent speech." },
                    { q: "What is the first month of the Islamic Calendar?", options: ["Safar", "Rabi-ul-Awwal", "Ramadan", "Muharram"], answer: 3, explanation: "Muharram is the first month, marking the start of the Hijri year." },
                    { q: "The treaty of Hudaybiyyah was written by?", options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"], answer: 3, explanation: "Hazrat Ali (RA) acted as the scribe for the pivotal treaty." },
                    { q: "Which Sahabi was known as 'Ameen-ul-Ummat' (Trustworthy of the Nation)?", options: ["Hazrat Abu Ubaidah bin Jarrah (RA)", "Hazrat Saad bin Abi Waqqas (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Bilal (RA)"], answer: 0, explanation: "The Prophet bestowed this unique title upon Abu Ubaidah (RA)." },
                    { q: "Where is the cave of Hira situated?", options: ["Mount Thawr", "Mount Jabal-e-Noor", "Mount Uhud", "Mount Safa"], answer: 1, explanation: "Jabal al-Noor (Mountain of Light) houses the cave of Hira." },
                    { q: "How many Sujood (prostrations) of recitation are there in the Quran?", options: ["10", "12", "14", "16"], answer: 2, explanation: "There are 14 obligatory places of Sajdah-e-Tilawat in the text." },
                    { q: "Who defeated the mighty warrior Amr bin Abd al-Wud in the Battle of Khandaq?", options: ["Hazrat Hamza (RA)", "Hazrat Umar (RA)", "Hazrat Ali (RA)", "Hazrat Khalid (RA)"], answer: 2, explanation: "Hazrat Ali (RA) struck down the champion of the Quraysh." },
                    { q: "What is the fundamental difference between a Nabi and a Rasool?", options: ["No difference", "A Rasool brings a new Sharia/Book", "A Nabi brings a new Sharia", "A Rasool is a leader"], answer: 1, explanation: "A Rasool is given a new revelation/book, while a Nabi follows the existing one." },
                    { q: "Which Prophet had control over Jinn, birds, and the wind?", options: ["Prophet Sulaiman (AS)", "Prophet Dawood (AS)", "Prophet Musa (AS)", "Prophet Ibrahim (AS)"], answer: 0, explanation: "Prophet Solomon (Sulaiman) was granted a unique kingdom and control over elements." },
                    { q: "When did the tragedy of Karbala happen to the grandson of the Prophet?", options: ["10th Muharram 61 AH", "1st Muharram 61 AH", "12th Rabi-ul-Awwal 60 AH", "27th Rajab 61 AH"], answer: 0, explanation: "The martyrdom of Imam Hussain (RA) occurred on Ashura, 61 A.H." },
                    { q: "What is the term for the Night Journey of the Prophet to Jerusalem and Heaven?", options: ["Hijrat", "Mi'raj / Isra", "Ghazwa", "Wahi"], answer: 1, explanation: "Isra refers to the journey to Jerusalem, Mi'raj refers to the ascension." },
                    { q: "Who was the 'Sword of Allah' amongst the Islamic generals?", options: ["Abu Ubaidah", "Saad bin Abi Waqqas", "Khalid bin Waleed (RA)", "Zaid bin Haritha"], answer: 2, explanation: "Khalid ibn al-Walid remained undefeated in over a hundred battles." },
                    { q: "How many stages are there in the Holy Quran?", options: ["5", "7", "9", "11"], answer: 1, explanation: "The Quran is divided into 7 Manzils (stages) for recitation over a week." },
                    { q: "Which Surah of the Holy Quran is known as the 'Heart of the Quran'?", options: ["Surah Rahman", "Surah Yaseen", "Surah Baqarah", "Surah Ikhlas"], answer: 1, explanation: "Prophet Muhammad (PBUH) referred to Surah Yaseen as the heart of the Quran." },
                    { q: "Who was the first person to accept Islam among women?", options: ["Hazrat Ayesha (RA)", "Hazrat Khadija (RA)", "Hazrat Fatima (RA)", "Hazrat Saudah (RA)"], answer: 1, explanation: "Hazrat Khadija (RA), the Prophet's wife, was the first woman to embrace Islam." },
                    { q: "What is the name of the cave where the first revelation was received?", options: ["Cave of Hira", "Cave of Thawr", "Cave of Uhud", "Cave of Badr"], answer: 0, explanation: "The Archangel Gabriel appeared to the Prophet in the Cave of Hira." },
                    { q: "How many fundamental pillars of Islam are there?", options: ["3", "4", "5", "6"], answer: 2, explanation: "There are Five Pillars: Shahada, Salah, Zakat, Sawm, and Hajj." },
                    { q: "Which companion is known as 'Ghasil al-Malaikah' (Washed by the Angels)?", options: ["Hazrat Hanzala (RA)", "Hazrat Sa'd bin Mu'adh (RA)", "Hazrat Mus'ab bin Umair (RA)", "Hazrat Hamza (RA)"], answer: 0, explanation: "He was martyred at Uhud, and the Prophet stated angels washed his body." },
                    { q: "What was the name of the Prophet's camel?", options: ["Al-Qaswa", "Buraq", "Duldul", "Ya'fur"], answer: 0, explanation: "Al-Qaswa was the famous camel the Prophet rode during the Hijra and Hajj." },
                    { q: "Which Surah was recited by the Prophet during the conquest of Mecca?", options: ["Surah Fath", "Surah Nasr", "Surah Rahman", "Surah Yaseen"], answer: 0, explanation: "He recited Surah Al-Fath (The Victory) while entering Mecca." },
                    { q: "How many Ashra (parts) are there in the month of Ramadan?", options: ["2", "3", "4", "5"], answer: 1, explanation: "Ramadan is divided into three Ashras (Mercy, Forgiveness, Seeking Refuge)." },
                    { q: "Who was the first female martyr of Islam?", options: ["Hazrat Sumayya (RA)", "Hazrat Khadija (RA)", "Hazrat Asma (RA)", "Hazrat Fatima (RA)"], answer: 0, explanation: "Hazrat Sumayya bint Khayyat (RA) was tragically killed by Abu Jahl." },
                    { q: "In which year did the Battle of Badr take place?", options: ["1 A.H.", "2 A.H.", "3 A.H.", "4 A.H."], answer: 1, explanation: "The decisive Battle of Badr took place on 17 Ramadan, 2 A.H." },
                    { q: "What is the meaning of 'Tahajjud'?", options: ["Dawn prayer", "Night prayer", "Afternoon prayer", "Eclipse prayer"], answer: 1, explanation: "Tahajjud is a voluntary night prayer performed after waking from sleep." },
                    { q: "Which Prophet's story is called 'Ahsan-ul-Qasas' (The Best of Stories) in the Quran?", options: ["Prophet Musa (AS)", "Prophet Ibrahim (AS)", "Prophet Yusuf (AS)", "Prophet Nuh (AS)"], answer: 2, explanation: "Surah Yusuf contains the best of stories regarding Prophet Joseph." },
                    { q: "What was the relationship between Prophet Musa (AS) and Prophet Haroon (AS)?", options: ["Father-Son", "Brothers", "Cousins", "Uncle-Nephew"], answer: 1, explanation: "They were brothers, and Aaron served as the spokesman for Moses." },
                    { q: "Who conquered Jerusalem (Bait-ul-Muqaddas) for the Muslims?", options: ["Hazrat Abu Ubaidah (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Umar (RA)", "Hazrat Salahuddin Ayyubi (RA)"], answer: 2, explanation: "Hazrat Umar (RA) accepted the surrender of Jerusalem." },
                    { q: "What is the penalty for intentional murder (Qisas) in Islam without forgiveness?", options: ["Life Imprisonment", "Blood Money only", "Death penalty", "Exile"], answer: 2, explanation: "Qisas dictates an equal retaliation (death) unless the heirs forgive." },
                    { q: "Which angel is responsible for controlling the weather and rain?", options: ["Jibraeel (AS)", "Mikaeel (AS)", "Israfeel (AS)", "Izraeel (AS)"], answer: 1, explanation: "Hazrat Mikaeel (AS) oversees sustenance, rain, and the weather." },
                    { q: "Who was the first person to verify the incident of Mi'raj (The Night Journey)?", options: ["Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Abu Bakr (RA)", "Hazrat Usman (RA)"], answer: 2, explanation: "Due to his immediate belief, Abu Bakr (RA) was given the title 'As-Siddiq'." },
                    { q: "What was the name of the well possessed by Hazrat Usman (RA) in Medina?", options: ["Zamzam", "Bi'r-e-Ruma", "Bi'r-e-Ma'unah", "Bi'r-e-Sheba"], answer: 1, explanation: "He purchased Bi'r-e-Ruma to provide free water to the Muslims." },
                    { q: "Which Prophet built the Ark?", options: ["Prophet Adam (AS)", "Prophet Nuh (AS)", "Prophet Ibrahim (AS)", "Prophet Musa (AS)"], answer: 1, explanation: "Prophet Nuh (Noah) (AS) built the Ark by Allah's command." },
                    { q: "What is the literal meaning of 'Zakat'?", options: ["Tax", "Charity", "Purity/To Purify", "Wealth"], answer: 2, explanation: "Zakat means to purify, grow, and increase in blessing." },
                    { q: "In which battle were the teeth of Prophet Muhammad (PBUH) martyred?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Battle of Hunayn"], answer: 1, explanation: "He was wounded locally in the face during the Battle of Uhud (3 A.H.)." },
                    { q: "Who was the first hypocrite (Munafiq) of Medina?", options: ["Abu Jahl", "Abu Lahab", "Abdullah bin Ubayy", "Ka'b bin Ashraf"], answer: 2, explanation: "Abdullah bin Ubayy ibn Salul was the chief of the hypocrites." },
                    { q: "Which Surah must be recited in every Rakat of Salah?", options: ["Surah Ikhlas", "Surah Fatiha", "Surah Kausar", "Surah Asr"], answer: 1, explanation: "Salah is incomplete without the recitation of Surah Al-Fatiha." },
                    { q: "What is the meaning of 'Shirk'?", options: ["Lying", "Stealing", "Associating partners with Allah", "Drinking alcohol"], answer: 2, explanation: "Shirk is the greatest sin in Islam, meaning polytheism." },
                    { q: "How many times does the command for Salah (Namaz) appear in the Quran?", options: ["300", "500", "700", "1000"], answer: 2, explanation: "It is widely cited that the order to establish prayer is mentioned approx. 700 times." },
                    { q: "Which Prophet is known as 'Ruhullah' (Spirit of Allah)?", options: ["Prophet Dawood (AS)", "Prophet Yahya (AS)", "Prophet Isa (AS)", "Prophet Muhammad (PBUH)"], answer: 2, explanation: "Prophet Jesus (Isa) (AS) holds the title of Ruhullah." },
                    { q: "To which tribe did Hazrat Umar (RA) belong?", options: ["Banu Hashim", "Banu Umayya", "Banu Adi", "Banu Makhzum"], answer: 2, explanation: "He belonged to the Adi clan of the Quraysh tribe." },
                    { q: "What is the name of the gate of Heaven specified for those who fast frequently?", options: ["Bab-al-Rayyan", "Bab-al-Salaam", "Bab-al-Tauba", "Bab-al-Hajj"], answer: 0, explanation: "Ar-Rayyan is the gate exclusively for the fasting believers." },
                    { q: "Where was the first Islamic state established?", options: ["Mecca", "Medina", "Taif", "Kufa"], answer: 1, explanation: "The Prophet established the first sovereign Islamic state in Yathrib (Medina)." },
                    { q: "Which wife of the Prophet is known as 'Mother of the Poor' (Umm al-Masakeen)?", options: ["Hazrat Khadija (RA)", "Hazrat Ayesha (RA)", "Hazrat Zaynab bint Khuzayma (RA)", "Hazrat Hafsa (RA)"], answer: 2, explanation: "She was given this title due to her immense charity." },
                    { q: "What was the primary idol worshipped by the Quraysh inside the Kaaba?", options: ["Hubal", "Lat", "Uzza", "Manat"], answer: 0, explanation: "Hubal was considered the chief deity among the 360 idols." },
                    { q: "Who suggested the compilation of the Quran to Hazrat Abu Bakr (RA)?", options: ["Hazrat Usman (RA)", "Hazrat Ali (RA)", "Hazrat Umar (RA)", "Hazrat Zaid bin Thabit (RA)"], answer: 2, explanation: "Hazrat Umar (RA) suggested the compilation after many Huffaz died in Yamama." }
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
        $updatedLines += $islamicQuestions6
        $islamicInserted = $true
        $inIslamic = $false
    }
    $updatedLines += $line
}
$updatedLines | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Injected final 50 Islamic Studies questions (Total 300)."
