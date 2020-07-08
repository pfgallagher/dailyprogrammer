import { promises } from "fs";

const getContext = async (input: string): Promise<string> => {
	const fileContents = await promises.readFile("./easy-204-data.txt", "utf-8");
	const found = fileContents.split("\n\n  ").find(el => el.includes(input));
	return found ? found : "Line not found";
};

(async () => {
	const testOne = await getContext("Eye of newt");
	console.log(testOne);
	// SECOND WITCH.
	//     Fillet of a fenny snake,
	//     In the caldron boil and bake;
	//     Eye of newt, and toe of frog,
	//     Wool of bat, and tongue of dog,
	//     Adder's fork, and blind-worm's sting,
	//     Lizard's leg, and howlet's wing,
	//     For a charm of powerful trouble,
	//     Like a hell-broth boil and bubble.
	const testTwo = await getContext("rugged Russian bear");
	console.log(testTwo);
	// 	MACBETH.
	//     What man dare, I dare:
	//     Approach thou like the rugged Russian bear,
	//     The arm'd rhinoceros, or the Hyrcan tiger;
	//     Take any shape but that, and my firm nerves
	//     Shall never tremble: or be alive again,
	//     And dare me to the desert with thy sword;
	//     If trembling I inhabit then, protest me
	//     The baby of a girl. Hence, horrible shadow!
	//     Unreal mockery, hence!
	// [Ghost disappears.]
	//     Why, so; being gone,
	//     I am a man again. Pray you, sit still.
	const testThree = await getContext("break this enterprise");
	console.log(testThree);
	// LADY MACBETH.
	//   What beast was't, then,
	//   That made you break this enterprise to me?
	//   When you durst do it, then you were a man;
	//   And, to be more than what you were, you would
	//   Be so much more the man. Nor time nor place
	//   Did then adhere, and yet you would make both:
	//   They have made themselves, and that their fitness now
	//   Does unmake you. I have given suck, and know
	//   How tender 'tis to love the babe that milks me:
	//   I would, while it was smiling in my face,
	//   Have pluck'd my nipple from his boneless gums
	//   And dash'd the brains out, had I so sworn as you
	//   Have done to this.
	const testFour = await getContext("Yet who would have thought");
	console.log(testFour);
	// LADY MACBETH.
	//   Out, damned spot! out, I say!  One; two; why, then 'tis
	//   time to do'tÂ ; Hell is murky! Fie, my lord, fie! a soldier,
	//   and afeard? What need we fear who knows it, when none can call
	//   our power to account? Yet who would have thought the old man to
	//   have had so much blood in him?
})();
