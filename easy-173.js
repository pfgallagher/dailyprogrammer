var ratios = {
    attoparsecs: {
        inches: 1.215,
        meters: Math.pow(32.408, -1),
        miles: Math.pow(52155.287, -1)
    },
    "hogsheads of Beryllium": {
        kilograms: 440.7,
        ounces: 15545.6,
        pounds: 971.6
    },
    inches: {
        attoparsecs: Math.pow(1.215, -1),
        meters: Math.pow(39.37, -1),
        miles: Math.pow(63360, -1)
    },
    kilograms: {
        "hogsheads of Beryllium": Math.pow(440.7, -1),
        ounces: 35.274,
        pounds: 2.205
    },
    meters: {
        attoparsecs: 32.408,
        inches: 39.37,
        miles: Math.pow(1609.344, -1)
    },
    miles: {
        attoparsecs: 52155.287,
        inches: 63360,
        meters: 1609.344
    },
    ounces: {
        "hogsheads of Beryllium": Math.pow(15545.6, -1),
        kilograms: Math.pow(35.274, -1),
        pounds: Math.pow(16, -1)
    },
    pounds: {
        "hogsheads of Beryllium": Math.pow(971.6, -1),
        kilograms: Math.pow(2.205, -1),
        ounces: 16
    }
};
var convertUnits = function (n, oldU, newU) {
    return ratios[oldU][newU]
        ? n + " " + oldU + " is " + (ratios[oldU][newU] * n).toFixed(1) + " " + newU
        : n + " " + oldU + " can't be converted to " + newU;
};
console.log(convertUnits(3, "meters", "inches")); // 3 meters is 118.1 inches
console.log(convertUnits(3, "meters", "pounds")); // 3 meters can't be converted to pounds
console.log(convertUnits(32, "ounces", "pounds")); // 32 ounces is 2.0 pounds
