function solve() {
	let input = document.getElementById('input').value;
	let result = document.getElementById('resultOutput');
	let numberToCut = sumInput(input);
	let cuttedInput = input.substring(numberToCut, input.length - numberToCut);
	let sentence = convertTosentence(cuttedInput);
	result.textContent = sentence;



	function sumInput(input) {
		let resultSum = input;

		while (resultSum.length > 1) {
			let sum = 0;

			for (let num of resultSum) {
				num = Number(num);
				sum += num;
			}

			resultSum = `${sum}`;
		}

		return Number(resultSum);
	}

	function convertTosentence(input) {
		let arrCodes = [];

		for (let i = 0; i < input.length; i += 8) {
			let code = input.substr(i, 8);
			let letter = parseInt(code, 2);
			arrCodes.push(letter);

		}
		return arrCodes.map(e => String.fromCharCode(e)).join('');
	}
}