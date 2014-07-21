function calcSupply(value) {
	
	var result = 0;
	var supPerYear = 0;
	
	supPerYear = (365 * value[2]);
	result = (value[1] - value[0]) * supPerYear;
	result = Math.floor(result);
	
	
	return (result + "kg of " + value[3] + " would be enough until I am " + value[1] + " years old.");
}

console.log(calcSupply([38, 118, 0.5, "chocolate"]));
console.log(calcSupply([20, 87, 2, "fruits"]));
console.log(calcSupply([16, 102, 1.1, "nuts"]));