function reverseString(value) { 

	var reversedArr = "";

	for (var i = value.length - 1; i >= 0; i--) { 

		reversedArr += "" + value[i];
	}
	return reversedArr;

}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));