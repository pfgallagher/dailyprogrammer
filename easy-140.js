var variableNotation = function (notationType, input) {
    var words = input.split(" ");
    switch (notationType) {
        case 0:
            return words
                .map(function (word, i) {
                return !i ? word : "" + word[0].toUpperCase() + word.slice(1);
            })
                .join("");
        case 1:
            return words.join("_");
        case 2:
            return words.map(function (word) { return word.toUpperCase(); }).join("_");
        default:
            return "Invalid Notation Type";
    }
};
console.log(variableNotation(0, "hello world")); // helloWorld
console.log(variableNotation(1, "user id")); // user_id
console.log(variableNotation(2, "map controller delegate manager")); // MAP_CONTROLLER_DELEGATE_MANAGER
