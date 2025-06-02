// 1. Object literal
// let mahasiswa1 = {
//     nama: "tes1",
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy+porsi
//         console.log(`selamat datang ${this.nama}, selamat makan`)
//     }
// } 

// let mahasiswa2 = {
//     nama: "tes",
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy+porsi
//         console.log(`selamat datang ${this.nama}, selamat makan`)
//     }
// } 




// 2. function declaration

// const methosMahasiswa = {
//     makan: function(porsi){
//         this.energy += porsi
//         console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main: function(stamina){
//         this.energy -= stamina
//         console.log(`${this.nama}, energy anda berkurang ${stamina}`);
//     },

//     tidur: function(jam){
//         this.energy += jam
//         console.log(`selamat tidur ${this.nama}`);
//     }
// }


// function mahasiswa(nama, energy){   
//     let mahasiswa = Object.create(methosMahasiswa)
//     mahasiswa.nama = nama
//     mahasiswa.energy = energy

//     return mahasiswa
// }

// let pian = mahasiswa('pian', 10)
// let konatsu = mahasiswa('konatsu', 10)





// 3. constructor function

// function mhs(name, energy){
//     this.name = name
//     this.energy = energy

//     this.makan = function (porsi) {
//         this.energy += porsi 
//         console.log(`halo ${name}, selamat makan`)
//     }

//     this.game = function(jam) {
//         this.energy -= jam
//         console.log(`selamat bermain energy anda dikurang ${jam}`)
//     }
// }

// let nahida = new mhs('nahida', 10)



// 4. object.create

// const methosMahasiswa = {
//     makan: function(porsi){
//         this.energy += porsi
//         console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main: function(stamina){
//         this.energy -= stamina
//         console.log(`${this.nama}, energy anda berkurang ${stamina}`);
//     },

//     tidur: function(jam){
//         this.energy += jam
//         console.log(`selamat tidur ${this.nama}`);
//     }
// }


// function mahasiswa(nama, energy){   
//     let mahasiswa = Object.create(methosMahasiswa)
//     mahasiswa.nama = nama
//     mahasiswa.energy = energy

//     return mahasiswa
// }

// let pian = mahasiswa('pian', 10)
// let konatsu = mahasiswa('konatsu', 10)




// 5. prototype

// function mahasiswa(nama, energy){   
//     // let mahasiswa = Object.create(methosMahasiswa)
//     // let mahasiswa = {}
//     // let this = Object.create(mahasiswa.prototype) "JALAN DIBELAKANG LAYAR"
//     this.nama = nama
//     this.energy = energy

//     // return mahasiswa
//     // return this
// }

// mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi
//     return `selamat makan ${this.nama}`
// }

// mahasiswa.prototype.main = function(stamina) {
//     this.energy -= stamina
//     return `energi ${this.nama}, berkurang ${stamina}`
// }

// mahasiswa.prototype.tidur = function(stamina) {
//     this.energy += stamina
//     return `${this.nama} memulihkan ${stamina} energy`
// }

// let konatsu = new mahasiswa('konatsu', 10)


// VERSI CLASS
class mahasiswa {
    constructor(nama, energy){
        this.nama = nama
        this.energy = energy
    }

    makan(porsi) {
        this.energy += porsi
        return `${this.nama} makan, menambah ${porsi} energy`
    }

    main(stamina) {
    this.energy -= stamina
    return `energi ${this.nama}, berkurang ${stamina}`
    }

    tidur(stamina) {
    this.energy += stamina
    return `${this.nama} memulihkan ${stamina} energy`
    }
}

let konatsu = new mahasiswa('konatsu', 10)

let angka = [3, 2, 5, 1]
console.log(angka.sort())
