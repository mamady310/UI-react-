import React, { Component } from 'react';
class Quote extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
            <p>{this.props.quotes}</p>
            </div>
        )
    }
}


export default Quote