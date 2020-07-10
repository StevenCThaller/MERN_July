import React, { Component } from 'react'

export default class FuzzyTrunk extends Component {
    constructor(props){
        super(props);
        this.thingIDontWantChanged = "banana";

        this.state = {
            name: "",
            hasTail: false,
            tuskLength: 0,
            fuzzColor: ""
        }
    }

    render() {
        return (
            <div>
                <p>Your Trunked Creature's Name: { this.state.name }</p>
                <p>Has Tail: { this.state.hasTail ? "Yes" : "No" }</p>
                <p>Tusk Length: { this.state.tuskLength } feet</p>
                <p>Fuzz Color: { this.state.fuzzColor }</p>
                
                <h1>{this.thingIDontWantChanged}</h1>
                
                
                <label htmlFor="name">Name: </label>
                <input type="text" onChange={ e => this.setState({ name: e.target.value }) } />
                <br/>
                <button onClick={ () => this.setState({ hasTail: !this.state.hasTail }) } >Click to Toggle Tail</button>
                <br/>
                <label htmlFor="tuskLength">Tusk Length: </label>
                <input type="number" onChange={ e => this.setState({ tuskLength: e.target.value }) } /> <span>feet</span>
                <br/>
                <label htmlFor="fuzzColor">Fuzz Color: </label>
                <input type="text" onChange={ e => this.setState({ fuzzColor: e.target.value }) }/>
            </div>
        )
    }
}
