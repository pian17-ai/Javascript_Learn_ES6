// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000)
// })
// coba.then(() => {
//     console.log(coba)
// })

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const time = 9000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, time)
        } else {
            reject('kelamaan')
    }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba)
    } catch (err) {
        console.error(err)
    }
}

cobaAsync()