const validatePhoneNumber = phoneNum =>
	/^\(?(\d{3})?[-.)]? ?\d{3}[-.]?\d{4}$/.test(phoneNum);

//valid
console.log(validatePhoneNumber("1234567890"));
console.log(validatePhoneNumber("123-456-7890"));
console.log(validatePhoneNumber("123.456.7890"));
console.log(validatePhoneNumber("(123)456-7890"));
console.log(validatePhoneNumber("(123) 456-7890"));
console.log(validatePhoneNumber("456-7890"));

//invalid
console.log(validatePhoneNumber("123-45-6789"));
console.log(validatePhoneNumber("123:4567890"));
console.log(validatePhoneNumber("123/456-7890"));
