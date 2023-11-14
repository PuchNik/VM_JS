// const inputElement1 = document.getElementById('input1')
// const inputElement2 = document.getElementById('input2')
// const plusBtn = document.getElementById('plus')
// const minusBtn = document.getElementById('minus')
// let action = '+'
// const submitBtn = document.getElementById('submit')
// const resultElement = document.getElementById('result')
//
// plusBtn.onclick = function () {
//     action = '+'
// }
//
// minusBtn.onclick = function () {
//     action = '-'
// }
//
// function changeColorResult (result) {
//     if (result < 0) {
//         resultElement.style.color = 'red'
//     } else if (result > 0) {
//         resultElement.style.color = 'green'
//     }
//
//     resultElement.textContent = result
// }
//
// submitBtn.onclick = function () {
//     const resultAction = resultWithAction(inputElement1, inputElement2, action)
//     changeColorResult(resultAction)
// }
//
// function resultWithAction (inp1, inp2, actionSymbol) {
//     const num1 = Number(inp1.value)
//     const num2 = Number(inp2.value)
//
//     return actionSymbol === '+' ? num1 + num2 : num1 - num2
// }