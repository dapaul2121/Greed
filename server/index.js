const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const morgan = require('morgan');
const hand = require('./controller/hand')

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/addHand', hand.addHand)
app.get('/updateHands', hand.updateHands)
app.delete('/takeCard/:id', hand.takeCard)

app.listen(port, () => console.log(`listening on port port!`));