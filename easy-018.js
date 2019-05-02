const numKey = "22233344455566677778889999";

const convertLettersToNumbers = phoneNumber => {
	const convertedNum = [...phoneNumber]
		.filter(el => el !== "-")
		.map(el => {
			const code = el.toUpperCase().charCodeAt() - 65;
			return code >= 0 && code <= 25 ? numKey[code] : el;
		})
		.join("");
	return `${convertedNum[0]}-${convertedNum.slice(1, 4)}-${convertedNum.slice(4,7)}-${convertedNum.slice(7)}`;
};

console.log(convertLettersToNumbers("1-800-VERIZON"));
console.log(convertLettersToNumbers("1-800-verizon"));
console.log(convertLettersToNumbers("1-800-COMCAST"));
console.log(convertLettersToNumbers("1-800-comcast"));
