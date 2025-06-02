// extention context, hoisting & scope

// console.log(nama)
// var nama = 'pian'

// creation phase pada global context
// nama var = undifined
// nama function = fn()
// hoisting
// window = global object
// this = window


// var nama = 'konatsu'
// var umur = 15

// function sayHello(){
//     return `halo saya ${nama}, ${umur} tahun`
// }

// console.log(sayHello())

// function membuat Local Execetion Context
// yang didalamnya terdapat creation dan execetion phase
// akses -> window
// akses -> arguments
// -> hoisting

// var name = 'pian'
// // var username = 'pianlupatitikkoma'

// function cetakUrl() {
//     console.log(arguments[0])
//     var instagramUrl = 'https://www.instagram.com/'
//     return instagramUrl + username
// }

// console.log(cetakUrl('konatsu_0805'))


// function a(){
//     console.log('ini a')

//     function b(){
//         console.log('ini b')

//         function c() {
//             console.log('ini c')
//         }
//         c()
//     }
//     b()
// }
// a()


// TUGAS

function first() {
    var nama = 'pian'
    console.log(nama)
}

function second() {
    console.log(nama)
}

console.log(nama)
var nama = 'konatsu'
first()
second('nahida')
console.log(nama)