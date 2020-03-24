import { shuffle } from "./lib/util";

const createSecretSantaPairs = (input: string): string[] => {
	let participants = shuffle(
		input.split("\n").flatMap((family, i) =>
			family.split(" ").map(name => ({
				family: i,
				name,
				secretSanta: "",
				secretSantaFor: "",
			})),
		),
	);
	const areUnassignedParticipants = () =>
		participants.some(
			({ secretSanta, secretSantaFor }) => !secretSanta || !secretSantaFor,
		);
	while (areUnassignedParticipants()) {
		const santa = participants.find(({ secretSantaFor }) => !secretSantaFor);
		if (santa) {
			const { name: santaName, family: santaFamily } = santa;
			const recipient = participants.find(
				({ secretSanta, family, name, secretSantaFor }) =>
					!secretSanta &&
					family !== santaFamily &&
					name !== santaName &&
					secretSantaFor !== santaName,
			);
			if (recipient) {
				santa.secretSantaFor = recipient.name;
				recipient.secretSanta = santa.name;
			} else {
				if (areUnassignedParticipants()) {
					participants = shuffle(
						participants.map(participant => ({
							...participant,
							secretSanta: "",
							secretSantaFor: "",
						})),
					);
				}
			}
		}
	}
	return participants.map(
		participant => `${participant.name} -> ${participant.secretSantaFor}`,
	);
};

console.log(createSecretSantaPairs("Joe\nJeff Jerry\nJohnson"));

console.log(
	createSecretSantaPairs(
		"Sean\nWinnie\nBrian Amy\nSamir\nJoe Bethany\nBruno Anna Matthew Lucas\nGabriel Martha Philip\nAndre\nDanielle\nLeo Cinthia\nPaula\nMary Jane\nAnderson\nPriscilla\nRegis Julianna Arthur\nMark Marina\nAlex Andrea",
	),
);

// Test to check for a few incorrect pairs
for (let i = 0; i < 10_000; i++) {
	const res = createSecretSantaPairs(
		"Sean\nWinnie\nBrian Amy\nSamir\nJoe Bethany\nBruno Anna Matthew Lucas\nGabriel Martha Philip\nAndre\nDanielle\nLeo Cinthia\nPaula\nMary Jane\nAnderson\nPriscilla\nRegis Julianna Arthur\nMark Marina\nAlex Andrea",
	);
	const test1 = res.find(el => el.includes("Brian") && el.includes("Amy"));
	const test2 = res.find(el => el.includes("Joe") && el.includes("Bethany"));
	const test3 = res.find(el => el.includes("Bruno") && el.includes("Anna"));
	const test4 = res.find(el => el.includes("Bruno") && el.includes("Matthew"));
	const test5 = res.find(el => el.includes("Bruno") && el.includes("Lucas"));
	if ([test1, test2, test3, test4, test5].some(el => el)) {
		console.log("Failure: Incorrect pairing");
	}
}
