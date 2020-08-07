const hammingDistance = (a: string, b: string): number =>
	[...a].reduce((acc, cur, i) => (cur !== [...b][i] ? acc + 1 : acc), 0);

const closestString = (input: string): string =>
	input
		.split("\n")
		.map((a, _, arr) => ({
			str: a,
			sumDistances: arr
				.map(b => hammingDistance(a, b))
				.reduce((acc, cur) => acc + cur, 0),
		}))
		.sort(({ sumDistances: a }, { sumDistances: b }) => a - b)[0].str;

[
	closestString(
		"ATCAATATCAA\nATTAAATAACT\nAATCCTTAAAC\nCTACTTTCTTT\nTCCCATCCTTT\nACTTCAATATA",
	) === "ATTAAATAACT",
	closestString("CTCCATCACAC\nAATATCTACAT\nACATTCTCCAT\nCCTCCCCACTC") ===
		"AATATCTACAT",
	closestString(
		"AACACCCTATA\nCTTCATCCACA\nTTTCAATTTTC\nACAATCAAACC\nATTCTACAACT\nATTCCTTATTC\nACTTCTCTATT\nTAAAACTCACC\nCTTTTCCCACC\nACCTTTTCTCA\nTACCACTACTT",
	) === "ATTCTACAACT",
	closestString(
		"ACAAAATCCTATCAAAAACTACCATACCAAT\nACTATACTTCTAATATCATTCATTACACTTT\nTTAACTCCCATTATATATTATTAATTTACCC\nCCAACATACTAAACTTATTTTTTAACTACCA\nTTCTAAACATTACTCCTACACCTACATACCT\nATCATCAATTACCTAATAATTCCCAATTTAT\nTCCCTAATCATACCATTTTACACTCAAAAAC\nAATTCAAACTTTACACACCCCTCTCATCATC\nCTCCATCTTATCATATAATAAACCAAATTTA\nAAAAATCCATCATTTTTTAATTCCATTCCTT\nCCACTCCAAACACAAAATTATTACAATAACA\nATATTTACTCACACAAACAATTACCATCACA\nTTCAAATACAAATCTCAAAATCACCTTATTT\nTCCTTTAACAACTTCCCTTATCTATCTATTC\nCATCCATCCCAAAACTCTCACACATAACAAC\nATTACTTATACAAAATAACTACTCCCCAATA\nTATATTTTAACCACTTACCAAAATCTCTACT\nTCTTTTATATCCATAAATCCAACAACTCCTA\nCTCTCAAACATATATTTCTATAACTCTTATC\nACAAATAATAAAACATCCATTTCATTCATAA\nCACCACCAAACCTTATAATCCCCAACCACAC",
	) === "TTAACTCCCATTATATATTATTAATTTACCC",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
