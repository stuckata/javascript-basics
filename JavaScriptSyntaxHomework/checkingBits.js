function bitChecker(value) {

	var result = true;

	value = value >> 3;
	value = value & 1;

	if (value == 1) {
		result = true;
		return result;
	} else {
		result = false;
		return result;
	}
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));