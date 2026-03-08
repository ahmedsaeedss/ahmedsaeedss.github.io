const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function addMoreZoology() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        let scienceSubj = arr.find(s => s.name === "General Science");
        if (!scienceSubj) return;

        let zooCat = scienceSubj.subcategories.find(c => c.category === "Zoology");
        if (!zooCat) return;

        // GENERATE 50 MORE Zoology Questions (Questions 51-100)
        const zoology2 = [
            { q: "What is the study of tissues called?", options: ["Cytology", "Histology", "Morphology", "Anatomy"], answer: 1, explanation: "Histology is the microscopic study of plant and animal tissues." },
            { q: "Which animal has the heaviest brain?", options: ["Human", "Elephant", "Sperm Whale", "Blue Whale"], answer: 2, explanation: "The sperm whale has the largest and heaviest brain of any animal, weighing up to 9 kg." },
            { q: "Which is the only mammal that can truly fly?", options: ["Flying squirrel", "Bat", "Lemur", "Colugo"], answer: 1, explanation: "Bats are the only mammals naturally capable of true and sustained flight." },
            { q: "Animals that are active during the night are known as:", options: ["Diurnal", "Nocturnal", "Crepuscular", "Vespertine"], answer: 1, explanation: "Nocturnal animals are active primarily during the night." },
            { q: "What is the process by which birds lose their feathers?", options: ["Moulting", "Preening", "Shedding", "Fledging"], answer: 0, explanation: "Moulting in birds replaces worn feathers with new ones." },
            { q: "Which of the following has a three-chambered heart?", options: ["Crocodile", "Fish", "Frog", "Pigeon"], answer: 2, explanation: "Amphibians like frogs have two atria and one ventricle." },
            { q: "The skeleton of sharks is made entirely of:", options: ["Bone", "Cartilage", "Chitin", "Keratin"], answer: 1, explanation: "Sharks are cartilaginous fish (Chondrichthyes)." },
            { q: "What do we call the young of a frog?", options: ["Fry", "Fingerling", "Tadpole", "Nymph"], answer: 2, explanation: "Tadpoles are the aquatic larval stage of frogs." },
            { q: "Which animal produces pearls?", options: ["Octopus", "Starfish", "Oyster", "Sea Urchin"], answer: 2, explanation: "Oysters and some other molluscs produce pearls as a defense mechanism against irritants." },
            { q: "What is the largest living bird?", options: ["Emu", "Ostrich", "Albatross", "Penguin"], answer: 1, explanation: "The ostrich is the largest and heaviest living bird species." },
            { q: "The respiratory organ of an earthworm is its:", options: ["Gills", "Lungs", "Skin", "Trachea"], answer: 2, explanation: "Earthworms breathe through their moist skin." },
            { q: "Which group of animals is known for having a radially symmetrical body plan as adults?", options: ["Arthropods", "Annelids", "Echinoderms", "Chordates"], answer: 2, explanation: "Echinoderms (like starfish) have five-point radial symmetry." },
            { q: "In human males, the sex chromosomes are:", options: ["XX", "XY", "YY", "XO"], answer: 1, explanation: "Males have one X and one Y chromosome." },
            { q: "The study of fossils to determine the structure and evolution of extinct animals is:", options: ["Phylogeny", "Ontogeny", "Paleontology", "Ecology"], answer: 2, explanation: "Paleontology studies life that existed prior to the Holocene Epoch." },
            { q: "Which disease is caused by the Plasmodium parasite?", options: ["Dengue", "Malaria", "Typhoid", "Cholera"], answer: 1, explanation: "Malaria is a mosquito-borne infectious disease caused by Plasmodium." },
            { q: "The organ that stores urine before it is excreted is the:", options: ["Kidney", "Ureter", "Urinary Bladder", "Urethra"], answer: 2, explanation: "The bladder stores urine from the kidneys." },
            { q: "Which of the following animals does not have red blood?", options: ["Snail", "Frog", "Earthworm", "Pigeon"], answer: 0, explanation: "Snails have hemocyanin, which makes their blood blue/colorless." },
            { q: "What is the hardest substance in the human body?", options: ["Skull bone", "Femur", "Tooth enamel", "Cartilage"], answer: 2, explanation: "Enamel on the teeth is the hardest and most mineralized substance in the body." },
            { q: "An animal that lives on or in another organism and harms it is a:", options: ["Symbiont", "Parasite", "Commensal", "Saprophyte"], answer: 1, explanation: "A parasite benefits at the expense of the host." },
            { q: "Which part of the cell is known as the 'suicide bag'?", options: ["Ribosome", "Lysosome", "Golgi body", "Nucleus"], answer: 1, explanation: "Lysosomes contain digestive enzymes that can break down the cell itself if released." },
            { q: "How many chambers does a cockroach's heart have?", options: ["3", "4", "13", "10"], answer: 2, explanation: "Cockroaches possess an elongated tube-like heart with 13 chambers." },
            { q: "Which of these is NOT a mammal?", options: ["Dolphin", "Whale", "Shark", "Bat"], answer: 2, explanation: "Sharks are cartilaginous fish." },
            { q: "The venom of a cobra primarily attacks the:", options: ["Digestive system", "Nervous system", "Circulatory system", "Respiratory system directly"], answer: 1, explanation: "Cobra venom is highly neurotoxic, causing paralysis." },
            { q: "Insects have how many pairs of legs?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "All true insects have six legs (three pairs)." },
            { q: "Which is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Leopard"], answer: 1, explanation: "The cheetah can reach speeds over 100 km/h." },
            { q: "What causes the disease sleeping sickness?", options: ["Tsetse fly (carrying Trypanosoma)", "Anopheles mosquito", "Housefly", "Sandfly"], answer: 0, explanation: "African trypanosomiasis is transmitted by the tsetse fly." },
            { q: "The basic functional unit of the human kidney is the:", options: ["Neuron", "Nephron", "Alveolus", "Villus"], answer: 1, explanation: "Each kidney contains about a million filtering units called nephrons." },
            { q: "Which blood type is considered the universal donor?", options: ["A", "B", "AB", "O"], answer: 3, explanation: "Type O negative blood has no A, B, or Rh antigens and can safely be given to most patients." },
            { q: "What is the chemical name for Vitamin C?", options: ["Retinol", "Thiamine", "Ascorbic Acid", "Calciferol"], answer: 2, explanation: "Vitamin C is chemically known as L-ascorbic acid." },
            { q: "Which is the smallest bone in the human body?", options: ["Incus", "Malleus", "Stapes", "Phalanx"], answer: 2, explanation: "The stapes (stirrup bone) in the middle ear is the smallest bone." },
            { q: "Animals that lay eggs are called:", options: ["Viviparous", "Oviparous", "Marsupials", "Placentals"], answer: 1, explanation: "Oviparous animals lay eggs, with little or no other embryonic development within the mother." },
            { q: "Which bird can fly backwards?", options: ["Hummingbird", "Swift", "Kingfisher", "Woodpecker"], answer: 0, explanation: "Hummingbirds have a unique wing structure allowing them to hover and fly backwards." },
            { q: "How many teeth does an adult human typically have?", options: ["28", "30", "32", "34"], answer: 2, explanation: "Adults typically have 32 permanent teeth." },
            { q: "Bile juice is stored in the:", options: ["Liver", "Pancreas", "Gallbladder", "Spleen"], answer: 2, explanation: "The gallbladder stores and concentrates bile produced by the liver." },
            { q: "Which vitamin is synthesized by the human body with the help of sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3, explanation: "The skin synthesizes Vitamin D when exposed to UVB rays." },
            { q: "Where are red blood cells produced in an adult human?", options: ["Liver", "Bone marrow", "Spleen", "Heart"], answer: 1, explanation: "Hematopoiesis primarily occurs in the red bone marrow." },
            { q: "Which animal has the best hearing?", options: ["Dog", "Bat", "Moth", "Owl"], answer: 2, explanation: "Certain moths (like the greater wax moth) have the highest recorded frequency hearing, evolved to evade bats." },
            { q: "The term 'Endemic' in biology implies a species is:", options: ["Extinct globally", "Found everywhere", "Native to and restricted to a certain area", "Migratory"], answer: 2, explanation: "Endemic species are unique to a defined geographic location." },
            { q: "A symbiotic relationship where both species benefit is called:", options: ["Commensalism", "Parasitism", "Mutualism", "Amensalism"], answer: 2, explanation: "Mutualism yields an interspecific cooperation benefiting both." },
            { q: "What is the primary function of platelets?", options: ["Oxygen transport", "Immune response", "Blood clotting", "Nutrient transport"], answer: 2, explanation: "Platelets (thrombocytes) clump together to stop bleeding." },
            { q: "Which gland is known as the 'master gland' of the human body?", options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Pancreas"], answer: 2, explanation: "The pituitary gland controls the functions of many other endocrine glands." },
            { q: "What connects muscle to bone?", options: ["Ligament", "Tendon", "Cartilage", "Fascia"], answer: 1, explanation: "Tendons are tough bands of fibrous connective tissue connecting muscle to bone." },
            { q: "What connects bone to bone?", options: ["Tendon", "Ligament", "Nerve", "Skin"], answer: 1, explanation: "Ligaments connect bones to other bones in joints." },
            { q: "Sponges belong to which animal phylum?", options: ["Cnidaria", "Porifera", "Annelida", "Mollusca"], answer: 1, explanation: "Porifera means 'pore bearing'." },
            { q: "What type of vision do humans have?", options: ["Monocular vision", "Binocular vision", "Compound vision", "Infrared vision"], answer: 1, explanation: "Binocular vision allows for depth perception by using both eyes together." },
            { q: "A change in DNA sequence is known as a:", options: ["Transcription", "Translation", "Mutation", "Replication"], answer: 2, explanation: "Mutation is a permanent alteration in the DNA sequence." },
            { q: "Which cell division process results in gametes (sperm/egg)?", options: ["Mitosis", "Meiosis", "Binary fission", "Budding"], answer: 1, explanation: "Meiosis reduces the chromosome number by half to create haploid gametes." },
            { q: "The protein that makes up hair, nails, and horns is:", options: ["Collagen", "Elastin", "Keratin", "Actin"], answer: 2, explanation: "Keratin is the structural material making up the outer layer of human skin and nails/hair." },
            { q: "What is the largest living reptile?", options: ["Komodo Dragon", "Saltwater Crocodile", "Anaconda", "Leatherback Sea Turtle"], answer: 1, explanation: "Saltwater crocodiles are the largest and most dangerous living reptiles." },
            { q: "Which of these animals is naturally immortal (capable of reverting its life cycle)?", options: ["Tardigrade", "Turritopsis dohrnii (Jellyfish)", "Giant Tortoise", "Lobster"], answer: 1, explanation: "The 'immortal jellyfish' can revert to its polyp stage after reaching sexual maturity." }
        ];

        zooCat.questions = [...zooCat.questions, ...zoology2];

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Added 50 more Zoology questions. Total: " + zooCat.questions.length);

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

addMoreZoology();
