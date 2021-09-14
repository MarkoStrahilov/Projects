let guessNum = parseInt(prompt('Enter A number'));
const targetNum = Math.floor(Math.random() * guessNum) + 1;
while (!guessNum) {
    guessNum = parseInt(prompt('Please Enter A number'));
}
if (guessNum === 'q') {
    console.log('You Quit')
}
let guess = parseInt(prompt('Enter Your First Guess'));
let attempts = 1;
while (guess !== targetNum) {
    attempts++
    if (guess > targetNum) {
        guess = parseInt(prompt('Too high try again'))
    } else {
        guess = parseInt(prompt('Too low try again'))
    }
}
console.log('Congrats you got it right')
console.log(`It took you ${attempts} attempts`)