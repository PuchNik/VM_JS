// // Function Declarations
// //Отличается глобальной областью видимости, может вызываться как До, так и после ее объявления
//
//
// //Function Expression
// //Может вызываться только после объявления
//
//
//
//
// //Function arrow
// //Тоже является Function Expression, только в сокращенной записи.
// //Также, позволяет не писать return, он происходит автоматически после "=>"
// // 1)
// const arrow = (name, age) => {
//     console.log(name, age)
// }
//
// arrow('Nik', 22)
//
//
// // 2) Если функция состоит только из одной строчки, то возможна запись типа:
// const arrow2 = (name) => console.log(name)
//
// arrow2('Nik_2')
//
//
// // 3) Если состоит из одной строчки и имеет один параметр, то возможна запись типа:
// const arrow3 = name => console.log(name)
//
// arrow3('Nik_3')
//
// 4) Метод .with - Создание нового (измененного) массива
// const names = ['Nik', 'Ann', 'Nat', 'Pash']
// const greateWoman = 'Ann'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Ann greate')
// console.log(names)
// console.log(newNames)

// 5) Метод .map - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// const names = ['Nik', 'Ann', 'Nat', 'Pash']
// const capitalNames = names.map(function (name, index) {
//     if (index === 1) {
//         return 'Ann Greate'
//     }
//     return name
// })
// console.log(names)
// console.log(capitalNames)

// 6)

// const people = [
//     { name: 'Владилен', budget: 4200 },
//     { name: 'Елена', budget: 15100 },
//     { name: 'Игорь', budget: 300 },
//     {name: 'Ксения', budget: 7520 },
// ]

// const finded = people.find(function (person) {
//     return person.budget === 7520
// })

// const finded = people.find((p) => p.budget === 7520)
// console.log(finded)

// 7) Список часто используемых функций:

const list = [
    {
        title: 'map()',
        id: 1,
    },

    {
        title: 'find()',
        id: 2,
    },

    {
        title: 'findIndex()',
        id: 3,
    },

    {
        title: 'filter()',
        id: 4,
    },

    {
        title: 'forEach()',
        id: 5,
    },
]

