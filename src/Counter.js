import React from 'react'
import Number from './Number'

export default class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: props.start,
            show: false,
            textValue: "ThisString"
        }
    }

    incrementCounter = () => {
        //Correct Way -> return the updated state
        this.setState(prevState => {
            console.log(`Increment to ${this.state.counter}`)
            return { counter: prevState.counter + 1 }
        })
    }
    decrementCounter = () => {
        this.setState(prevState => {
            console.log(`Decrement to ${this.state.counter}`)
            return { counter: prevState.counter - 1 }
        })

    }

    render() {
        return (
            <div className="counter">
                <h2>My React Counter</h2>
                <Number counterNumber={this.state.counter}/>
                <button onClick={this.incrementCounter}>
                    Click to increase +1
                </button>
                <button onClick={this.decrementCounter}>
                    Click to decrease -1
                </button>
            </div>
        )
    }
}
