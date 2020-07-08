import { transpose } from "../lib/util";

const transposeText = (input: string): string => {
	const lines = input.split("\n").map(line => [...line]);
	const longestLine = Math.max(...lines.map(line => line.length));
	return transpose(
		lines.map(line =>
			line.length < longestLine
				? line.concat(Array(longestLine - line.length).fill(" "))
				: line,
		),
	)
		.map(line => line.join(""))
		.join("\n");
};

console.log(transposeText("Some\ntext."), "\n");
// St
// oe
// mx
// et
//  .
console.log(
	transposeText(
		'package main\n\nimport "fmt"\n\nfunc main() {\n    queue := make(chan string, 2)\n    queue <- "one"\n    queue <- "twoO"\n    close(queue)\n    for elem := range queue {\n        fmt.Println(elem)\n    }\n}',
	),
);
// p i f       }
// a m u
// c p n
// k o c
// a r  qqqcf }
// g t muuulo
// e   aeeeor
//   " iuuus
// m f neeeeef
// a m (   (lm
// i t ):<<qet
// n "  =--um.
//     {   e P
//      m""u:r
//      aote=i
//      knw) n
//      eeo rt
//      ("O al
//      c " nn
//      h   g(
//      a   ee
//      n    l
//          qe
//      s   um
//      t   e)
//      r   u
//      i   e
//      n
//      g   {
//      ,

//      2
//      )
