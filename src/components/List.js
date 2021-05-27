import React, {Component} from 'react';

export default class List extends Component{
    render(){
        return(
            <ul className="List">
                {this.props.fruits.map((fruit, idx)=>(
                    <li key={idx}>{fruit}</li>
                ))}
            </ul>
        );
    }
}