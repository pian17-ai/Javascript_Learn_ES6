// TEMPLATE LITERALS 
let i = `string text`

let c = `string text 1
 string text 2
 string text 3`











 // EMBEDED EXPRESSION

const mhs = {
    name: "Alvian Cahyo Pambudi",
    university: "Universitas Indonesia",
    faculty: "Bina Nusantara",
    email: "alviancahyopambudi@gmail.com",
    age: 16
}

const output = `Halo ${mhs.name}, anda telah di terima di ${mhs.university}, dengan jurusan ${mhs.faculty}` // EMBEDED EXPRESSION
console.log(output)
// -----------------------------------------------------------------------------------------------
let a = 3
let b = 4
console.log(`Jika a = ${a}, b = ${b}, apabila kedua bilangan tersebut dijumlahkan maka hasilnya akan ${a + b}`)
// -----------------------------------------------------------------------------------------------
// console.log(`${console.log(`Halo ${mhs.name}`)}`)
// -----------------------------------------------------------------------------------------------
console.log(`${(a % 2 == 0) ? 'genap' : 'ganjil'}`)
// ----------------------------------------------------------------------------------------------









// HMTL FRAGMENTS

const mhs1 = {
    name: "Konatsu Higuchi",
    university: "Universitas Indonesia",
    faculty: "Teknik Informatika",
    email: "konatsuhiguchi@gmail.com",
    age: 16
}

const el = `<div class = "name">
    <h1>${mhs1.name}</h1>
    <h2>University : ${mhs1.university}</h2>
    <h2>Faculty : ${mhs1.faculty}</h2>
</div>`

console.log(el)

const container = document.querySelector(".container")
const element = document.querySelector(".name")

container.innerHTML = el