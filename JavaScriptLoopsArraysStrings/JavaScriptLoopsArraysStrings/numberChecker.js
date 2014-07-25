function printNumbers(n) {
	
	var arrNums = [];
	var result = "";
	
	for (var i = 1; i <= n; i++) {
		
		if ((i % 4 != 0) && (i % 5 != 0)) {
			arrNums.push(i);
		}
	}
	
	if (arrNums.length == 0) {
		result += "no";
	} else {
		result = arrNums.join(", ")
	}
	
	return result;

}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));