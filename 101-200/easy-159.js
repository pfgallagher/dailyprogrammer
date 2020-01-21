var rpsls = function (playerMove) {
    var options = {
        rock: {
            rock: 'Tie.',
            paper: 'You lose. Paper covers rock.',
            scissors: 'You win. Rock crushes scissors.',
            lizard: 'You win. Rock crushes lizard.',
            spock: 'You lose. Spock vaporizes rock.'
        },
        paper: {
            rock: 'You win. Paper covers rock.',
            paper: 'Tie.',
            lizard: 'You lose. Lizard eats paper.',
            scissors: 'You lose. Scissors cut paper.',
            spock: 'You win. Paper disproves Spock.'
        },
        scissors: {
            rock: 'You lose. Rock crushes scissors.',
            paper: 'You win. Scissors cut paper.',
            lizard: 'You win. Scissors decapitate lizard.',
            scissors: 'Tie.',
            spock: 'You lose. Spock smashes scissors.'
        },
        lizard: {
            rock: 'You lose. Rock crushes lizard.',
            paper: 'You win. Lizard eats paper.',
            lizard: 'Tie.',
            scissors: 'You lose. Scissors decapitate lizard.',
            spock: 'You win. Lizard poisons Spock.'
        },
        spock: {
            rock: 'You win. Spock vaporizes rock.',
            paper: 'You lose. Paper disproves Spock.',
            lizard: 'You lose. Lizard poisons Spock.',
            scissors: 'You win. Spock smashse scissors.',
            spock: 'Tie.'
        }
    };
    var computerChoices = ["rock", "paper", "scissors", "lizard", "spock"];
    var computersMove = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return options[playerMove][computersMove];
};
console.log(rpsls("rock"));
console.log(rpsls("paper"));
console.log(rpsls("scissors"));
console.log(rpsls("lizard"));
console.log(rpsls("spock"));
