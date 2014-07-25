function checkDigit(value) { 

	value = Math.floor(value / 100);
	var result = value % 10;

	var isThree = (result == 3);
	return isThree;
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));