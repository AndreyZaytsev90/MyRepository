
'use strict'

function plusOne(b) {
    b++
    return b
}
console.log(plusOne(23226));


let d = "Andrey"
console.log(d);

const myName = "Andrey"
//myName = ""

console.log(myName);
// console - это объект
// .log - метод объекта console
// в скобках - аргумент
// console.log("Andrey") - это выражение. Любое выражение возвращает значение

//Выражения:  // результаты
"abc" // строка "abc"
10 // число 10
5+2 // сумма
let cd;
cd=10 // присвоение переменной cd значения 10
"good"+"evening" // конкатенация строк 
a <= b || с != d // true или false
myFunction(cd,d) // результат функции

// Переменные дают возможность посторного доступа к значениям
//Имена переменных:
// PascalCase - типы и классы
// DB_PASSWORD - Значения известны до запуска приложения и не меняются
// camelCase - все остальные переменные
// Названия переменных должны быть ПОНЯТНЫМИ
// let и const - ключевые слова для объявления переменных (var не рекомендуется)
// если let, то можно переприсвоить значение переменной. С const так нельзя

//Типы (примитивные и ссылочный)
//string, boolean, number, null, undefined, symbol - примитивные, потому что в памяти переменные этих типов буду непосредственно содержать значение

//object - ссылочный ( при присваивании такого обьекта (обьект или массив) переменной, в памяти хранится не значение и ССЫЛКА на объект или массив (ссылка и объект находятся в разных местах)

// В JS динамическая типизаци. ( если присвойть переменной let a = 'abc' (string , то в дальнейшем можно переприсвоить на другое значение другого типа. а = 10 (number)

//Ключевое слово const помогает избижать проблемы с динамической типизацией (если создать function a()  {
//     console.log('Hello')
// }
// и в дальнейшем переприсвоеть значение а на число 10, то консоль выдаст ошибку Uncaught TypeError: a is not a function

//т.е. было переприсвоено значение. С помощью const можно создать стрелочную функцию.
// const a = () => {} - переприсвоить уже не получиться.

//Объекты
//У объектов есть свойства ( если в свойстве в качестве значения содержится функция, то это МЕТОД)

//Объекты - это набор свойств "имя(ключ):значение". Порядок св-в с объекте JS не имеет значения(не важен)

//С помощью Точечной записи (Dot notation) можно менять или добавлять(создавать) новые св-ва в объект
// const myCity = {city: 'Moscow', country: 'Russia'}
// myCity.popular = true
// console.log(myCity)
// {city: 'Moscow', country: 'Russia', popular: true}

//Также есть Скобочная запись (bracket notation) когда необходимо создать новой свойтво обьекта имя которого будет значение переменной
// const locationName = "oblast'"
// myCity[locationName] = "Tulskaya"
// console.log(myCity)
//const myCity = {city: 'Aleksin', popular: true, oblast': 'Tulskaya'}


//Глобальные объекты 

// window (веб браузеры) и global (node.js)
//globalThis - унифицированный глобальный объект


// Метод - свойство объекта значение которого функция

//JSON - javascript object notation (формат обмена данными) - передается в виде строки
// При получении json с сервера необходима его конвертация в объект JS . Для этого используется JSON.parse()
// Для обратной конвертации - JSON.stringify()
//const post = {
//     title: "My post",
//     likes: 5
// }
//JSON.stringify(post)
// '{"title":"My post","likes":5}'

//JSON.parse(postStringified)
// {title: 'My post', likes: 5}


//Мутация в JavaScript
// В переменных содержится только ссылка на объект, поэтому даже если скопировать ссылку и изменить свойство в ней, то так же изменится и сво-во в ссылке, с которой была сделана копия. т.к. они ссылаются на один и тотже объект.

// как избежать мутации:
// Вариант 1:
// const name2 = Object.assing({}, name) - создает новый объект name2 на основе name и запишет туда все св-ва объекта name. Однако, если у объекта name есть вложенные объекты, то ссылки на них останутся. От мутации защищены только корневые св-ва с примитивными значениями

// Вариант 2:
// С помощью спред оператора
// const name2 = {...name}

// Вариант 3:
// const name2 = JSON.parse(JSON.stringify(name)) - двойная конвертация (ссылки создаются заново)

//Функция - это ОБЪЕКТ, блок кода, который может выполняться МНОГОКРАТНО с разными вводными значениями
//Функция может быть именованной
// может быть присвоена переменной,
// Анонимной
//или быть аргументом при вызове другой функции
//также Функция может быть значением свойства (методом) объекта

//У функции есть: function имы (параметры) {тело функции}
//Функция может возвращать результат через return. После return функция не выполняет дальнейших инструкций
//Функция в любом случае возвращает значение. Функция вернет undefined, если нет инструкции return

