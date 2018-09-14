import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.showColor = this.showColor.bind(this);
        this.state = {
            color: [
                'red',
                'green',
                'blue',
                '#ccc'
            ]
        }
    }

    showColor(color){
        return {
            background : color
        };
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

    render() {
        var colorElement = this.state.color.map((color, index) => {
            return (
                <div className={this.props.color === color? 'active container-color' : 'container-color'} key={index} style={this.showColor(color)} onClick={() => this.setActiveColor(color)}></div>
            )
        });
        return (
            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-body">
                    {colorElement}
                </div>
            </div>
        );
    }
}

export default ColorPicker;
