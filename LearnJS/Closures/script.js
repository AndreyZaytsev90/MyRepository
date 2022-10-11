/*const CreateCalc = (n) => {
  return function () {
    console.log(1000 * n)
  }
}

const calc = CreateCalc(42)
calc()*/


/*
function createInc(n) {
  return function (num) {
    return n + num
  }
}

const addOne = createInc(1)
const addTwo = createInc(2)


console.log(addOne(10))
console.log(addTwo(12))*/


function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator("com")
const ruUrl = urlGenerator("ru")

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vk'))


//Задача

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
 }

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

const bind = (context, fn) => {
  return function (...args) {
    fn.apply(context, args)
  }
}

bind(person1, logPerson)()
bind(person2, logPerson)()
