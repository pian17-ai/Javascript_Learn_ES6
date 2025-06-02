function tugasKuliah (mataKuliah, selesai) {
    console.log(`Mulai mengerjakan ${mataKuliah} ...`)
    selesai();
}

function selesai() {
    console.log('selesai mengerjakan tugas')
}

tugasKuliah ('pemograman web', selesai) 

let total = 0, count = 1
while (count <= 10) {
    total += count
    count += 1
}

console.log(total)


function repeatLog (n) {
    for (let i = 0; i < n; i++ ) {
        console.log(n[i])
    }
}

repeatLog (20)


function lulusBinus (mahasiswa, hasil) {
    console.log(`Ananda ${mahasiswa} dinyatakan ${hasil} dalam progam Beasiswa BINUS`)
    // hasil();
}

function hasil(nilai) {
    if (nilai > 90) {
        return "lolos"
    } else {
        return "tidak lolos"
    }
}

lulusBinus ('Alvian Cahyo Pambudi', hasil(91))

function repeat(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

repeat(10)