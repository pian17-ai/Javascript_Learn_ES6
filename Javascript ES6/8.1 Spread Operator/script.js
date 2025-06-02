// SPREAD OPERATOR

// spread operator adalah memecah iterabels menjadi single element

// const mhs1 = ['Alvian', 'Konatsu', 'Nahida']

// const car = ['911 GT3 RS', 'F-30', 'M4 Touring']

// const mhs = {
//     name: "Alvian Cahyo Pambudi",
//     university: "Universitas Indonesia",
//     faculty: "Computer Science"
// }

// console.log(...mhs1[0])

// const myDream = [...mhs1, 'Lenovo Legion i9 Pro', ...car]
// const denganConcat = mhs1.concat(car)
// // hasilnya sama kedua di atas

// console.log(denganConcat)

// const setup = ['LOQ IAX9', 'Furycube ZT82', 'Skyworth H27']
// const setupP = ['Legion i9 Pro']

// const output = [...setup, ...setupP]
// console.log(output)

const car = ['F30', 'M4 Competition', 'Pagani Huayra']
const device = ['Legion i9 pro', 'Macbook Pro M4 max', 'Samsung S25 Ultra', 'Iphone 15 Pro Max']

// CARA BEDA HASIL SAMA
const hasil = [...car, 'Konatsu Higuchi',...device]
const hasil2 = car.concat(device)

// PERBEDAAN SPREAD OPERATOR LEBIH FLESIBEL
const hasil3 = [...car, 'Konatsu Higuchi',...device, 'Syaripuy']
// console.log(hasil3);

// --------------------------------------------------------------------------------------------------------------

// MENG-COPY ARRAY
const mhs = ['Alvian', 'Konatsu', 'Syaripuy'];
const mhs1 = mhs;
mhs1[2] = 'Dewi Kumala';

// console.log(mhs);
// console.log(mhs1);
// Salah karena variable mhs1 hanya mengabil dari variable mhs bukan mengcopy

// Cara yang benar
const mhhs = ['Alvian Cahyo P', 'Konatsu Higuchi', 'Syaripay'];
const mhhs1 = [...mhhs];
mhhs1[0] = 'Dewi Kumala Putri Firdaus';

// console.log(mhhs)
// console.log(mhhs1)

// ----------------------------------------------------------------------------------------------

const mhs3 = document.querySelectorAll('li')

const lliMhs = []
const lliMhs2 = []

// izin mengulang pengualangan wwkwkw
// FOR BIASA
for (let i = 0; i < mhs3.length; i++) {
    lliMhs.push(mhs3[i].innerHTML)//push untuk memasukan array ke variable 'lliMhs'
}

// foreach
// function biasa
mhs3.forEach(function(mahs) {
    lliMhs.push(mahs.innerHTML)
})

// arrow function
mhs3.forEach((mahs) => lliMhs.push(mahs.innerHTML))


// for of
for (const Mahs of mhs3) {
    lliMhs.push(Mahs.innerHTML)
}
//  ---------------------------------------------------------------------------------------

// for (let i = 0; i < mhs3.length; i++) {
//     lliMhs2.push(mhs3[i].innerHTML)
// }
// console.log(lliMhs2)

const mhsS = [...mhs3].map(m => m.innerHTML)
console.log(mhsS)