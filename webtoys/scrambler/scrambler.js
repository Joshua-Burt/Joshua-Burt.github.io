
let iterations = 100;
let defaultDelimiter = "/ -/";

function getInputtedValues() {
	let inputBox = document.getElementById("input");
	let inputString = inputBox.value;

	let delimiterBox = document.getElementById("delimiter");
	let delimiter = delimiterBox.value;

	return stringToArray(inputString, delimiter);
}

function stringToArray(string, delimiter) {
	let inputArray;
	if(delimiter === "") {
		inputArray = string.split(defaultDelimiter);
	} else {
		inputArray = string.split(delimiter);
	}

	return inputArray;
}

function scramble() {
	let outputString = "";
	let inputArray = getInputtedValues();
	for(let i = 0; i < inputArray.length; i++) {
		let wordArray = inputArray[i].split("");

		for(let o = 0; o < iterations; o++) {
			wordArray = swapRandom(wordArray);
		}

		outputString += wordArray.join("").toString() + " ";
	}

	let outputBox = document.getElementById("output");

	outputBox.value = outputString;
}

function displayDelimiters(delimiterList) {
	let listElement = document.getElementById("delimiterList");
	listElement.innerHTML = "•";
	let newText = "";
	for(let i = 0; i < delimiterList.length; i++) {
		newText += "• " + delimiterList[i] + "  " + delimiterList[i];
	}
}

function swapRandom(wordArray) {
	let random1 = getRandomInt(wordArray.length)
	let random2 = getRandomInt(wordArray.length)

	let a = wordArray[random1];
	wordArray[random1] = wordArray[random2];
	wordArray[random2] = a;

	return wordArray;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
