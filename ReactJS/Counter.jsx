import { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    handleIncrement =() =>{
        this.setState({count : this.state.count + 1})
    }
    handleDecrement = () =>{
        this.setState({count : this.state.count -1})
    }
    render(){
        return(
            <div>
               <button>{this.state.count}</button>
               <button onClick={this.handleIncrement}>Increment</button>
               <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
