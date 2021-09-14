const input = document.querySelector('input')
const container = document.querySelector('.container')
const button = document.querySelector('#btn')

let count = 0;

button.addEventListener('click', () => {
    count += 1;
    const inputValue = input.value
    createList(count, inputValue)
    input.value = ' '
})


const createList = (counter, value) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const ul = document.createElement('ul')
    if (value === '') {
        btn.style.display = 'none';
        alert('NO VALUE ENTERED PLS ENTER A TODO')
    }
    btn.textContent = 'X'
    ul.append(btn)
    li.textContent = `${counter}. ${value}`
    ul.append(li)
    container.append(ul)
    li.classList.add('style')
    btn.classList.add('style')
    btn.addEventListener('click', function() {
        li.textContent = 'You Removed A ToDo'
        li.classList.add('removed')
        btn.remove()
        console.warn('ITEM REMOVED FROM TODO LIST')
    })
}