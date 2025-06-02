const number = [1, 4, 2, -2, 5, -1, -9, 8, -7, 1, -3, 9, 12, 6]


// PAKAI FOR
// const newNumber = [];

// for (let i = 0; i < number.length; i++) {
//     if (number[i] >= 3) {
//         newNumber.push(number[i])
//     }
// }

// console.log(newNumber)








// ========================================================

// FILTER

// PAKAI FILTER (function biasa)
// const newNumber = number.filter(function (a) {
//     return a >= 3
// })

// console.log(newNumber)


// FILTER (arrow funtion)
// number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// newNumber = number.filter((a) => {
//     return a %2 == 0
// })

// console.log(newNumber)


// ========================================================

// const nomorBaru = []
// for (let i = 0; i < number.length; i++) {
//     if (number[i] %2 == 0) {
//         nomorBaru.push(number[i])
//     }
// }
// console.log(nomorBaru)

// ========================================================
// MAP

// kalikan 2 semua elemen di dalam number, tanpa mengubah array aslinya
// const newNumber = number.map((a) => a * 2)

// console.log(newNumber)

// ========================================================
// REDUCE

// jumlahkan seluruh yang ada didalam array

// const newNumber = number.reduce((accmulator, currentValue) => accmulator + currentValue)
// console.log(newNumber)

// ========================================================

// METHOD CHAINING
// Cari angka lebih besar dari 5, hasilnya x 3, jumlahkan

// MANUAL
// let newNumber = number.filter(function (a) {
//     return a > 5
// })

// console.log(newNumber)

// const newNumber2 = newNumber.map((a) => a * 3)

// console.log(newNumber2)

// const newNumber3 = newNumber2.reduce((accumulator, currentValue) => accumulator + currentValue)

// console.log(newNumber3)
// ===
// ===

// WPU
// Cari angka lebih besar dari 5, hasilnya x 3, jumlahkan


// MANUAL

let angka = [-1, 8, 9, 1, 4, -5, 4, 3, 2, 9]

// const newAngka = angka.filter((a) => a > 5)

// const newAngka1 = newAngka.map((a) => a * 3)

// const newAngka2 = newAngka1.reduce((a, b) => a + b)

// console.log(newAngka2)

// ========================================================

// LANGSUNG

const newAngka = angka.filter((a) => a > 5)
.map((a) => a * 3)
.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(newAngka)