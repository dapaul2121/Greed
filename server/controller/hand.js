const currentHands = require('../model/currentHands')

const addHand = (req, res) => {
    const allHands = currentHands.addHand(12)
    console.log('this is a test')
    res.send(allHands)
}

const updateHands = (req, res) => {
    const allHands = currentHands.updateHands()
    res.send(allHands)
}

const takeCard = (req, res) => {
    let id = req.params.id
    // console.log(id)
    currentHands.takeCard(id)
    res.send()
}

const drawCard = (req, res) => {
    res.send(currentHands.drawCard())
}

const resetGame = (req, res) => {
    currentHands.resetGame()
    res.send()
}



module.exports.addHand = addHand
module.exports.updateHands = updateHands
module.exports.takeCard = takeCard
module.exports.drawCard = drawCard
module.exports.resetGame = resetGame