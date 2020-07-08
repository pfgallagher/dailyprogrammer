/*
	I'm limiting the types to the ones mentioned in the challenge, because there
	are a ton and handling them all would be pretty tedious.
*/
enum PokeTypes {
	dark = "dark",
	fighting = "fighting",
	fire = "fire",
	grass = "grass",
	ice = "ice",
	normal = "normal",
	poison = "poison",
	psychic = "psychic",
	rock = "rock",
	water = "water",
}

enum Effectiveness {
	noEffect = "no effect",
	notVeryEffective = "not very effective",
	normal = "normal",
	superEffective = "super-effective",
}

const determineEffectiveness = (multiplier: number): string =>
	multiplier >= 2
		? `The attack was ${Effectiveness.superEffective}.`
		: multiplier >= 1
		? `The attack had ${Effectiveness.normal} effectiveness.`
		: multiplier > 0
		? `The attack was ${Effectiveness.notVeryEffective}.`
		: `The attack had ${Effectiveness.noEffect}.`;

const TypeMap: {
	[attackType in PokeTypes]: { [defenseType in PokeTypes]: number };
} = {
	[PokeTypes.dark]: {
		[PokeTypes.dark]: 0.5,
		[PokeTypes.fighting]: 0.5,
		[PokeTypes.fire]: 1,
		[PokeTypes.grass]: 1,
		[PokeTypes.ice]: 1,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 2,
		[PokeTypes.rock]: 1,
		[PokeTypes.water]: 1,
	},
	[PokeTypes.fighting]: {
		[PokeTypes.dark]: 2,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 1,
		[PokeTypes.grass]: 1,
		[PokeTypes.ice]: 2,
		[PokeTypes.normal]: 2,
		[PokeTypes.poison]: 0.5,
		[PokeTypes.psychic]: 0.5,
		[PokeTypes.rock]: 2,
		[PokeTypes.water]: 1,
	},
	[PokeTypes.fire]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 0.5,
		[PokeTypes.grass]: 2,
		[PokeTypes.ice]: 2,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 0.5,
		[PokeTypes.water]: 0.5,
	},
	[PokeTypes.grass]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 0.5,
		[PokeTypes.grass]: 0.5,
		[PokeTypes.ice]: 1,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 2,
		[PokeTypes.water]: 2,
	},
	[PokeTypes.ice]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 0.5,
		[PokeTypes.grass]: 2,
		[PokeTypes.ice]: 0.5,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 1,
		[PokeTypes.water]: 0.5,
	},
	[PokeTypes.normal]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 1,
		[PokeTypes.grass]: 1,
		[PokeTypes.ice]: 1,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 0.5,
		[PokeTypes.water]: 1,
	},
	[PokeTypes.poison]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 1,
		[PokeTypes.grass]: 2,
		[PokeTypes.ice]: 1,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 0.5,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 0.5,
		[PokeTypes.water]: 1,
	},
	[PokeTypes.psychic]: {
		[PokeTypes.dark]: 0,
		[PokeTypes.fighting]: 2,
		[PokeTypes.fire]: 1,
		[PokeTypes.grass]: 1,
		[PokeTypes.ice]: 1,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 2,
		[PokeTypes.psychic]: 0.5,
		[PokeTypes.rock]: 1,
		[PokeTypes.water]: 1,
	},
	[PokeTypes.rock]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 0.5,
		[PokeTypes.fire]: 2,
		[PokeTypes.grass]: 1,
		[PokeTypes.ice]: 2,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 1,
		[PokeTypes.water]: 1,
	},
	[PokeTypes.water]: {
		[PokeTypes.dark]: 1,
		[PokeTypes.fighting]: 1,
		[PokeTypes.fire]: 2,
		[PokeTypes.grass]: 0.5,
		[PokeTypes.ice]: 1,
		[PokeTypes.normal]: 1,
		[PokeTypes.poison]: 1,
		[PokeTypes.psychic]: 1,
		[PokeTypes.rock]: 2,
		[PokeTypes.water]: 0.5,
	},
};

const attack = (
	attackTypeOrTypes: PokeTypes[],
	defenseTypeOrTypes: PokeTypes[],
): string => {
	const attackMultiplier = attackTypeOrTypes
		.flatMap(attackType =>
			defenseTypeOrTypes.map(defenseType => TypeMap[attackType][defenseType]),
		)
		.reduce((a, c) => a * c, 1);
	return `${attackMultiplier}x - ${determineEffectiveness(attackMultiplier)}`;
};

[
	attack([PokeTypes.fire], [PokeTypes.grass]) ===
		"2x - The attack was super-effective.",
	attack([PokeTypes.fighting], [PokeTypes.ice, PokeTypes.rock]) ===
		"4x - The attack was super-effective.",
	attack([PokeTypes.psychic], [PokeTypes.poison, PokeTypes.dark]) ===
		"0x - The attack had no effect.",
	attack([PokeTypes.water], [PokeTypes.normal]) ===
		"1x - The attack had normal effectiveness.",
	attack([PokeTypes.fire], [PokeTypes.rock]) ===
		"0.5x - The attack was not very effective.",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
