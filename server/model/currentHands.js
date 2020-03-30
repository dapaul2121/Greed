let allCards = require('./allCards')

let cardPool = allCards

let allHands = []

const takeCardFromDeck = (number) => {
    if (number > cardPool.length) {
        return null
    } 
    const cards = []
    for (let i = 0; i < number; i++) {
        let cardIndex = Math.floor(Math.random() * cardPool.length)
        cards.push(cardPool.splice(cardIndex, 1)[0])
    }
    return cards

}

const addHand = (handSize) => {
    const hand = takeCardFromDeck(handSize)
    if (hand) {
        allHands.push(hand)
    }
    return allHands
}

const updateHands = () => {
    return allHands
}


module.exports.addHand = addHand
module.exports.updateHands = updateHands

