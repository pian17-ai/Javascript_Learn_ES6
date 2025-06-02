// 1. HTML FRAGMENTS
const mhs = {
    name: "Konatsu Higuchi",
    faculty: "TI",
    nrp: '023424',
    age: 16,
}

const el = `<div>
    <h2>${mhs.name}</h2>
    <span>${mhs.nrp}</span>
</div>`

// console.log(el)

// document.body.innerHTML = el
// --------------------------------------------------------------

// JAWABAN PIAN =

// 2. LOOPING
const mhs1 = [
    {
        name: "Alvian Cahyo Pambudi",
        email: "alviancahyopambudi@gmail.com"
    },
    {
        name: "Konatsu Higuchi",
        email: "konatsuhiguchi@gmail.com"
    },
    {
        name: "Dewi Kumala Putri Firdaus",
        email: "dewikumalaputrifirdaus@gmail.com"
    }
]

let element = ""

for (let i = 0; i < mhs1.length; i++) {
    element += 
    `<div class = "mhs">
        <h2>${mhs1[i].name}</h2>
        <p>Name : ${mhs1[i].name}</p>
        <p>Email : ${mhs1[i].email}</p>
    </div>`
    
}

// console.log(element)
document.body.innerHTML = element

// ------------------------------------------------------------------

// JAWABAN PAK DIKA

const elm = `<div class = "mhs">
    ${mhs1.map(item => `<ul>
            <li>${item.name}</li>
            <li>${item.email}</li>
        </ul>`).join('')}
</div>`

// CONDISIONALS

// ternary

const song = {
    title: "Daylight",
    singer: "Taylor Swift",
    // feat: "pian"
}

const songOutput = `<div class = "song">
    <p>Judul : ${song.title}</p>
    <p>Penyanyi : ${song.singer} ${song.feat ? `(feat.${song.feat})` : ""}</p>
</div>`

// ------------------------------------------------------------------


// 4. NESTED / HTML FRAGMENT BERSARANG

const mhs2 = {
    name : "Konatsu Higuchi",
    semester : 5,
    subject : [
        "Web Developer",
        "Data Analyst",
        "Planning Information System",
        "Pemograman Interactive System",
        "Planning Object Oriented System"
    ]
}

function cetakMataKuliahPian (subject) {
    return `<ul>
        ${subject.map(item => 
            `<li>${item}</li>`
        )}
    </ul>`
}

function cetakMataKuliahPakDika (mata) {
    return `<ul>
        ${mata.map(matkul => `<li>${matkul}</li>`).join("")}
    </ul>`
}

const nestedOutput = `<div>
    <h2>Name : ${mhs2.name}</h2>
    <h3>Semester : ${mhs2.semester}</h3>
    <h2>Subject :</h2>

    ${cetakMataKuliahPakDika(mhs2.subject)}
</div>`


console.log(nestedOutput)
document.body.innerHTML = nestedOutput