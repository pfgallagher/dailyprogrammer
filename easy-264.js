var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var FindType;
(function (FindType) {
    FindType["brackets"] = "brackets";
    FindType["declaration"] = "declaration";
    FindType["directives"] = "directives";
    FindType["indentKeywords"] = "indentKeywords";
    FindType["variableAssignments"] = "variableAssignments";
})(FindType || (FindType = {}));
var basicCppPrimitives = ["char", "int", "float", "double", "bool", "void"];
var basicCppIndentKeywords = ["for", "if", "else"];
var countLeadingWhitespace = function (input) {
    var whitespaceCount = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            whitespaceCount++;
        }
        else {
            break;
        }
    }
    return whitespaceCount;
};
var find = function (codeLines, findType) {
    var _a;
    var findFuncs = (_a = {},
        _a[FindType.brackets] = function () { return codeLines.filter(function (line) { return /[{}]/.test(line); }); },
        _a[FindType.declaration] = function () {
            return codeLines.find(function (line) {
                return basicCppPrimitives.some(function (primitive) { return line.includes(primitive); }) &&
                    /(.*)/.test(line) &&
                    countLeadingWhitespace(line) === 0;
            }) || "";
        },
        _a[FindType.directives] = function () {
            return codeLines.filter(function (line) { return line.includes("#include"); });
        },
        _a[FindType.indentKeywords] = function () {
            return codeLines.filter(function (line) {
                return basicCppIndentKeywords.some(function (keyword) { return line.includes(keyword); });
            });
        },
        _a[FindType.variableAssignments] = function () {
            return codeLines.filter(function (line) {
                return basicCppPrimitives.some(function (primitive) { return line.includes(primitive); }) &&
                    !basicCppIndentKeywords.some(function (keyword) { return line.includes(keyword); }) &&
                    line.includes("=");
            });
        },
        _a);
    return findFuncs[findType]();
};
var unsortCode = function (input) {
    var codeLines = input.split("\n");
    var indentLevels = {};
    var directives = find(codeLines, FindType.directives);
    var declaration = find(codeLines, FindType.declaration);
    __spread(directives, [declaration]).forEach(function (line) {
        codeLines.splice(codeLines.indexOf(line), 1);
    });
    codeLines.forEach(function (line) {
        var depth = countLeadingWhitespace(line).toString();
        if (indentLevels[depth]) {
            indentLevels[depth].push(line);
        }
        else {
            indentLevels[depth] = [line];
        }
    });
    Object.keys(indentLevels).forEach(function (indentLevel) {
        var level = indentLevels[indentLevel];
        var indentKeywords = find(level, FindType.indentKeywords);
        var brackets = find(level, FindType.brackets);
        var variableAssignments = find(level, FindType.variableAssignments);
        if (variableAssignments) {
            variableAssignments.forEach(function (variableAssignment) {
                level.splice(level.indexOf(variableAssignment), 1);
            });
        }
        if (indentKeywords.length) {
            brackets.forEach(function (bracket) {
                level.splice(level.indexOf(bracket), 1);
            });
            indentKeywords.forEach(function (indentKeyword) {
                level.splice.apply(level, __spread([level.indexOf(indentKeyword) + 1,
                    0], (brackets.length ? [brackets[0], brackets[1]] : "")));
            });
        }
        level.unshift.apply(level, __spread(variableAssignments));
        indentLevels[indentLevel] = level;
    });
    var mergedLevels = Object.values(indentLevels).reduce(function (a, c) {
        var lastOpeningBracketI = __spread(a).reverse()
            .findIndex(function (line) { return line.includes("{"); });
        if (lastOpeningBracketI) {
            a.splice.apply(a, __spread([lastOpeningBracketI, 0], c));
        }
        return a;
    }, []);
    return __spread(directives, ["", declaration], mergedLevels).join("\n");
};
console.log(unsortCode("    sum = i + sum;\n  {\n  }\n  int sum = 0;\n  for (int i = 0; i <= 100; ++i)\n  std::cout << sum;\n  return 0;\n{\n}\n#include <iostream>\nint main()"));
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
