// function init() {
//     // var name = "Pian"
//     return function (name) {
//         console.log(name)
//     }
// }
// let callName = init()
// callName('Konatsu')
// callName("Pian")

// FUCNTION METHOD

// function sayHello(time) {
//     return function (name) {
//         console.log(`Hello ${name}, ${time} have a productive day!!!`)
//     }
// }

// let goodMorning = sayHello('Good Morning')
// let goodAfternoon = sayHello('Good Afternoon')
// let goodEvening = sayHello('Good Evening')


// goodMorning('Pian')
// console.dir(goodAfternoon)

let add = (function() {
    let counter = 0
    return function() {
        return ++counter
    }
})()

// let a = add()

counter = 100

console.log(add())
console.log(add())
console.log(add())