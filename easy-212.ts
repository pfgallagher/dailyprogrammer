const doubleAndAddO = (input: string): string =>
	`${input}o${input.toLowerCase()}`;

const rovarspraket = (input: string): string =>
	[...input]
		.map(char => (/[^aeiouyå'äö\W]/i.test(char) ? doubleAndAddO(char) : char))
		.join("");

console.log(rovarspraket("Jag talar Rövarspråket!"));
// Jojagog totalolaror Rorövovarorsospoproråkoketot!
console.log(rovarspraket("I'm speaking Robber's language!"));
// I'mom sospopeakokinongog Rorobobboberor'sos lolanongoguagoge!
console.log(rovarspraket("Tre Kronor är världens bästa ishockeylag."));
// Totrore Kokrorononoror äror vovärorloldodenonsos bobäsostota isoshohocockokeylolagog.
console.log(rovarspraket("Vår kung är coolare än er kung."));
// Vovåror kokunongog äror cocoololarore änon eror kokunongog.
