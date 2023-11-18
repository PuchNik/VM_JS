// 1)

// let a = 3
//
// if (a % 2 === 0) {
//     console.log('Четное')
// } else {
//     console.log('Нечетное')
//     a += 1
//     console.log('Новое значение a: ', a)
// }
//
// 2)

// for (let i = 0; i < 1001; i++) {
//     if (i % 2 === 1 || i % 12 === 0) {
//         console.log(i)
//     }
// }

// 3)

const array = [1, 10, 15, -100, -23, 19, 15032]
const newArray = []
for (let arr of array) {
    parseFloat(arr)
    console.log(arr)
    arr += arr % 25
    console.log(parseFloat(arr))
}

console.log(array + '\n')