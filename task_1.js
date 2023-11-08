// 1)
// var a = 5
// let b = 10
// const c = 13
//
// console.log(a)
// console.log(b)
// console.log(c)
//
// a = 6
// b = 11
//
// console.log(a)
// console.log(b)
// console.log(c)

// 2)
// const a = 100;
// a = 20;
// console.log(a);
//
// const нельзя менять
//
// console.log(a)
// let a = 15;
// console.log(a);
//
// let нельзя вызывать до ее объявления
//
// console.log(a);
// var a;
// a = 10;
// console.log(a);
//
// тут все нормально, просто вылезает undefind, это значит что переменная а до вызова была
// неопределена

// 3)
// const productName = 'хлеб'
// const productPrice = 20
// const productQuantity = 5
// let resultCost = productPrice * productQuantity
//
// console.log("Вы купили " + productName +
//     "(" + productQuantity + "шт.) по " + productPrice + "₽. " + "Всего было потрачено: " +
//     resultCost + "₽")

// 4)

// console.log(typeof 'Hello')
// console.log(typeof 10)
// console.log(typeof {})
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof true)
// console.log(typeof [])
// console.log(typeof (() => {}))
//
// 1) str потому что строковый тип данных
// 2) number - числа
// 3) тут создается объект
// 4) Вообще, это баг. NULL - метка объекта и ссылка на то, что его численное представление равно нулю
// 5) undefined является свойством глобального объекта, то есть, это переменная в глобальной области видимости. Начальным значением undefined является примитивное значение undefined
// 6) true или false являются boolean
// 7) потому что он является объектом, в нем можно хранить методы, ключи, значения и тд
// 8) функция, как она и есть


// 5)

// console.log(10 == 10)
// console.log(10 != 10)
// console.log(12 == 'Привет')
// console.log(10 < 11)
// console.log(12 > 20)
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false || true)
// console.log(true || false)
// console.log(true || true)
// console.log(10 <= 10)
// console.log(18 <= 20)
// console.log(50 >= 50)
// console.log(51 >= 50)
// console.log({} === {})
// console.log({} == {})
//
// 1) 10 = 10 это верно
// 2) 10 != 10 это не так
// 3) нельзя сравнивать number и str
// 4) 10 < 11 это верно
// 5) 12 > 20 это ложь
// 6) тут верно, мы как бы подставляем умножение и получаем 1 * 1
// 7) так же как и предыдущее, только получаем 1 * 0, поэтому false
// 8) точно так же, получаем ложь 0 * 1
// 9) в данном случае мы как бы пдставляем сложение, получаем 0 + 1, поэтому верно
// 10) тут 1 + 0, тоже истина
// 11) 1 + 1 тоже истина
// 12) 10 <= 10, 10 = 10, true
// 13) 18 < 20, true
// 14) 50 = 50, true
// 16) 51 > 50, true
// 17,18) Последние два, они не равны потому, что в JavaScript два объекта считаются равными только в том случае, если они
//        фактически являются одним и тем же объектом. Даже если все свойства объектов и их значения совпадают, это не делает
//        объекты равными


// 6)
// const a = 10
// const b = 9
//
// console.log(a > b)