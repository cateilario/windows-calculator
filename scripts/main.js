let mainDisplay = document.getElementById("value")
let operationDisplay = document.getElementById("prevalue")

let previousValue = '';
let inputValue = '';
let haveDot = false;
let operationDone = false;
let lastOperation = '';
let result = undefined;

const appendNumber = document.querySelectorAll('#number');
appendNumber.forEach(number => {
    number.addEventListener("click", () =>{
        if (operationDone)
            mainDisplay.textContent = '';
            operationDone = false;
        
        if(number.textContent === '.' && !haveDot){
            haveDot = true;
        }else if(number.textContent === '.' && haveDot){
            return;
        }
    inputValue += number.textContent;
    mainDisplay.textContent=inputValue;
    operationDisplay.textContent = previousValue;
    })
});

const operationBtns = document.querySelectorAll('#operator');
operationBtns.forEach(operator => {
    operator.addEventListener("click", () =>{
        if(!inputValue) result;
        haveDot = false;
        const operation = operator.value;
        if(inputValue && previousValue && lastOperation){
            calculate();
        }else {
            result = parseFloat(inputValue);
        }
        clearVar (operation);
        lastOperation = operation;
        console.log(result)
})
});

const clearVar = (name = '') => {
    previousValue += inputValue + ' ' + name + ' ';
    operationDisplay.textContent = previousValue;
    inputValue = '';
    mainDisplay.innerHTML = result;
}

const calculate = () => {
    let number1 = parseFloat(result);
    let number2 = parseFloat(inputValue);
    if(isNaN(number1) || isNaN(number2)) {
        result= "Error";
      } else {
        switch (lastOperation){
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case 'x':
                result = number1 * number2;
                break;
            case '÷':
                if(number2 !== 0){
                    result = number1 / number2;
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
    if (inputValue.length > 0)
        inputValue = inputValue.slice(0, -1);
    mainDisplay.textContent= inputValue
});

const toggleSign = document.getElementById("toggle-sign");
toggleSign.addEventListener ('click', () => {
    
});