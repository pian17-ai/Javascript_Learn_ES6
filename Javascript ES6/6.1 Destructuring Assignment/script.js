// DESTRUCTURING ASSIGMENT

// simple example : 
const mhs = {
    name: "Konatsu Higuchi",
    age: 15,
    email: "higuchikonatsu@gmail.com"
}

const {name, age, email} = mhs
// console.log(age)

// ---------------------------------------------------------------------

// DESTRUCTURING ARRAY

const introduce = ['Halo', 'nama', 'saya', 'Konatsu Higuchi']

// manual
const halo = introduce[0]
const nama = introduce[1]
const saya = introduce[2]
const Konatsu = introduce[3]

// --------------------------------------------------------------------------

// use destructuring
const [haloo, namaa, sayaa, Konatsuu] = introduce // biasa

// --------------------------------------------------------------------------

// skipping items
const [halooo, , , Konatsuuu] = introduce 

// --------------------------------------------------------------------------

// swap items
let a = 1;
let b = 2;

[a, b] = [b, a];

// console.log(a);

// --------------------------------------------------------------------------

// return value pada function
function coba () {
    return [1, 2];
}

const [c, d] = coba()
// console.log(c)

// --------------------------------------------------------------------------

// rest parameter
const [v1, ...values] = [1, 2, 3, 4, 5]

console.log(v1)
console.log(values)

// --------------------------------------------------------------------------

// destructuring object
const mhs1 = {
    name1: "Alvian Cahyo Pambudi",
    age1: 16,
    email1: "alviancahyopambudi@gmail.com"
};

const {name1, age1, email1} = mhs1;
console.log(name1);

// --------------------------------------------------------------------------

// assigment tanpa deklarasi
({name2, age2} = {
    name2: "Konatsu Higuchi",
    age2: 15
})

console.log(name2)

// --------------------------------------------------------------------------

// assign ke variable baru
const mhs3 = {
    name3: "Dewi Kumala Putri Firdaus",
    username3: "Kum Kum"
}

const {name3: n, username3: usn} = mhs3

console.log(n)

// ---------------------------------------------------------------------------

// memberikan default value

const mhs4 = {
    name4: "Adellya Dwi Anugrah",
    username4: "adelele",
    email4: "adellyadwianugrah@gmail.com"
}

const {name4, username4, email4 = `${username4}@gmail.com`} = mhs4

console.log(email4)

// -----------------------------------------------------------------------------

// memberi nilai default + assign ke variable baru

const mhs5 = {
    name5: "Adellya Dwi Anugrah",
    username5: "adellllleelleelelele"
}

const {name5: n5, username5: usn5, email5: em5 = `${usn5}@gmail.com`} = mhs5
console.log(em5)

//  ----------------------------------------------------------------------------

// rest parameter 2
const mhs6 = {
    name6: "Adellya Dwi Anugrah",
    username6: "yrdhel",
    email: "adelele@gmail.com"
}

const {name6, ...value} = mhs6
console.log(value)

// ----------------------------------------------------------------------------

// mengambil field pada object, setelah dikirim sebagai parameter untuk function