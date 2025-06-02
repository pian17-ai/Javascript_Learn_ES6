// Funtion expression

// const tampilNama = function (name) {
//     return `Halo, ${name}`
// }

// console.log('Faiz al zakki')

// const tampilNama = (nama) => {return `Halo ${nama}`}

// console.log(('Konatsu Higuchi'))

const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`
}

// console.log(tampilNama('Konatsu', 'Pagi'))

function tampil(nama, waktu) {
    return `Selamat ${waktu}, ${nama}`
}

// console.log(tampil('pian', 'pagi'))

const nama = function (name) {
    console.log(`Halo ${name}`)
}

// nama('pian')


let laptopPrice = (nama, price) => {
    return `Harga laptop ${nama} adalah Rp.${price}`
}

// console.log(laptopPrice('LOQ IAX9', '15.000.000'))

const creditPoint = (point) => `Selamat Point credit anda ${point}`
// console.log(creditPoint('100'))




// -----------------------------




let myCar = ['BMW F30', 'BMW M4 Competition', 'Porsche GT3 RS', 'GTR R34']

// let amountCar = myCar.map(function(car) {
//     return car.length
// })

// console.log(amountCar)

// let amountTextCar = myCar.map(nama => nama.length)
// console.log(amountTextCar)

let amountCar = myCar.map(nama => ({nama: nama, jmlhuruf: nama.length}))
console.table(amountCar)