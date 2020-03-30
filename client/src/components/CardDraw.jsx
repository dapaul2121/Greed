import React from 'react'
import axios from 'axios'

class CardDraw extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardsDrawn: [{name: ''}]
        }
        this.drawCard = this.drawCard.bind(this)
    }

    drawCard() {
        axios.get(`/drawCard`)
            .then((response) => {
                console.log(response)
                this.setState((state) => {
                    state.cardsDrawn.unshift(response.data[0])
                    return state
                })
            })
            .catch((err) => {
                console.log(err)
            })
        }

    render() {
        return (
            <div>
                <button type="button" onClick = {this.drawCard}>Draw Card</button>
                <div>Last Card You Drew</div>
                <div>{this.state.cardsDrawn[0].name}</div>
            </div>
        )
    }
}

export default CardDraw