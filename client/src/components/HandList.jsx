import React from 'react'
import Hand from './Hand'

// const HandAdder = (props) => {
//     const hands = props.hands
//     const handList = hands.map((hand, i) => {
//         return (
//             <div style = {{display: 'inline-block'}}>
//             <button type="button" >{`Hand ${i}`}</button>
//             </div>
//         )
//     });
//     return <div>{handList}</div>
// }

// export default HandAdder

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
                <div style = {{display: 'inline-block'}}>
                <button type="button" onClick = {this.toggleHand} name = {i}>{`Hand ${i}`}</button>
                <Hand isVisable = {this.state.isVisable[i]} hand = {hand}/>
                {/* <Hand isVisable = {true} hand = {hand}/> */}
                </div>
            )
        });
        return handList
    }

    toggleHand(event) {
        console.log('i work')
        const i = event.target.name
        this.setState((state, props) => {
            state.isVisable[i] = !state.isVisable[i]
            return state
        })
    }



    render() {
        return (
        <div>{this.generateHands()}</div>
        )
    }
}

export default HandList
