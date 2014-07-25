function sortArray(value) {

	var i, j, tmp, tmp2;

	for (i = 0; i < value.length - 1; i++) {
		tmp = i;

		for (j = i + 1; j < value.length; j++)

			if (value[j] < value[tmp])
				tmp = j;
		
		tmp2 = value[tmp];
		value[tmp] = value[i];
		value[i] = tmp2;
	}

	return value;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));