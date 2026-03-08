const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function add120Questions() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let englishSubj = arr.find(s => s.name === "English");
        if (!englishSubj) {
            console.log("English subject not found!");
            return;
        }

        // GENERATE 40 OWS
        const oneWord = [
            { q: "One who loves books is called a/an:", options: ["Bibliophile", "Optimist", "Philanthropist", "Misogynist"], answer: 0, explanation: "A bibliophile is a person who has a great love of books." },
            { q: "One who knows everything is called:", options: ["Omnipresent", "Omniscient", "Omnipotent", "Infallible"], answer: 1, explanation: "Omniscient means all-knowing." },
            { q: "One who walks in sleep is called a/an:", options: ["Somnambulist", "Egoist", "Introvert", "Insomniac"], answer: 0, explanation: "Somnambulism is sleepwalking." },
            { q: "One who cannot read or write is:", options: ["Illegitimate", "Illiterate", "Incorrigible", "Invincible"], answer: 1, explanation: "Illiterate means unable to read or write." },
            { q: "One who leaves his own country to settle in another:", options: ["Immigrant", "Emigrant", "Tourist", "Foreigner"], answer: 1, explanation: "Emigrant leaves, Immigrant arrives." },
            { q: "One who comes to a country to settle there:", options: ["Emigrant", "Immigrant", "Alien", "Citizen"], answer: 1, explanation: "An immigrant is a person who comes to live permanently in a foreign country." },
            { q: "One who is new to a profession:", options: ["Veteran", "Novice", "Expert", "Professional"], answer: 1, explanation: "A novice is a beginner." },
            { q: "One who compiles a dictionary:", options: ["Cartographer", "Lexicographer", "Choreographer", "Photographer"], answer: 1, explanation: "Lexicographer compiles dictionaries." },
            { q: "One who speaks many languages:", options: ["Linguist", "Polyglot", "Bilingual", "Monolingual"], answer: 1, explanation: "Polyglot knows or uses several languages." },
            { q: "One who hates women:", options: ["Misogynist", "Misanthrope", "Philanthropist", "Monogamist"], answer: 0, explanation: "Misogynist is a person who dislikes women." },
            { q: "A person living at the same time as another:", options: ["Colleague", "Contemporary", "Companion", "Ancestor"], answer: 1, explanation: "Contemporary refers to living or occurring at the same time." },
            { q: "A person pretending to be what he is not:", options: ["Hypocrite", "Optimist", "Pessimist", "Cynic"], answer: 0, explanation: "A hypocrite pretends to have virtues they do not actually possess." },
            { q: "A person who completely abstains from alcohol:", options: ["Teetotaler", "Drunkard", "Addict", "Socialite"], answer: 0, explanation: "Teetotaler abstains entirely from alcohol." },
            { q: "A person indifferent to pleasure or pain:", options: ["Stoic", "Cynic", "Egoist", "Sadist"], answer: 0, explanation: "Stoic endures pain or hardship without showing feelings." },
            { q: "A life history written by someone else:", options: ["Autobiography", "Biography", "Bibliography", "Calligraphy"], answer: 1, explanation: "A biography is an account of someone's life written by someone else." },
            { q: "A place where birds are kept:", options: ["Apiary", "Aquarium", "Aviary", "Asylum"], answer: 2, explanation: "Aviaries are large enclosures for birds." },
            { q: "A place where bees are kept:", options: ["Aviary", "Apiary", "Hutch", "Kennel"], answer: 1, explanation: "An apiary is a location where beehives are kept." },
            { q: "An office with no work but high pay:", options: ["Honorary", "Sinecure", "Volunteer", "Part-time"], answer: 1, explanation: "Sinecure is a position requiring little or no work but giving status/benefit." },
            { q: "Incapable of being corrected:", options: ["Invincible", "Incorrigible", "Infallible", "Inaudible"], answer: 1, explanation: "Incorrigible means not able to be corrected or improved." },
            { q: "Incapable of being defeated:", options: ["Indestructible", "Invincible", "Infallible", "Incurable"], answer: 1, explanation: "Invincible is too powerful to be defeated." },
            { q: "Incapable of being destroyed:", options: ["Indestructible", "Infallible", "Invincible", "Incorrigible"], answer: 0, explanation: "Cannot be destroyed." },
            { q: "Incapable of making errors:", options: ["Infallible", "Incorrigible", "Inaudible", "Inevitable"], answer: 0, explanation: "Infallible means incapable of making mistakes." },
            { q: "A speech delivered without preparation:", options: ["Extempore", "Debate", "Elocution", "Maiden"], answer: 0, explanation: "Extempore is spoken or done without preparation." },
            { q: "A book published after the death of its author:", options: ["Anonymous", "Posthumous", "Epitaph", "Obituary"], answer: 1, explanation: "Posthumous relates to occurring after death." },
            { q: "A medicine to counteract poison:", options: ["Antibiotic", "Antidote", "Antiseptic", "Antibody"], answer: 1, explanation: "Antidote neutralizes poison." },
            { q: "A sound that cannot be heard:", options: ["Inaudible", "Invisible", "Illegible", "Inevitable"], answer: 0, explanation: "Inaudible means impossible to hear." },
            { q: "A thing which can be easily broken:", options: ["Fragile", "Rigid", "Solid", "Sturdy"], answer: 0, explanation: "Fragile means easily broken or damaged." },
            { q: "Government by the people:", options: ["Monarchy", "Autocracy", "Democracy", "Oligarchy"], answer: 2, explanation: "Democracy is government by the whole population." },
            { q: "Government by a king or queen:", options: ["Democracy", "Monarchy", "Plutocracy", "Aristocracy"], answer: 1, explanation: "Monarchy has a monarch at the head." },
            { q: "Government by a few people:", options: ["Autocracy", "Oligarchy", "Democracy", "Plutocracy"], answer: 1, explanation: "Oligarchy is a small group having control." },
            { q: "An assembly of listeners:", options: ["Audience", "Spectators", "Mob", "Crowd"], answer: 0, explanation: "Audience gathers to listen to or watch an event." },
            { q: "One who believes in fate:", options: ["Fatalist", "Pessimist", "Optimist", "Egoist"], answer: 0, explanation: "A fatalist believes that all events are predetermined." },
            { q: "One who hates mankind:", options: ["Misogynist", "Misanthrope", "Philanthropist", "Altruist"], answer: 1, explanation: "A misanthrope avoids human society." },
            { q: "One who can use either hand with ease:", options: ["Ambidextrous", "Versatile", "Dexterous", "Agile"], answer: 0, explanation: "Ambidextrous means able to use right and left hands equally well." },
            { q: "One who is all powerful:", options: ["Omniscient", "Omnipresent", "Omnipotent", "Infallible"], answer: 2, explanation: "Omnipotent means having unlimited power." },
            { q: "One who is present everywhere:", options: ["Omnipotent", "Omnipresent", "Omniscient", "Invisible"], answer: 1, explanation: "Omnipresent means widely or constantly encountered." },
            { q: "Government by the wealthy:", options: ["Democracy", "Plutocracy", "Oligarchy", "Autocracy"], answer: 1, explanation: "Plutocracy is government by the wealthy." },
            { q: "A list of books:", options: ["Catalogue", "Dictionary", "Directory", "Glossary"], answer: 0, explanation: "Catalogue is a complete list of items." },
            { q: "Animals that eat meat:", options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"], answer: 1, explanation: "Carnivores eat meat." },
            { q: "Animals that live both on land and in water:", options: ["Amphibians", "Reptiles", "Mammals", "Birds"], answer: 0, explanation: "Amphibians can live in both environments." }
        ];

        // 40 Parts of Speech
        const partsOfSpeech = [
            { q: "Identify the noun in the sentence: 'Honesty is the best policy.'", options: ["is", "Honesty", "best", "policy"], answer: 1, explanation: "'Honesty' is an abstract noun." },
            { q: "Identify the pronoun: 'She gave him the book which was on the table.'", options: ["gave", "book", "which", "table"], answer: 2, explanation: "'Which' is a relative pronoun." },
            { q: "Identify the verb: 'The dog barked loudly at the stranger.'", options: ["dog", "loudly", "stranger", "barked"], answer: 3, explanation: "'Barked' is the action taking place." },
            { q: "Identify the adjective: 'It was a huge mistake.'", options: ["It", "was", "huge", "mistake"], answer: 2, explanation: "'Huge' modifies the noun mistake." },
            { q: "Identify the adverb: 'She sings beautifully.'", options: ["She", "sings", "beautifully", "is"], answer: 2, explanation: "It describes how she sings." },
            { q: "Identify the preposition: 'The cat jumped over the wall.'", options: ["cat", "jumped", "over", "wall"], answer: 2, explanation: "'Over' shows the location relationship." },
            { q: "Identify the conjunction: 'I wanted to go, but I was tired.'", options: ["wanted", "but", "was", "tired"], answer: 1, explanation: "'But' connects the two clauses." },
            { q: "Identify the interjection: 'Wow! That is amazing.'", options: ["Wow", "That", "is", "amazing"], answer: 0, explanation: "Wow expresses sudden emotion." },
            { q: "Which of the following is an Abstract Noun?", options: ["Table", "Honesty", "Lahore", "Team"], answer: 1, explanation: "Honesty cannot be touched; it is a concept." },
            { q: "Which of the following is a Proper Noun?", options: ["City", "Country", "Pakistan", "Boy"], answer: 2, explanation: "Pakistan is a specific name of a country." },
            { q: "Identify the Collective Noun:", options: ["Flock", "Bird", "Sky", "Fly"], answer: 0, explanation: "Flock represents a group of birds." },
            { q: "What part of speech is 'Himself'?", options: ["Adjective", "Adverb", "Reflexive Pronoun", "Noun"], answer: 2, explanation: "Words ending in 'self' or 'selves' are reflexive or emphatic pronouns." },
            { q: "What part of speech is 'Quickly'?", options: ["Adjective", "Adverb", "Verb", "Preposition"], answer: 1, explanation: "It tells how an action is done." },
            { q: "What part of speech is 'Although'?", options: ["Preposition", "Conjunction", "Adverb", "Adjective"], answer: 1, explanation: "It is a subordinating conjunction." },
            { q: "In the sentence 'He is a tall boy', what is 'tall'?", options: ["Noun", "Adjective", "Adverb", "Verb"], answer: 1, explanation: "It modifies the noun 'boy'." },
            { q: "In 'I will meet you tomorrow', what is 'tomorrow'?", options: ["Noun", "Preposition", "Adverb of time", "Adjective"], answer: 2, explanation: "It indicates when the action will happen." },
            { q: "'Alas! He is dead.' What is 'Alas'?", options: ["Noun", "Interjection", "Adjective", "Adverb"], answer: 1, explanation: "Alas is an expression of sorrow." },
            { q: "'Neither Ali nor Asad came.' What are 'Neither...nor'?", options: ["Prepositions", "Adverbs", "Correlative Conjunctions", "Adjectives"], answer: 2, explanation: "They work in pairs to join elements." },
            { q: "'She walked across the street.' What is 'across'?", options: ["Adverb", "Adjective", "Preposition", "Conjunction"], answer: 2, explanation: "It shows the direction/location of the walk." },
            { q: "'He is writing a letter.' What is 'writing'?", options: ["Noun", "Main Verb", "Helping Verb", "Adjective"], answer: 1, explanation: "It is the main action." },
            { q: "'They have been playing since morning.' What is 'since'?", options: ["Preposition", "Adverb", "Conjunction", "Adjective"], answer: 0, explanation: "Since shows the starting point of time." },
            { q: "Identify the part of speech of 'beauty' in 'Her beauty is unmatched.'", options: ["Adjective", "Noun", "Verb", "Adverb"], answer: 1, explanation: "Beauty is an abstract noun here." },
            { q: "Identify the part of speech of 'beautiful' in 'She is beautiful.'", options: ["Noun", "Adjective", "Verb", "Adverb"], answer: 1, explanation: "Beautiful is an adjective describing her." },
            { q: "'I looked everywhere for my keys.' What is 'everywhere'?", options: ["Adjective", "Preposition", "Adverb of place", "Noun"], answer: 2, explanation: "It tells 'where' the action occurred." },
            { q: "What is 'My' in the phrase 'My book'?", options: ["Demonstrative Adjective", "Possessive Adjective", "Noun", "Adverb"], answer: 1, explanation: "It shows ownership and modifies the noun book." },
            { q: "'We must respect our elders.' What is 'respect'?", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 1, explanation: "It is the action to be performed." },
            { q: "'He is very smart.' What is 'very'?", options: ["Adjective", "Adverb of degree", "Preposition", "Conjunction"], answer: 1, explanation: "It modifies the adjective 'smart'." },
            { q: "'The man who called me was my uncle.' What is 'who'?", options: ["Interrogative Pronoun", "Relative Pronoun", "Adjective", "Adverb"], answer: 1, explanation: "It connects the clause back to 'The man'." },
            { q: "'Hurrah! We won.' What is 'Hurrah'?", options: ["Interjection", "Conjunction", "Adverb", "Adjective"], answer: 0, explanation: "It expresses sudden joy." },
            { q: "'He sat between Ali and Umar.' What is 'between'?", options: ["Adverb", "Conjunction", "Preposition", "Adjective"], answer: 2, explanation: "It shows the positional relationship." },
            { q: "'Because it was raining, I stayed home.' What is 'Because'?", options: ["Preposition", "Conjunction", "Adverb", "Interjection"], answer: 1, explanation: "It connects the dependent clause to the main clause." },
            { q: "Identify the Verb: 'He believes whatever she says.'", options: ["He", "believes", "whatever", "she"], answer: 1, explanation: "Believes is the mental action taking place." },
            { q: "Identify the Noun in 'Information is power.'", options: ["Information", "is", "power", "Both A and C"], answer: 3, explanation: "Both information and power are nouns." },
            { q: "Identify the Adverb in 'He seldom visits us.'", options: ["He", "seldom", "visits", "us"], answer: 1, explanation: "Seldom tells the frequency of the visits." },
            { q: "In 'In spite of the rain, they played', 'in spite of' is:", options: ["Compound Preposition", "Conjunction", "Adverb", "Adjective"], answer: 0, explanation: "It is a phrase acting as a preposition." },
            { q: "What part of speech is 'Water' in 'Water the plants'?", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 1, explanation: "Here 'water' is an imperative verb commanding an action." },
            { q: "'She is a well-known writer.' What is 'well-known'?", options: ["Adverb", "Noun", "Compound Adjective", "Preposition"], answer: 2, explanation: "It modifies 'writer'." },
            { q: "'He ran fast enough to catch the train.' What is 'enough'?", options: ["Adjective", "Adverb", "Noun", "Preposition"], answer: 1, explanation: "It modifies the adverb 'fast'." },
            { q: "'Ouch! I burnt my finger.' What is 'Ouch'?", options: ["Adjective", "Adverb", "Interjection", "Noun"], answer: 2, explanation: "Expression of pain." },
            { q: "'The red car is mine.' What is 'red'?", options: ["Noun", "Adjective", "Verb", "Pronoun"], answer: 1, explanation: "It describes the car." }
        ];

        // 40 Reading Comprehension
        const readingComp = [
            // Passage 1: Internet
            { q: "Read the passage: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to serve billions of users worldwide.'<br><br>Question: What does the Internet connect?", options: ["Telephones", "Computer networks", "Televisions", "Satellites directly"], answer: 1, explanation: "It connects computer networks." },
            { q: "Read the passage: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to serve billions of users worldwide.'<br><br>Question: How many users does it serve according to the text?", options: ["Millions", "Thousands", "Trillions", "Billions"], answer: 3, explanation: "The text says 'serve billions of users'." },
            { q: "Read the passage: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to serve billions of users worldwide.'<br><br>Question: Which protocol suite does it use?", options: ["Standard Internet protocol suite", "Local area protocol", "Regional protocol", "Wireless protocol"], answer: 0, explanation: "It uses the standard Internet protocol suite." },
            { q: "Read the passage: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to serve billions of users worldwide.'<br><br>Question: The Internet is described as a system that is:", options: ["Local", "Regional", "Global", "National"], answer: 2, explanation: "The passage calls it a 'global system'." },
            { q: "Read the passage: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to serve billions of users worldwide.'<br><br>Question: The networks in the Internet are described as:", options: ["Isolated", "Interconnected", "Independent", "Wireless"], answer: 1, explanation: "They are described as 'interconnected'." },

            // Passage 2: The Moon
            { q: "Read the passage: 'The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits.'<br><br>Question: What is the Moon in relation to Earth?", options: ["A star", "A planet", "An artificial satellite", "Its only natural satellite"], answer: 3, explanation: "Earth's only natural satellite." },
            { q: "Read the passage: 'The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits.'<br><br>Question: In terms of size among all satellites in the Solar system, where does the Moon rank?", options: ["First", "Second", "Third", "Fifth"], answer: 3, explanation: "It is the fifth largest." },
            { q: "Read the passage: 'The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits.'<br><br>Question: Relative to the size of its host planet, the Moon is:", options: ["The largest", "The smallest", "Average sized", "Not mentioned"], answer: 0, explanation: "It is the largest relative to the planet it orbits." },
            { q: "Read the passage: 'The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits.'<br><br>Question: The Solar System contains how many larger satellites than the Moon?", options: ["Three", "Four", "Five", "Six"], answer: 1, explanation: "Since it is the fifth largest, there are four larger ones." },
            { q: "Read the passage: 'The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits.'<br><br>Question: The passage implies that other planets:", options: ["Have no satellites", "May have artificial satellites", "May have multiple natural satellites", "Have satellite rings"], answer: 2, explanation: "Since the Moon is 'Earth's only', it implies others may have more." },

            // Passage 3: AI
            { q: "Passage: 'Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.'<br><br>Question: What does AI stand for?", options: ["Automated Intelligence", "Artificial intelligence", "Accurate Intelligence", "Active Intelligence"], answer: 1, explanation: "The text states Artificial intelligence." },
            { q: "Passage: 'Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.'<br><br>Question: Who or what displays pure natural intelligence?", options: ["Computers", "Machines", "Humans and animals", "Robots"], answer: 2, explanation: "Natural intelligence is displayed by humans and animals." },
            { q: "Passage: 'Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.'<br><br>Question: AI is demonstrated by:", options: ["Animals", "Plants", "Machines", "Humans"], answer: 2, explanation: "It is demonstrated by machines." },
            { q: "Passage: 'Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.'<br><br>Question: The relationship between natural and artificial intelligence is drawn as a:", options: ["Similarity", "Contrast (unlike)", "Identical pair", "None of the above"], answer: 1, explanation: "The word 'unlike' indicates a contrast." },
            { q: "Passage: 'Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.'<br><br>Question: A synonym for 'demonstrated' as used in this text is:", options: ["Hidden", "Shown", "Destroyed", "Ignored"], answer: 1, explanation: "Demonstrated means shown or displayed." },

            // Passage 4: Desert
            { q: "Passage: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.'<br><br>Question: What is a defining characteristic of a desert?", options: ["Heavy rainfall", "Little precipitation", "Dense forests", "Many rivers"], answer: 1, explanation: "Little precipitation occurs." },
            { q: "Passage: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.'<br><br>Question: The word 'hostile' in the passage means:", options: ["Friendly", "Unfavorable/Harsh", "Comfortable", "Inviting"], answer: 1, explanation: "Hostile means difficult or harsh." },
            { q: "Passage: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.'<br><br>Question: The landscape of a desert is described as:", options: ["Fertile", "Lush", "Barren", "Populated"], answer: 2, explanation: "Described as a barren area." },
            { q: "Passage: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.'<br><br>Question: Precipitation refers to:", options: ["Sunlight", "Sandstorms", "Rain or snow", "Wind"], answer: 2, explanation: "Precipitation means water falling from the sky." },
            { q: "Passage: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.'<br><br>Question: Which life forms find it hostile?", options: ["Plant and animal life", "Only plants", "Only animals", "Only humans"], answer: 0, explanation: "Plant and animal life." },

            // Passage 5: Water
            { q: "Passage: 'Water is a transparent, tasteless, odorless, and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms.'<br><br>Question: Which of these is NOT a property of water listed?", options: ["Transparent", "Tasteless", "Odorless", "Sweet"], answer: 3, explanation: "Sweet is not listed." },
            { q: "Passage: 'Water is a transparent, tasteless, odorless, and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms.'<br><br>Question: Water is the main constituent of:", options: ["Mountains", "Earth's streams, lakes, and oceans", "Deserts", "Stars"], answer: 1, explanation: "Streams, lakes, and oceans." },
            { q: "Passage: 'Water is a transparent, tasteless, odorless, and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms.'<br><br>Question: Water is described as entirely colorless.", options: ["True", "False", "It depends", "Not mentioned"], answer: 1, explanation: "False, it says 'nearly colorless'." },
            { q: "Passage: 'Water is a transparent, tasteless, odorless, and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms.'<br><br>Question: Water is also found in:", options: ["Rocks", "The fluids of most living organisms", "Fire", "Plastic"], answer: 1, explanation: "Fluids of most living organisms." },
            { q: "Passage: 'Water is a transparent, tasteless, odorless, and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms.'<br><br>Question: A synonym for 'constituent' is:", options: ["Opponent", "Component", "Obstacle", "Result"], answer: 1, explanation: "Constituent means a part or component." },

            // Passage 6: Everest
            { q: "Passage: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal and the other from the north in Tibet.'<br><br>Question: Who does Mount Everest attract?", options: ["Only beginners", "Surfers", "Many climbers", "Astronauts"], answer: 2, explanation: "Many climbers." },
            { q: "Passage: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal and the other from the north in Tibet.'<br><br>Question: How many MAIN climbing routes does the passage mention?", options: ["One", "Two", "Three", "Four"], answer: 1, explanation: "Two main climbing routes." },
            { q: "Passage: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal and the other from the north in Tibet.'<br><br>Question: The southeast route approaches from which country?", options: ["Tibet", "China", "India", "Nepal"], answer: 3, explanation: "Southeast in Nepal." },
            { q: "Passage: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal and the other from the north in Tibet.'<br><br>Question: The northern route approaches from:", options: ["Nepal", "Tibet", "Bhutan", "Pakistan"], answer: 1, explanation: "North from Tibet." },
            { q: "Passage: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal and the other from the north in Tibet.'<br><br>Question: What is a 'summit'?", options: ["The base of a mountain", "The highest point/peak", "A valley", "A river"], answer: 1, explanation: "Summit is the top." },

            // Passage 7: Sleep
            { q: "Passage: 'Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, and inhibition of nearly all voluntary muscles.'<br><br>Question: Sleep is an unnatural state.", options: ["True", "False", "Partially True", "Not stated"], answer: 1, explanation: "False, it is naturally recurring." },
            { q: "Passage: 'Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, and inhibition of nearly all voluntary muscles.'<br><br>Question: During sleep, consciousness is:", options: ["Heightened", "Lost completely", "Altered", "Unchanged"], answer: 2, explanation: "Consciousness is altered." },
            { q: "Passage: 'Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, and inhibition of nearly all voluntary muscles.'<br><br>Question: What happens to voluntary muscles during sleep?", options: ["They are exercised", "They are inhibited", "They become stronger", "They contract violently"], answer: 1, explanation: "They are inhibited." },
            { q: "Passage: 'Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, and inhibition of nearly all voluntary muscles.'<br><br>Question: Sensory activity is described as taking what state?", options: ["Heightened", "Relatively inhibited", "Completely shut down", "Painful"], answer: 1, explanation: "Relatively inhibited." },
            { q: "Passage: 'Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, and inhibition of nearly all voluntary muscles.'<br><br>Question: Which of these words is closest to 'inhibited'?", options: ["Increased", "Restrained/Suppressed", "Destroyed", "Created"], answer: 1, explanation: "Inhibited means restrained or suppressed." },

            // Passage 8: Global Warming
            { q: "Passage: 'Greenhouse gases cover the Earth and trap the sun's heat. This leads to global warming and climate change. The world is now warming faster than at any point in recorded history.'<br><br>Question: What do greenhouse gases trap?", options: ["Cold air", "The sun's heat", "Rainfall", "Clouds"], answer: 1, explanation: "They trap the sun's heat." },
            { q: "Passage: 'Greenhouse gases cover the Earth and trap the sun's heat. This leads to global warming and climate change. The world is now warming faster than at any point in recorded history.'<br><br>Question: Trapping the sun's heat leads to:", options: ["Cooling of oceans", "Global warming and climate change", "Better crop yields", "More earthquakes"], answer: 1, explanation: "Leads to global warming." },
            { q: "Passage: 'Greenhouse gases cover the Earth and trap the sun's heat. This leads to global warming and climate change. The world is now warming faster than at any point in recorded history.'<br><br>Question: How is the world warming compared to recorded history?", options: ["Slower", "At the exact same rate", "Faster", "It is not warming"], answer: 2, explanation: "Warming faster than at any point in recorded history." },
            { q: "Passage: 'Greenhouse gases cover the Earth and trap the sun's heat. This leads to global warming and climate change. The world is now warming faster than at any point in recorded history.'<br><br>Question: What are responsible for covering the Earth and trapping heat?", options: ["Clouds", "Ozone layer", "Greenhouse gases", "Meteorites"], answer: 2, explanation: "Greenhouse gases." },
            { q: "Passage: 'Greenhouse gases cover the Earth and trap the sun's heat. This leads to global warming and climate change. The world is now warming faster than at any point in recorded history.'<br><br>Question: The tone of the passage regarding global climate is:", options: ["Indifferent", "Humorous", "Serious/Concerned", "Joyful"], answer: 2, explanation: "It notes an unprecedented historical warming." }
        ];

        // Ensure we push these to the correct categories
        let owsCat = englishSubj.subcategories.find(c => c.category === "One Word Substitution");
        if (owsCat) {
            owsCat.questions = [...owsCat.questions, ...oneWord];
        }

        let posCat = englishSubj.subcategories.find(c => c.category === "Parts of Speech");
        if (posCat) {
            posCat.questions = [...posCat.questions, ...partsOfSpeech];
        }

        let rCat = englishSubj.subcategories.find(c => c.category === "Reading Comprehension");
        if (rCat) {
            rCat.questions = [...rCat.questions, ...readingComp];
        }

        // Just output Sentence structure count to be sure it's 90
        let ssCat = englishSubj.subcategories.find(c => c.category === "Sentence Structure");
        let preCat = englishSubj.subcategories.find(c => c.category === "Prepositions & Phrasal Verbs");

        console.log("Counts after injection: ");
        console.log("One Word Substitution:", owsCat.questions.length);
        console.log("Parts of Speech:", posCat.questions.length);
        console.log("Reading Comprehension:", rCat.questions.length);
        console.log("Sentence Structure:", ssCat ? ssCat.questions.length : "N/A");
        console.log("Prepositions:", preCat ? preCat.questions.length : "N/A");

        // Write the new file
        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

    } catch (e) {
        console.log("Error processing:", e);
    }
}

add120Questions();