// Объявление функции означает, что была создана новыя переменная , которая является именем функции
// function myFn(a,b) - a и b - это параметры функции, которые определяются при объявлении функции

// myFn (10,3) - 10 и 3 - это аргументы функции , которые определяются после вызова функции

// Внутри функции НЕ РЕКОМЕНТУЕТСЯ мутировать ВНЕШНИЕ объекты

// Callback

// Одна функция вызывает внутри себя другую функцию. Т.е. эта функция, которая вызывает другую функцию, которая является  параметром, в своем теле

//Правила работы с функциями:
// 1: Называть функции исходя из выполняемых задач,
// 2: Одна ф-я должна выполнять одну задачу
// 3: Не рекомендуется изменять внешние относительно функции переменные (чистая функция)

//Область видимости - определяет границы действия переменной
//Есть глобальные и локальные переменные. Если объявить переменную в локальной области видимости ( внутри функции) то эта переменная будет не видна в глобальной области. Также допускается использовать одинаковые имена переменных в разных областях. Если функция не находит переменную для использования в своей локальной области видимости, то она будет искать ее выше, т.е. в глобальной области.


// Типы областей видимости
//Есть глобальные и локальные переменные. Так же есть Область видимости блока (например функция, if/else и т.д.) - переменные , объявленные с помощью let или const внутри блока имеют обл. видимости , ограниченную этим блоком

//Правила работы с переменными:
// 1: Все переменные объявлять перед их использование,
// 2: Стараться использовать const везде , где это возможно
// 3: Внутри функции не изменять переменные, объявленные во внешней области видимости.

// Существует "Строгий режим"('use strict') - он запрещает использовать необъявленные переменные. Эта строка должна быть первой в глобальной или в локальной области видимости.


// ОПЕРАТОРЫ:
// Оператор - это встроенная функция в JS
// Арифметические +, -, *, /
// Сравнения ===, !==, <=, >=
// Логические !, &&, ||
// Присваивание =

//Текстовые операторы typeof, instanceof, new, delete

//Операнды или аргументы - это то чно находится слева или справа от оператора ( а=10 , а и 10 это операнды )

// Унарные операторы
// У унарных операторов всегда операнд (аргумент): а++, +а, delete obj.a, typeof a, new Object()

//Бинарные операторы - у этих операторов всегда два операнда(аргумента) : a=5, a+b, a+=5, a===b, a && b
// Инфиксная запись: a = true, a + b, a +=5, a || и
// Префиксная запись: ++a, delete obj.a, typeof a  (оператор - операнд)
// Постфиксная запись: a++, myFunction()   (операнд - оператор)

//Приоритетность операторов:
// a * b + с / e    и    a * (b + с) / e     - результат будет разные. Приоритеты можно посмотреть в интернете.

//Логические операторы:
//    !  не   - всегда возвращает boolean
//    &&  и   - возвращает значение одного из операндов
//    || или  - возвращает значение одного из операндов

// Ложные значения:
// Boolean(value) -> false
// false, 0, '', undefined, null  - основные ложные значения

//Логические операторы: ! - не
// !10 (не 10) - false
// !0  (не 0) - true
// !"abc" (не строка) - false
// !"" - (не пустая строка) true
// !true - ( не истина) false
// !undefined - ( не неопределено) - true

// Отрицание отрицания   !!
// !!10 (не не 10) - true
// !!0  (не не 0) - false
// !!"abc" ( не не строка) - true // позволяет проверить ложность значения
// !!"" - (не пустая строка) false
// !!true - ( не истина) true
// !!undefined - ( не неопределено) - false

// Операторы короткого замыкания && и ||

// Выражения 1 && Выражение 2 :  (ищет первое ложное значение)
// Если выражения 1 ложно, то выражение 2 игнорируется и возвращается результат выражения 1. Если выражение 1 истино, то проверяется выражение 2. Если выражение 2 ложно, то возвращается результат выражения 2. Если выражение 2 также истино, то все равно результатов всего выражения возвращается результат Выражения 2


// Выражение 1 || Выражение 2: (ищет первое истинное значение)
// Если Выражение 1 истино, то возвращ. результат Выражения 1, а Выражение 2 игнорируется.


// Функциональные выражения отличаются от объявленной функции тем, что у фун.выражения нет имени. Они всегда анонимные


//Стрелочная функция - это выражение
// () => {} , имени нету (параметры, результат и тело функции - опционально)

// Что бы дать имя стрелочной функции надо присвоить ее переменной:
// const myFunction = () => {}

// Сокращение в стрелочной функции:
// a => {}  - если 1 параметр, то круглые скобки можно не ставить
// (a,b) => a+b   - Фигурные скобки можно опустить, если в теле функции только ОДНО выражение. А этом случает стрельчная функция НЕЯВНО возвращает результат выражения



//5.08.21