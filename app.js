document.addEventListener('DOMContentLoaded', () => {

    //Card options
    const cardArray = [
        {
            name: 'eevee',
            img: 'images/Eevee.jpg'
        },
        {
            name: 'eevee',
            img: 'images/Eevee.jpg'
        },
        {
            name: 'beedrill',
            img: 'images/Beedrill.jpg'
        },
        {
            name: 'beedrill',
            img: 'images/Beedrill.jpg'
        },
        {
            name: 'charmander',
            img: 'images/Charmander.jpg'
        },
        {
            name: 'charmander',
            img: 'images/Charmander.jpg'
        },
        {
            name: 'lunala',
            img: 'images/Lunala.jpg'
        },
        {
            name: 'lunala',
            img: 'images/Lunala.jpg'
        },
        {
            name: 'mawile',
            img: 'images/Mawile.jpg'
        },
        {
            name: 'mawile',
            img: 'images/Mawile.jpg'
        },
        {
            name: 'snake',
            img: 'images/Snake.jpg'
        },
        {
            name: 'snake',
            img: 'images/Snake.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //Crear tablero
    function createBoard() {
        for(let i = 0; i<cardArray.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', 'images/Portada.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //buscar coincidencias
    function checkForMatch(){
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/Fondo.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Fondo.jpg')
            cards[optionOneId].style.pointerEvents =  'none'
            cards[optionTwoId].style.pointerEvents =  'none'
            cardsWon.push(cardsChosen)
        } else{
            alert('Sorry, try again')
            cards[optionOneId].setAttribute('src', 'images/Portada.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Portada.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulatons! You found them all!'
        }
    }

    //voltear las cartas
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 200)
        }
    }

    createBoard();
})