console.log('mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(n => console.log(n.name))
    },
    error: (e) => {
        console.log(e.responseText)
    }
})
console.log('selesai')