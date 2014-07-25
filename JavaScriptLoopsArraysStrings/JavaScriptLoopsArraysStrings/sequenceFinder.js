function findMaxSequence(value) {
	
	var bestSeq = 1;
	var temp = 1;
	var char = 0;
	
	if (value.length == 1) {
		return [value[0]];
	} else {
		
		for (var i = 0; i < value.length - 1; i++) {
			
			if (value[i] === value[i + 1]) {
				temp++;
			} else if (temp >= bestSeq) {
				bestSeq = temp;
				char = value[i];
				temp = 1;
			}
		}
		if (bestSeq == 1) { 
			return [value[value.length - 1]];
		} else {
			var result = [];
			for (var i = 0; i < bestSeq; i++) {
				result.push(char);
			}
			return result;
		}
	}
	
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
console.log(findMaxSequence([2, 3]));