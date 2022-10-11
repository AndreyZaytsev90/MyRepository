function hello() {
  console.log("Hello", this)
}

const person = {
  name: "Andrey",
  age: 32,
  seyHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const olga = {
  name: "Olga",
  age: 34
}

/*
1 способ:
const OlgaInfoLog = person.logInfo.bind(olga)
OlgaInfoLog("Frontend", "8-903-149-81-69")*/

/*
2 способ:
const OlgaInfoLog = person.logInfo.bind(olga, "Frontend", "8-903-149-81-69")
OlgaInfoLog()*/

//person.logInfo.bind(olga, "Frontend", "8-903-149-81-69")()

//person.logInfo.call(olga, "Frontend", "8-903-149-81-69") // call еще и вызывает функцию

person.logInfo.apply(olga, ["Frontend", "8-903-149-81-69"]) // в apply всего 2 параметра и он тоже вызывает функцию

//==============================================================

const array = [1, 2, 3, 4, 5]

/*function mult(array, num) {
  return array.map((i) => {
    return i*num
  })

  console.log(mult(array, 5))
}*/
Array.prototype.mult = function (n) {
  /*console.log("mult", this)*/
  return this.map((i) => {
    return i * n
  })
}

console.log(array.mult(3))