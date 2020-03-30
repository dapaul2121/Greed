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
        // console.log(card)
        // console.log(card)
        if (isVisable && card.isTaken === false) {
            return (
            <div onClick = {() => takeCard(card.id)} style = {{border: `1px solid ${card.color}`, marginTop: '7px'}}>{card.name}</div>
            )
        }
        return null
    });
    return <div>{cards}</div>
}

export default Hand