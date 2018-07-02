'use strict';
//Zmienne
let firstNumber;
let secondNumber;
let calcWindow = document.getElementById('calcResult');
let calcOperation = null;
let dotSign = false;

// Funkcja do obliczania wyniku
function calc(numberOne, numberTwo, operation) {
	let result;
		switch (operation) {
			case '+':
				result = (+numberOne) + (+numberTwo);
				calcWindow.innerText = result;
				break;
			case '-':
				result = (+numberOne) - (+numberTwo);
				calcWindow.innerText = result;
				break;
			case 'x':
				result = (+numberOne) * (+numberTwo);
				calcWindow.innerText = result;
				break;
			case '/':
				result = (+numberOne) / (+numberTwo);
				calcWindow.innerText = result;
				break;
			case '%':
				result = (+numberOne) % (+numberTwo);
				calcWindow.innerText = result;
				break;
			default:
				break;
		}
};

//Obsluga Buttonow

document.getElementById('btnContainer').addEventListener('click', printNumber);

function printNumber(e) {
	var objectTarget = e.target.innerHTML;
	if (e.target.tagName != 'BUTTON') return;
	else if (!isNaN(objectTarget)) {
		document.getElementById('calcResult').innerHTML += objectTarget;
	} else if (objectTarget == '.') {
		if (dotSign == false && (calcWindow.innerHTML != '')) {
			calcWindow.innerText += '.';
			dotSign = true;
		}
	} else if (objectTarget == 'Del') {
		calcWindow.innerText = '';
		firstNumber = '';
		secondNumber = '';
	} else if (objectTarget == '=') {
		secondNumber = calcWindow.innerHTML;
		calcWindow.innerHTML = '';
		if (calcOperation != null) {
			if (firstNumber == 0 && calcOperation == '/') {
				calcWindow.innerHTML = 'Nie mozna dzielic przez 0!';
				return;
			}
			calc(firstNumber, secondNumber, calcOperation);
		}
	} else {
		calcOperation = objectTarget;
		firstNumber = calcWindow.innerHTML;
		calcWindow.innerHTML = '';
		dotSign = false;
	}
}