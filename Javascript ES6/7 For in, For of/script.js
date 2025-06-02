// FOR OF

// ARRAY
const mhs = ['Dewi', 'Adel', 'Kayla']
const mhs1 = ['Alvian', 'Konatsu', 'Nahida']
const BMWcars = ['F30', 'M4 Competition', 'M4 Touring']

// use the for 
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i])
}

// use the foreach
mhs1.forEach((m) => {
 console.log(m)
})

// use the for of
for (const bmw of BMWcars) {
console.log(bmw)
}

// -----------------------------------------------------------------

// STRING

const konatsu = "Konatsu Higuchi"

// for (const mylove of konatsu) {
    //     console.log(mylove)
    // }
    
    // konatsu.forEach((friend) => console.log(friend)) // ERROR
    
    // ------------------------------------------------------------------
    
    // tambahan
    const myWife = ["Konatsu Higuchi", "Nahida", "Lenovo LOQ"]
    myWife.forEach((w, i) => {
        console.log(`${w} is my ${i+1}st wife`)
    })
    
    for (const [i, w] of myWife.entries()) {
        console.log(`${w} is my ${i+1}st wife`)
    }
    
    // ------------------------------------------------------------------
    
    // NODELIST
    
    const liNama = document.querySelectorAll('.name')
    console.log(liNama)
    
    // foreach
    liNama.forEach((n) => console.log(n.innerHTML))
    
    // for of 
    for (const n of liNama) {
        console.log(n.innerHTML)
    }
    
    // arguments
    function addTwoNumbers() {
        // return arguments.reduce((a, i) => a + i) //ERROR YA ADICK ADIK
        
        let jml = 0;
        // [17, 4, 9, 5, 8, 9].forEach(li => jml += li); // ERROR Pakai foreach juga tidak bisa
        // return jml;
        
        for (li of arguments) {
            jml += li
        }
        
        return jml
    }
    
    console.log(addTwoNumbers(17, 4, 9, 5, 8, 9))
    
    
// --------------------------------------------------------------------------
    
// FOR IN
const setup = {
    laptop: "Lenovo LOQ IAX9",
    monitor: "Skyworth H27G30Q",
    keyboard: "Furycube ZT82"
}

for (s in setup) console.log(s) // CALL OBJECT
for (s in setup) console.log(setup[s]) // CALL VALUE