document.addEventListener('DOMContentLoaded', () => {
    //card arr

    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const box = document.querySelector('.flexbox')
    const result = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    let cardsWon = []

    //create  board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            box.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found !')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Try again pleace')
        }
        cardsChosen = []
        cardsChosenId = []
        result.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = 'Congratulations, you found all of them'
        }
    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})