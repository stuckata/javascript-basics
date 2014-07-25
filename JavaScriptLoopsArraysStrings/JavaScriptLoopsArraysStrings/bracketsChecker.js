function checkBrackets(value) {
	
	var leftB = "";
	var rightB = "";

	value = value.replace(/[^()]/g, '');
	
	if (value[0] == ")") {
		return "incorrect";
	} else {

		for(var i = 0; i < value.length; i++){
			if (value[i] == "(") {
				leftB += "" + value[i];
			} else { 
				rightB += "" + value[i];
			}
		}

		if (leftB.length == rightB.length) {
			return "correct";
		} else { 
			return "incorrect";
		}
	}
	return value;
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));