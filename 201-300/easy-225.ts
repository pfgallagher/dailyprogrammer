const borderRegExp = /\+-*\+|\|.*\||\|.*\+|\+.*\|/g;
const hyphenatedWordRegExp = /(\w+)- (\w+)/g;

const defeatureText = (input: string): string =>
	input
		.replace(borderRegExp, "")
		.split(/\n\s*\n/)
		.map(paragraph => paragraph.replace(/\s+/g, " ").trim())
		.join("\n\n")
		.replace(hyphenatedWordRegExp, match => match.split("- ").join(""));

console.log(
	defeatureText(
		"This is an example piece of text. This is an exam-\nple piece of text. This is an example piece of\ntext. This is an example\npiece of text. This is a +-----------------------+\nsample for a challenge.  |                       |\nLorum ipsum dolor sit a- |       top class       |\nmet and other words. The |        feature        |\nproper word for a layout |                       |\nlike this would be type- +-----------------------+\nsetting, or so I would\nimagine, but for now let's carry on calling it an\nexample piece of text. Hold up - the end of the\n                 paragraph is approaching - notice\n+--------------+ the double line break for a para-\n|              | graph.\n|              |\n|   feature    | And so begins the start of the\n|   bonanza    | second paragraph but as you can\n|              | see it's only marginally better\n|              | than the other one so you've not\n+--------------+ really gained much - sorry. I am\n                 certainly not a budding author\nas you can see from this example input. Perhaps I\nneed to work on my writing skills.",
	),
);
// This is an example piece of text. This is an example piece of text. This is an example piece of text. This is an example piece of text. This is a sample for a challenge. Lorum ipsum dolor sit amet and other words. The proper word for a layout like this would be typesetting, or so I would imagine, but for now let's carry on calling it an example piece of text. Hold up - the end of the paragraph is approaching - notice the double line break for a paragraph.

// And so begins the start of the second paragraph but as you can see it's only marginally better than the other one so you've not really gained much - sorry. I am certainly not a budding author as you can see from this example input. Perhaps I need to work on my writing skills.
console.log("\n");
console.log(
	defeatureText(
		"+-------------+ One hundred and fifty quadrillion,\n|             | seventy-two trillion, six hundred\n| 150 072 626 | and twenty-six billion, eight hun-\n| 840 312 999 | dred and fourty million, three\n|             | hundred and thirteen thousand sub-\n+-------------+ tract one is a rather large prime\n                number which equals one to five if\ncalculated modulo two to six respectively.\n\nHowever, one other rather more in- +-------------+\nteresting number is two hundred    |             |\nand twenty-one quadrillion, eight  | 221 806 434 |\nhundred and six trillion, four     | 537 978 679 |\nhundred and thirty-four billion,   |             |\nfive hundred and thirty-seven mil- +-------------+\nmillion, nine hundred and seven-\n                                ty-eight thousand,\n+-----------------------------+ six hundred and\n|                             | seventy nine,\n| Subscribe for more Useless  | which isn't prime\n|      Number Facts(tm)!      | but is the 83rd\n+-----------------------------+ Lucas number.",
	),
);
// One hundred and fifty quadrillion, seventy-two trillion, six hundred and twenty-six billion, eight hundred and fourty million, three hundred and thirteen thousand subtract one is a rather large prime number which equals one to five if calculated modulo two to six respectively.

// However, one other rather more interesting number is two hundred and twenty-one quadrillion, eight hundred and six trillion, four hundred and thirty-four billion, five hundred and thirty-seven milmillion, nine hundred and seventy-eight thousand, six hundred and seventy nine, which isn't prime but is the 83rd Lucas number.
console.log("\n");
console.log(
	defeatureText(
		"+----------------+ Lorem ipsum dolor sit amet,\n|                | consectetur adipiscing elit,\n|  Aha, now you  | sed do eiusmod tempor incid-\n|  are stumped!! | idunt ut labore et dolore\n|                | magna aliqua. Ut enim ad mi-\n|       +--------+ nim veniam, quis nostrud ex-\n|  top  |          ercitation ullamco laboris\n|  kek  | nisi ut aliquip ex.\n|       |                       +-------------+\n+-------+ Duis aute irure dolor |             |\nin repre-henderit in voluptate  | Nothing to  |\nvelit esse cillum dolore eu fu- |  see here.  |\ngiat nulla pariatur. Excepteur  |             |\nsint occaecat cupidatat non     +-------------+\nproident, sunt in culpa qui of-\nficia deserunt mollit anim id est laborum.",
	),
);
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.

// Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
