// This is a linear solution that relies upon figuring out that only the first few scores aren't possible.
// A more involved solution might search for combinations that add up to the score being tested.
const validateFootballScore = (score: number): string => [1, 2, 4, 5].includes(score) ? "Invalid Score" : "Valid Score";

console.log(validateFootballScore(35));
// Valid Score
console.log(validateFootballScore(2));
// Invalid Score
