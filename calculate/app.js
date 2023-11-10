const resultElement = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function changeColor(resultColor) {
    if (resultColor < 0) {
        resultElement.style.color = 'red'
    } else if (resultColor > 0) {
        resultElement.style.color = 'green'
    }

    resultElement.textContent = resultColor
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    return actionSymbol === '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    changeColor(result)
}
