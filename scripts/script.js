let mainDisplay = document.getElementById("value")
let operationDisplay = document.getElementById("prevalue")

let previousValue = '';
let inputValue = '';
let haveDot = false;
let result = undefined;
let operationDone = false;
let lastOperation = '';

const appendNumber = document.querySelectorAll('#number');
appendNumber.forEach(number => {
    number.addEventListener("click", () =>{
        if(number.innerText === "." && !haveDot){
            haveDot = true;
        }else if(number.innerText === "." && haveDot){
            return;
        } else if(number.innerText === '='){
            return;
        }
    inputValue += number.innerText;
    mainDisplay.innerText=inputValue;

    })
});

const operationBtns = document.querySelectorAll('#operator');
operationBtns.forEach(operation => {
    operation.addEventListener("click", () =>{
        if(!inputValue) result;
        haveDot = false;
        const operationName = operation.value;
        if(inputValue && previousValue && lastOperation){
            calculate();
        }else {
            result = parseFloat(inputValue);
        }
        clearVar (operationName);
        console.log(result)
})
});

const clearVar = (operator = '') => {
    previousValue += inputValue + ' ' + operator + ' ';
    operationDisplay.innerText = previousValue;
    inputValue = '';
    mainDisplay.innerText = result;
}

const calculate = () => {
    if(!isNaN(inputValue) && !isNaN(previousValue) && lastOperation!== ''){
        switch (lastOperation){
            case '+':
                result = parseFloat(previousValue) + parseFloat(inputValue);
                break;
            case "-":
                result = parseFloat(previousValue) - parseFloat(inputValue);
                break;
            case "x":
                result = parseFloat(previousValue) * parseFloat(inputValue);
                break;
            case "÷":
                if(isFinite(result)){
                    result = parseFloat(previousValue) / parseFloat(inputValue);
                    }else{
                        alert("Invalid Operation");
                        result = "Error"
                    }
                break;     
    }
}
}

const equalsButton = document.getElementById("equals-btn")
equalsButton.addEventListener("click", () =>{
    if (!inputValue || !previousValue) return;
    haveDot = false;
    calculate();
    clearVar();
    mainDisplay.innerText = result;
    inputValue = result;
    previousValue = '';

    inputValue = '';
    operator= '';

    operationDone = true;
});

const squareFunction = document.getElementById("square-btn")
    squareFunction.addEventListener ('click', (e) => {
        if (operator === ''){
           inputValue = Math.pow(parseFloat(previousValue), 2);
           previousValue = result;
           mainDisplay.innerText = previousValue;
           operationDisplay.innerText = previousValue;
        } else{
            mainDisplay.innerHTML = "Error";
        }
});

const sqrtFunction = document.getElementById("sqrt-btn")
    sqrtFunction.addEventListener ('click', () => {
            mainDisplay.textContent = Math.sqrt(previousValue);
            previousValue = result;
            mainDisplay.innerText = previousValue;
            operationDisplay.innerText = previousValue;
         
});

const inverseBtn = document.getElementById("inverse");
    inverseBtn.addEventListener("click", () => {
        if(inputValue !== 0 && operationDone){
            result = 1/ previousValue;
            previousValue = result;
        }
        mainDisplay.textContent = "Error"
    });

const resetDisplay = document.getElementById("reset-btn")
resetDisplay.addEventListener ('click', () =>{
    mainDisplay.textContent = '0';
    operationDisplay.textContent = '';
    inputValue='';
    previousValue='';
    result='';
})

const clearDisplay = document.getElementById("clear-btn")
clearDisplay.addEventListener('click', () => {
    mainDisplay.textContent = '';
    inputValue= '';
});

const deleteInput = document.getElementById("delete-btn")
deleteInput.addEventListener ("click", () => {
    if (inputValue.length > 1){
        mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
    }
});

const toggleSign = document.getElementById("toggle-sign");
toggleSign.addEventListener ('click', () => {
    if(inputValue !== 0){
        mainDisplay.textContent *= (-1);
    }else{
        mainDisplay.textContent;
    }
});

/**
 * let mainDisplay = document.getElementById("value");
 * 
 * let currentValue = "0";
 * 
 * const appendtoDisplay = (value) => {
	if(mainDisplay.value == null || mainDisplay.value == "0")
		mainDisplay.value = character
	else
		input.value += character
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
 */