// 1)

// function isPrimeNumber(num) {
//     if (num > 1 && num / num === 1 && num % 2 !== 0) {
//         console.log('True')
//     } else {
//         console.log('False')
//     }
// }
//
// isPrimeNumber(12)


// 2)

// const func = (num, min, max) =>
//     num < min ? min ** 2
//         : num > max ? max ** 2
//             : num < max - (max - min) / 2 ? num ** 2
//                 : Math.floor(num)
//
// console.log(func(2, 1, 10))


// function func(num, min, max) {
//     return num < min ? min ** 2
//         : num > max ? max ** 2
//             : num < max - (max - min) / 2 ? num ** 2
//                 : Math.floor(num)
//
// }
//
// console.log(func(2, 3, 4))


// function func(num, min, max) {
//     switch (true) {
//         case num < min:
//             return min ** 2
//
//         case num > max:
//             return max ** 2
//
//         case num < max - (max - min) / 2:
//             return num ** 2
//
//         default:
//             return Math.floor(num)
//     }
// }
//
// console.log(func(2, 1, 10))


// function func(num, min, max) {
//     switch (true) {
//         case num < min:
//             return min ** 2;
//         case num > max:
//             return max ** 2;
//         case num < max - (max - min) / 2:
//             return num ** 2;
//         default:
//             return Math.floor(num);
//     }
// }
//
// console.log(func(2, 3, 4))


// 3)


