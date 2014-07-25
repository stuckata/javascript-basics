function createArray(value) {
	
	var arr = [];
	
	for (var i = 0; i < 20; i++) {

		arr.push(i * 5);
	}

	return arr;

}

console.log(createArray());