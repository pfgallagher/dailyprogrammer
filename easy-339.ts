type GenericObject = {
	[key: string]: string;
};

const extensionMap: GenericObject = {
	"::EXT::JOB": "job",
	"::EXT::SAL": "salary",
};

const parseRecords = (input: string): GenericObject[] =>
	input.split("\n").reduce<GenericObject[]>((a, c) => {
		if (c.startsWith("::EXT::")) {
			const last = a[a.length - 1];
			if (last) {
				const [field, value] = c.split(" ");
				last[extensionMap[field]] = value;
			}
		} else {
			const [name, id] = c.split(/ {2,}/);
			a.push({
				name,
				id,
			});
		}
		return a;
	}, []);

const highestSalary = (input: string): string => {
	const { name, salary } = parseRecords(input)
		.filter(record => record.hasOwnProperty("salary"))
		.sort((a, b) => parseInt(b.salary, 10) - parseInt(a.salary, 10))[0];
	return `${name}, $${parseInt(salary, 10)}`;
};

[
	highestSalary(
		"Boyce Calles        83460319\n::EXT::SAL 00000000000044722\nMarcelo Candela     29040821\n::EXT::JOB loser            \n::EXT::SAL 00000000000047706\nMilton Camper       32541106",
	) === "Marcelo Candela, $47706",
	highestSalary(
		"Boyce Calles        83460319\nMarcelo Candela     29040821\n::EXT::SAL 00000000000044722\n::EXT::JOB loser            \n::EXT::SAL 00000000000047706\nMilton Camper       32541106\nLuther Steffen      44311219\n::EXT::SAL 00000000000047181\nQuentin Salter      38590726\n::EXT::JOB COW              \n::EXT::SAL 00000000001859623\n::EXT::COL humperdink       \nWillian Chand       39560505\nMajor Bills         37790227\n::EXT::SAL 00000000003561927\n::EXT::JOB CFP              \n::EXT::COL akkawi           \nBenedict Ringel     95241209\nEddie Che           15830111\n::EXT::SAL 00000000000046961\nDrew Tynan          84260213\nBud Sloat           45371201\n::EXT::JOB CTO              \n::EXT::SAL 00000000004301076\n::EXT::COL humperdink       \nAllen Reade         46761110\nDenny Cassidy       99710227\nArnulfo Herrada     84650626\n::EXT::SAL 00000000000014737\n::EXT::JOB mook             \nBuck Goulette       84420413\n::EXT::SAL 00000000000027329\nBasil Tatum         97330503\n::EXT::JOB loser            \nRandy Ciulla        32031111\n::EXT::SAL 00000000004669876\n::EXT::JOB CHP              \n::EXT::COL hummus           \nFelipe Bungard      36500317\n::EXT::SAL 00000000000049176\nIrvin Plum          34491126\n::EXT::JOB CEO              \n::EXT::SAL 00000000002710511\n::EXT::COL hummus           \nMel Quintanilla     73660811\n::EXT::JOB CXO              \n::EXT::SAL 00000000002184725\n::EXT::COL akkawi           \nMacie Tellez        31340718\n::EXT::JOB CRO              \n::EXT::SAL 00000000002503183\n::EXT::COL hummus           \nWendi Brouse        53061118\n::EXT::COL pickle           \n::EXT::SAL 00000000003917526\n::EXT::JOB CFO              \nSynthia Simonds     76860807\n::EXT::SAL 00000000001817483\n::EXT::JOB COO              \n::EXT::COL apple            \nGilma Spero         63180726\n::EXT::SAL 00000000004180552\n::EXT::JOB CIO              \n::EXT::COL chartreuse       \nVeronique Walters   60470224\nAzalee Countryman   69460609\n::EXT::JOB CZO              \n::EXT::COL naranja          \n::EXT::SAL 00000000002782843\nBeata Ryans         18460107\n::EXT::SAL 00000000000033073\nMercedez Mahon      26380323\nMyrta Hine          81591009\nShanti Chan         19240722\n::EXT::JOB mook             \n::EXT::SAL 00000000000036496\nReta Eberly         55050821\n::EXT::JOB loser            \n::EXT::SAL 00000000000042240\nMirtha Mckissick    46730112\n::EXT::JOB loser            \nMarine Benn         10451207\nMelanie Griffeth    59720804\n::EXT::JOB mook             \nVanesa Plowman      28600505\n::EXT::SAL 00000000000019935\nMamie Burchett      49870101\n::EXT::JOB mook             \nAida Horton         65400523\n::EXT::SAL 00000000000039958\n::EXT::JOB peon             \nLeia Principe       83050710\n::EXT::SAL 00000000000023830\n::EXT::JOB mook             \nOlive Shield        70300120\n::EXT::JOB loser            \n::EXT::SAL 00000000000034563\nEllamae Galeana     46400508\n::EXT::SAL 00000000000049203",
	) === "Randy Ciulla, $4669876",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
