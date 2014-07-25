function isPrime(value) {

	var primeCheck = true;

	if (value > 3) {
		for (var i = 2; i < Math.sqrt(value); i++) {
			if (value % i == 0) {
				primeCheck = false;
				break;
			}
		}
	} else {
		return primeCheck;
	}

	return primeCheck;
    
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));