function findPalindromes(value) { 
	
	var wordList = value.replace(/[""]/g, "@").toLowerCase().split(/\W+/);
	var result = [];
	
	for (var i = 0; i < wordList.length; i++) {

		var isEqual = true;
		var temp = wordList[i];

		if (temp != '' || temp != ' ') { 
		
			for (var i2 = 0; i2 < temp.length; i2++) { 
			
				if (temp[i2] != temp[temp.length - 1 - i2]) { 
					isEqual = false;
				}
			}
		}

		if (isEqual && temp != '') { 
			result.push(temp);
		}
	}
	
	return result.join(', ');

}

console.log(findPalindromes('There is a man, his name was Bob.'));