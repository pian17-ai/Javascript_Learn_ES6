const allVideos = Array.from(document.querySelectorAll("[data-duration]"))

let jsVideos = allVideos.filter((video) => video.innerHTML.includes("JAVASCRIPT"))

.map(item => item.dataset.duration) // mengambil isi atribut

.map(time => {
    const parts = time.split(":").map(part => parseFloat(part))
    return parts[0] * 60 + parts[1]
    // console.log(parts[0] * 60 + parts[1])
    // return parts
})

.reduce((total, second) => total + second) // total kan semua

// TOTAL DURASI
const hour = Math.floor(jsVideos / 3600)
jsVideos = jsVideos - hour * 3600
const minutes = Math.floor(jsVideos / 60)
const second = Math.floor(jsVideos / 60)

const txtTotalDurasi = document.querySelector(".total-durasi")
// txtTotalDurasi.innerHTML = 

// SEND TOTAL WAKTU
const txtTotalWaktu = document.querySelector(".total-durasi")
txtTotalWaktu.innerHTML = `${hour} jam, ${minutes} menit ${second} detik`

// SEND JUMLAH VIDEO
const jmlVideo = allVideos.filter((video) => video.innerHTML.includes("JAVASCRIPT"))
const txtJmlVideo = document.querySelector(".jumlah-video")
txtJmlVideo.innerHTML = `${jmlVideo.length} videos`

console.log(minutes)