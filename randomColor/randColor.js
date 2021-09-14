const h1 = document.querySelector('h1')
const button = document.querySelector('button')
const body = document.querySelector('body')
body.style.textAlign = 'center'
button.style.padding = '1rem 2rem'

button.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})