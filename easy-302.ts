import { chunkArr } from "./lib/util";

const elementMap: {
	[lcShorthand: string]: { name: string; shorthand: string };
} = Object.fromEntries(
	[
		["Actinium", "Ac"],
		["Aluminum", "Al"],
		["Americium", "Am"],
		["Antimony", "Sb"],
		["Argon", "Ar"],
		["Arsenic", "As"],
		["Astatine", "At"],
		["Barium", "Ba"],
		["Berkelium", "Bk"],
		["Beryllium", "Be"],
		["Bismuth", "Bi"],
		["Boron", "B"],
		["Bromine", "Br"],
		["Cadmium", "Cd"],
		["Calcium", "Ca"],
		["Californium", "Cf"],
		["Carbon", "C"],
		["Cerium", "Ce"],
		["Cesium", "Cs"],
		["Chlorine", "Cl"],
		["Chromium", "Cr"],
		["Cobalt", "Co"],
		["Copper", "Cu"],
		["Curium", "Cm"],
		["Dysprosium", "Dy"],
		["Einsteinium", "Es"],
		["Erbium", "Er"],
		["Europium", "Eu"],
		["Fermium", "Fm"],
		["Fluorine", "F"],
		["Francium", "Fr"],
		["Gadolinium", "Gd"],
		["Gallium", "Ga"],
		["Germanium", "Ge"],
		["Gold", "Au"],
		["Hafnium", "Hf"],
		["Helium", "He"],
		["Holmium", "Ho"],
		["Hydrogen", "H"],
		["Indium", "In"],
		["Iodine", "I"],
		["Iridium", "Ir"],
		["Iron", "Fe"],
		["Krypton", "Kr"],
		["Lanthanum", "La"],
		["Lawrencium", "Lr"],
		["Lead", "Pb"],
		["Lithium", "Li"],
		["Lutetium", "Lu"],
		["Magnesium", "Mg"],
		["Manganese", "Mn"],
		["Mendelevium", "Md"],
		["Mercury", "Hg"],
		["Molybdenum", "Mo"],
		["Neodymium", "Nd"],
		["Neon", "Ne"],
		["Neptunium", "Np"],
		["Nickel", "Ni"],
		["Niobium", "Nb"],
		["Nitrogen", "N"],
		["Nobelium", "No"],
		["Osmium", "Os"],
		["Oxygen", "O"],
		["Palladium", "Pd"],
		["Phosphorus", "P"],
		["Platinum", "Pt"],
		["Plutonium", "Pu"],
		["Polonium", "Po"],
		["Potassium", "K"],
		["Praseodymium", "Pr"],
		["Promethium", "Pm"],
		["Protactinium", "Pa"],
		["Radium", "Ra"],
		["Radon", "Rn"],
		["Rhenium", "Re"],
		["Rhodium", "Rh"],
		["Rubidium", "Rb"],
		["Ruthenium", "Ru"],
		["Rutherfordium", "Rf"],
		["Samarium", "Sm"],
		["Scandium", "Sc"],
		["Selenium", "Se"],
		["Silicon", "Si"],
		["Silver", "Ag"],
		["Sodium", "Na"],
		["Strontium", "Sr"],
		["Sulfur", "S"],
		["Tantalum", "Ta"],
		["Technetium", "Tc"],
		["Tellurium", "Te"],
		["Terbium", "Tb"],
		["Thallium", "Tl"],
		["Thorium", "Th"],
		["Thulium", "Tm"],
		["Tin", "Sn"],
		["Titanium", "Ti"],
		["Tungsten", "W"],
		["Uranium", "U"],
		["Vanadium", "V"],
		["Xenon", "Xe"],
		["Ytterbium", "Yb"],
		["Yttrium", "Y"],
		["Zinc", "Zn"],
		["Zirconium", "Zr"],
	].map(([k, v]) => [v.toLowerCase(), { name: k, shorthand: v }]),
);

const spellWithElements = (input: string): string => {
	const elements: string[] = [];
	const word = (chunkArr([...input], 2) as string[][])
		.map(chunk => chunk.join(""))
		.map(chunk => {
			if (elementMap.hasOwnProperty(chunk)) {
				const { name, shorthand } = elementMap[chunk];
				elements.push(name);
				return shorthand;
			}
			const [first, second] = [...chunk];
			const { name: name1, shorthand: shorthand1 } = elementMap[first];
			const { name: name2, shorthand: shorthand2 } = elementMap[second];
			elements.push(name1, name2);
			return [shorthand1, shorthand2];
		});
	return `${word.flat().join("")} (${elements.join(", ")})`;
};

console.log(spellWithElements("genius"));
// GeNiUS (Germanium, Nickel, Uranium, Sulfur)
console.log(spellWithElements("functions"));
// FUNCTiONS (Fluorine, Uranium, Nitrogen, Carbon, Titanium, Oxygen, Nitrogen, Sulfur)
console.log(spellWithElements("bacon"));
// BaCoN (Barium, Cobalt, Nitrogen)
console.log(spellWithElements("poison"));
// PoISON (Polonium, Iodine, Sulfur, Oxygen, Nitrogen)
console.log(spellWithElements("sickness"));
// SiCKNeSS (Silicon, Carbon, Potassium, Neon, Sulfur, Sulfur)
console.log(spellWithElements("ticklish"));
// TiCKLiSH (Titanium, Carbon, Potassium, Lithium, Sulfur, Hydrogen)
