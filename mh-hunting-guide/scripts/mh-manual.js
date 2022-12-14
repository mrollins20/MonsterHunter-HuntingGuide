// mh-manual.js, monster hunter parts and weakness guide
// Author: Marc Rollins


function displayMonsterData () {
    let monsterName = document.querySelector("#monster").value;
    let monsterInfo = monsters[monsterName];
    let monsterData = document.querySelector("#monster-data");
    monsterData.textContent = `${monsterName} has the following: ${monsterInfo}`;
}
function displayPartData () {
    let partName = document.querySelector("#monster-part").value;
    let partSource = parts[partName];
    let partData = document.querySelector("#part-data");
    partData.textContent = `${partName} comes from the following source(s): ${partSource}`;
}
// parts data set
const parts = {    
    "aknosom scale":          "Aknosom (L)",
    "aknosom scale+":         "Aknosom (H)",
    "aknosom feather":        "Aknosom (L)",
    "aknosom feather+":       "Aknosom (H)",
    "aknosom beak":           "Aknosom (L/H)",
    "aknosom crest":          "Aknosom (L)",
    "aknosom crest+":         "Aknosom (H)",
    "arzuros shell":          "Arzuros (L)",
    "arzuros carapace":       "Arzuros (H)",
    "arzuros pelt":           "Arzuros (L)",
    "arzuros pelt+":          "Arzuros (H)",
    "arzuros brace":          "Arzuros (L)",
    "arzuros brace+":         "Arzuros (H)",
    "aqua sac":               "Royal Ludroth (L)",
    "barroth shell":          "Barroth (L)",
    "barroth carapace":       "Barroth (H)",
    "barroth ridge":          "Barroth (L)",
    "barroth ridge+":         "Barroth (H)",
    "barroth claw":           "Barroth (L)",
    "barrother claw+":        "Barroth (H)",
    "barroth scalp":          "Barroth (L/H)",
    "barroth tail":           "Barroth (L/H)",
    "beast gem":              "All High Rank or Master Rank Fanged Beasts",
    "beast tear":             "Arzuros (L/H),Lagombi (L/H),Volvidon (L/H)",
    "bird wyvern gem":        "All High Rank or Master Rank Bird Wyverns",
    "coma sac":               "Great Baggi (H)",
    "crab pearl+":            "Daimyo Hermitaur (M)",
    "dash extract":           "Royal Ludroth (L/H)",
    "electro sac":            "Khezu (L)",
    "fertile mud":            "Barroth (L)",
    "fine black pearl":       "Daimyo Hermitaur (M)",
    "flabby hide":            "Khezu (L)",
    "flame sac":              "Aknosom (L)",
    "great baggi hide":       "Great Baggi (L)",
    "great baggi hide+":      "Great Baggi (H)",
    "great baggi claw":       "Great Baggi (L)",
    "great baggi claw+":      "Great Baggi (H)",
    "great izuchi hide":      "Great Izuchi (L)",
    "great izuchi hide+":     "Great Izuchi (H)",
    "great izuchi pelt":      "Great Izuchi (L)",
    "great izuchi pelt+":     "Great Izuchi (H)",
    "great izuchi tail":      "Great Izuchi (L)",
    "great izuchi tail+":     "Great Izuchi (H)",
    "great wroggi hide":      "Great Wroggi (L)",
    "great wroggi hide+":     "Great Wroggi (H)",
    "great wroggi brace":     "Great Wroggi (L)",
    "great wroggi brace+":    "Great Wroggi (H)",
    "hermitaur cortex":       "Daimyo Hermitaur (M)",
    "hermitaur hardclaw":     "Daimyo Hermitaur (M)",
    "inferno sac":            "Aknosom (H)",
    "jumbo bone":             "Arzuros (L),Lagombi (L),Volvidon (L)",
    "kings beak":             "Great Wroggi (L/H)",
    "kings crest":            "Great Baggi (L/H)",
    "kulu-ya-ku scale":       "Kulu-Ya-Ku (L)",
    "kulu-ya-ku scale+":      "Kulu-Ya-Ku (H)",
    "kulu-ya-ku hide":        "Kulu-Ya-Ku (L)",
    "kulu-ya-ku hide+":       "Kulu-Ya-Ku (H)",
    "kulu-ya-ku plume":       "Kulu-Ya-Ku (L)",
    "kulu-ya-ku plume+":      "Kulu-Ya-Ku (H)",
    "kulu-ya-ku beak":        "Kulu-Ya-Ku (L)",
    "kulu-ya-ku beak+":       "Kulu-Ya-Ku (H)",
    "lagombi pelt":           "Lagombi (L)",
    "lagombi pelt+":          "Lagombi (H)",
    "lagombi plastron":       "Lagombi (L)",
    "lagombi plastron+":      "Lagombi (H)",
    "lagombi iceclaw":        "Lagombi (L)",
    "lagombi frozenclaw":     "Lagombi (L)",
    "lagombi ear":            "Lagombi (L)",
    "lagombi ear+":           "Lagombi (H)",
    "large beast tear":       "All High Rank or Master Rank Fanged Beasts",
    "large wyvern tear":      "All High Rank or Master Rank Wyverns/Leviathans",
    "monster bone m":         "Great Baggi (L),Kulu-Ya-Ku (L),Great Wroggi (L),Aknosom (L),Barroth (L),Khezu (L)",
    "monster bone s":         "Great Izuchi (L)",
    "monster bone+":          "Great Izuchi (H),Great Baggi (H),Kulu-Ya-Ku (H),Great Wroggi (H)",
    "monster broth":          "Volvidon (H)",
    "monster fluid":          "Volvidon (L)",
    "monster hardbone":       "Daimyo Hermitaur (M)",
    "monster keenbone":       "Aknosom (H),Barroth (H),Khezu (H)",
    "omniplegia sac":         "Volvidon (H)",
    "pale bone":              "Khezu (L/H)",
    "pale extract":           "Khezu (L/H)",
    "pale steak":             "Khezu (H)",
    "paralysis sac":          "Volvidon (L)",
    "pearl hide":             "Khezu (H)",
    "poison sac":             "Great Wroggi (L)",
    "rich mud":               "Barroth (H)",
    "royal ludroth scale":    "Royal Ludroth (L)",
    "royal ludroth scale+":   "Royal Ludroth (H)",
    "royal ludroth claw":     "Royal Ludroth (L)",
    "royal ludroth claw+":    "Royal Ludroth (H)",
    "royal ludroth crest":    "Royal Ludroth (L)",
    "royal ludroth crest+":   "Royal Ludroth (H)",
    "royal ludroth tail":     "Royal Ludroth (L/H)",
    "screamer sac":           "Great Izuchi (L/H)",
    "sleep sac":              "Great Baggi (L)",
    "spongy hide":            "Royal Ludroth (L)",
    "spongy hide+":           "Royal Ludroth (H)",
    "stoutbone":              "Arzuros (H),Lagombi (H),Volvidon (H)",
    "suspicious fang":        "Khezu (L)",
    "suspicious fang+":       "Khezu (H)",
    "timeworn crimson horn":  "Daimyo Hermitaur (M)",
    "thunder sac":            "Khezu (H)",
    "torrent sac":            "Royal Ludroth (H)",
    "toxin sac":              "Great Wroggi (H)",
    "volvidon shell":         "Volvidon (L)",
    "volvidon carapace":      "Volvidon (H)",
    "volvidon claw":          "Volvidon (L)",
    "vovlidon claw+":         "Volvidon (H)",
    "volvidon rickrack":      "Volvidon (L/H)",
    "wyvern gem":             "All High Rank or Master Rank Wyverns/Leviathans",
    "wyvern tear":            "All Low Rank High Rank or Master Rank Wyverns/Leviathans"
};
// monsters data set
const monsters = {
    "Great izuchi":          ["Type- bird wyvern",     "Weaknesses- Poison:3 Stun:2 Paralysis:3 Sleep:3 Blast:2 Exhaust:3 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Great baggi":           ["Type- bird wyvern",     "Weaknesses- Poison:1 Stun:1 Paralysis:3 Sleep:0 Blast:3 Exhaust:3 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Kulu-ya-ku":            ["Type- bird wyvern",     "Weaknesses- Poison:1 Stun:2 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Great wroggi":          ["Type- bird wyvern",     "Weaknesses- Poison:0 Stun:1 Paralysis:3 Sleep:3 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:1 Iceblight:2"],
    "Arzuros":               ["Type- fanged beast",    "Weaknesses- Poison:3 Stun:2 Paralysis:3 Sleep:3 Blast:2 Exhaust:3 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Lagombi":               ["Type- fanged beast",    "Weaknesses- Poison:3 Stun:2 Paralysis:3 Sleep:1 Blast:3 Exhaust:1 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Volvidon":              ["Type- fanged beast",    "Weaknesses- Poison:1 Stun:2 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Aknosom":               ["Type- bird wyvern",     "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Royal ludroth":         ["Type- leviathan",       "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Barroth":               ["Type- brute wyvern",    "Weaknesses- Poison:3 Stun:0 Paralysis:3 Sleep:1 Blast:3 Exhaust:1 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Khezu":                 ["Type- flying wyvern",   "Weaknesses- Poison:3 Stun:1 Paralysis:0 Sleep:1 Blast:2 Exhaust:0 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Tetranadon":            ["Type- amphibian",       "Weaknesses- Poison:1 Stun:1 Paralysis:3 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Bishaten":              ["Type- fanged beast",    "Weaknesses- Poison:0 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:1 Iceblight:2"],
    "Pukei-pukei":           ["Type- bird wyvern",     "Weaknesses- Poison:0 Stun:1 Paralysis:3 Sleep:3 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Jyuratodus":            ["Type- piscine ",        "Weaknesses- Poison:1 Stun:2 Paralysis:1 Sleep:0 Blast:0 Exhaust:3 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Basarios":              ["Type- brute wyvern",    "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:3 Blast:2 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Somnacanth":            ["Type- Leviathan",       "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:0 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Rathian":               ["Type- Flying Wyvern",   "Weaknesses- Poison:0 Stun:1 Paralysis:1 Sleep:1 Blast:0 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Barioth":               ["Type- Flying Wyvern",   "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Tobi-Kadachi":          ["Type- Fanged Wyvern",   "Weaknesses- Poison:3 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Magnamalo":             ["Type- Fanged Wyvern",   "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:0 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Anjanath":              ["Type- Brute Wyvern",    "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:0 Exhaust:1 Fireblight:1 Waterblight:2 Thunderblight:1 Iceblight:1"],
    "Nargacuga":             ["Type- Flying Wyvern",   "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Mizutsune":             ["Type- Leviathan",       "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Goss Harag":            ["Type- Fanged Beast",    "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:0 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Rathalos":              ["Type- Flying Wyvern",   "Weaknesses- Poison:0 Stun:1 Paralysis:1 Sleep:1 Blast:0 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Almudron":              ["Type- Leviathan",       "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:0 Exhaust:1 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Zinogre":               ["Type- Fanged Wyvern",   "Weaknesses- Poison:1 Stun:1 Paralysis:0 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:1 Iceblight:2"],
    "Tigrex":                ["Type- Flying Wyvern",   "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:2 Iceblight:1"],
    "Diablos":               ["Type- Flying Wyvern",   "Weaknesses- Poison:1 Stun:0 Paralysis:3 Sleep:1 Blast:2 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:1 Iceblight:2"],
    "Rakna-Kadaki":          ["Type- Temnoceran",      "Weaknesses- Poison:0 Stun:1 Paralysis:1 Sleep:1 Blast:0 Exhaust:1 Fireblight:1 Waterblight:1 Thunderblight:1 Iceblight:2"],
    "Rajang":                ["Type- Fanged Beast",    "Weaknesses- Poison:0 Stun:0 Paralysis:0 Sleep:0 Blast:2 Exhaust:0 Fireblight:1 Waterblight:1 Thunderblight:1 Iceblight:2"],
    "Bazelgeuse":            ["Type- Flying Wyvern",   "Weaknesses- Not known yet"],
    "Wind Serpent Ibushi":   ["Type- Elder Dragon",    "Weaknesses- Poison:1 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:0 Fireblight:2 Waterblight:1 Thunderblight:1 Iceblight:1"],
    "Thunder Serpent Narwa": ["Type- Elder Dragon",    "Weaknesses- Poison:0 Stun:0 Paralysis:0 Sleep:0 Blast:2 Exhaust:0 Fireblight:1 Waterblight:1 Thunderblight:0 Iceblight:2"],
    "Crimson Glow Valstrax": ["Type- Elder Dragon",    "Weaknesses- Not known yet"],
    "Daimyo Hermitaur":      ["Type- Carapaceon",      "Weaknesses- Poison:3 Stun:1 Paralysis:1 Sleep:1 Blast:2 Exhaust:1 Fireblight:2 Waterblight:1 Thunderblight:2 Iceblight:1"]
};
// Event listeners
const monsterElement = document.querySelector("#find-monster");
monsterElement.addEventListener("click", displayMonsterData);
const partElement = document.querySelector("#find-part");
partElement.addEventListener("click", displayPartData);