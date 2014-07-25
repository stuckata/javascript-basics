function displayProperties() {
	var properties = [];
	for (var key in document) {
		properties.push(key);
	}
	
	properties.sort();
	
	for (var key in properties) {
		console.log(properties[key])
	}
}

displayProperties();