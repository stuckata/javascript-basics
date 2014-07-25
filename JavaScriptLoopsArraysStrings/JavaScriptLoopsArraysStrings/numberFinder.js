function findMostFreqNum(value) {
	
	var bestNum = 1;
	var counter = 1;
	var repeat = 1;
	
	for (var i = 0; i < value.length - 1; i++) {
		
		for (var i2 = i + 1; i2 < value.length; i2++) { 
		
			if (value[i] == value[i2]) { 
				counter++;
			}
		}
		if (counter > repeat) {
			bestNum = value[i];
			repeat = counter;
		}
		counter = 1;
	}

	if (repeat == 1) {
		return (value[0] + " (1 times)");
	} else { 
	return (bestNum + " (" + repeat + " times)")
	}

}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));