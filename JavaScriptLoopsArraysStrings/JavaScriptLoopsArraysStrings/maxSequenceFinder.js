function findMaxSequence(value) { 

	var bestSeq = 1;
	var temp = 1;
	var indexLast = 0;
	var result = [];
	
	if (value.length == 1) {
		return "no";
	} else {
		
		for (var i = 0; i < value.length - 1; i++) {
			
			if (value[i] < value[i + 1] && i != value.length - 2) {
				temp++;
			} else if (temp > bestSeq) {
				if (i == value.length - 2) {
					bestSeq = temp;
					indexLast = i + 1;
					temp = 1;
				} else {
					bestSeq = temp;
					indexLast = i;
					temp = 1;
				}
			}
		}
		
		if (bestSeq == 1) {
			return "no";
		} else {
			for (var i = indexLast - bestSeq + 1; i <= indexLast; i++) {
				result.push(value[i]);
			}
			return result;
		}
	}
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));