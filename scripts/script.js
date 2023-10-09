let mainDisplay = document.getElementById("value")
let operationDisplay = document.getElementById("prevalue")

let previousValue = '';
let inputValue = '';
let haveDot = false;
let result = "";
let operationDone = false;
let lastOperation = '';

const appendNumber = document.querySelectorAll('#number');
appendNumber.forEach(number => {
    number.addEventListener("click", () =>{
        inputValue += number.textContent;
        mainDisplay.textContent=inputValue;

    })
});

const operationBtns = document.querySelectorAll('#operator');
operationBtns.forEach(operation => {
    operation.addEventListener("click", (e) =>{
        if(!inputValue) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(inputValue && previousValue && lastOperation){
            equalButton();
        }else {
            result = parseFloat(inputValue);
        }
        clearVar (operationName);
        console.log(result)
    })    
});

const clearVar = (operator = '') => {
    previousValue += inputValue + ' ' + operator + ' ';
    operationDisplay.textContent = previousValue;
    mainDisplay.textContent = '';
    inputValue = '';
}

const squareFunction = document.getElementById("square-btn")
    squareFunction.addEventListener ('click', (e) => {
        mainDisplay.innerText = Math.pow(parseFloat(num2), 2);
});

const sqrtFunction = document.getElementById("sqrt-btn")
    sqrtFunction.addEventListener ('click', (e) => {
        mainDisplay.innerText = Math.pow(parseFloat(num2), 0.5);
});

const equalButton = document.getElementById("equal-btn")
equalButton.addEventListener("click", (e) =>{
    let number1 = parseFloat(previousValue);
    let number2 = parseFloat(inputValue);

    if(num1 && num2 && lastOperation!== ''){
        switch (lastOperation){
            case '+':
                result = number1 + number2
                break;
            case '-':
                result = number1 - number2
                break;
            case 'x':
                result = number1 * number2
                break;
            case '÷':
                if(isFinite(result)){
                    result = number1 / number2
                    }else{
                        alert("Invalid Operation");
                        result = "Error"
                    }
                break;     
    }
    clearVar();
    mainDisplay.textContent = result;
    result = previousValue;
    lastOperation= '';
    clearDisplay();
    operationDone=true;

}
});

const resetDisplay = document.getElementById("reset-btn")
resetDisplay.addEventListener ('click', (e) =>{
    mainDisplay.textContent = '0';
    operationDisplay.textContent = '';
    inputValue='';
    previousValue='';
    result='';
})

const clearDisplay = document.getElementById("clear-btn")
clearDisplay.addEventListener('click', (e) => {
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

});
