const fs = require('fs');
const path = require('path');

async function appendEnglishSubject() {
    const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';
    console.log("Reading data.js from " + dataPath);
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    // 1. Prepare the English subject object
    const englishSubject = {
        name: "English",
        icon: "fa-language",
        subcategories: [
            {
                category: "Prepositions & Phrasal Verbs",
                icon: "fa-pen-clip",
                questions: [
                    { q: "He was accused ___ stealing the money.", options: ["with", "for", "of", "in"], answer: 2, explanation: "The correct preposition after 'accused' is 'of'." },
                    { q: "She is good ___ playing the piano.", options: ["at", "in", "with", "on"], answer: 0, explanation: "'Good at' is the correct phrase for skills." },
                    { q: "You must look ___ the word in the dictionary.", options: ["up", "into", "for", "down"], answer: 0, explanation: "'Look up' means to search for information." },
                    { q: "I am looking forward ___ seeing you.", options: ["in", "to", "for", "at"], answer: 1, explanation: "The phrase 'look forward' is followed by 'to'." },
                    { q: "The meeting was called ___ due to bad weather.", options: ["out", "in", "off", "up"], answer: 2, explanation: "'Call off' means to cancel." },
                    { q: "He is addicted ___ smoking.", options: ["with", "for", "to", "in"], answer: 2, explanation: "'Addicted to' is the correct prepositional phrase." },
                    { q: "She takes ___ her mother in behaviour.", options: ["after", "up", "with", "for"], answer: 0, explanation: "'Take after' means to resemble." },
                    { q: "We should abide ___ the rules of the institution.", options: ["with", "in", "by", "to"], answer: 2, explanation: "'Abide by' means to accept or follow." },
                    { q: "He passed ___ quietly in his sleep.", options: ["out", "away", "over", "by"], answer: 1, explanation: "'Pass away' is a polite way of saying 'die'." },
                    { q: "I agree ___ you on this point.", options: ["to", "with", "for", "on"], answer: 1, explanation: "You 'agree with' a person and 'agree to' a proposal." }
                ]
            },
            {
                category: "One Word Substitution",
                icon: "fa-spell-check",
                questions: [
                    { q: "A person who does not believe in the existence of God.", options: ["Atheist", "Altruist", "Agnostic", "Ascetic"], answer: 0, explanation: "An Atheist rejects the belief in deities." },
                    { q: "A life history of a person written by himself.", options: ["Biography", "Calligraphy", "Autobiography", "Bibliography"], answer: 2, explanation: "An autobiography is written by the subject themselves." },
                    { q: "One who possesses many talents.", options: ["Versatile", "Gifted", "Exceptional", "Unique"], answer: 0, explanation: "A versatile person is capable of doing many things." },
                    { q: "A person who looks at the dark side of things.", options: ["Optimist", "Pessimist", "Pacifist", "Philanthropist"], answer: 1, explanation: "A pessimist tends to see the worst aspect of things." },
                    { q: "A disease which spreads by contact.", options: ["Infectious", "Contagious", "Fatal", "Incurable"], answer: 1, explanation: "Contagious diseases are spread from one person or organism to another." },
                    { q: "A handwriting by which cannot be read.", options: ["Illegible", "Inevitable", "Illegal", "Illiterate"], answer: 0, explanation: "Illegible refers to text that is not clear enough to be read." },
                    { q: "A place where animals are killed for food.", options: ["Abattoir", "Apiary", "Aquarium", "Arena"], answer: 0, explanation: "An abattoir is a slang/technical term for a slaughterhouse." },
                    { q: "Study of insects is called:", options: ["Ornithology", "Entomology", "Etymology", "Geology"], answer: 1, explanation: "Entomology is the scientific study of insects." },
                    { q: "A person who collects stamps.", options: ["Numismatist", "Philatelist", "Botanist", "Philanthropist"], answer: 1, explanation: "A philatelist studies and collects postage stamps." },
                    { q: "A Government by the rich.", options: ["Autocracy", "Aristocracy", "Plutocracy", "Bureaucracy"], answer: 2, explanation: "Plutocracy is a society that is ruled or controlled by people of great wealth." }
                ]
            },
            {
                category: "Parts of Speech",
                icon: "fa-font",
                questions: [
                    { q: "He runs 'fast'. The word 'fast' is a/an:", options: ["Adjective", "Adverb", "Noun", "Verb"], answer: 1, explanation: "Here 'fast' modifies the verb 'runs', so it is an Adverb." },
                    { q: "The 'beauty' of the scene is mesmerizing. The word 'beauty' is a/an:", options: ["Adjective", "Verb", "Noun", "Pronoun"], answer: 2, explanation: "Beauty is an abstract noun here." },
                    { q: "'Alas!' We have lost the match. The word 'Alas' is a/an:", options: ["Conjunction", "Preposition", "Interjection", "Adverb"], answer: 2, explanation: "Alas expresses sudden emotion, making it an Interjection." },
                    { q: "She is a 'brilliant' student. The word 'brilliant' is a/an:", options: ["Adverb", "Adjective", "Noun", "Verb"], answer: 1, explanation: "It modifies the noun 'student'." },
                    { q: "I will call you 'after' I arrive. Here 'after' functions as a/an:", options: ["Preposition", "Conjunction", "Adverb", "Adjective"], answer: 1, explanation: "It connects two clauses, functioning as a conjunction." },
                    { q: "They 'themselves' admitted their guilt. The word 'themselves' is a/an:", options: ["Reflexive Pronoun", "Emphatic Pronoun", "Personal Pronoun", "Relative Pronoun"], answer: 1, explanation: "It is used for emphasis directly after the subject." },
                    { q: "Water 'boils' at 100 degrees. The word 'boils' is a/an:", options: ["Transitive Verb", "Intransitive Verb", "Adjective", "Noun"], answer: 1, explanation: "It does not require a direct object, so it is an Intransitive Verb." },
                    { q: "He spoke 'loudly'. The word 'loudly' is a/an:", options: ["Adjective", "Adverb of manner", "Adverb of time", "Adverb of place"], answer: 1, explanation: "It tells 'how' the action was performed." },
                    { q: "The book is 'on' the table. The word 'on' is a/an:", options: ["Preposition", "Conjunction", "Adverb", "Adjective"], answer: 0, explanation: "It shows the relationship/position of the book and the table." },
                    { q: "'Honesty' is the best policy. The word 'Honesty' is an example of:", options: ["Proper Noun", "Common Noun", "Abstract Noun", "Collective Noun"], answer: 2, explanation: "Honesty is a concept/quality, hence an Abstract Noun." }
                ]
            },
            {
                category: "Sentence Structure",
                icon: "fa-align-left",
                questions: [
                    { q: "Identify the sentence structure: 'I wanted to go to the park, but it started raining.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 1, explanation: "Two independent clauses joined by coordinating conjunction 'but'." },
                    { q: "Identify the sentence structure: 'Because she was late, she missed the train.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 2, explanation: "It has one dependent clause (Because she...) and one independent clause." },
                    { q: "Identify the sentence structure: 'The sun is shining brightly.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 0, explanation: "It consists of only one independent clause." },
                    { q: "Identify the sentence structure: 'Even though he was tired, he finished his work, and he went to the gym.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, explanation: "It has a dependent clause and two independent clauses joined by 'and'." },
                    { q: "Which of the following is a Simple sentence?", options: ["I like tea, and he likes coffee.", "The boy who is wearing a red shirt is my brother.", "The dogs barked loudly at the stranger.", "If you study hard, you will pass."], answer: 2, explanation: "Option C consists of a single independent clause without any dependent clauses or conjunctions linking main clauses." },
                    { q: "Identify the sentence structure: 'Whenever I see her, I say hello.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 2, explanation: "Dependent clause (Whenever...) + Independent clause." },
                    { q: "Identify the sentence structure: 'She likes reading, but her brother prefers watching TV.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 1, explanation: "Two independent clauses joined by 'but'." },
                    { q: "A sentence containing one independent clause and at least one dependent clause is called:", options: ["Simple Sentence", "Compound Sentence", "Complex Sentence", "Compound-Complex Sentence"], answer: 2, explanation: "By definition, this forms a Complex sentence." },
                    { q: "Identify the structure: 'The man bought a car.'", options: ["Simple", "Compound", "Complex", "Fragment"], answer: 0, explanation: "It has one subject and one predicate." },
                    { q: "Identify the structure: 'Since it is cold outside, I will wear a jacket, but I will not wear gloves.'", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, explanation: "Dependent clause + two dependent clauses." }
                ]
            },
            {
                category: "Reading Comprehension",
                icon: "fa-book-open-reader",
                questions: [
                    { q: "Read the passage: 'The Amazon rainforest is the largest tropical rainforest in the world... It produces 20% of the Earth's oxygen.'<br><br>Question: What percentage of the Earth's oxygen comes from the Amazon?", options: ["10%", "20%", "30%", "None of the above"], answer: 1, explanation: "The passage explicitly states 'It produces 20% of the Earth's oxygen'." },
                    { q: "Read the passage: 'The Amazon rainforest is the largest tropical rainforest in the world... It produces 20% of the Earth's oxygen.'<br><br>Question: Based on the passage, the Amazon can be described as:", options: ["A desert", "A vital source of oxygen", "A small forest", "A mountain range"], answer: 1, explanation: "Since it produces 20% of Earth's oxygen, it is a vital source." },
                    { q: "Passage: 'Albert Einstein was a theoretical physicist who developed the theory of relativity...'<br><br>Question: Einstein is best known for developing:", options: ["Quantum mechanics", "The theory of relativity", "Gravity laws", "Telescopes"], answer: 1, explanation: "The passage states 'developed the theory of relativity'." },
                    { q: "Passage: 'Water covers about 71% of the Earth's surface... Most of it is in the oceans.'<br><br>Question: Where is the majority of Earth's water located?", options: ["Lakes", "Rivers", "Oceans", "Glaciers"], answer: 2, explanation: "The passage clearly says 'Most of it is in the oceans'." },
                    { q: "Passage: 'Lions are large carnivorous felines known for their social structure, living in groups called prides.'<br><br>Question: What is a group of lions called?", options: ["A herd", "A pack", "A pride", "A flock"], answer: 2, explanation: "The passage states they live in groups called 'prides'." },
                    { q: "Passage: 'Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.'<br><br>Question: Mount Everest is located in which mountain range?", options: ["Alps", "Rockies", "Andes", "Himalayas"], answer: 3, explanation: "The text specifies it is located in the Himalayas." },
                    { q: "Passage: 'Photosynthesis is the process used by plants, algae and certain bacteria to harness energy from sunlight and turn it into chemical energy.'<br><br>Question: What directly provides the initial energy for photosynthesis?", options: ["Soil", "Sunlight", "Water", "Oxygen"], answer: 1, explanation: "They 'harness energy from sunlight'." },
                    { q: "Passage: 'The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states...'<br><br>Question: Where was the Great Wall primarily built?", options: ["Southern borders", "Eastern borders", "Western borders", "Northern borders"], answer: 3, explanation: "Built across the 'northern borders'." },
                    { q: "Passage: 'Shakespeare is widely regarded as the greatest writer in the English language and the world's greatest dramatist.'<br><br>Question: Shakespeare is primarily known as a/an:", options: ["Novelist", "Scientist", "Dramatist", "Historian"], answer: 2, explanation: "The passage states he is 'the world's greatest dramatist'." },
                    { q: "Passage: 'Global warming refers to the long-term rise in the average temperature of the Earth's climate system.'<br><br>Question: Global warming involves the rise in:", options: ["Average temperature", "Sea levels directly", "Wind speeds", "Earthquake frequencies"], answer: 0, explanation: "It refers to the rise in 'average temperature'." }
                ]
            }
        ]
    };

    const insertionPoint = /\s*\];\s*$/;
    const englishString = JSON.stringify(englishSubject, null, 4);
    const finalContent = fileContent.replace(insertionPoint, ',\n' + englishString + '\n];\n');

    console.log("Writing changes to " + dataPath);
    fs.writeFileSync(dataPath, finalContent, 'utf8');

    console.log("Successfully appended English Subject to data.js!");
}

appendEnglishSubject();
