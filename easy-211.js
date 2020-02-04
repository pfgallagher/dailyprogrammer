var nameGame = function (name) {
    var baseName = /[aeiou]/i.test(name[0])
        ? name.toLowerCase()
        : name.slice(1);
    var bName = name.startsWith("B") ? "Bo-" + name.slice(1) : "B" + baseName;
    var fName = name.startsWith("F") ? "Fo-" + name.slice(1) : "F" + baseName;
    var mName = name.startsWith("M") ? "Mo-" + name.slice(1) : "M" + baseName;
    return name + ", " + name + " bo " + bName + ",\nBonana fanna fo " + fName + ",\nFee fy mo " + mName + ",\n" + name + "!\n";
};
console.log(nameGame("Shirley"));
// Shirley, Shirley bo Bhirley,
// Bonana fanna fo Fhirley,
// Fee fy mo Mhirley,
// Shirley!
console.log(nameGame("Lincoln"));
// Lincoln, Lincoln bo Bincoln,
// Bonana fanna fo Fincoln,
// Fee fy mo Mincoln,
// Lincoln!
console.log(nameGame("Arnold"));
// Arnold, Arnold bo Barnold,
// Bonana fanna fo Farnold,
// Fee fy mo Marnold,
// Arnold!
console.log(nameGame("Billy"));
// Billy, Billy bo Bo-illy,
// Bonana fanna fo Filly,
// Fee fy mo Milly,
// Billy!
console.log(nameGame("Bob"));
// Bob, Bob bo Bo-ob,
// Bonana fanna fo Fob,
// Fee fy mo Mob,
// Bob!
console.log(nameGame("Fred"));
// Fred, Fred bo Bred,
// Bonana fanna fo Fo-red,
// Fee fy mo Mred,
// Fred!
console.log(nameGame("Mary"));
// Mary, Mary bo Bary,
// Bonana fanna fo Fary,
// Fee fy mo Mo-ary,
// Mary!
console.log(nameGame("Nick"));
// Nick, Nick bo Bick,
// Bonana fanna fo Fick,
// Fee fy mo Mick,
// Nick!
console.log(nameGame("Tony"));
// Tony, Tony bo Bony,
// Bonana fanna fo Fony,
// Fee fy mo Mony,
// Tony!
console.log(nameGame("Marsha"));
// Marsha, Marsha bo Barsha,
// Bonana fanna fo Farsha,
// Fee fy mo Mo-arsha,
// Marsha!
