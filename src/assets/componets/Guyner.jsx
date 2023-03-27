import React from "react";
import './App.css'

class Guyner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#FFFFFF'
        };
    }
    changeColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ color: newColor });
    };
    render() {
        return (
            <div className="card"
                style={{ backgroundColor: this.state.color }}
            >
                <button onClick={this.changeColor}>button</button>
            </div>
        )
    }
}

export default Guyner