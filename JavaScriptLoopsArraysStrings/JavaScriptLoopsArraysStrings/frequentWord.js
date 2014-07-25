function findMostFreqWord(value) { 

	var words = value.toLowerCase().split(/\W+/);
	var result = [];
	
	for(var w in words){
		if (words[w] in result && words[w] != '') {
			result[words[w]]++;
		} else if (words[w] != ''){ 
			result[words[w]] = 1;
		}
	}
	
	var bestWords = [];
	var count = 0;
	
	for (key in result) {
		if (result[key] > count) {
			count = result[key];
			bestWords = [];
			bestWords.push(key);
		} else if (result[key] == count) { 
			bestWords.push(key);
		}
	}
	
	bestWords = bestWords.sort();
	
	var resultStr = "";
	
	for(var w in bestWords){ 
		resultStr += bestWords[w] + " -> " + count + " times" + "\u000A";
	}

	return resultStr;
}

console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));