const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const time = document.querySelector('#time')
let score = document.querySelector('#score')

let result = 0
let currentTime = 60
let timeId
let hitPosition

function randomSquare() {
    square.forEach((className) => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
        //assign
    hitPosition = randomPosition.id
}

square.forEach((square) => {
    square.addEventListener('mouseup', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timeId = setInterval(randomSquare, 500)
}
moveMole()

function countDown() {
    currentTime--
    time.textContent = currentTime
    console.log(time)

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert('Game Over! Your final score is ' + result)
    }
}
let countDownTimerId = setInterval(countDown, 1000)