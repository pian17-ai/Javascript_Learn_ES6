// LANGKAH LANGKAH MENGERJAKAN

// ambil semua video
const allVideos = Array.from(document.querySelectorAll("[data-duration]"))

// pilih jsLanjutan
let JsLanVideos = allVideos.filter(videos => videos.innerHTML.includes("JAVASCRIPT"))

// ambil durasi masing masing video 
.map(item => item.dataset.duration)

// ubah durasi menjadi int lalu ubah menit menjadi detik
.map(time => {
    // 10:30 -> [10, 30] (split)
    const parts = time.split(":").map(part => parseFloat(part))
    return parts [0] * 60 + parts[1]
})

// jumlahkan semua detiknya
.reduce((total, detik) => total + detik)

// ubah format menjadi jam menit detik
const jam = Math.floor(JsLanVideos / 3600)
JsLanVideos = JsLanVideos - jam * 3600
const menit = Math.floor(JsLanVideos / 60)
const detik = Math.floor(JsLanVideos / 60)

// lalu simpam menggunakan DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`




// total video
let jVideo = document.querySelector('.jumlah-video')
const pTotal = allVideos.filter(videos => videos.innerHTML.includes("JAVASCRIPT")).length

function totalVideos (totalVideo) {
    if (totalVideo < 0) {
        return `maaf ada kesalahan`
    } else if (totalVideo > 1) {
        return `${totalVideo} videos`
    } else if (totalVideo <= 1) {
        return `${totalVideo} video`
    }
}

jVideo.textContent = totalVideos(pTotal)