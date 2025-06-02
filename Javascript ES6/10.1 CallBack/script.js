// function halo (name) {
//     alert(`Halo ${name}`)
// }

// function printMessage(callback) {
//     // const name = prompt('Enter name : ')
//     // callback(name)
//     callback = "Konatsu Higuchi"
// }

// ini contoh cara 1
// printMessage((name) => {
//     alert(`Halo ${name}`)
// })

// cara 2
// penjelasan : jika ada 1 saja yg di ambil dari function tidak perlu "()" dan jika hanya 1 baris returnnya tidak usah pakai "{}"

// printMessage((name) => console.log(`Halo ${name}`))

function printMessage (callback) {
    const name = 'Konatsu'
    callback(name)
}

printMessage(name => console.log(`Halo ${name}`)) 


// contoh Synchronous----------------------------------------------------------
const mhs2 = [
    {
        "name": "Alvian Cahyo Pambudi",
        "nrp": "002138414",
        "email": "alviancahyopambudi@gmail.com"
    },
    {
        "name": "Konatsu HIguchi",
        "nrp": "002343493",
        "email": "higuchikonatsu@gmail.com"
    },
    {
        "name": "Adellya Dwi Anugrah",
        "nrp": "032423409",
        "email": "adellyadwianugrah@gmail.com"
    },
    {
        "name": "Dewi Kumala Putri Firdaus",
        "nrp": "00923473",
        "email": "dewikumalaputrifirdaus@gmail.com"
    },
]

// console.log("start")
// mhs.forEach(n => {
//     for (let i = 0; i < 9000000; i++) {
//         let tgl = new Date()
//     }
//     console.log(n.name)
// })
// console.log('end')

// contoh Asynchronous---------------------------------------------------------

function getMhs(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if ( xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

function succes() {

}

function error() {

}

getMhs('CallBack/mahasiswa.json', result => console.log(succes), () => )