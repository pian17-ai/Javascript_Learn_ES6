// SYNCHRONOUS CALLBACK
// function hello (name) {
//     alert(`Hello ${name}`)
// }

// function printPesan(callback) {
//     const name = prompt('Enter nama : ')
//     callback(name)
// }

// printPesan((name) => {
//     alert(`Hallo ${name}`)
// })

const mhs = [
    {
        "name" : "Alvian Cahyo Pambudi",
        "nrp" : "0934898644",
        "email" : "alviancahyopambudi@gmail.com",
        "jurusan" : "Teknik Informatika",
        "idDosenWali" : 1
    },
    {
        "name" : "Dewi Kumala Putri Firdaus",
        "nrp" : "0874653846",
        "email" : "dewikumalaputrifirdaus@gmail.com",
        "jurusan" : "Matematika dan IPA",
        "idDosenWali" : 2
    },
    {
        "name" : "Kayla Siti Kamelia",
        "nrp" : "0877374422",
        "email" : "kaylasitikamelia@gmail.com",
        "jurusan" : "Hukum",
        "idDosenWali" : 1
    },
    {
        "name" : "Nur Khadijah Syarifah Suhailah Suryodiningrat",
        "nrp" : "0934898644",
        "email" : "nksyarifahsuhailahs@gmail.com",
        "jurusan" : "Teknik Informatika",
        "idDosenWali" : 2
    },
]

console.log('mulai')
mhs.forEach(m => {
    // for(i = 0; i < 10000000; i++) {
    //     let date = new Date();
    // }
    console.log(m.name)
})
console.log('selesai')

//ASYNCHROUS CALLBACK
function getMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 ) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if(xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

console.log('mulai')

function success (result) {
    const mhs = JSON.parse(result)
    mhs.forEach(n => console.log(n.name))
}

function error () {

}

getMahasiswa('data/mahasiswa.json', success, error)

console.log('selesai')