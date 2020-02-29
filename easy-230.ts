import { promises } from "fs";

type JsonPrimitive = null | number | boolean | string;
type JsonArray = JsonPrimitive[];
interface IJson {
	[key: string]: JsonPrimitive | JsonArray | IJson;
}

const jsonSearch = (
	input: string | IJson,
	searchTerm: string = "dailyprogrammer",
): string => {
	if (typeof input === "string") {
		input = JSON.parse(input) as IJson;
	}
	let path: string[] = [];
	for (const key in input) {
		if (input.hasOwnProperty(key)) {
			const value = input[key];
			if (value === searchTerm) {
				path.push(key);
			} else if (typeof value === "object") {
				const next = jsonSearch(value as IJson, searchTerm);
				if (next.length) {
					if (Array.isArray(next)) {
						path.push(key);
						path = path.concat(next);
					} else {
						path.push(key, next);
					}
				}
			}
		}
	}
	return path.join(" -> ");
};

console.log(
	jsonSearch(
		'{"name":"William Shakespeare","wife":{"birthYear":1555,"deathYear":"Fun fact, she\'s a vampire","name":"Anne Hathaway","dead":false},"favoriteWebsites":["dailysonneter","dailyprogrammer","vine (he\'s way into 6-second cat videos)"],"dead":true,"birthYear":1564,"facebookProfile":null,"selectedWorks":[{"written":1606,"name":"The Tragedy of Macbeth","isItAwesome":true},{"written":1608,"name":"Coriolanus","isItAwesome":"It\'s alright, but kinda fascist-y"}],"deathYear":1616}',
	),
);

console.log(
	jsonSearch(
		'{"dlpgcack":false,"indwqahe":null,"caki":{"vvczskh":null,"tczqyzn":false,"qymizftua":"jfx","cyd":{"qembsejm":[null,"dailyprogrammer",null],"qtcgujuki":79,"ptlwe":"lrvogzcpw","jivdwnqi":null,"nzjlfax":"xaiuf","cqajfbn":true},"kbttv":"dapsvkdnxm","gcfv":43.25503357696589},"cfqnknrm":null,"dtqx":"psuyc","zkhreog":[null,{"txrhgu":false,"qkhe":false,"oqlzgmtmx":"xndcy","khuwjmktox":48,"yoe":true,"xode":"hzxfgvw","cgsciipn":20.075297532268902},"hducqtvon",false,[null,76.8463226047357,"qctvnvo",null],[null,{"nlp":false,"xebvtnvwbb":null,"uhfikxc":null,"eekejwjbe":false,"jmrkaqky":null,"oeyystp":false},[null,10,"nyzfhaps",71,null],40,null,13.737832677566875],[true,80,20,{"weynlgnfro":40.25989193717965,"ggsirrt":17,"ztvbcpsba":12,"mljfh":false,"lihndukg":"bzebyljg","pllpche":null},null,[true,false,52.532666161803895,"mkmqrhg","kgdqstfn",null,"szse"],null,{"qkhfufrgac":"vpmiicarn","hguztz":"ocbmzpzon","wprnlua":null}],{"drnj":[null,false],"jkjzvjuiw":false,"oupsmgjd":false,"kcwjy":null}]}',
	),
);
// caki -> cyd -> qembsejm -> 1

(async () => {
	const test3 = await promises.readFile("./easy-230-data-1.json", "utf-8");
	console.log(jsonSearch(test3));
	// axvjf -> tskgrsi -> 0 -> ozr -> 0 -> 1 -> 0

	const test4 = await promises.readFile("./easy-230-data-2.json", "utf-8");
	console.log(jsonSearch(test4));
	// myutkqsfzw -> 4 -> fxeu -> 1 -> 0 -> 1 -> 2 -> 7 -> ocjcjokh -> xqfbrz -> 0
})();
