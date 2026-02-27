
const pakistanAffairs = {
    name: "Pakistan Affairs",
    icon: "fa-landmark",
    subcategories: [
        {
            category: "Pakistan Movement",
            icon: "fa-person-walking",
            questions: [
                { q: "When was the All-India Muslim League founded?", options: ["1905", "1906", "1909", "1913"], answer: 1, explanation: "The Muslim League was founded on December 30, 1906, in Dhaka." },
                { q: "Who was the first President of the All-India Muslim League?", options: ["Sir Aga Khan III", "Nawab Salimullah", "Wiqar-ul-Mulk", "Maulana Muhammad Ali Jauhar"], answer: 0, explanation: "Sir Aga Khan III was the first permanent president of the League." },
                { q: "In which year did the Quaid-e-Azam present his Fourteen Points?", options: ["1927", "1928", "1929", "1930"], answer: 2, explanation: "Jinnah presented his points in 1929 as a response to the Nehru Report." },
                { q: "Who authored the 'Now or Never' pamphlet?", options: ["Allama Iqbal", "Sir Syed Ahmed Khan", "Chaudhry Rahmat Ali", "Maulana Zafar Ali Khan"], answer: 2, explanation: "Chaudhry Rahmat Ali published it in 1933, proposing the name 'Pakistan'." },
                { q: "When was the Lahore Resolution (Pakistan Resolution) passed?", options: ["23 March 1940", "14 August 1947", "12 March 1949", "23 March 1956"], answer: 0, explanation: "It was passed on March 23, 1940, at Minto Park (now Iqbal Park), Lahore." }
            ]
        },
        {
            category: "Constitutional History of Pakistan",
            icon: "fa-gavel",
            questions: [
                { q: "When was the first Constitution of Pakistan enforced?", options: ["1947", "1956", "1962", "1973"], answer: 1, explanation: "The first constitution was enforced on March 23, 1956." },
                { q: "Which constitution declared Pakistan as an 'Islamic Republic' for the first time?", options: ["1956", "1962", "1973", "Interim Constitution"], answer: 0, explanation: "The 1956 Constitution introduced the title 'Islamic Republic of Pakistan'." },
                { q: "Who is known as the architect of the 1973 Constitution?", options: ["Ayub Khan", "Yahya Khan", "Zulfikar Ali Bhutto", "Zia-ul-Haq"], answer: 2, explanation: "Z.A. Bhutto played the leading role in framing the 1973 consensus constitution." },
                { q: "Which constitutional amendment made the Objective Resolution a substantive part of the Constitution?", options: ["8th Amendment", "13th Amendment", "18th Amendment", "25th Amendment"], answer: 0, explanation: "It was added via Article 2A by the 8th Amendment in 1985." },
                { q: "How many articles are in the 1973 Constitution?", options: ["250", "280", "320", "234"], answer: 1, explanation: "The 1973 Constitution consists of 280 articles." }
            ]
        },
        {
            category: "Political History",
            icon: "fa-users-rectangle",
            questions: [
                { q: "Who was the first Prime Minister of Pakistan?", options: ["Liaquat Ali Khan", "Khawaja Nazimuddin", "Muhammad Ali Bogra", "Feroz Khan Noon"], answer: 0, explanation: "Liaquat Ali Khan was appointed as the first PM in 1947." },
                { q: "In which year did General Ayub Khan impose the first Martial Law?", options: ["1954", "1956", "1958", "1969"], answer: 2, explanation: "The first martial law was declared by Iskander Mirza, and Ayub Khan took over in Oct 1958." },
                { q: "When did the 1970 general elections take place?", options: ["October 1970", "December 1970", "March 1971", "January 1970"], answer: 1, explanation: "The first general elections based on 'one man one vote' were held in Dec 1970." },
                { q: "Who was the first woman Prime Minister of Pakistan?", options: ["Fatima Jinnah", "Benazir Bhutto", "Hina Rabbani Khar", "Asma Jahangir"], answer: 1, explanation: "Benazir Bhutto was elected as PM in 1988." },
                { q: "The Shimla Agreement (1972) was signed between Z.A. Bhutto and which Indian leader?", options: ["Indira Gandhi", "Jawaharlal Nehru", "Atal Bihari Vajpayee", "Lal Bahadur Shastri"], answer: 0, explanation: "It was signed in 1972 following the 1971 war." }
            ]
        },
        {
            category: "Important Personalities of Pakistan",
            icon: "fa-user-tie",
            questions: [
                { q: "Who is known as the 'Ambassador of Hindu-Muslim Unity'?", options: ["Sir Syed Ahmed Khan", "Allama Iqbal", "Muhammad Ali Jinnah", "Liaquat Ali Khan"], answer: 2, explanation: "Sarojini Naidu gave this title to Jinnah for his early efforts to unite the two communities." },
                { q: "Where is the tomb of Allama Iqbal located?", options: ["Sialkot", "Lahore", "Karachi", "Islamabad"], answer: 1, explanation: "He is buried in Huzuri Bagh, outside the Badshahi Mosque in Lahore." },
                { q: "Who was the father of the Pakistani Nuclear Program?", options: ["Dr. Abdus Salam", "Dr. Abdul Qadeer Khan", "Dr. Samar Mubarakmand", "Dr. Ishrat Hussain"], answer: 2, explanation: "Dr. Samar Mubarakmand led the Chagai tests, while AQ Khan is known as the father of Pakistan's enrichment program." },
                { q: "Who was the first woman to represent Pakistan in the UN?", options: ["Begum Shaista Ikramullah", "Begum Ra'ana Liaquat Ali Khan", "Benazir Bhutto", "Fatima Jinnah"], answer: 0, explanation: "Shaista Ikramullah was one of the first female delegates to the UN in 1948." },
                { q: "Which personality is known as the 'Lion of Punjab'?", options: ["Lala Lajpat Rai", "Raja Aziz Bhatti", "Major Tufail", "Nawabzada Nasrullah Khan"], answer: 0, explanation: "Lala Lajpat Rai (historical context) or often applied by supporters to political leaders." }
            ]
        },
        {
            category: "Geography of Pakistan",
            icon: "fa-mountain-sun",
            questions: [
                { q: "Which is the highest mountain peak in Pakistan?", options: ["Nanga Parbat", "K2", "Broad Peak", "Rakaposhi"], answer: 1, explanation: "K2 is the highest in Pakistan and 2nd highest in the world." },
                { q: "Identify the longest river in Pakistan.", options: ["Jhelum", "Chenab", "Indus", "Ravi"], answer: 2, explanation: "The Indus (Sindhu) is the longest river." },
                { q: "Which desert is located in Sindh?", options: ["Thal", "Cholistan", "Thar", "Kharan"], answer: 2, explanation: "The Thar desert is primarily located in Sindh." },
                { q: "Which pass connects Pakistan with China?", options: ["Khyber Pass", "Khunjerab Pass", "Bolan Pass", "Tochi Pass"], answer: 1, explanation: "The Khunjerab Pass is the highest paved international border crossing." },
                { q: "What is the total coastline length of Pakistan?", options: ["1046 km", "1200 km", "850 km", "1500 km"], answer: 0, explanation: "Pakistan has a coastline of approximately 1,046 km along the Arabian Sea." }
            ]
        },
        {
            category: "Important National National Events",
            icon: "fa-calendar-check",
            questions: [
                { q: "When did Pakistan become a nuclear power?", options: ["28 May 1998", "23 March 1998", "14 August 1947", "11 May 1998"], answer: 0, explanation: "Pakistan conducted tests at Chagai on May 28, 1998." },
                { q: "In which year did Pakistan win the Cricket World Cup?", options: ["1987", "1992", "1996", "1999"], answer: 1, explanation: "Imran Khan led Pakistan to victory in the 1992 World Cup." },
                { q: "When was the first Islamic Summit Conference held in Pakistan?", options: ["1970", "1974", "1981", "1997"], answer: 1, explanation: "The 2nd OIC Summit was held in Lahore in 1974." },
                { q: "When was the name 'Islamabad' chosen for the capital?", options: ["1959", "1960", "1967", "1973"], answer: 1, explanation: "The name was approved in 1960 during Ayub Khan's era." },
                { q: "On which date did Quaid-e-Azam pass away?", options: ["14 August 1948", "11 September 1948", "25 December 1948", "11 September 1947"], answer: 1, explanation: "He passed away on Sep 11, 1948, in Karachi." }
            ]
        }
    ]
};

