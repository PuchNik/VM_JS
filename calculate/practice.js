const checkBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')
const inputElement_1 = document.getElementById('input1')
const inputElement_2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'


plusBtn.onclick = function () {
    action = '+'
}


minusBtn.onclick = function () {
    action = '-'
}


function changeColor (resultColor) {
    if (resultColor < 0) {
        resultElement.style.color = 'red'
    } else if (resultColor > 0) {
        resultElement.style.color = 'green'
    }

    resultElement.textContent = resultColor
}


function getResult (inp1, inp2, actionSymbol) {
    const num_1 = parseInt(inp1.value)
    const num_2 = parseInt(inp2.value)

    return actionSymbol === '+' ? num_1 + num_2 : num_1 - num_2
}


checkBtn.onclick = function () {
    const result = getResult(inputElement_1, inputElement_2, action)
    changeColor(result)
}
