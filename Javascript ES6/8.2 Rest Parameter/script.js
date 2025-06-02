// Rest Parameter

// function myFunc() {
//     return Array.from(arguments)
// }

// console.log(myFunc(1,2,3,4,5));

function jumlahKn (...number) {
    let total = 0
    for (const a of number) {
        total += a
    }
    return total
}

console.log(jumlahKn(1,2,3,4,5))

function myArgs(...Args) {
    // return `a = ${a}, b = ${b}, Args = ${Args}`
    // return Array.from(arguments)
    // return [...arguments]
    // return Args

    return Args.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(myArgs(1,2,3,4,5))

// ARRAY DESTRUCTURING
const team = ['Alvian', 'Dewi', 'Konatsu', 'Syarifah', 'Nahida']
const [leader, representative, ...member] = team

console.log(`Leader = ${leader}
representative = ${representative}
member = ${member}`)

// object destrucutring
const webDev = {
    projectManager: 'Alvian',
    backEnd: 'Konatsu',
    frontEnd: 'Dewi',
    UIUX: 'Suhailah',
    devOps: 'Nahida'
}

const {projectManager, ...myTeam} = webDev
console.log(myTeam)

// filtering
function filterBy(type, ...values) {
    return values.filter(value => typeof value === type)
}

console.log(filterBy('boolean', 1, 2, true, 0, 'Pian', 'Dewi', false))