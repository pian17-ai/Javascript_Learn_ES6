// FUNCTION
//
// const car = function () {
//     this.name = '911 GT3 RS'
//     this.price = 4.999
//     this.output = function() {
//         console.log(`Mobil ${this.name} dengan harga ${this.price} pilihan yang tepat?`)
//     }

//     console.log(this)
// }

// const GT3 = new car()


// FUNCTION ARROW
// 
// const car = function () {
//     this.nama = '911 GT3'
//     this.price = 4.999
//     this.output = () => {
//         console.log(`Apakah anda yakin membeli ${this.nama}, dengan harga ${this.price}M ?`)
//     }
// }

// const GT3 = new car()

// OBJECT LITERAL

// const car = {
//     name: '911 GT3 RS',
//     price: 4.999,
//     output: () => {
//         // console.log(`Apakah anda yakin ingin membeli ${name}, dengan harga ${price}M`)
//         console.log(this)
//     }
// }








// -------------------------------------







// const car = function () {
//     this.name = '911 GT3 RS'
//     this.price = 4.999
//     this.output = function () {
//         console.log(`Mobil ${this.name}, dengan harga ${this.price}M sudah siap di towing`)
//     }


// setInterval(() => {
//     console.log(this.price)
// }, 500)
// }

// const pian = new car();

// const box = document.querySelector(".box");

// box.addEventListener('click', function() {
//     let one = 'size'
//     let two = 'caption'


//     if (this.classList.contains(one)) {
//         [one, two] = [two, one]
//     }


//     this.classList.toggle(one)
//     setTimeout(() => {
//         this.classList.toggle(two)
//         // console.log(this)
//     }, 600)
// }) 

function tugasKuliah (mataKuliah, selesai) {
    console.log(`Mulai mengerjakan ${mataKuliah}`)
    selesai();
}