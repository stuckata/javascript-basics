function findCardFrequency(value) {
	
	var deck = value.split(/[♣♦♥♠ ]+/);
	deck.pop();
	var cardFaceNum = [];
	var resultStr = "";
	
	for (var card in deck) {
		if (deck[card] in cardFaceNum) {
			cardFaceNum[deck[card]]++;
		} else {
			cardFaceNum[deck[card]] = 1;
		}
	}
	
	var percentPerCard = 100 / deck.length;
	
	for (var card in deck) {
		if (deck[card] in cardFaceNum) {
			resultStr += deck[card] + " -> " + (cardFaceNum[deck[card]] * percentPerCard).toFixed(2) + "%" + "\n";
			delete cardFaceNum[deck[card]];
		}
	}
	
	return resultStr;

}

console.log(findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'));
console.log(findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'));
console.log(findCardFrequency('10♣ 10♥'));