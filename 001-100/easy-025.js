const determineWinner = voteArr => {
	const votes = {};
	voteArr.forEach(vote => {
		if (votes[vote]) votes[vote].count++;
		else votes[vote] = { count: 1 };
		votes[vote].percentage = votes[vote].count / voteArr.length;
	});
	for (const vote in votes) {
		if (votes[vote].percentage > 0.5) return vote;
	}
	return "No majority.";
};

console.log(
	determineWinner(["A", "A", "C", "C", "B", "B", "C", "C", "C", "B", "C", "C"]),
);
console.log(determineWinner(["A", "B", "C", "A", "B", "C", "A"]));
