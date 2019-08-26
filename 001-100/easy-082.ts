const alphabet = "abcdefghijklmnopqrstuvwxyz";

const calculateNumberOfSubstrings = (n: number): number => (n * (n + 1)) / 2;

// I suppose one could argue that using .substring is removing a bit of the
// difficulty. But, recreating the substring method can effectively be done with
// a single, basic for loop. So, I omitted it for brevity.
const findSubstrings = (str: string): string[] => {
	const substrings: Set<string> = new Set();
	for (let i = 0; i <= str.length; i++) {
		for (let j = 0; j <= str.length; j++) {
			const substring = str.substring(i, j);
			if (substring) {
				substrings.add(substring);
			}
		}
	}
	return [...substrings];
};

const findSubstringsFromAlphabet = (n: number): string[] => {
	const alphabetPortion = alphabet.slice(0, n);
	return findSubstrings(alphabetPortion);
};

console.log(findSubstringsFromAlphabet(5));
// ["a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e"];

console.log(calculateNumberOfSubstrings(5)); // 15

console.log(findSubstrings("hello"));
// [ "h", "he", "hel", "hell", "hello", "e", "el", "ell", "ello", "l", "ll", "llo", "lo", "o"];
