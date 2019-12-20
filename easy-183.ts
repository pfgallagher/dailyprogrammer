const compareNumStrings = (a: string, b: string): number =>
	parseInt(a, 10) - parseInt(b, 10);

const splitSemVer = (semVerString: string): string[] =>
	semVerString.split(/[\./+-]/);

const sortSemVer = (versionArr: string[]): string[] =>
	versionArr.sort((a, b) => {
		const [majorA, minorA, patchA, labelA = ""] = splitSemVer(a);
		const [majorB, minorB, patchB, labelB = ""] = splitSemVer(b);
		const comparisonArr = [
			compareNumStrings(majorA, majorB),
			compareNumStrings(minorA, minorB),
			compareNumStrings(patchA, patchB),
		];
		for (const comparison of comparisonArr) {
			if (comparison) {
				return comparison;
			}
		}
		return labelA === labelB ? 0 : labelA < labelB ? -1 : 1;
	});

console.log(
	sortSemVer([
		"2.0.11-alpha",
		"0.1.7+amd64",
		"0.10.7+20141005",
		"2.0.12+i386",
		"1.2.34",
		"2.0.11+i386",
		"20.1.1+i386",
	]),
);
// 0.1.7+amd64
// 0.10.7+20141005
// 1.2.34
// 2.0.11-alpha
// 2.0.11+i386
// 2.0.12+i386
// 20.1.1+i386
