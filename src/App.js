import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Size from './components/Size';
import Result from './components/Result';

class App extends Component {
    constructor(props){
        super(props);
        this.setColor = this.setColor.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            color : 'red',
            fontSize: 16
        };
    };

    setColor(params){
        this.setState({
            color : params
        });
    };

    changeSize(value){
        if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
            this.setState({
                fontSize: this.state.fontSize + value
            });
        };
    };

    reset(){
        this.setState({
            color : 'red',
            fontSize: 16
        });
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <ColorPicker color={this.state.color} onReceiveColor={this.setColor}/>
                    </div>
                    <div className="col-md-4">
                        <Size fontSize={this.state.fontSize} onChangeSize={this.changeSize}/>
                    </div>
                </div>
                <Result color={this.state.color} fontSize={this.state.fontSize} reset={this.reset}/>
            </div>
        );
    };
}

export default App;
