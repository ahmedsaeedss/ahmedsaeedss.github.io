const fs = require('fs');

const dataPath = 'c:\\Users\\AlFurqan\\Desktop\\ahmedsaeedss.github.io-main\\data.js';

function addScienceCategories() {
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
        if (!scienceSubj) {
            console.log("General Science subject not found!");
            return;
        }

        // GENERATE 50 Botany
        const botany = [
            { q: "The branch of botany that studies algae is:", options: ["Phycology", "Mycology", "Bryology", "Pteridology"], answer: 0, explanation: "Phycology is the scientific study of algae." },
            { q: "Which part of the plant conducts water and dissolved minerals?", options: ["Phloem", "Xylem", "Cambium", "Epidermis"], answer: 1, explanation: "Xylem transports water and minerals from roots to stems and leaves." },
            { q: "The process by which plants make their food is called:", options: ["Respiration", "Transpiration", "Photosynthesis", "Digestion"], answer: 2, explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy." },
            { q: "In plants, the male reproductive organ is:", options: ["Pistil", "Stamen", "Carpel", "Sepal"], answer: 1, explanation: "The stamen is the pollen-producing reproductive organ of a flower." },
            { q: "The loss of water in the form of vapor from the aerial parts of a plant is:", options: ["Evaporation", "Transpiration", "Guttation", "Exudation"], answer: 1, explanation: "Transpiration is the process of water movement through a plant and its evaporation from aerial parts." },
            { q: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"], answer: 1, explanation: "Oxygen is released as a byproduct during photosynthesis." },
            { q: "The green pigment in plants responsible for photosynthesis is:", options: ["Carotene", "Xanthophyll", "Chlorophyll", "Anthocyanin"], answer: 2, explanation: "Chlorophyll absorbs energy from light for photosynthesis." },
            { q: "Which of the following is considered a 'living fossil'?", options: ["Neem", "Ginkgo biloba", "Banyan", "Peepal"], answer: 1, explanation: "Ginkgo biloba is an ancient species of tree with no close living relatives." },
            { q: "The study of relationships between plants and their environment is called:", options: ["Plant Taxonomy", "Plant Physiology", "Plant Anatomy", "Plant Ecology"], answer: 3, explanation: "Plant ecology studies the interaction between plants and their environment." },
            { q: "What is the study of fungi called?", options: ["Mycology", "Phycology", "Cytology", "Histology"], answer: 0, explanation: "Mycology is the branch of biology concerned with the study of fungi." },
            { q: "Fungi belong to which kingdom?", options: ["Plantae", "Animalia", "Fungi", "Monera"], answer: 2, explanation: "Fungi have their own kingdom, separate from plants and animals." },
            { q: "The outer protective covering of a plant stem is the:", options: ["Cortex", "Epidermis", "Pith", "Pericycle"], answer: 1, explanation: "The epidermis is the outermost layer of cells covering the stem, root, leaf, options: flower." },
            { q: "Which part of the seed stores food for the developing embryo?", options: ["Seed coat", "Cotyledon", "Radicle", "Plumule"], answer: 1, explanation: "Cotyledons (seed leaves) often store food for the seedling." },
            { q: "The shedding of leaves, flowers, or fruits is called:", options: ["Abscission", "Transpiration", "Guttation", "Vernalization"], answer: 0, explanation: "Abscission is the shedding of various parts of an organism." },
            { q: "Which plant hormone promotes fruit ripening?", options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"], answer: 3, explanation: "Ethylene is a gaseous plant hormone famous for promoting fruit ripening." },
            { q: "The first formed primary xylem elements are called:", options: ["Metaxylem", "Protoxylem", "Cambium", "Phloem"], answer: 1, explanation: "Protoxylem is the first formed primary xylem." },
            { q: "Plants growing in dry regions are called:", options: ["Hydrophytes", "Mesophytes", "Xerophytes", "Halophytes"], answer: 2, explanation: "Xerophytes are adapted to survive in environments with little liquid water." },
            { q: "Plants growing in saline soil are known as:", options: ["Halophytes", "Xerophytes", "Hydrophytes", "Mesophytes"], answer: 0, explanation: "Halophytes are plants adapted to grow in high salinity environments." },
            { q: "The primary function of the root is:", options: ["Photosynthesis", "Anchorage and absorption", "Reproduction", "Transpiration"], answer: 1, explanation: "Roots anchor the plant and absorb water and dissolved minerals from the soil." },
            { q: "The reproductive part of an angiosperm is the:", options: ["Leaf", "Stem", "Root", "Flower"], answer: 3, explanation: "Flowers are the reproductive organs of angiosperms (flowering plants)." },
            { q: "Seedless vascular plants are called:", options: ["Bryophytes", "Gymnosperms", "Pteridophytes", "Angiosperms"], answer: 2, explanation: "Pteridophytes, like ferns, have vascular tissue but reproduce via spores, not seeds." },
            { q: "Which is the largest flower in the world?", options: ["Lotus", "Rafflesia", "Sunflower", "Titan Arum"], answer: 1, explanation: "Rafflesia arnoldii produces the largest individual flower on Earth." },
            { q: "The edible part of an apple is the:", options: ["Endocarp", "Mesocarp", "Thalamus", "Epicarp"], answer: 2, explanation: "In an apple, the fleshy, edible part is the swollen thalamus (receptacle)." },
            { q: "Pollen grains are produced in:", options: ["Ovary", "Anther", "Stigma", "Style"], answer: 1, explanation: "The anther, a part of the stamen, contains pollen sacs where pollen grains develop." },
            { q: "The movement of plants towards light is termed:", options: ["Geotropism", "Phototropism", "Hydrotropism", "Chemotropism"], answer: 1, explanation: "Phototropism is the directional growth of an organism in response to light." },
            { q: "Nitrogen fixation is performed primarily by:", options: ["Algae", "Fungi", "Bacteria", "Viruses"], answer: 2, explanation: "Certain bacteria (like Rhizobium) can convert atmospheric nitrogen into usable forms." },
            { q: "The study of internal structure of plants is called:", options: ["Morphology", "Anatomy", "Genetics", "Ecology"], answer: 1, explanation: "Plant anatomy is the study of the internal tissues and cells of plants." },
            { q: "Gymnosperms literally means:", options: ["Covered seeds", "Naked seeds", "Fruit bearers", "Flower bearers"], answer: 1, explanation: "Originates from Greek 'gymnos' (naked) and 'sperma' (seed)." },
            { q: "Which cell organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Chloroplast", "Mitochondrion", "Ribosome"], answer: 2, explanation: "Mitochondria generate most of the cell's supply of ATP." },
            { q: "Chloroplasts contain a stack of thylakoids called:", options: ["Stroma", "Granum", "Cristae", "Matrix"], answer: 1, explanation: "A granum is a coin-like stack of thylakoid membranes in the chloroplast." },
            { q: "Mosses belong to the group:", options: ["Thallophyta", "Bryophyta", "Pteridophyta", "Gymnospermae"], answer: 1, explanation: "Bryophytes include mosses, hornworts, and liverworts." },
            { q: "The basic unit of classification is:", options: ["Genus", "Species", "Family", "Order"], answer: 1, explanation: "Species is the most basic rank in the taxonomic hierarchy." },
            { q: "Which pigment gives yellow/orange color to fruits and flowers?", options: ["Anthocyanin", "Carotenoids", "Chlorophyll", "Melanin"], answer: 1, explanation: "Carotenoids are red, orange, or yellow pigments." },
            { q: "A symbiotic association between fungi and algae is called a:", options: ["Mycorrhiza", "Lichen", "Parasite", "Epiphyte"], answer: 1, explanation: "A lichen is a composite organism arising from algae or cyanobacteria living among fungi." },
            { q: "A plant that grows on another plant for support but is not parasitic is an:", options: ["Epiphyte", "Endophyte", "Saprophyte", "Halophyte"], answer: 0, explanation: "Epiphytes derive their moisture and nutrients from the air and rain." },
            { q: "Wood is essentially composed of secondary:", options: ["Phloem", "Xylem", "Cortex", "Epidermis"], answer: 1, explanation: "Wood is legally defined as secondary xylem." },
            { q: "Bamboo is a type of:", options: ["Tree", "Shrub", "Herb", "Grass"], answer: 3, explanation: "Bamboos are a group of woody perennial evergreen plants in the true grass family." },
            { q: "The age of a tree can be determined by counting its:", options: ["Leaves", "Branches", "Annual rings", "Roots"], answer: 2, explanation: "Dendrochronology uses annual growth rings in wood to date physiological events." },
            { q: "Cuscuta (Dodder) is an example of a:", options: ["Total root parasite", "Partial stem parasite", "Total stem parasite", "Partial root parasite"], answer: 2, explanation: "Cuscuta attaches to the host stem and draws all nutrients from it." },
            { q: "The primary source of energy for most ecosystems is:", options: ["Geothermal heat", "The Sun", "Wind", "Water currents"], answer: 1, explanation: "Sunlight is converted to chemical energy through photosynthesis by primary producers." },
            { q: "Plants take up carbon dioxide predominantly through their:", options: ["Roots", "Stems", "Leaves (Stomata)", "Flowers"], answer: 2, explanation: "Stomata on leaves are the primary sites for gas exchange." },
            { q: "What limits the size of bryophytes (mosses)?", options: ["Lack of vascular tissue", "Lack of sunlight", "Lack of roots", "Poor soil"], answer: 0, explanation: "Without xylem and phloem, they cannot efficiently transport water/nutrients vertically." },
            { q: "Which part of a flower becomes the fruit?", options: ["Stigma", "Style", "Ovary", "Ovule"], answer: 2, explanation: "After fertilization, the ovary swells and develops into a fruit." },
            { q: "Which part of a flower becomes the seed?", options: ["Ovary", "Ovule", "Pollen", "Sepal"], answer: 1, explanation: "The fertilized ovule develops into a seed." },
            { q: "The term 'flora' refers to:", options: ["Animals of a region", "Plants of a region", "Microbes of a region", "Fossils of a region"], answer: 1, explanation: "Flora is the naturally occurring plant life of a specific region." },
            { q: "Plants use nitrates from the soil primarily to synthesize:", options: ["Carbohydrates", "Lipids", "Proteins", "Vitamins"], answer: 2, explanation: "Nitrogen is a key component of amino acids, which form proteins." },
            { q: "Resin and turpentine are obtained primarily from:", options: ["Angiosperms", "Pinus (Gymnosperms)", "Ferns", "Mosses"], answer: 1, explanation: "Pine trees (Pinus) secrete resin which is refined into turpentine." },
            { q: "Which layer of the atmosphere contains the ozone layer that protects plants from UV rays?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], answer: 1, explanation: "The ozone layer is mainly situated in the lower portion of the stratosphere." },
            { q: "In binary fission, a cell divides into how many daughter cells?", options: ["Two", "Four", "Eight", "Sixteen"], answer: 0, explanation: "Binary meaning 'two', indicating division into two identical cells." },
            { q: "Which organelle is responsible for protein synthesis?", options: ["Lysosome", "Golgi apparatus", "Ribosome", "Endoplasmic reticulum"], answer: 2, explanation: "Ribosomes translate mRNA into protein chains." }
        ];

        // GENERATE 50 Zoology
        const zoology = [
            { q: "Zoology is primarily the study of:", options: ["Plants", "Animals", "Fossils", "Microbes"], answer: 1, explanation: "Zoology is the branch of biology that relates to the animal kingdom." },
            { q: "The basic unit of structure and function in animals is the:", options: ["Organ", "Tissue", "Cell", "System"], answer: 2, explanation: "The cell is the smallest unit of life." },
            { q: "Animals without a backbone are called:", options: ["Vertebrates", "Invertebrates", "Mammals", "Amphibians"], answer: 1, explanation: "Invertebrates are animals that neither possess nor develop a vertebral column." },
            { q: "Which of the following belongs to the Phylum Arthropoda?", options: ["Starfish", "Earthworm", "Spider", "Snail"], answer: 2, explanation: "Arthropods have jointed appendages and exoskeletons (e.g., insects, spiders)." },
            { q: "The study of insects is called:", options: ["Ornithology", "Entomology", "Ichthyology", "Herpetology"], answer: 1, explanation: "Entomology comes from the Greek 'entomon', meaning 'notched' or 'insect'." },
            { q: "The study of birds is termed:", options: ["Ornithology", "Herpetology", "Malacology", "Mammalogy"], answer: 0, explanation: "Ornithology is a branch of zoology that concerns the 'methodological study and consequent knowledge of birds'." },
            { q: "Amphibians have a heart with how many chambers?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "Amphibian hearts have two atria and one ventricle." },
            { q: "Mammals have a heart with how many chambers?", options: ["Two", "Three", "Four", "Five"], answer: 2, explanation: "Mammals and birds have a four-chambered heart (two atria, two ventricles)." },
            { q: "Which animal is a marsupial?", options: ["Platypus", "Kangaroo", "Elephant", "Whale"], answer: 1, explanation: "Marsupials carry their young in a pouch, like kangaroos and koalas." },
            { q: "Which of the following is an egg-laying mammal (monotreme)?", options: ["Opossum", "Platypus", "Bat", "Dolphin"], answer: 1, explanation: "The platypus and echidnas are the only living monotremes." },
            { q: "The process by which a caterpillar transforms into a butterfly is called:", options: ["Moulting", "Metamorphosis", "Ecdysis", "Gastrulation"], answer: 1, explanation: "Metamorphosis represents profound physical changes after birth or hatching." },
            { q: "Which blood cells are responsible for carrying oxygen in vertebrates?", options: ["Leukocytes", "Thrombocytes", "Erythrocytes", "Lymphocytes"], answer: 2, explanation: "Erythrocytes (Red Blood Cells) contain hemoglobin which binds to oxygen." },
            { q: "Which is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], answer: 2, explanation: "The skin is the body's largest organ by surface area and weight." },
            { q: "What is the largest internal organ in humans?", options: ["Lungs", "Liver", "Kidney", "Stomach"], answer: 1, explanation: "The liver is the heaviest internal organ and the largest gland." },
            { q: "The structural and functional unit of the nervous system is the:", options: ["Nephron", "Neuron", "Alveolus", "Sarcomere"], answer: 1, explanation: "Neurons are cells responsible for receiving sensory input and sending commands." },
            { q: "Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"], answer: 1, explanation: "The cerebellum is crucial for motor control and balance." },
            { q: "Animals that maintain a constant body temperature are called:", options: ["Poikilotherms", "Ectotherms", "Homeotherms (Endotherms)", "Cold-blooded"], answer: 2, explanation: "Warm-blooded animals (Endotherms) maintain strict body temperature." },
            { q: "Which Phylum includes animals with a water vascular system and tube feet?", options: ["Mollusca", "Arthropoda", "Echinodermata", "Annelida"], answer: 2, explanation: "Echinoderms (like starfish) utilize a unique water vascular system." },
            { q: "The excretory organs of insects are called:", options: ["Nephridia", "Malpighian tubules", "Kidneys", "Flame cells"], answer: 1, explanation: "Malpighian tubules remove nitrogenous wastes from the insect's hemolymph." },
            { q: "A characteristic feature of birds is the presence of:", options: ["Hair", "Scales all over", "Feathers", "Mammary glands"], answer: 2, explanation: "Feathers are unique epidermal growths that define birds." },
            { q: "Which group of animals possesses mammary glands?", options: ["Reptiles", "Birds", "Mammals", "Amphibians"], answer: 2, explanation: "Mammals are distinguished by females possessing mammary glands to feed young." },
            { q: "The primary organ of gaseous exchange in fishes is:", options: ["Lungs", "Skin", "Gills", "Trachea"], answer: 2, explanation: "Gills extract dissolved oxygen from water and excrete carbon dioxide." },
            { q: "What covers the body of reptiles?", options: ["Feathers", "Hair", "Dry scales", "Moist skin"], answer: 2, explanation: "Reptiles have skin covered in scales or scutes." },
            { q: "Which is the longest bone in the human body?", options: ["Tibia", "Humerus", "Femur", "Fibula"], answer: 2, explanation: "The femur (thigh bone) is the longest and strongest bone." },
            { q: "Where does digestion primarily begin in the human digestive system?", options: ["Stomach", "Small intestine", "Mouth", "Esophagus"], answer: 2, explanation: "Digestion starts in the mouth where salivary amylase breaks down starches." },
            { q: "Which organ produces bile?", options: ["Gallbladder", "Liver", "Pancreas", "Stomach"], answer: 1, explanation: "The liver secretes bile which helps in digesting fats." },
            { q: "In humans, the normal number of chromosomes in a somatic cell is:", options: ["23", "46", "22", "44"], answer: 1, explanation: "Humans have 23 pairs, giving a total of 46 chromosomes." },
            { q: "What limits the size of arthropods on land?", options: ["Their heavy skeleton", "The need to molt a rigid exoskeleton", "Lack of lungs", "Poor vision"], answer: 1, explanation: "To grow, they must molt their heavy exoskeleton, rendering them temporarily vulnerable and physically unsupported." },
            { q: "The study of animal behavior is called:", options: ["Ecology", "Ethology", "Evolution", "Embryology"], answer: 1, explanation: "Ethology is the scientific study of animal behavior, usually with a focus on behavior under natural conditions." },
            { q: "What is an animal called that eats both plants and meat?", options: ["Carnivore", "Herbivore", "Omnivore", "Detritivore"], answer: 2, explanation: "Omnivores consume a variety of material, including plants, animals, algae, and fungi." },
            { q: "Which animal is famously known as the 'Ship of the Desert'?", options: ["Horse", "Elephant", "Camel", "Mule"], answer: 2, explanation: "Camels are well adapted to desert life and historical transport." },
            { q: "How many legs does a spider possess?", options: ["Six", "Eight", "Ten", "Four"], answer: 1, explanation: "Arachnids, like spiders, have eight legs." },
            { q: "Which marine animal is known as the largest animal to have ever lived?", options: ["Great White Shark", "Colossal Squid", "Blue Whale", "Whale Shark"], answer: 2, explanation: "The Blue Whale can reach nearly 30 meters in length and weigh over 170 tonnes." },
            { q: "What is the group of mammals called that have a pouch?", options: ["Placentals", "Monotremes", "Marsupials", "Primates"], answer: 2, explanation: "Marsupials carry and nurse their young in a pouch." },
            { q: "What is the main function of white blood cells?", options: ["Transport oxygen", "Clot blood", "Fight infection", "Transport nutrients"], answer: 2, explanation: "White blood cells or leukocytes are part of the immune system." },
            { q: "A characteristic shared by all chordates at some stage in life is a:", options: ["Vertebral column", "Notochord", "Hair", "Four-chambered heart"], answer: 1, explanation: "All chordates feature a notochord during embryonic development." },
            { q: "The scientific name for the human species is:", options: ["Homo erectus", "Homo habilis", "Homo sapiens", "Australopithecus afarensis"], answer: 2, explanation: "Sapiens translates to 'wise'." },
            { q: "Which phylum is characterized by a segmented body like an earthworm?", options: ["Nematoda", "Platyhelminthes", "Annelida", "Mollusca"], answer: 2, explanation: "Annelids are formally called ringed or segmented worms." },
            { q: "Tapeworms belong to which phylum?", options: ["Annelida", "Platyhelminthes", "Nematoda", "Arthropoda"], answer: 1, explanation: "Platyhelminthes consists of flatworms." },
            { q: "Which is a characteristic of amphibians?", options: ["Dry, scaly skin", "Amniotic eggs", "Moist, glandular skin", "Endothermy"], answer: 2, explanation: "Amphibians generally rely on their moist skin for partial gas exchange." },
            { q: "In the mammalian eye, the light-sensitive inner surface is the:", options: ["Cornea", "Lens", "Retina", "Iris"], answer: 2, explanation: "The retina transforms light into neural signals via photoreceptors." },
            { q: "Which of these is a function of the lymphatic system?", options: ["Pumping blood", "Immune defense and fluid balance", "Digesting fats entirely", "Excreting urea"], answer: 1, explanation: "It returns fluid to the bloodstream and houses immune cells." },
            { q: "The process of shedding an exoskeleton is called:", options: ["Guttation", "Moulting (Ecdysis)", "Metamorphosis", "Pupation"], answer: 1, explanation: "Ecdysis allows arthropods to grow." },
            { q: "Bivalves (like clams) belong to which Phylum?", options: ["Arthropoda", "Echinodermata", "Mollusca", "Annelida"], answer: 2, explanation: "Mollusca includes bivalves, gastropods, and cephalopods." },
            { q: "What is the primary function of insulin in mammals?", options: ["Increase heart rate", "Lower blood glucose", "Raise blood glucose", "Digest proteins"], answer: 1, explanation: "Insulin promotes the absorption of glucose into cells." },
            { q: "What is the name of the pigment responsible for oxygen storage in muscle tissue?", options: ["Hemoglobin", "Myoglobin", "Melanin", "Chlorophyll"], answer: 1, explanation: "Myoglobin binds oxygen in muscle cells." },
            { q: "Which group includes octopuses and squids?", options: ["Gastropods", "Bivalves", "Cephalopods", "Crustaceans"], answer: 2, explanation: "Cephalopod literally means 'head-foot'." },
            { q: "The highest taxonomic rank among animals is the:", options: ["Kingdom", "Domain", "Phylum", "Class"], answer: 1, explanation: "Under modern systems, Domain is above Kingdom (Eukarya contains the Animal Kingdom)." },
            { q: "A specialized stomach compartment used by ruminants to ferment plant matter is the:", options: ["Crop", "Gizzard", "Rumen", "Caecum"], answer: 2, explanation: "The rumen contains microbes that break down cellulose." },
            { q: "Which of these animals exhibits radial symmetry?", options: ["Human", "Frog", "Starfish", "Earthworm"], answer: 2, explanation: "Adult echinoderms like starfish exhibit secondary radial symmetry." }
        ];

        // 1. Botany
        scienceSubj.subcategories.push({
            category: "Botany",
            icon: "fa-leaf",
            questions: botany
        });

        // 2. Zoology
        scienceSubj.subcategories.push({
            category: "Zoology",
            icon: "fa-paw",
            questions: zoology
        });

        const newStr = "const mainQuizData = \n" + JSON.stringify(arr, null, 4) + ";\n";
        fs.writeFileSync(dataPath, newStr, 'utf8');

        console.log("Sci Categories Addition successful!");

    } catch (e) {
        console.log("Error parsing: ", e);
    }
}

addScienceCategories();
