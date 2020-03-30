import React from 'react'
import Hand from './Hand'

class HandList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisable: new Array(props.hands.length).fill(false)
        }
        this.toggleHand = this.toggleHand.bind(this)
        this.generateHands = this.generateHands.bind(this)
    }

    generateHands() {
        const handList = this.props.hands.map((hand, i) => {
            return (
                <div style = {{display: 'inline-block', width: '250px', height: '400px', marginRight: '10px', marginTop: '50px'}}>
                <button type="button" onClick = {this.toggleHand} name = {i}>{`Hand ${i}`}</button>
                <Hand isVisable = {this.state.isVisable[i]} hand = {hand}/>
                </div>
            )
        });
        return handList
    }

    toggleHand(event) {
        const i = event.target.name
        this.setState((state, props) => {
            state.isVisable[i] = !state.isVisable[i]
            return state
        })
    }



    render() {
        return (
        <div style = {{display: 'flex', flexDirection: 'row'}}>{this.generateHands()}</div>
        )
    }
}

export default HandList
