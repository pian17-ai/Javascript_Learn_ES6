// DESTRUCTURING 

// harus 1 1, tidak efektif
function penjumlahanPerkalian (a, b) {
    return [ a + b, a * b]
}

const summation = penjumlahanPerkalian(2, 3[0])
const  multiplication = penjumlahanPerkalian(2, 3[1])

// -------------------------------------------------------------------------------------

// menggunakan destructuring (harus berurutan, jika tidak maka emplementasi akan salah)
function calculation (a, b) {
    return [ a + b, a - b, a * b, a / b]
}
const [summation1, subtraction1,  multiplication1, distribution1] = calculation(2, 3)

console.log(subtraction1)

// -------------------------------------------------------------------------------------

// menggunakan destructuring (urutan tidak berpengaruh)
function calculation1 (a, b) {
    return {
        summation2: a + b,
        subtraction2: a - b,
        multiplication2 : a * b,
        distribution2: a / b
    }
}

const {distribution2, multiplication2, subtraction2, summation2} = calculation1(2, 3)

console.log(multiplication2)

// -------------------------------------------------------------------------------------

// destructuring function arguments
const mhs = {
    name: "Konatsu Higuchi",
    university: "Bina Nusantara",
    faculty: "Teknik Informatika",
    age: 15,
    task: {
        IPK: 3.7,
        Task: 87,
        Test: 90
    }
}

// no use destructuring
function printMhs (mhs) {
    return `Hello, My name is ${mhs.name}, I am ${mhs.age} years old`
}

console.log(printMhs(mhs))

// use destructuring
function printMhs1 ({name, age, faculty, university, task: {IPK, Task, Test}}) {
    return `Hello, my name is ${name}, I am ${age} years old, I studdies in ${university} University, majoring in ${faculty}, while I was at school in ${university}, my IPK is ${IPK} and my test is ${Test}`
}

console.log(printMhs1(mhs))