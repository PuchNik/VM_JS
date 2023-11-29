// 1)

// const john = {
//     name: 'John',
//     age: 42,
//     pet: 'Rik',
// }
//
// const ann = {
//     name: 'Ann',
//     age: 22,
//     pet: 'Rat',
// }


// function getName (obj) {
//     return console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`)
// }
// getName(john)


// const infoPerson = (obj) => `Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`
// console.log(infoPerson(john))


// function incrementAge(obj) {
//     return obj.age++
// }
// incrementAge(ann)
// console.log(ann)

// const incrementAge = (obj) => obj.age++
// incrementAge(ann)
// console.log(ann)


// Object.keys(john).forEach((key) => {
//     console.log(`key: ${key} | Value: ${john[key]}`)
//     // console.log('Value: ', john[key])
// })


// 2)

// const arr = [1, 50, 20, 75, 90];
// const sum = arr.reduce((sum, elem) => sum + elem, 0)
//
// console.log(sum)


// const sum = arr.reduce(function (sum, elem) {
//     return sum + elem
// })

// console.log(sum)


// 3)

// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
// console.log(names)
//
// names.shift()
// names.pop()
// console.log(names)


// 4)

// const listElement = document.getElementById('list')
//
// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
//
//
// function render() {
//     for (let name of names) {
//         listElement.insertAdjacentHTML('beforeend', getNameTemplate(name))
//     }
// }
//
// render()
//
//
// function getNameTemplate (name) {
//     return `
//     <li>
//       <span>${name}</span>
//     </li>`
// }


// 5)

// const obj = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };
//
//
// const {
//     age: age,
//     favColor: favColor,
//     height: height,
//     pet: pet,
//     money: money
// } = obj
//
// console.log(age)
// console.log(favColor)
// console.log(money)


// 6)

// const obj = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };
//
// const updateObj = {
//     age: 23,
//     favColor: 'blue',
//     money: 11450
// };
//
// const newObj = {
//     age: 456
// }
//
//
// const obj2 = { ...obj, ...updateObj };
//
// console.log(obj2);

