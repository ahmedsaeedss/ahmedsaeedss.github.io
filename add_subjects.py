import json

new_subjects = [
    {
        "name": "English",
        "icon": "fa-spell-check",
        "subcategories": [
            {
                "category": "Vocabulary (Synonyms & Antonyms)",
                "icon": "fa-language",
                "questions": [
                    { "q": "What is the synonym of 'Abundant'?", "options": ["Scarce", "Plentiful", "Rare", "Thin"], "answer": 1, "explanation": "'Abundant' means existing or available in large quantities; plentiful." },
                    { "q": "What is the antonym of 'Diligent'?", "options": ["Hardworking", "Lazy", "Careful", "Attentive"], "answer": 1, "explanation": "'Diligent' means showing steady and earnest care and effort; the opposite is lazy." },
                    { "q": "Choose the correct synonym for 'Lucid'.", "options": ["Confusing", "Clear", "Vague", "Dark"], "answer": 1, "explanation": "'Lucid' means expressed clearly; easy to understand." },
                    { "q": "What is the antonym of 'Optimistic'?", "options": ["Hopeful", "Pessimistic", "Joyful", "Happy"], "answer": 1, "explanation": "An optimistic person expects good things; a pessimistic person expects bad things." },
                    { "q": "Find the synonym for 'Candid'.", "options": ["Deceitful", "Frank", "Hidden", "Secretive"], "answer": 1, "explanation": "'Candid' means truthful and straightforward; frank." },
                    { "q": "What is the antonym of 'Barren'?", "options": ["Empty", "Fertile", "Dry", "Desolate"], "answer": 1, "explanation": "'Barren' means too poor to produce much vegetation; 'fertile' is the opposite." },
                    { "q": "Choose the synonym for 'Ephemeral'.", "options": ["Permanent", "Long-lasting", "Short-lived", "Eternal"], "answer": 2, "explanation": "'Ephemeral' means lasting for a very short time." },
                    { "q": "What is the antonym of 'Benevolent'?", "options": ["Kind", "Generous", "Malevolent", "Friendly"], "answer": 2, "explanation": "Benevolent means well-meaning and kindly; malevolent means having a wish to do evil to others." },
                    { "q": "Find the synonym for 'Mitigate'.", "options": ["Aggravate", "Worsen", "Alleviate", "Increase"], "answer": 2, "explanation": "'Mitigate' means make (something bad) less severe, serious, or painful." },
                    { "q": "What is the antonym of 'Obscure'?", "options": ["Hidden", "Clear", "Unknown", "Uncertain"], "answer": 1, "explanation": "'Obscure' means not discovered or known about; uncertain. The opposite is clear." }
                ]
            },
            {
                "category": "Grammar & Prepositions",
                "icon": "fa-font",
                "questions": [
                    { "q": "He is good ___ mathematics.", "options": ["in", "at", "with", "for"], "answer": 1, "explanation": "The correct preposition after 'good' to indicate skill or ability is 'at'." },
                    { "q": "I am looking forward ___ seeing you.", "options": ["to", "for", "in", "about"], "answer": 0, "explanation": "'Look forward to' is a phrasal verb meaning to await eagerly." },
                    { "q": "She has been living here ___ 2015.", "options": ["from", "for", "since", "until"], "answer": 2, "explanation": "'Since' is used to refer to a specific point in time in the past when the action began." },
                    { "q": "He prefers tea ___ coffee.", "options": ["than", "over", "to", "against"], "answer": 2, "explanation": "The verb 'prefer' takes the preposition 'to' (prefer X to Y)." },
                    { "q": "They congratulated him ___ his success.", "options": ["for", "on", "about", "with"], "answer": 1, "explanation": "You congratulate someone 'on' their achievement." },
                    { "q": "I agree ___ you on this matter.", "options": ["with", "to", "on", "for"], "answer": 0, "explanation": "You agree 'with' a person, and agree 'to' a proposal." },
                    { "q": "She was accused ___ theft.", "options": ["for", "of", "with", "about"], "answer": 1, "explanation": "The correct preposition after 'accused' is 'of'." },
                    { "q": "He died ___ cholera.", "options": ["from", "of", "by", "with"], "answer": 1, "explanation": "You die 'of' a disease, and 'from' an external cause (like an accident)." },
                    { "q": "You should abide ___ the rules.", "options": ["by", "with", "to", "for"], "answer": 0, "explanation": "'Abide by' means to accept or act in accordance with a rule or decision." },
                    { "q": "He is addicted ___ smoking.", "options": ["with", "to", "for", "in"], "answer": 1, "explanation": "The correct preposition after 'addicted' is 'to'." }
                ]
            }
        ]
    },
    {
        "name": "Everyday Science",
        "icon": "fa-flask",
        "subcategories": [
            {
                "category": "General Biology",
                "icon": "fa-dna",
                "questions": [
                    { "q": "Which part of the cell is known as the powerhouse?", "options": ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], "answer": 2, "explanation": "Mitochondria generate most of the chemical energy needed to power the cell." },
                    { "q": "The process by which plants make their own food is called?", "options": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], "answer": 1, "explanation": "Photosynthesis is the process used by plants to convert light energy into chemical energy." },
                    { "q": "What is the main function of red blood cells?", "options": ["Fight infection", "Carry oxygen", "Clot blood", "Produce antibodies"], "answer": 1, "explanation": "Red blood cells are responsible for carrying oxygen from the lungs to the body's tissues." },
                    { "q": "Which vitamin is synthesized by the human body upon exposure to sunlight?", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "answer": 3, "explanation": "Vitamin D is produced by the body when skin is exposed to sunlight." },
                    { "q": "The longest bone in the human body is?", "options": ["Tibia", "Fibula", "Femur", "Humerus"], "answer": 2, "explanation": "The femur, or thigh bone, is the longest and strongest bone in the body." },
                    { "q": "Diabetes is caused by the malfunctioning of which organ?", "options": ["Liver", "Kidney", "Pancreas", "Heart"], "answer": 2, "explanation": "The pancreas produces insulin, which regulates blood sugar levels; malfunctioning leads to diabetes." },
                    { "q": "What is the basic unit of life?", "options": ["Tissue", "Organ", "Cell", "Organ system"], "answer": 2, "explanation": "The cell is the basic structural, functional, and biological unit of all known organisms." },
                    { "q": "Which blood group is known as the universal donor?", "options": ["A", "B", "AB", "O"], "answer": 3, "explanation": "Type O negative blood is often called the universal donor type." },
                    { "q": "The structural and functional unit of the kidney is the?", "options": ["Neuron", "Nephron", "Alveolus", "Villus"], "answer": 1, "explanation": "The nephron is the microscopic structural and functional unit of the kidney." },
                    { "q": "Which gas is most abundant in the Earth's atmosphere?", "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], "answer": 2, "explanation": "Nitrogen constitutes about 78% of the Earth's atmosphere." }
                ]
            },
            {
                "category": "Physics Basics",
                "icon": "fa-magnet",
                "questions": [
                    { "q": "What is the SI unit of Force?", "options": ["Joule", "Watt", "Newton", "Pascal"], "answer": 2, "explanation": "The SI unit of force is the newton (N)." },
                    { "q": "The speed of light in a vacuum is approximately?", "options": ["300,000 km/s", "150,000 km/s", "299,792 km/h", "1,000,000 m/s"], "answer": 0, "explanation": "The speed of light is exactly 299,792,458 meters per second (approx 300,000 km/s)." },
                    { "q": "Which law states that 'for every action, there is an equal and opposite reaction'?", "options": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravity"], "answer": 2, "explanation": "This is Newton's third law of motion." },
                    { "q": "What type of lens is used to correct myopia (short-sightedness)?", "options": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], "answer": 1, "explanation": "A concave (diverging) lens is used to correct short-sightedness." },
                    { "q": "Sound travels fastest in which medium?", "options": ["Air", "Water", "Vacuum", "Steel (Solid)"], "answer": 3, "explanation": "Sound travels faster in solids because the molecules are closer together." },
                    { "q": "What is the SI unit of electric current?", "options": ["Volt", "Ohm", "Ampere", "Coulomb"], "answer": 2, "explanation": "The SI base unit of electric current is the ampere (A)." },
                    { "q": "The property of matter by which it continues in its existing state of rest or uniform motion is called?", "options": ["Momentum", "Inertia", "Friction", "Gravity"], "answer": 1, "explanation": "Inertia is the resistance of any physical object to any change in its velocity." },
                    { "q": "Which instrument is used to measure atmospheric pressure?", "options": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], "answer": 1, "explanation": "A barometer is a scientific instrument used to measure atmospheric pressure." },
                    { "q": "Who discovered the law of planetary motion?", "options": ["Galileo", "Newton", "Kepler", "Einstein"], "answer": 2, "explanation": "Johannes Kepler published his three laws of planetary motion between 1609 and 1619." },
                    { "q": "The energy possessed by a body due to its position is called?", "options": ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Mechanical Energy"], "answer": 1, "explanation": "Potential energy is the hidden energy in an object because of its position or state." }
                ]
            }
        ]
    }
]

main_file = 'data.js'
with open(main_file, 'r', encoding='utf-8') as f:
    content = f.read()

last_bracket = content.rfind('];')
if last_bracket != -1:
    before = content[:last_bracket]
    before = before.rstrip()
    
    if before.endswith('}'):
        before += ','
        
    json_str = json.dumps(new_subjects, indent=4)
    # remove the brackets from json array to append objects directly
    json_str = json_str[json_str.find('[')+1 : json_str.rfind(']')]
    
    # replace double quotes with no quotes for keys to match JS object syntax
    # Actually, valid JSON is perfectly fine in JS. We'll leave it as JSON.
    
    final_content = before + "\n" + json_str + "\n];\n"
    
    with open(main_file, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print('Successfully appended English and Everyday Science to data.js')
else:
    print('Error: Could not find the end of the array in data.js')
