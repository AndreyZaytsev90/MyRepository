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
/*function printMyName() {
    console.log("Andrey")
}
setTimeout(printMyName, )*/


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



///////////////
//Обработка ошибок в JS
const fnWithError = () => {
       throw new Error("Some error")
}
/*
fnWithError() // здесь код останавливается из-за ошибки index.js:171 Uncaught Error: Some error
console.log("Continue....")
*/

//Решение TRY/Catch

try {
    fnWithError()
} catch (error) {
       console.error(error)
    console.log(error.message) // - "Some error"
}
console.log("Continue....")
/////////////////////////////////

//Пример инструкций:
// let a; - объявление переменной
// const b = 5; - объявление переменной и присваивание ей значения

// if(a>b) {                // с ключ. словом If
//console.log('a is lager')
//}

/*
for (let i = 0; i < 5; i++) {  - цикл
    console.log(i)
}*/


// Выражения - инструкции:
// 'abc';
// a = a+3;
// c = a+b;
// d = 'Good' + 'Evening'
// myFunction( c, d );
//console.log('HEY');

/////////////////////////////////////////

//Массивы
//создание массива
const myArray = [1,2,3]
console.log(myArray)
//или
const myArray2 = new Array(1,2,3)
console.log(myArray2)

console.log(myArray === myArray2) // false

//Чтение значений массива
const myArray4 = [1, false, 'Andrey']
console.log(myArray4[0])  // 1
console.log(myArray4[2])  // 'Andrey'

// Добавление и изменение элементов в массиве
/*
const myArrays3 = [ 1, true, 'Andrey', 3]

myArrays3.length
4

myArrays3[2] = 2
2

myArrays3
[1, true, 2, 3]

myArrays3[4] = 'Andrey'
'Andrey'

myArrays3
[1, true, 2, 3, 'Andrey']*/



////PUSH

const myArrays3 = [ 1, true, 'Andrey', 3]
myArrays3.push("Zaytsev")
console.log(myArrays3) // [1, true, 'Andrey', 3, 'Zaytsev']

//// myArrays3.pop - удаления последнего элемента массива и возвращает этот елемент. Его можно присвоить переменной (const removedElement = myArrays3.pop() )

/// myArrays3.unshift = добавляет элемент в начало массива
/// myArrays3.shift = удаляет первый элемент в массиве. Также возвращает удаленное значение и его можно присвоить переменной

/// Методы push, pop , unshift и shift МУТИРУЮТ массив, а не создают новый

//////////////////////////////////

//ForEach - тут есть аргумент, который является функцией

// Внутри этого метода находится цикла, который перебирает каждый элемент массива и вызывает callBack функцию столько раз, сколько элементов в массиве
const myArrayForE = [1,2,3]
console.log(myArrayForE) //[1, 2, 3]

myArrayForE.forEach(el => console.log(el*2))
//2
//4
//6
console.log(myArrayForE) //[1, 2, 3], метод ForEach не меняет оригинальный массив

/////////////////////

//MAP - так же как и ForEach перебирает каждый элемент массива и вызывает callBack функцию столько раз, сколько элементов в массиве, при этом создается новый массив, который формируется исходя из результатов выполнения callBack функций для каждого элемента. Имеет смысл присваивать результат выполнения этого метода переменной:
const newMyArrayForE = myArrayForE.map(el => el*5)
console.log(newMyArrayForE)
// метод Map не меняет оригинальный массив. Map всегда возвращает туже длину, что и  оригинальный массив.

//////////////////////////////////////

/// Деструктуризация объектов:

const userProfile = {
    name: "Andrey",
    commentsQty: 31,
    hasSingedAgreement: false
}
// Объвление новых переменных и присвоение значений на основе значений свойств объекта
const {name, commentsQty } = userProfile
const {hasSingedAgreement} = userProfile

console.log(hasSingedAgreement) // false
console.log(name) /// "Andrey"
console.log(commentsQty) // 31

/// Деструктуризация массивов:

const fruits = ["Apple", "Banana"]

// Объвление новых переменных и присвоение значений на основе элементиов массива:

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne) // Apple
console.log(fruitTwo) // Banana

/// Деструктуризация в функция
// Деструктурируем параметры в стрелочной функции из свойств объекта userProfile и присваиваем функции переменную userInfo
const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}
console.log(userInfo(userProfile)) // User Andrey has 31 comments


//////////////////////////////////////////////////

//Условные инструкции (if, if...else, switch, и тернарный оператор (выражение)

// Инструкция if
/*
if (условие) {
    //Блок кода, выполняемый однократно, если условие правдиво
}*/

/*const noName = (a) => {
    if (a >= 5) {
        return a+=25
    }
}*/
//// Пример if c оператором отрицания

const person = {
    age: 31
}

if (!person.name) {    // !person.name - вернет undefined. !undefined === true  > true, следовательно выполняется блок кода
    console.log("Имя не указано")
    // Другое действие в случае, если свойства "name" у обьекта "person" нету
}

// Инструкция if...else
/*
if (условие) {
    //Блок кода, выполняемый однократно, если условие правдиво
} else {
    //Блок кода, выполняемый однократно, если условие ложно
}*/

// 7.03.