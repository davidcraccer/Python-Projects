function init() {
    // Create a new element for each star
    for (let i = 0; i < 250; i++) {
      const star = document.createElement("div");
      star.className = "star";
      document.getElementById("stars").appendChild(star);

      // Randomly position each star
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      star.style.top = `${y}px`;
      star.style.left = `${x}px`;

      // Randomly set the duration of the fall animation for each star
      const duration = Math.random() * 5 + 5;
      star.style.animationDuration = `${duration}s`;
    }
  }
  init();
const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/IMG_0524.JPG',
    },
    {
        name: 'hotdog',
        img: 'images/IMG_1786.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/IMG_4696.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/IMG_6159.png',
    },
    {
        name: 'pizza',
        img: 'images/IMG_7148.jpg',
    },
    {
        name: 'rice',
        img: 'images/IMG_7805.jpg',
    },
    {
        name: 'fries',
        img: 'images/IMG_9751.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/IMG_0524.JPG',
    },
    {
        name: 'hotdog',
        img: 'images/IMG_1786.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/IMG_4696.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/IMG_6159.png',
    },
    {
        name: 'pizza',
        img: 'images/IMG_7148.jpg',
    },
    {
        name: 'rice',
        img: 'images/IMG_7805.jpg',
    },
    {
        name: 'fries',
        img: 'images/IMG_9751.png',
    },
    {
        name: 'david',
        img: 'images/IMG_6932.jpg',
    },
    {
        name: 'david',
        img: 'images/IMG_6932.jpg',
    },

]

cardArray.sort(() => Math.random() - 0.5);


const gridDisplay=document.querySelector('#grid')
const resultDisplay = document.querySelector('#result') 
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i=0;i< cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src', 'images/6A421017-867D-4B2F-97FD-9364ED5B0A2F.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const option1 = cardsChosenIds[0]
    const option2 = cardsChosenIds[1]
    if(option1 == option2){
        cards[option1].setAttribute('src', 'images/6A421017-867D-4B2F-97FD-9364ED5B0A2F.jpg')
        cards[option2].setAttribute('src', 'images/6A421017-867D-4B2F-97FD-9364ED5B0A2F.jpg')
        
        return
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        
        cards[option1].setAttribute('src', 'images/white.png')
        cards[option2].setAttribute('src', 'images/white.png')
        cards[option1].removeEventListener('click', flipCard)
        cards[option2].removeEventListener('click', flipCard)
       cardsWon.push(cardsChosen)
        
    }
    else{
        cards[option1].setAttribute('src', 'images/6A421017-867D-4B2F-97FD-9364ED5B0A2F.jpg')
        cards[option2].setAttribute('src', 'images/6A421017-867D-4B2F-97FD-9364ED5B0A2F.jpg')
        
    }
    cardsChosen = []
    cardsChosenIds =[]
    resultDisplay.innerHTML = cardsWon.length
    console.log(cardArray.length)
    console.log(cardsWon.length)
    // Check if all cards have been flipped
if (cardsWon.length === (cardArray.length/2)) {
    // Display an alert message
    alert('You won!');
  }
  
}

function flipCard(){
    const cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2){
        setTimeout( checkMatch, 500)
    }

}


// Create a new element for each star
    