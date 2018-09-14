import React, { Component } from 'react';

class Reset extends Component {
    constructor(props){
        super(props);
        this.onReset = this.onReset.bind(this);
    };

    onReset(){
        this.props.reset()
    };

    render() {
        return (
            <button className="btn btn-primary float-right" onClick={this.onReset}>Reset</button>
        );
    };
};

export default Reset;
