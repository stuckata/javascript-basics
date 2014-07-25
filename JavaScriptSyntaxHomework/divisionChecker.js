function divisionBy3(value) {

	var num = 0;
	var result = 0;

	while (value >= 1) {
		num = (value % 10);
		result += num;
		value /= 10;
		value = Math.floor(value);
	}

	if (result % 3 == 0) {
		return ("the number is divided by 3 without remainder");
	} else {
		return ("the number is not divided by 3 without remainder");
	}
}

console.log(divisionBy3(12));
console.log(divisionBy3(189));
console.log(divisionBy3(591));