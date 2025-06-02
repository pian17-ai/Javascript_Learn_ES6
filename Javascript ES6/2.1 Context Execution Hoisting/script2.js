// console.log(nama)
// var nama = 'pian'

// creations phase pada Global Context :
// membuat 'nama' variable = undifined
// membuat 'nama' funtion = fn()
// disebut hoisting

// variable yg otomatis javascript buat adalah :
// window = global object
// this = window

// execution phase 


// console.log(sayHello())

// var nama = "Pian"
// var umur = 15

// function sayHello() {
//     return `Hello my name is ${nama}, I am ${umur} years old`
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creations dan execution phase
// window 
// arguments
// hoisting


var name = "Pian"
var username = "pianlupatitikkoma"

function cetakUrl() {
    console.log(arguments)
    var instagramUrl = "https://www.instagram.com/"
    return instagramUrl + username
}

console.log(cetakUrl('Konatsu_0805'))

// function a(){
//     console.log('a')
//     function b() {
//         console.log('b')
//         function c() {
//             console.log('c')
//         }
//         c();
//     }
//     b();
// }
// a();