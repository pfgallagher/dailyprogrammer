import { frequency } from "./lib/util";

type SourceNumbers = [number, number, number, number, number, number];

type Frequency = {
	[key: string]: number;
};

const operators = ["+", "-", "*", "/"];
const operatorPerms = (): string[][] =>
	operators
		.map(op1 =>
			operators.map(op2 =>
				operators.map(op3 =>
					operators.map(op4 => operators.map(op5 => [op1, op2, op3, op4, op5])),
				),
			),
		)
		.flat(4);

const freqsAreEqual = (freqA: Frequency, freqB: Frequency): boolean =>
	Object.entries(freqA).every(([nA, countA], i) => {
		const [nB, countB] = Object.entries(freqB)[i];
		return nA === nB && countA === countB;
	});

const numPerms = (source: SourceNumbers): SourceNumbers[] => {
	const numFreq = frequency(source);
	const perms: SourceNumbers[] = [];
	const history: string[] = [];
	source.forEach(n1 => {
		source.forEach(n2 => {
			source.forEach(n3 => {
				source.forEach(n4 => {
					source.forEach(n5 => {
						source.forEach(n6 => {
							const perm: SourceNumbers = [n1, n2, n3, n4, n5, n6];
							const permFreq = frequency(perm);
							const joined = perm.join(",");
							if (
								!history.includes(joined) &&
								freqsAreEqual(numFreq, permFreq)
							) {
								perms.push(perm);
								history.push(joined);
							}
						});
					});
				});
			});
		});
	});
	return perms;
};

const combineNumsWithOperators = (
	source: SourceNumbers,
	operatorArr: string[],
): string =>
	source
		.map(n => n.toString())
		.reduce((a, c, i) => `(${a}${operatorArr[i - 1]}${c})`);

const numsWithOperatorsPermutations = (source: SourceNumbers): string[] => {
	const opPerms = operatorPerms();
	return numPerms(source).flatMap(numPerm =>
		opPerms.map(opPerm => combineNumsWithOperators(numPerm, opPerm)),
	);
};

const permutationEqualsTarget = (
	permutation: string,
	target: number,
): boolean => Function(`return ${permutation}`)() === target;

const countdown = (source: SourceNumbers, target: number): string => {
	const validSolutions = numsWithOperatorsPermutations(source).filter(perm =>
		permutationEqualsTarget(perm, target),
	);
	return validSolutions.length
		? validSolutions.join("\n")
		: "No valid solution found.";
};

console.log(countdown([1, 3, 7, 6, 8, 3], 250), "\n");
// (((((3+3)*7)+1)*6)-8)
// (((((3+8)*7)+6)*3)+1)
// (((((8+3)*7)+6)*3)+1)
console.log(countdown([25, 100, 9, 7, 3, 7], 881), "\n");
// (((((25-9)*7)*7)+100)-3)
// (((((25-9)*7)*7)-3)+100)
// (((((9/7)+25)+100)*7)-3)
// (((((9/7)+100)+25)*7)-3)
// (((((9-3)/7)+25)+100)*7)
// (((((9-3)/7)+100)+25)*7)
// (((((7/7)+100)*9)-25)-3)
// (((((7/7)+100)*9)-3)-25)
// (((((7*3)+100)*7)+25)+9)
// (((((7*3)+100)*7)+9)+25)
// (((((3*7)+100)*7)+25)+9)
// (((((3*7)+100)*7)+9)+25)
console.log(countdown([6, 75, 3, 25, 50, 100], 952), "\n");
// (((((6+100)*75)*3)-50)/25)
// (((((6+100)*3)*75)-50)/25)
// (((((3+100)*6)*75)/50)+25)
// (((((3+100)*6)/50)*75)+25)
// (((((3+100)*75)*6)/50)+25)
// (((((3+100)*75)/50)*6)+25)
// (((((3+100)/50)*6)*75)+25)
// (((((3+100)/50)*75)*6)+25)
// (((((100+6)*75)*3)-50)/25)
// (((((100+6)*3)*75)-50)/25)
// (((((100+3)*6)*75)/50)+25)
// (((((100+3)*6)/50)*75)+25)
// (((((100+3)*75)*6)/50)+25)
// (((((100+3)*75)/50)*6)+25)
// (((((100+3)/50)*6)*75)+25)
// (((((100+3)/50)*75)*6)+25)
console.log(countdown([1, 1, 1, 1, 1, 1], 7));
// No valid solution found.
