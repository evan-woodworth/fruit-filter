import React, {Component} from 'react';

export default class Input extends Component{
    render(){
        return(
            <div>
                <label htmlFor="fruit-filter">Filter these fruits: </label>
                <input type="text"
                name="fruit-filter"
                id="fruit-filter"
                value={this.props.value}
                onChange={this.props.onChange}/>
            </div>
        );
    }
}