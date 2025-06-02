const names = document.querySelector('.names')
const txtName = [...names.innerHTML].map(i => `<span>${i}</span>`).join('')

names.innerHTML = txtName