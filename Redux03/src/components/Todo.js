/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';

export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let completed = this.props.completed;
        let text = this.props.text;
        let onClick = this.props.onClick;

        return (
            <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {text}
            </li>
        )
    }
}