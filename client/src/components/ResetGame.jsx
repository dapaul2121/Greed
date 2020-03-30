import React from 'react'
import axios from 'axios'

const HandAdder = function(props) {
    const firstCardChosen = props.firstCardChosen

    const resetGame = () => {
        axios.get('/resetGame')
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(response)
            })

    }

    return (
        <button type="button" style = {{marginRight: '10px'}} onClick = {() => resetGame()}>Reset Game</button>
    )

}

export default HandAdder