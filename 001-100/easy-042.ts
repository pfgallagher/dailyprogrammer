interface IAnimal {
	species: string;
	sound: string;
}

const animals: IAnimal[] = [
	{ species: "cow", sound: "moo" },
	{ species: "chicken", sound: "cluck" },
	{ species: "turkey", sound: "gobble" },
	{ species: "kangaroo", sound: "g'day mate" },
	{ species: "t-rex", sound: "GAAAAARGH" },
	{ species: "cat", sound: "meow" },
];

const oldMacDonald = (animalArr: IAnimal[]): void => {
	const refrain = "Old MacDonald had a farm, E-I-E-I-O!";
	console.log(`${refrain}\n`);
	for (const animal of animalArr) {
		const { species, sound } = animal;
		console.log(
			`And on this farm he had a ${species}, E-I-E-I-O!
With a ${sound}-${sound} here and a ${sound}-${sound} there.
Here a ${sound}, there a ${sound}.
Everywhere a ${sound}-${sound}.

${refrain}
`,
		);
	}
};

oldMacDonald(animals);
