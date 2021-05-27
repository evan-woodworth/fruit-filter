import React, {Component} from 'react';
import Input from './Input';
import List from './List';

export default class FruitContainer extends Component {
    state = {
        fruitsToDisplay: this.props.fruits,
        fruitValue: ""
    }
    handleFilterChange = (e) => {
        e.preventDefault();
        let value = e.target.value;

        const filteredFruitList = this.props.fruits.filter(fruit=>{
            // check to see if filtered value is within fruit list
            return fruit.includes(value.toLowerCase());
        })

        this.setState({
            fruitsToDisplay: filteredFruitList,
            fruitValue: value
        })
    }
    render(){
        return (
            <div className="FruitContainer">
                <Input value={this.state.fruitValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay.sort()}/>
            </div>
        );
    }
}