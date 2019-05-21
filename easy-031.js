const base26ToBase10 = (base26Num) => [...base26Num].reduce((acc, cur, idx, arr) => acc + (cur.charCodeAt(0) - 65) * 26 ** (arr.length - idx - 1), 0);
const base10ToBase26 = (base10Num) => {
    let value = "";
    let quotient = base10Num;
    while (quotient !== 0) {
        const remainder = quotient % 26;
        value = `${String.fromCharCode(remainder + 65)}${value}`;
        quotient = Math.floor(quotient / 26);
    }
    return value;
};
const base26Multiplication = (factorOne, factorTwo) => base10ToBase26(base26ToBase10(factorOne) * base26ToBase10(factorTwo));
console.log(base26ToBase10("CSGHJ")); // -> 1234567
console.log(base10ToBase26(1234567)); // -> CSGHJ
console.log(base26Multiplication("CSGHJ", "CBA")); // -> FNEUZJA
