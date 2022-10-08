const person = new Object({
    name: "Andrey",
    age: 32,
    greet: function () {
        console.log("Greet!")
    }
})
// Прототип - это объект, который присутствует в родительских сущностях (объектах)

Object.prototype.sayHello = () => {
    console.log("Hello!")
}

const olga = Object.create(person)
olga.name = "Olga"

//const str = "I am string"
const str = String("I am string")