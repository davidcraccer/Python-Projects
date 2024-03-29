const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getresult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult(){
    if (computerChoice === userChoice){
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lost'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you won'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you won'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you won'
    }

    resultDisplay.innerHTML = result
}