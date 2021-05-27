import React, {Component} from 'react';

export default class Input extends Component{
    render(){
        return(
            <div>
                <label htmlFor="fruit-filter">Filter these fruits: </label>
                <input type="text" name="fruit-filter" id="fruit-filter"/>
            </div>
        );
    }
}