const currentAffairs = {
    name: "Current Affairs",
    icon: "fa-newspaper",
    subcategories: [
        {
            category: "Daily Current Affairs",
            icon: "fa-clock",
            questions: [
                { q: "Who is the current Prime Minister of Pakistan (as of Feb 2024)?", options: ["Anwaar-ul-Haq Kakar (Caretaker)", "Shehbaz Sharif", "Imran Khan", "Asif Ali Zardari"], answer: 0, explanation: "As of early Feb 2024, Anwaar-ul-Haq Kakar is the caretaker Prime Minister." },
                { q: "When are the next General Elections scheduled in Pakistan?", options: ["Feb 8, 2024", "Jan 25, 2024", "March 10, 2024", "Dec 30, 2023"], answer: 0, explanation: "Elections are scheduled for Feb 8, 2024." },
                { q: "Which country recently hosted the COP28 summit?", options: ["Egypt", "UAE", "UK", "France"], answer: 1, explanation: "The COP28 climate summit was held in Dubai, UAE." },
                { q: "Who is the current Chief of Army Staff (COAS) of Pakistan?", options: ["Gen Qamar Javed Bajwa", "Gen Asim Munir", "Gen Sahir Shamshad", "Gen Faiz Hameed"], answer: 1, explanation: "Gen Asim Munir took charge in Nov 2022." },
                { q: "What is the current inflation rate trend in Pakistan (early 2024)?", options: ["Decreasing rapidly", "Relatively Stable High", "Below 10%", "Deflation"], answer: 1, explanation: "Pakistan has been facing high double-digit inflation." }
            ]
        },
        {
            category: "Monthly Current Affairs",
            icon: "fa-calendar-days",
            questions: [
                { q: "Which team won the Asia Cup 2023?", options: ["Pakistan", "India", "Sri Lanka", "Bangladesh"], answer: 1, explanation: "India defeated Sri Lanka in the final." },
                { q: "Who won the Nobel Peace Prize 2023?", options: ["Narges Mohammadi", "Maria Ressa", "Malala Yousafzai", "Abiy Ahmed"], answer: 0, explanation: "Iranian activist Narges Mohammadi won for her fight against the oppression of women." },
                { q: "Which province recently launched the 'Chief Minister's Pink Bus' service?", options: ["Punjab", "Sindh", "KPK", "Balochistan"], answer: 1, explanation: "Sindh government launched this dedicated service for women." },
                { q: "When did the latest Israel-Gaza conflict escalate sharply in 2023?", options: ["Oct 7", "Sep 11", "Nov 15", "Aug 14"], answer: 0, explanation: "The escalation began on October 7, 2023." },
                { q: "Who is the current Chief Justice of Pakistan?", options: ["Justice Qazi Faez Isa", "Justice Umar Ata Bandial", "Justice Gulzar Ahmed", "Justice Saqib Nisar"], answer: 0, explanation: "Justice Qazi Faez Isa sworn in as CJP in Sep 2023." }
            ]
        },
        {
            category: "International Affairs",
            icon: "fa-earth-americas",
            questions: [
                { q: "Which country is the current President of the G20 for 2024?", options: ["India", "Brazil", "South Africa", "Indonesia"], answer: 1, explanation: "Brazil took over the presidency from India for 2024." },
                { q: "What is the name of the NASA mission to return humans to the moon?", options: ["Apollo 2.0", "Artemis", "Orion", "SpaceX Starship"], answer: 1, explanation: "The Artemis program aims to land the first woman and next man on the moon." },
                { q: "Which country recently joined NATO as its 31st member?", options: ["Ukraine", "Sweden", "Finland", "Iceland"], answer: 2, explanation: "Finland formally joined NATO in April 2023." },
                { q: "Where is the headquarters of the BRICS New Development Bank located?", options: ["New Delhi", "Moscow", "Shanghai", "Johannesburg"], answer: 2, explanation: "The NDB is headquartered in Shanghai, China." },
                { q: "The 'Belt and Road Initiative' (BRI) is a global infrastructure project by which country?", options: ["USA", "Japan", "China", "India"], answer: 2, explanation: "BRI is a signature foreign policy project of China." }
            ]
        },
        {
            category: "Pakistan Current Affairs",
            icon: "fa-flag",
            questions: [
                { q: "What is the name of the new deep-sea port developed with Chinese assistance?", options: ["Karachi Port", "Port Qasim", "Gwadar Port", "Ormara Port"], answer: 2, explanation: "Gwadar Port is the crown jewel of CPEC." },
                { q: "Who is the current Chairman of the PCB (Caretaker/Head of Management)?", options: ["Ramiz Raja", "Najam Sethi", "Zaka Ashraf", "Mohsin Naqvi"], answer: 3, explanation: "Mohsin Naqvi was recently appointed to head the PCB." },
                { q: "According to the 2023 Digital Census, what is Pakistan's approximate population?", options: ["220 million", "241 million", "250 million", "210 million"], answer: 1, explanation: "The 2023 census recorded a population of about 241.49 million." },
                { q: "Which city is known as the 'Electronic City' of Pakistan for its IT potential?", options: ["Lahore", "Islamabad", "Karachi", "Faisalabad"], answer: 1, explanation: "Islamabad is often promoted as the IT hub." },
                { q: "What is the name of the operation launched by the Pakistan Navy to protect merchant ships in the Arabian Sea?", options: ["Zarb-e-Azb", "Sea Spark", "Regional Maritime Security Patrols (RMSP)", "Radd-ul-Fasaad"], answer: 2, explanation: "RMSP is maintained by PN for maritime security." }
            ]
        }
    ]
};

