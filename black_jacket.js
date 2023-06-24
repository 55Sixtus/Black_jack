
// let age = 21;


// if (age > 28) {
//     console.log("not permited to enter")
// }else if (age === 28) {
//     console.log('permited to enter')
// }else 
//      console.log("go home your not qualify")


// let firstCard = 9
// let secondCard = 12
// let sum = firstCard + secondCard

// if(sum < 21 ) {
//     console.log("Do you want to draw a new card?")
// }
// else if(sum ===21 ){
//     console.log("whooooa, you have got a blackjack")
// }
// else{
//     console.log("your out of the game")
// }

// check if person is eligible for the birthday card from the king!(100)

// let age = 145
// let isAlive = true

// if(age <= 100 ) {9
//     console.log("Not Eligible")
// }
// else if(age === 100 ) {
//     console.log("your Eligible to take your birthday card from the king!")
// }
// else{
//     console.log("Not eligible, you have already gotten one!")
//     isAlive = false

// }
// console.log(isAlive)

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard 
let cards = [firstCard, secondCard] //array- order of list items
let = hasBlackJack = false
let isAlive = true
let message = "";

let  messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") //or
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function renderGame() {
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "cards: " + cards[0] + " " + cards[1] // render out all the cards in the card element!
   if(sum < 20 ) {
    message= "Do you want to draw a new card?"
}
else if(sum ===21 ) {
    message= "you have got a blackjack"
    hasBlackJack = false
}
else{
    message= "your out of the game"
    isAlive = true
    
} 
messageEL.textContent = message

}
//create a function newCard() that logs out "draw a new card from the deck!"
function newCard() {
    console.log("draw a new card from the deck!")
    let card = 7
    sum += card
}
//create a new function that called startGame() that calls renderGame()
function startGame() {
    renderGame()
}


