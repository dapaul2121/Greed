const currentHands = require('../model/currentHands')

const addHand = (req, res) => {
    const allHands = currentHands.addHand(4)
    console.log('this is a test')
    res.send(allHands)
}

const updateHands = (req, res) => {
    const allHands = currentHands.updateHands()
    res.send(allHands)
}

const takeCard = (req, res) => {
    console.log(req.params.id)
}



module.exports.addHand = addHand
module.exports.updateHands = updateHands
module.exports.takeCard = takeCard