const cipher = (str, shift) =>
	[...str]
		.map(el => {
			const charCode = el.charCodeAt();
			if (charCode >= 97 && charCode <= 122) {
				const moduloOne = (charCode + shift) % 122;
				return !moduloOne
					? "z"
					: moduloOne < 97
						? String.fromCharCode(moduloOne + 96)
						: String.fromCharCode(moduloOne);
			}
			if (charCode >= 65 && charCode <= 90) {
				const moduloTwo = (charCode + shift) % 90;
				return !moduloTwo
					? "Z"
					: moduloTwo < 65
						? String.fromCharCode(moduloTwo + 64)
						: String.fromCharCode(moduloTwo);
			}
			return el;
		})
		.join("");
