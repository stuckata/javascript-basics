function countSubstringOccur(value) {
	
	var keyword = value[0];
	var text = value[1];
	var counter = 0;
	var isEqual = true;
	
	keyword = keyword.toLowerCase().replace(/[^a-z]/g, '');
	text = text.toLowerCase().replace(/[^a-z]/g, '');
	
	for (var i1 = 0; i1 < text.length; i1++) {
		
		if (keyword[0] == text[i1]) {
			for (var i2 = 1; i2 < keyword.length; i2++) {
				if (keyword[i2] != text[i1 + i2]) {
					isEqual = false;
					break;
				}
			}
			if (isEqual) {
				counter++;
			}
		}
		isEqual = true;
	}

	return counter;
}

console.log(countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else.Insidethe submarine is very tight.So we are drinking all the day.We will move out of it in 5 days.']));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']));