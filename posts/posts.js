const button = document.querySelector('#postBtn')
const nameValue = document.querySelector('#enter-head')
const textValue = document.querySelector('#enter-text')
const postsContentContainer = document.createElement('div')
const postsContent = document.querySelector('.posts-content')

button.addEventListener('click', () => {
    createNameFunction(nameValue.value);
    createTextFunction(textValue.value);
    document.querySelector('#enter-head').value = '';
    document.querySelector('#enter-text').value = '';
})


const createNameFunction = (value) => {
    const nameContainer = document.createElement('h2')
    nameContainer.innerHTML = value;
    postsContentContainer.append(nameContainer)
}


const createTextFunction = (value) => {
    const textContainer = document.createElement('p')
    textContainer.innerHTML = value;
    postsContentContainer.append(textContainer)
}

function callContainer() {
    postsContent.append(postsContentContainer)
}

callContainer()

function callPostContainerStyles() {
    postsContentContainer.classList.add('callContainerStyles')
}

callPostContainerStyles()