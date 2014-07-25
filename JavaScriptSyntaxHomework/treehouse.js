function treeHouseCompare(value) {
	
	var houseArea = Math.pow(value[0], 2) + (value[0] * (2 / 3 * (value[0])) / 2);
	var treeArea = 1 / 3 * value[1] * value[1] + Math.PI * Math.pow(((value[1] + value[1] / 3) / 2), 2);
	
	if (houseArea > treeArea) {
		return ("house/" + houseArea.toFixed(2));
	} else {
		return ("tree/" + treeArea.toFixed(2));
	}
}

console.log(treeHouseCompare([3, 2]));
console.log(treeHouseCompare([3, 3]));
console.log(treeHouseCompare([4, 5]));