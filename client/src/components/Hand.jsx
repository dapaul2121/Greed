import React from 'react'
import axios from 'axios'

const Hand = (props) => {
    const isVisable = props.isVisable
    const hand = props.hand

    const takeCard = (cardID) => {
        axios.delete(`/takeCard/${cardID}`)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const cards = hand.map((card, i) => {
        console.log(card)
        if (isVisable) {
            return (
            <div onClick = {() => takeCard(card.id)}>{card.name}</div>
            )
        }
        return null
    });
    return <div>{cards}</div>
}

export default Hand