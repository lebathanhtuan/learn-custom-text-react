import React, { Component } from 'react';

class Size extends Component {
    changeSize(value){
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Size: {this.props.fontSize} px
                </div>
                <div className="card-body text-center">
                    <button className="btn btn-primary mr-2" onClick={() => this.changeSize(2)}>Tăng</button>
                    <button className="btn btn-primary" onClick={() => this.changeSize(-2)}>Giảm</button>
                </div>
            </div>
        );
    }
}

export default Size;
