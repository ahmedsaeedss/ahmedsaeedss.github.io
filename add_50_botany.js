const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function addMoreBotany() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(dataPath, 'utf8');

    try {
        const prefix = "const mainQuizData = ";
        const arrayStart = fileContent.indexOf(prefix) + prefix.length;
        const arrayEnd = fileContent.lastIndexOf("];") + 1;

        let jsonStr = fileContent.substring(arrayStart, arrayEnd);
        let arr = JSON.parse(jsonStr);

        // Find General Science category
        let scienceSubj = arr.find(s => s.name === "General Science");
        if (!scienceSubj) return;

        let botanyCat = scienceSubj.subcategories.find(c => c.category === "Botany");
        if (!botanyCat) return;

        // GENERATE 50 MORE Botany Questions (Questions 51-100)
        const botany2 = [
            { q: "The process of transformation of atmospheric nitrogen into usable nitrogenous compounds is called:", options: ["Nitrification", "Nitrogen fixation", "Denitrification", "Ammonification"], answer: 1, explanation: "Nitrogen fixation makes inert atmospheric nitrogen biologically available." },
            { q: "Plants synthesize protein from:", options: ["Starch", "Sugar", "Amino acids", "Fatty acids"], answer: 2, explanation: "Amino acids are the building blocks of proteins." },
            { q: "What is the primary function of phloem?", options: ["Transport of water", "Transport of food", "Mechanical support", "Photosynthesis"], answer: 1, explanation: "Phloem translocates soluble organic compounds made during photosynthesis." },
            { q: "Which part of the cell controls the entry and exit of molecules?", options: ["Cell wall", "Plasma membrane", "Nucleus", "Ribosome"], answer: 1, explanation: "The plasma membrane is semi-permeable and regulates molecular traffic." },
            { q: "A characteristic of gymnosperms is:", options: ["They have flowers", "They produce naked seeds", "They have no vascular tissue", "They produce fruits"], answer: 1, explanation: "Gymnosperms like pines produce seeds without enclosing them in a fruit." },
            { q: "The root system that develops from regions other than the radicle is called:", options: ["Tap root system", "Fibrous root system", "Adventitious root system", "Primary root system"], answer: 2, explanation: "Adventitious roots arise from stems, leaves, or older roots." },
            { q: "Potato is a modified:", options: ["Root", "Stem", "Leaf", "Flower"], answer: 1, explanation: "The potato tuber is a modified, swollen underground stem for food storage." },
            { q: "Onion is a modified form of:", options: ["Root", "Stem", "Leaf", "Flower"], answer: 1, explanation: "An onion bulb is a modified underground stem with fleshy leaves." },
            { q: "Which of these is NOT a function of the leaf?", options: ["Photosynthesis", "Transpiration", "Conduction of water from soil", "Gas exchange"], answer: 2, explanation: "Roots extract water from the soil; leaves do not." },
            { q: "An example of an insectivorous plant is:", options: ["Cuscuta", "Pitcher plant", "Sandalwood", "Mistletoe"], answer: 1, explanation: "The pitcher plant traps and digests insects to obtain nutrients like nitrogen." },
            { q: "Which plant hormone is responsible for apical dominance?", options: ["Auxin", "Cytokinin", "Gibberellin", "Abscisic acid"], answer: 0, explanation: "Auxins maintain apical dominance by inhibiting the growth of lateral buds." },
            { q: "Which hormone is associated with stomatal closure under water stress?", options: ["Indole acetic acid", "Cytokinin", "Abscisic acid (ABA)", "Ethylene"], answer: 2, explanation: "ABA regulates plant water balance and prompts stomata to close during droughts." },
            { q: "What causes the green color in plants?", options: ["Phycoerythrin", "Chlorophyll", "Xanthophyll", "Carotene"], answer: 1, explanation: "Chlorophyll reflects green light and dominates in leaves." },
            { q: "Which of the following elements is a constituent of chlorophyll?", options: ["Iron", "Magnesium", "Calcium", "Potassium"], answer: 1, explanation: "Magnesium sits at the central core of the chlorophyll molecule." },
            { q: "The female reproductive part of a plant is collectively called:", options: ["Calyx", "Corolla", "Androecium", "Gynoecium"], answer: 3, explanation: "Gynoecium consists of the carpels (pistils)." },
            { q: "The transfer of pollen grains from anther to stigma is termed:", options: ["Fertilization", "Pollination", "Germination", "Placentation"], answer: 1, explanation: "Pollination is a vital step right before fertilization in seed plants." },
            { q: "When pollen represents the same flower, it is called:", options: ["Cross-pollination", "Self-pollination", "Anemophily", "Entomophily"], answer: 1, explanation: "Self-pollination occurs within the same flower or plant." },
            { q: "Pollination by wind is known as:", options: ["Anemophily", "Zoophily", "Hydrophily", "Entomophily"], answer: 0, explanation: "Anemophily relies on wind currents to distribute pollen." },
            { q: "Pollination by insects is called:", options: ["Anemophily", "Ornithophily", "Entomophily", "Hydrophily"], answer: 2, explanation: "Entomophily is the transfer of pollen by insects." },
            { q: "The process by which seeds begin to grow is called:", options: ["Transpiration", "Germination", "Abscission", "Vernalization"], answer: 1, explanation: "Germination is the process of a seed developing into a seedling." },
            { q: "Angiosperms are divided into:", options: ["Monocots and Dicots", "Bryophytes and Pteridophytes", "Algae and Fungi", "Ferns and Mosses"], answer: 0, explanation: "They are divided based on possessing one or two cotyledons." },
            { q: "Monocot plants have:", options: ["Two seed leaves", "One seed leaf", "No seed leaves", "Three seed leaves"], answer: 1, explanation: "Monocotyledons (monocots) contain a single embryonic leaf." },
            { q: "Which tissue provides mechanical strength to mature plant parts and contains dead cells?", options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Chlorenchyma"], answer: 2, explanation: "Sclerenchyma cells have thick, lignified walls and are mostly dead at maturity." },
            { q: "The outer waxy layer on the surface of leaves that reduces water loss is the:", options: ["Epidermis", "Cuticle", "Cortex", "Endodermis"], answer: 1, explanation: "The cuticle acts as a water-impermeable barrier." },
            { q: "Yeast represents which kingdom?", options: ["Monera", "Protista", "Fungi", "Plantae"], answer: 2, explanation: "Yeasts are single-celled microorganisms classified as fungi." },
            { q: "Penicillin is obtained from a:", options: ["Bacterium", "Fungus", "Alga", "Virus"], answer: 1, explanation: "Penicillin was originally derived from the fungus Penicillium." },
            { q: "Mushroom is an example of:", options: ["Algae", "Fungi", "Bryophyte", "Pteridophyte"], answer: 1, explanation: "A mushroom is the fleshy, spore-bearing fruiting body of a fungus." },
            { q: "The plant kingdom's equivalent to amphibians are the:", options: ["Bryophytes", "Algae", "Gymnosperms", "Angiosperms"], answer: 0, explanation: "Bryophytes need water to reproduce, linking aquatic and terrestrial life." },
            { q: "Which plant part is responsible for the secondary growth (increase in girth)?", options: ["Apical meristem", "Lateral meristem (Cambium)", "Intercalary meristem", "Permanent tissue"], answer: 1, explanation: "The vascular cambium and cork cambium (lateral meristems) cause radial growth." },
            { q: "Plants that complete their life cycle in one season are:", options: ["Annuals", "Biennials", "Perennials", "Evergreens"], answer: 0, explanation: "Annuals go from seed to seed in one growing season." },
            { q: "Lactic acid fermentation of cabbage yields:", options: ["Vinegar", "Sauerkraut", "Cheese", "Ethanol"], answer: 1, explanation: "Cabbage is fermented by lactic acid bacteria to produce sauerkraut." },
            { q: "Which of these is a macronutrient for plants?", options: ["Zinc", "Copper", "Nitrogen", "Boron"], answer: 2, explanation: "Nitrogen, Phosphorus, and Potassium are the primary macronutrients." },
            { q: "Plants wilt due to lack of:", options: ["Respiration", "Water (Turgor pressure)", "Photosynthesis", "Nutrients"], answer: 1, explanation: "Loss of turgor pressure causes the leaves and stems to wilt." },
            { q: "What is photoperiodism?", options: ["Dying due to excess light", "Response of plants to relative lengths of day and night", "Producing light at night", "Bending towards light"], answer: 1, explanation: "It determines flowering times based on day/night length." },
            { q: "Short-day plants flower when:", options: ["Days are longer than nights", "Nights are longer than a critical length", "It is raining", "Under artificial light only"], answer: 1, explanation: "They require long periods of uninterrupted darkness to flower." },
            { q: "An example of a C4 plant is:", options: ["Rice", "Wheat", "Maize (Corn)", "Potato"], answer: 2, explanation: "Maize is adapted (via the C4 pathway) to efficiently fix carbon under high light and heat." },
            { q: "Respiration in plants occurs:", options: ["Only during the day", "Only during the night", "Continuously, day and night", "Only in leaves"], answer: 2, explanation: "Cellular respiration occurs continuously in all living cells." },
            { q: "The symbiotic nitrogen fixation in legume root nodules is facilitated by:", options: ["Azotobacter", "Rhizobium", "Clostridium", "Nostoc"], answer: 1, explanation: "Rhizobium bacteria fix nitrogen in a symbiotic relationship with legumes." },
            { q: "Golden rice is a genetically modified crop enhanced with:", options: ["Vitamin C", "Vitamin A (beta-carotene)", "Iron", "Calcium"], answer: 1, explanation: "It is engineered to biosynthesize beta-carotene." },
            { q: "What is tissue culture?", options: ["Growing tissues in vivo", "Growing plant cells/tissues in an artificial nutrient medium", "Farming of woven linen", "Grafting two stems"], answer: 1, explanation: "It involves cultivating exact plant clones in sterile environments." },
            { q: "The edible part of a strawberry is the fleshy:", options: ["Ovary", "Petal", "Receptacle", "Endosperm"], answer: 2, explanation: "The receptacle enlarges and becomes fleshy, holding the true fruits (the tiny 'seeds')." },
            { q: "The evaporation of water from the stoma is called:", options: ["Guttation", "Transpiration", "Respiration", "Perspiration"], answer: 1, explanation: "Transpiration pulls water up from the roots via the xylem." },
            { q: "Kelps belong to the group of:", options: ["Brown algae", "Red algae", "Green algae", "Blue-green algae"], answer: 0, explanation: "Kelps are large brown algae or seaweeds." },
            { q: "The pigment found in red algae is:", options: ["Fucoxanthin", "Phycoerythrin", "Carotene", "Lutein"], answer: 1, explanation: "Phycoerythrin gives red algae its distinctive color." },
            { q: "Agar-agar, used in labs, is extracted from:", options: ["Brown algae", "Red algae", "Green algae", "Fungi"], answer: 1, explanation: "It is obtained from the cell walls of some species of red algae." },
            { q: "A characteristic of ferns is the presence of coiled young leaves known as:", options: ["Cones", "Crozisers (Fiddleheads)", "Sori", "Strobili"], answer: 1, explanation: "Fiddleheads are the furled fronds of a young fern." },
            { q: "The male gametophyte of an angiosperm is the:", options: ["Embryo sac", "Pollen grain", "Seed", "Ovule"], answer: 1, explanation: "The pollen grain houses the male gametes." },
            { q: "Endosperm in angiosperms is typically:", options: ["Haploid (n)", "Diploid (2n)", "Triploid (3n)", "Tetraploid (4n)"], answer: 2, explanation: "It forms from the fusion of a sperm cell with two polar nuclei, resulting in a triploid cell." },
            { q: "The branch of science dealing with the study of fruits is called:", options: ["Pomology", "Olericulture", "Floriculture", "Silviculture"], answer: 0, explanation: "Pomology focuses on the cultivation of fruit." },
            { q: "Growing plants without soil, using mineral nutrient solutions in water is called:", options: ["Aeroponics", "Hydroponics", "Aquaponics", "Geoponics"], answer: 1, explanation: "Hydroponics uses water-based nutrient solutions instead of soil." }
        ];

        botanyCat.questions = [...botanyCat.questions, ...botany2];

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Added 50 more Botany questions. Total: " + botanyCat.questions.length);

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

addMoreBotany();
