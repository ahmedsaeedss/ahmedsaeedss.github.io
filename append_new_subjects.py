import json
import re

# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# I want to append 4 new main top-level objects before the last `];`
new_subjects = """
    },
    {
        name: "Urdu",
        icon: "fa-language",
        subcategories: [
            {
                category: "Urdu Language & Literature",
                icon: "fa-book-open",
                questions: [
                    { q: "Who is formally considered the first poet of the Urdu language?", options: ["Allama Iqbal", "Mirza Ghalib", "Amir Khusro", "Wali Deccani"], answer: 2, explanation: "Amir Khusro (1253–1325) is often credited as the father of Urdu poetry." },
                    { q: "Which of the following is the famous masterpiece written by Allama Iqbal?", options: ["Mussadas-e-Hali", "Aab-e-Hayat", "Bang-e-Dara", "Udaas Naslain"], answer: 2, explanation: "Bang-e-Dara (The Call of the Marching Bell) is Iqbal's first philosophical poetry book in Urdu." },
                    { q: "Who wrote the famous Pakistani national anthem?", options: ["Hafeez Jalandhari", "Faiz Ahmed Faiz", "Allama Iqbal", "Ahmed Faraz"], answer: 0, explanation: "Hafeez Jalandhari wrote the lyrics of Qaumi Taranah in 1952." },
                    { q: "What is the pen name (Takhallus) of Asadullah Khan?", options: ["Momin", "Ghalib", "Zauq", "Dagh"], answer: 1, explanation: "Mirza Asadullah Khan famously used 'Ghalib' as his pen name." },
                    { q: "The word 'Urdu' itself is derived from which language family?", options: ["Arabic", "Persian", "Turkic", "Sanskrit"], answer: 2, explanation: "It is derived from the Turkic word 'Ordu', meaning 'army' or 'camp'." },
                    { q: "Who is the legendary author of the novel 'Raja Gidh'?", options: ["Bano Qudsia", "Ashfaq Ahmed", "Umera Ahmed", "Fatima Surayya Bajia"], answer: 0, explanation: "Bano Qudsia wrote the acclaimed novel 'Raja Gidh'." },
                    { q: "Manto was famously known for writing which form of literature?", options: ["Novels", "Short Stories (Afsane)", "Poetry", "Travelogues"], answer: 1, explanation: "Saadat Hasan Manto was a master of the Urdu short story." },
                    { q: "Who wrote 'Awaaz Dost'?", options: ["Mukhtar Masood", "Mustansar Hussain Tarar", "Ibn-e-Insha", "Patras Bokhari"], answer: 0, explanation: "Mukhtar Masood's 'Awaaz Dost' is a classic in Urdu literature." },
                    { q: "What is the main subject of 'Musaddas-e-Hali'?", options: ["Romance", "Praise of Nature", "Rise and Fall of Muslims", "Satire"], answer: 2, explanation: "Maulana Altaf Hussain Hali wrote it to lament the decline of the Muslim Ummah." },
                    { q: "Who is called the Shakespeare of Urdu literature?", options: ["Agha Hashar Kashmiri", "Imtiaz Ali Taj", "Manto", "Premchand"], answer: 0, explanation: "Agha Hashar Kashmiri is renowned for his historical and Shakespearean plays in Urdu." }
                ]
            }
        ]
    },
    {
        name: "Pakistan Study",
        icon: "fa-flag",
        subcategories: [
            {
                category: "History of Pakistan",
                icon: "fa-landmark-flag",
                questions: [
                    { q: "When did the All-India Muslim League pass the Lahore Resolution?", options: ["14 August 1947", "23 March 1940", "11 September 1948", "30 December 1906"], answer: 1, explanation: "The resolution known as the Pakistan Resolution was passed on 23 March 1940." },
                    { q: "Who was the first Governor-General of Pakistan?", options: ["Liaquat Ali Khan", "Iskander Mirza", "Muhammad Ali Jinnah", "Ayub Khan"], answer: 2, explanation: "Quaid-e-Azam Muhammad Ali Jinnah served as the first Governor-General." },
                    { q: "In which year did Pakistan become a Republic under its first constitution?", options: ["1947", "1956", "1962", "1973"], answer: 1, explanation: "The Constitution of 1956 officially made Pakistan an Islamic Republic." },
                    { q: "What is the highest mountain peak in Pakistan?", options: ["Nanga Parbat", "K2 (Godwin Austen)", "Broad Peak", "Tirich Mir"], answer: 1, explanation: "K2 is the highest peak in Pakistan and the second highest in the world." },
                    { q: "Who was the first Prime Minister of Pakistan?", options: ["Khawaja Nazimuddin", "Liaquat Ali Khan", "Chaudhry Muhammad Ali", "Huseyn Shaheed Suhrawardy"], answer: 1, explanation: "Liaquat Ali Khan was appointed as the first Prime Minister by the Quaid." },
                    { q: "Which province is the most populous in Pakistan?", options: ["Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Punjab"], answer: 3, explanation: "Punjab houses over 50% of the country's entire population." },
                    { q: "What is the national language of Pakistan?", options: ["Punjabi", "English", "Urdu", "Sindhi"], answer: 2, explanation: "Urdu is the declared national language (Lingua Franca) of Pakistan." },
                    { q: "When did Pakistan conduct its first public nuclear tests?", options: ["1971", "1988", "1998", "2001"], answer: 2, explanation: "The tests were conducted explicitly on 28 May 1998 (Youm-e-Takbir) at Chagai." },
                    { q: "Mohenjo-Daro is a famous archaeological site primarily located in which province?", options: ["Punjab", "Balochistan", "Sindh", "KPK"], answer: 2, explanation: "It is located in the Larkana District of Sindh, dating back to the Indus Valley Civilization." },
                    { q: "When was the capital of Pakistan shifted from Karachi to Islamabad?", options: ["1955", "1960", "1967", "1973"], answer: 2, explanation: "Construction began in the 1960s, and it officially became the capital in 1967." }
                ]
            }
        ]
    },
    {
        name: "Computer",
        icon: "fa-desktop",
        subcategories: [
            {
                category: "Computer Capabilities",
                icon: "fa-microchip",
                questions: [
                    { q: "What does CPU stand for?", options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Utility"], answer: 2, explanation: "The Central Processing Unit is essentially the brain of the computer." },
                    { q: "Which of these is a volatile memory?", options: ["ROM", "RAM", "Hard Drive", "Flash Drive"], answer: 1, explanation: "Random Access Memory (RAM) loses all stored information when power is turned off." },
                    { q: "What is the primary function of an Operating System?", options: ["To browse the web", "To play games", "To manage computer hardware and software resources", "To edit texts"], answer: 2, explanation: "The OS acts as an intermediary layer managing the hardware and user applications." },
                    { q: "1 Byte is strictly equal to how many bits?", options: ["4", "8", "16", "32"], answer: 1, explanation: "A byte consists of exactly 8 distinct bits (binary digits)." },
                    { q: "Which component is strictly responsible for rendering images to a monitor?", options: ["Motherboard", "CPU", "GPU", "Power Supply"], answer: 2, explanation: "The Graphics Processing Unit (GPU) handles graphical and visual rendering." },
                    { q: "What does 'HTTP' stand for in website addresses?", options: ["HyperText Transfer Protocol", "HyperText Transmission Process", "HighText Transfer Protocol", "Hyper Transfer Text Protocol"], answer: 0, explanation: "HTTP is the foundation of data communication for the World Wide Web." },
                    { q: "Who is commonly known as the father of the computer?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Tim Berners-Lee"], answer: 1, explanation: "Charles Babbage conceptualized and invented the first mechanical computer." },
                    { q: "Which shortcut key is specifically used to Undo an action on Windows?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Y", "Ctrl + Z"], answer: 3, explanation: "Ctrl + Z universally undoes the previous local action." },
                    { q: "A kilobyte (KB) technically consists of how many bytes in binary?", options: ["1000", "1024", "1048", "2048"], answer: 1, explanation: "In binary systems, 1 KB is defined as 2^10 = 1024 bytes." },
                    { q: "Which of these is NOT an output device?", options: ["Monitor", "Printer", "Speaker", "Keyboard"], answer: 3, explanation: "A keyboard is an input device used to enter raw data into a computer." }
                ]
            }
        ]
    },
    {
        name: "Pakistan Affairs",
        icon: "fa-landmark",
        subcategories: [
            {
                category: "Current & Post-1947",
                icon: "fa-globe",
                questions: [
                    { q: "Who is the supreme commander of the Pakistan Armed Forces?", options: ["Prime Minister", "Chief of Army Staff", "President", "Minister of Defence"], answer: 2, explanation: "According to the Constitution, the President is the Supreme Commander of the Armed Forces." },
                    { q: "What is the total number of seats in the National Assembly of Pakistan?", options: ["272", "336", "342", "104"], answer: 1, explanation: "After recent demographic changes and ex-FATA merger adjustments, it is 336 (including reserved seats)." },
                    { q: "Which amendment in the 1973 Constitution transferred presidential powers to the parliament?", options: ["8th Amendment", "17th Amendment", "18th Amendment", "21st Amendment"], answer: 2, explanation: "The 18th Amendment drastically reduced the President's powers and removed article 58-2(b)." },
                    { q: "Pakistan shares its longest international border with which country?", options: ["India", "Afghanistan", "Iran", "China"], answer: 1, explanation: "The Durand Line separating Pakistan and Afghanistan is over 2,600 km long." },
                    { q: "When did Pakistan officially become a full member state of the Shanghai Cooperation Organisation (SCO)?", options: ["2001", "2015", "2017", "2020"], answer: 2, explanation: "Pakistan and India both formally joined as full members in 2017." },
                    { q: "The Indus Water Treaty was significantly brokered by which international organization in 1960?", options: ["United Nations", "World Bank", "IMF", "Asian Development Bank"], answer: 1, explanation: "The World Bank negotiated the water-sharing treaty between India and Pakistan." },
                    { q: "Which economic corridor represents a massive multi-billion dollar investment project by China in Pakistan?", options: ["TAPI", "CPEC", "OBOR", "ECO"], answer: 1, explanation: "The China-Pakistan Economic Corridor (CPEC) is a primary component of China's Belt and Road Initiative." },
                    { q: "In which year did the tragic APS (Army Public School) Peshawar attack heavily occur?", options: ["2012", "2014", "2015", "2016"], answer: 1, explanation: "The horrifying terrorist attack brutally took place on 16 December 2014, leading to the creation of the National Action Plan." },
                    { q: "The Siachen Glacier is technically located in which major mountain range?", options: ["Himalayas", "Hindu Kush", "Karakoram", "Pamir"], answer: 2, explanation: "It is located in the eastern Karakoram range in the Himalayas." },
                    { q: "Which Pakistani female spectacularly won the Nobel Peace Prize?", options: ["Benazir Bhutto", "Asma Jahangir", "Malala Yousafzai", "Sharmeen Obaid-Chinoy"], answer: 2, explanation: "Malala Yousafzai won the Nobel Peace Prize in 2014 for her remarkable struggle for female education." }
                ]
            }
        ]
"""

# The file ends with:
#             }
#         ]
#     }
# ];

# Let's replace the last `];` with `,` + the new subjects string + `\n];`

# First, find the very last occurrence of `];`
idx = content.rfind('];')
if idx != -1:
    new_content = content[:idx-1] + new_subjects + content[idx:]
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Successfully appended to data.js")
else:
    print("Failed to find ];")
