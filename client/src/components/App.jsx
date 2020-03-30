import React from 'react';
import HandAdder from './HandAdder'
import HandList from './HandList'
import CardDraw from './CardDraw'
import axios from 'axios';
import ResetGame from './ResetGame'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hands: [],
            firsCardChosen: false
        }
        this.updateHands = this.updateHands.bind(this)
    }

    componentDidMount() {
        setInterval(this.updateHands, 500)
    }

    updateHands() {
        axios.get('/updateHands')
            .then((response) => {
                this.setState({hands: response.data})
            })
            .catch((err) => {

            })
    }

    render() {
        return (
            <div style = {{font: 'Courier New'}}>
                <div>Greed</div>
                <ResetGame />
                <HandAdder firstCardChosen = {this.state.firstCardChosen} />
                <HandList hands = {this.state.hands}/>
                <CardDraw />
            </div>
        )
    }
}

export default App
