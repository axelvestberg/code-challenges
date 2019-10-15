quickSort = array => {
	if (array.length < 2) {
		return array
	}
	const chosenIndex = array.length - 1;
	const chosen = array[chosenIndex];
	const a = [];
	const b = [];
	for (let i = 0; i < chosenIndex; i++) {
		const temp = array[i];
		temp < chosen ? a.push(temp) : b.push(temp);
	}

	const output = [...quickSort(a), chosen, ...quickSort(b)]
	console.log(output.join(' '));
	return output;
}
const numbers = [0, 4, 2, 9, 3, 5, 6, 8, 1, 7];
const numbers2 = [100, 2, 3, 4, 10, 9, 2, 200, 239, 37, 20, 1, 15, 7, -20, -1, 0, -2000];
quickSort(numbers2);