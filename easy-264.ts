enum FindType {
	brackets = "brackets",
	declaration = "declaration",
	directives = "directives",
	indentKeywords = "indentKeywords",
	variableAssignments = "variableAssignments",
}

const basicCppPrimitives = ["char", "int", "float", "double", "bool", "void"];
const basicCppIndentKeywords = ["for", "if", "else"];

const countLeadingWhitespace = (input: string): number => {
	let whitespaceCount = 0;
	for (let i = 0; i < input.length; i++) {
		if (input[i] === " ") {
			whitespaceCount++;
		} else {
			break;
		}
	}
	return whitespaceCount;
};

const find = (codeLines: string[], findType: FindType): string | string[] => {
	const findFuncs = {
		[FindType.brackets]: () => codeLines.filter(line => /[{}]/.test(line)),
		[FindType.declaration]: () =>
			codeLines.find(
				line =>
					basicCppPrimitives.some(primitive => line.includes(primitive)) &&
					/(.*)/.test(line) &&
					countLeadingWhitespace(line) === 0,
			) || "",
		[FindType.directives]: () =>
			codeLines.filter(line => line.includes("#include")),
		[FindType.indentKeywords]: () =>
			codeLines.filter(line =>
				basicCppIndentKeywords.some(keyword => line.includes(keyword)),
			),
		[FindType.variableAssignments]: () =>
			codeLines.filter(
				line =>
					basicCppPrimitives.some(primitive => line.includes(primitive)) &&
					!basicCppIndentKeywords.some(keyword => line.includes(keyword)) &&
					line.includes("="),
			),
	};
	return findFuncs[findType]();
};

const unsortCode = (input: string): string => {
	const codeLines = input.split("\n");
	const indentLevels: { [depth: string]: string[] } = {};
	const directives = find(codeLines, FindType.directives);
	const declaration = find(codeLines, FindType.declaration) as string;
	[...directives, declaration].forEach(line => {
		codeLines.splice(codeLines.indexOf(line), 1);
	});
	codeLines.forEach(line => {
		const depth = countLeadingWhitespace(line).toString();
		if (indentLevels[depth]) {
			indentLevels[depth].push(line);
		} else {
			indentLevels[depth] = [line];
		}
	});
	Object.keys(indentLevels).forEach(indentLevel => {
		const level = indentLevels[indentLevel];
		const indentKeywords = find(level, FindType.indentKeywords) as string[];
		const brackets = find(level, FindType.brackets) as string[];
		const variableAssignments = find(
			level,
			FindType.variableAssignments,
		) as string[];
		if (variableAssignments) {
			variableAssignments.forEach(variableAssignment => {
				level.splice(level.indexOf(variableAssignment), 1);
			});
		}
		if (indentKeywords.length) {
			brackets.forEach(bracket => {
				level.splice(level.indexOf(bracket), 1);
			});
			indentKeywords.forEach(indentKeyword => {
				level.splice(
					level.indexOf(indentKeyword) + 1,
					0,
					...(brackets.length ? [brackets[0], brackets[1]] : ""),
				);
			});
		}
		level.unshift(...variableAssignments);
		indentLevels[indentLevel] = level;
	});
	const mergedLevels = Object.values(indentLevels).reduce((a, c) => {
		const lastOpeningBracketI = [...a]
			.reverse()
			.findIndex(line => line.includes("{"));
		if (lastOpeningBracketI) {
			a.splice(lastOpeningBracketI, 0, ...c);
		}
		return a;
	}, []);
	return [...directives, "", declaration, ...mergedLevels].join("\n");
};

console.log(
	unsortCode(
		"    sum = i + sum;\n  {\n  }\n  int sum = 0;\n  for (int i = 0; i <= 100; ++i)\n  std::cout << sum;\n  return 0;\n{\n}\n#include <iostream>\nint main()",
	),
);
// #include <iostream>

// int main()
// {
//   int sum = 0;
//   for (int i = 0; i <= 100; ++i)
//   {
//     sum = i + sum;
//   }
//   std::cout << sum;
//   return 0;
// }
