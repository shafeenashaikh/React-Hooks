import React, { Component } from "react";
class ClassCount extends Component{

    constructor(props){
        super();
        this.state = {
            count: 0
        }
    }

    incrementcount = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

    render(){

        return(
            <div>
                <button onClick={this.incrementcount}>Count {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCount;