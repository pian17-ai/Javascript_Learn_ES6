// PROMISE
// merupakan object yang mempresentasikan keberhasilan atau kegagalan sebuah asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fulfilled / rejected / pending)
// callback (resolve / rejected / finally)
// aksi (then / catch)

// contoh
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati')
//     } else {
//         reject('ingkar janji')
//     }
// });

// janji1
//     .then(response => console.log('Ok : ' + response))
//     .catch(response => console.log('No : ' + response))

// // contoh 2
// let ditepati1 = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati1) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu')
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject('Ga ditepati setelah nunggu beberapa waktu')
//         }, 2000)
//     }
// });

// console.log('start');
// // console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log('waiting is done'))
//     .then(response => console.log(`OK : ${response}`))
//     .catch(respone => console.log(`NO : ${respone}`))
// console.log('end');

// Promise.all
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                judul: 'Tung tung tung sahur',
                sutradara: 'noxxa',
                pemeran: 'tung tung'
            }
        ]);
    }, 1000)
})

const wheater = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                kota: 'Jakarta',
                temp: 25,
                condition: 'Cerah berawan'
            }
        ])
    }, 500)
})

// film.then(response => console.log(response))
// wheater.then((response => console.log(response)))

Promise.all([film, wheater])
    // .then((response) => {console.log(response)})
    .then(response => {
        const [film, wheater] = response;
        console.log(film),
        console.log(wheater)
    })