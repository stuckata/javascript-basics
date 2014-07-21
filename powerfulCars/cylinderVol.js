function calcCylinderVol(value) {
	
	var volume = Math.pow(value[0], 2) * value[1] * Math.PI;
	volume = volume.toFixed(3);
	return volume;
}

console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));