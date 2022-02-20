'use strict'

/*
let myName
myName = "Andrey"
console.log(myName);
*/

const myCity = {
    city: "Moscow",
    cityGreeting: function huy() {    // - метод
        console.log("ХУЙ!!!")
    }
}
console.log(myCity.city)

myCity.country = "Russia"

console.log(myCity.country)
console.log(myCity)

myCity.popular = true
console.log(myCity)

myCity.city = "Aleksin"

console.log(myCity)

delete myCity.country

console.log(myCity)

const locationName = "oblast'"
myCity[locationName] = "Tulskaya"
console.log(myCity)


const personOne = {
    name: "Andrey",
    age: 31
}

const increasePersonOne = (p) => {
    p.age +=1
    return p
}
increasePersonOne(personOne)
console.log(personOne.age)

//Callback
function printMyName() {
    console.log("Andrey")
}
setTimeout(printMyName, )


//ОБЛАСТИ ВИДИМОСТИ

let a // глобальная переменная
let b // 1 глобальная переменная , ее знач. undefined



const myFn = () => {
    let b // 3. объявляется локальная переменная, доступна только ф-и myFn
    a = true
    b = 10 // 4. Сначало ищим, объявлена ли переменная b в одласти видимости ф-ии. ДА (пп.3) . Присваиваем ей значение 10
    console.log(b) // 5. переменная b = 10 в области видимости функции
}

myFn() // 2. вызов функции

console.log(a)
console.log(b) // 6. Переменная b  все так же имеет значение undefined в глобальной области, а переменная b из локальной области функции myFn здесь не видна

/*const c = 5
function myFn2() {
    function innerFn() {
        console.log(c) // 5
    }
    innerFn()
}
myFn2()*/
//////////////////////////

// Оператор разделения объекта на свойства (...)

const button = {
    width: 200,
    text: "ХУЙ"
}

console.log(button)

const redButton = {
  ...button,
    color: "red"
}

console.table(redButton)

/////////////////////////////

// Объединение объектов с помощью ...

const myStyle = {
    width: 94,
    height: 183
}

const myInfo = {
    name: "Andrey",
    age: 31
}

const Iam = {
    ...myInfo,
    ...myStyle
}

console.table(Iam)
/*{name: 'Andrey', age: 31, width: 94, height: 183}
age: 31
height: 183
name: "Andrey"
width: 94*/
/////////////////

// Конкатенация строк ("" + "") и шаблонные строки

let myName  = "Andrey "
let myCity2 = "Moscow"
const concat = () => {
    let concatination = `Привет! Меня зовут ${myName}! Я живу в городе ${myCity2}`
    return concatination
}
concat()

////////////////////////////////

// Значение параметров функции по умолчанию:

// Пример 1
/*function multByFactor(value, multiplier = 1) {
    return value*multiplier
}*/
   const multByFactor = (value, multiplier = 1) => value*multiplier

console.log(multByFactor(10,2)) // 20
console.log(multByFactor(100)) // 100

//////////////////////////////
// Пример 2
const newPost = (post, addedAt = Date()) => {
   return ({   // Date() - функция отображения текущей даты и времени. Это Значение по умолчанию, которое вычисляется в момент вызова функции newPost
        ...post,
        addedAt: addedAt,
    })
}
const firstPost = {
       id: 1,
    author: "Andrey"
}
console.table(newPost(firstPost))


