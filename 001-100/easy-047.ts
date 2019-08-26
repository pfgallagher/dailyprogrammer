const cipher = (str: string, shift: number): string =>
	[...str]
		.map(char => {
			const charCode = char.charCodeAt(0);
			return charCode >= 97 && charCode <= 122
				? String.fromCharCode(((charCode - 97 + shift) % 26) + 97)
				: charCode >= 65 && charCode <= 90
				? String.fromCharCode(((charCode - 65 + shift) % 26) + 65)
				: char;
		})
		.join("");

const bruteForceCipher = (str: string): void => {
	const decodedArr = [];
	for (let i = 0; i < 26; i++) {
		decodedArr.push(cipher(str, i));
	}
	decodedArr.forEach(decodedString => {
		console.log(`${decodedString}\n`);
	});
};

bruteForceCipher(
	"Spzalu - zayhunl dvtlu sfpun pu wvukz kpzaypibapun zdvykz pz uv ihzpz mvy h zfzalt vm nvclyutlua.  Zbwyltl leljbapcl wvdly klypclz myvt h thukhal myvt aol thzzlz, uva myvt zvtl mhyjpjhs hxbhapj jlyltvuf. Fvb jhu'a lewlja av dplsk zbwyltl leljbapcl wvdly qbza 'jhbzl zvtl dhalyf ahya aoyld h zdvyk ha fvb! P tlhu, pm P dlua hyvbuk zhfpu' P dhz hu ltwlylyvy qbza iljhbzl zvtl tvpzalulk ipua ohk sviilk h zjptpahy ha tl aolf'k wba tl hdhf!... Ho, huk uvd dl zll aol cpvslujl puolylua pu aol zfzalt! Jvtl zll aol cpvslujl puolylua pu aol zfzalt! Olsw! Olsw! P't ilpun ylwylzzlk!",
);
