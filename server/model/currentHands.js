let allCards = require('./allCards')

const makeCardPool = () => {
    const cardPool = []
    for (let i = 0; i < allCards.length; i++) {
        cardPool.push(Object.assign({}, allCards[i]))
    }
    return cardPool
}

let cardPool = makeCardPool()

let allHands = []

const resetGame = () => {
    allHands = []
    cardPool = makeCardPool()
}

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

const takeCard = (id) => {
    findCardByID(id, (card) => {
        console.log(card)
        if (card) {
            card.isTaken = true
        }
    })
    console.log(allHands)
    
}

const findCardByID = (id, callback) => {
    // console.log(id)
    // console.log(allHands)
    for (let i = 0; i < allHands.length; i++) {
        let hand = allHands[i]
        console.log('hands')
        console.log(hand.length)
        for (let j = 0; j < hand.length; j++) {
            let card = hand[j]
            console.log(j)
            console.log(card)
            // console.log(card)
            // console.log(card.id === id)
            if (card.id.toString() === id) {
                // console.log('sucess')
                callback(card)
            }
        }
    }
}

const drawCard = () => {
    return takeCardFromDeck(1)
}


module.exports.addHand = addHand
module.exports.updateHands = updateHands
module.exports.takeCard = takeCard
module.exports.drawCard = drawCard
module.exports.resetGame = resetGame

