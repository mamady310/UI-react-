import React, { Component } from 'react';
class Resturaunt extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
            <p>{this.props.resturaunts}</p>
            </div>
        )
    }
}


export default Resturaunt