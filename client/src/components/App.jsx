import React from 'react';
import HandAdder from './HandAdder'
import HandList from './HandList'
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hands: [],//[[{name: 'test1'},{name: 'test1.5'}],[{name: 'test2'}],[{name: 'test3'}]],
            firsCardChosen: false
        }
        // this.addHand = this.addHand.bind(this)
        this.updateHands = this.updateHands.bind(this)
    }

    componentDidMount() {
        setInterval(this.updateHands, 2000)
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
            <div>
                <div>Greed</div>
                <HandAdder firstCardChosen = {this.state.firstCardChosen} />
                <HandList hands = {this.state.hands}/>
            </div>
        )
    }
}

export default App
