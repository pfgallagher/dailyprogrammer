var animals = [
    { species: "cow", sound: "moo" },
    { species: "chicken", sound: "cluck" },
    { species: "turkey", sound: "gobble" },
    { species: "kangaroo", sound: "g'day mate" },
    { species: "t-rex", sound: "GAAAAARGH" },
    { species: "cat", sound: "meow" },
];
var oldMacDonald = function (animalArr) {
    var refrain = "Old MacDonald had a farm, E-I-E-I-O!";
    console.log(refrain + "\n");
    for (var _i = 0, animalArr_1 = animalArr; _i < animalArr_1.length; _i++) {
        var animal = animalArr_1[_i];
        var species = animal.species, sound = animal.sound;
        console.log("And on this farm he had a " + species + ", E-I-E-I-O!\nWith a " + sound + "-" + sound + " here and a " + sound + "-" + sound + " there.\nHere a " + sound + ", there a " + sound + ".\nEverywhere a " + sound + "-" + sound + ".\n\n" + refrain + "\n");
    }
};
oldMacDonald(animals);
