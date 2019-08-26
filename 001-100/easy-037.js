"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const countLinesAndWords = async (filePath) => {
    try {
        const fileContents = await fs_1.promises.readFile(filePath, "utf-8");
        const lineCount = fileContents.split("\n").length;
        const wordCount = [...fileContents]
            .filter(el => el !== "\n")
            .join("")
            .split(" ").length;
        return {
            lines: lineCount,
            words: wordCount,
        };
    }
    catch (error) {
        return error;
    }
};
(async () => {
    const count = await countLinesAndWords("./easy-037-data.txt");
    console.log(count);
})();