const computerMCQs = {
    name: "Computer MCQs",
    icon: "fa-desktop",
    subcategories: [
        {
            category: "Basic Computer Knowledge",
            icon: "fa-keyboard",
            questions: [
                { q: "The brain of any computer system is?", options: ["ALU", "Memory", "CPU", "Control Unit"], answer: 2, explanation: "The Central Processing Unit (CPU) performs most of the processing inside the computer." },
                { q: "What is the full form of RAM?", options: ["Read Access Memory", "Random Access Memory", "Ready Application Module", "Remote Access Management"], answer: 1, explanation: "RAM is short-term volatile memory." },
                { q: "Which of these is a permanent storage device?", options: ["RAM", "Cache", "Hard Disk", "Registers"], answer: 2, explanation: "Hard disks (and SSDs) store data permanently even after power off." },
                { q: "Windows is an example of?", options: ["Application Software", "System Software (Operating System)", "Hardware", "Database"], answer: 1, explanation: "The OS is the core system software that manages hardware." },
                { q: "Which key is used to refresh the active window?", options: ["F1", "F2", "F5", "F12"], answer: 2, explanation: "F5 is the standard shortcut to refresh." }
            ]
        },
        {
            category: "MS Office",
            icon: "fa-file-word",
            questions: [
                { q: "In MS Word, Ctrl + S is used for?", options: ["Select All", "Save", "Search", "Size"], answer: 1, explanation: "Ctrl + S is the universal shortcut to save a document." },
                { q: "Which MS Office tool is best for creating presentations?", options: ["Word", "Excel", "PowerPoint", "Access"], answer: 2, explanation: "PowerPoint is designed for visual presentations." },
                { q: "In MS Excel, a formula always starts with?", options: ["+", "-", "@", "="], answer: 3, explanation: "Formulas in Excel must begin with an equals sign." },
                { q: "What is the extension of an MS Word 2016 file?", options: [".txt", ".xls", ".docx", ".pptx"], answer: 2, explanation: "Modern Word documents use the open XML extension .docx." },
                { q: "Landscape and Portrait are examples of?", options: ["Page Size", "Page Orientation", "Paper Type", "Margins"], answer: 1, explanation: "They describe how the page is oriented for viewing/printing." }
            ]
        },
        {
            category: "Internet & Email",
            icon: "fa-envelope-open-text",
            questions: [
                { q: "What does HTTP stand for?", options: ["Hyper Text Transfer Protocol", "High Transfer Tech Process", "Hyper Text Terminal Point", "Host Transfer Tech Protocol"], answer: 0, explanation: "It is the fundamental protocol for the web." },
                { q: "Which of these is a web browser?", options: ["Google", "Windows", "Chrome", "Excel"], answer: 2, explanation: "Google is a search engine, Chrome is the browser." },
                { q: "What does 'CC' stand for in an email header?", options: ["Copy Center", "Carbon Copy", "Correct Code", "Cloud Connection"], answer: 1, explanation: "Carbon copy allows you to send a copy of the email to someone else." },
                { q: "A website's primary page is called its?", options: ["Master Page", "Root Page", "Home Page", "Index"], answer: 2, explanation: "The home page is the entry point of a website." },
                { q: "What is 'Spam'?", options: ["Useful information", "Junk or unsolicited email", "A virus", "A password"], answer: 1, explanation: "Spam refers to unwanted bulk messages." }
            ]
        },
        {
            category: "Abbreviations & IT Terms",
            icon: "fa-font",
            questions: [
                { q: "What does URL stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "Unit Resource Link", "Universal Radio Link"], answer: 1, explanation: "URL is the address of a web resource." },
                { q: "USB stands for?", options: ["Universal Serial Bus", "Unit System Board", "Universal System Backup", "Ultra Speed Bus"], answer: 0, explanation: "USB is a standard for cables and connectors." },
                { q: "What is an 'IP Address'?", options: ["Internet Password", "Internal Process", "Internet Protocol Address", "Identity Plate"], answer: 2, explanation: "It is a unique identifier for a device on a network." },
                { q: "GUI stands for?", options: ["General User Interface", "Graphical User Interface", "Global User Interaction", "Graphs Under Information"], answer: 1, explanation: "GUI allows users to interact via visual icons." },
                { q: "MODEM stands for?", options: ["Model Demodel", "Modulator Demodulator", "Mode Emulator", "Multiple Online Device"], answer: 1, explanation: "It converts analog signals to digital and vice versa." }
            ]
        },
        {
            category: "Hardware & Software",
            icon: "fa-plug",
            questions: [
                { q: "Which of these is an input device?", options: ["Monitor", "Printer", "Mouse", "Speaker"], answer: 2, explanation: "Mouse is used to give input; the others are output devices." },
                { q: "The physical components of a computer are called?", options: ["Software", "Hardware", "Middleware", "Firmware"], answer: 1, explanation: "Hardware refers to the tangible parts." },
                { q: "A 'Bug' in computer terminology refers to?", options: ["A virus", "An error in a program", "A hardware failure", "A tiny insect inside the CPU"], answer: 1, explanation: "A bug is a coding mistake." },
                { q: "What is the main circuit board of a computer called?", options: ["Ethernet", "Hard Disk", "Motherboard", "Graphics Card"], answer: 2, explanation: "Everything connects to the motherboard." },
                { q: "Trial versions are a type of?", options: ["Freeware", "Shareware", "Open Source", "Proprietary"], answer: 1, explanation: "Shareware is software provided as a trial before purchase." }
            ]
        },
        {
            category: "Programming Basics",
            icon: "fa-code",
            questions: [
                { q: "Who developed the C language?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], answer: 1, explanation: "Dennis Ritchie created C at Bell Labs in the 1970s." },
                { q: "What is the smallest unit of data in a computer?", options: ["Byte", "Bit", "Nibble", "KB"], answer: 1, explanation: "A bit (Binary Digit) is the 0 or 1 value." },
                { q: "An algorithm is?", options: ["A programming language", "A step-by-step procedure to solve a problem", "A type of hardware", "A database query"], answer: 1, explanation: "Algorithms are logical plans for code." },
                { q: "What is a 'Compiler'?", options: ["A tool to draw icons", "Software that translates high-level code to machine code", "A hardware test", "An internet protocol"], answer: 1, explanation: "Compilers turn source code into executable files." },
                { q: "Which of these is NOT a programming language?", options: ["Java", "Python", "HTML", "C++"], answer: 2, explanation: "HTML is a markup language, not a programming language." }
            ]
        }
    ]
};
