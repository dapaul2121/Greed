import React from 'react'
import axios from 'axios'

const HandAdder = function(props) {
    const firstCardChosen = props.firstCardChosen

    const addHand = () => {
        axios.get('/addHand')
            .then((response) => {
                console.log(response)

            })
            .catch((err) => {

            })

    }

    return (
        <button type="button" onClick = {() => addHand()}>Add Player</button>
    )

}

export default HandAdder