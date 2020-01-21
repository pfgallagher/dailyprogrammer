const transposeStrings = (input: string): void => {
	const [, ...words] = input.split("\n");
	const maxWordLength = Math.max(...words.map(word => word.length));
	for (let i = 0; i < maxWordLength; i++) {
		let transposedRow = "";
		words.forEach(word => {
			transposedRow += word[i] ? word[i] : " ";
		});
		console.log(transposedRow);
	}
};

transposeStrings("1\nHello, World!");
// H
// e
// l
// l
// o
// ,
//
// W
// o
// r
// l
// d
// !
transposeStrings("5\nKernel\nMicrocontroller\nRegister\nMemory\nOperator");
// KMRMO
// eieep
// rcgme
// nrior
// eosra
// lctyt
//  oe o
//  nr r
//  t
//  r
//  o
//  l
//  l
//  e
//  r
