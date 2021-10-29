var inputValue = 0;
var totalValue = 0;
var operationIndicator = false;
var addOperation = false;
var subtractOperation = false;
var multiplyOperation = false;
var divideOperation = false;
var hasResult = false;
var hasDecimal = false;

var decimal, zero, one, two, three, four, five, six, seven, eight, nine;

var multiply, divide, add, subtract;
	
var equals, del, back;

function acceptKey(e) {
    var event = window.event ? window.event : e;
    if (true) {
        alert(event.keyCode);
    }
}

function init() {
	decimal = getID('btnDecimal');
	zero = getID('btnZero');
	one = getID('btnOne');
	two = getID('btnTwo');
	three = getID('btnThree');
	four = getID('btnFour');
	five = getID('btnFive');
	six = getID('btnSix');
	seven = getID('btnSeven');
	eight = getID('btnEight');
	nine = getID('btnNine');

	multiply = getID('btnMultiply');
	divide = getID('btnDivide');
	add = getID('btnAdd');
	subtract = getID('btnSubtract');
		
	equals = getID('btnEquals');
	del = getID('btnDelete');
	back = getID('btnBackspace');
	
	decimal.onclick = function() {inputDecimal();}
	zero.onclick = function() {inputHandler('0');};
	one.onclick = function() {inputHandler('1');};
	two.onclick = function() {inputHandler('2');};
	three.onclick = function() {inputHandler('3');};
	four.onclick = function() {inputHandler('4');};
	five.onclick = function() {inputHandler('5');};
	six.onclick = function() {inputHandler('6');};
	seven.onclick = function() {inputHandler('7');};
	eight.onclick = function() {inputHandler('8');};
	nine.onclick = function() {inputHandler('9');};
	
	multiply.onclick = function() {multiplyOperation = clickOperator(multiplyOperation);};
	divide.onclick = function() {divideOperation = clickOperator(divideOperation);};
	add.onclick = function() {addOperation = clickOperator(addOperation);};
	subtract.onclick = function() {subtractOperation = clickOperator(subtractOperation);};
	
	equals.onclick = function() {clickEquals();};
	del.onclick = function() {clickClear();};
	back.onclick = function() {clickDelete();};
}

function getID(id) {return document.getElementById(id);}

function inputHandler(txtNumber) {
	var stringValue = getID('txtDisplay').value;
	var stringLength = stringValue.length;
	
	if (stringLength != 14) {
		
		if (hasDecimal) {
			if (hasResult) {
				getID('txtDisplay').value = "";
				hasResult = false;
			}
			getID('txtDisplay').value = getID('txtDisplay').value + txtNumber;
		} else {
			if (hasResult) {
				getID('txtDisplay').value = "";
				hasResult = false;
			}
			
			if (operationIndicator) {
				getID('txtDisplay').value = "";
				operationIndicator = false;
			}
			
			if (stringValue == 0) {
				if (hasDecimal) {
					getID('txtDisplay').value = getID('txtDisplay').value + txtNumber;
				} else {
					getID('txtDisplay').value = txtNumber;
				}
			} else {
				if (operationIndicator) {
					getID('txtDisplay').value = txtNumber;
					operationIndicator = false;
				} else {
					getID('txtDisplay').value = getID('txtDisplay').value + txtNumber;
				}
			}
		}
	}
}

function resetOperations() {
	addOperation = false;
	subtractOperation = false;
	multiplyOperation = false;
	divideOperation = false;
}

function inputDecimal() {
	if (hasDecimal === false) {
		getID('txtDisplay').value = getID('txtDisplay').value + ".";
		hasDecimal = true;
	}
	
	if (hasResult) {
		getID('txtDisplay').value = "0.";
		hasResult = false;
	}
}

function calculate() {
	inputValue = getID('txtDisplay').value;
	if (addOperation) {
		totalValue = parseFloat(totalValue) + parseFloat(inputValue);
	} else if (subtractOperation) {
		totalValue = parseFloat(totalValue) - parseFloat(inputValue);
	} else if (multiplyOperation) {
		totalValue = parseFloat(totalValue) * parseFloat(inputValue);
	} else if (divideOperation) {
		totalValue = parseFloat(totalValue) / parseFloat(inputValue);
	} else {
		totalValue = inputValue;
	}
	
	getID('txtDisplay').value = totalValue;
}

function clickClear() {
	getID('txtDisplay').value = 0;
	operationIndicator = false;
	totalValue = 0;
	inputValue = 0;
	resetOperations();
	hasResult = false;
	hasDecimal = false;
}

function clickOperator(operator) {
	var stringLength = getID('txtDisplay').value.length;
	if (stringLength != 0) {
		calculate();
		resetOperations();
		operator = true;
		operationIndicator = true;
		getID('txtDisplay').value = 0;
		hasDecimal = false;
		hasResult = false;
	}
	return operator;
}

function clickEquals() {
	calculate();
	resetOperations();
	operationIndicator = true;
	hasDecimal = false;
	hasResult = true;
}

function clickDelete() {
	var stringValue = getID('txtDisplay').value;
	var stringLength = stringValue.length;	
	if (stringLength > 1) {
		getID('txtDisplay').value = stringValue.substring(0, stringLength-1)
	} else {
		getID('txtDisplay').value = "0";
	}
}

window.onload = init;