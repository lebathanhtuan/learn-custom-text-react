import React, { Component } from 'react';
import Reset from './Reset';

class Result extends Component {
    constructor(props){
        super(props);
        this.reset = this.reset.bind(this)
    };
    setStyle(){
        return({
            color: this.props.color,
            borderColor: this.props.color,
            borderStyle: 'solid',
            borderWidth: '1px',
            fontSize: this.props.fontSize
        });
    }

    reset(){
        this.props.reset()
    };

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    Color: {this.props.color} Size: {this.props.fontSize} px
                </div>
                <div className="card-body">
                    <h5 style={this.setStyle()}>Test</h5>
                    <Reset reset={this.reset}/>
                </div>
            </div>
        );
    }
}

export default Result;
