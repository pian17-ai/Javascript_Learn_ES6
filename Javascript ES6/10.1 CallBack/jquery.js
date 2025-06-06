console.log('mulai')
$.ajax({
    url: 'http://127.0.0.1:8000/api/v1/posts',
    success: (mhs) => {
        console.log('successs')
    },
    error: (e) => {
        console.log(e.responseText)
    }
})
console.log('selesai')