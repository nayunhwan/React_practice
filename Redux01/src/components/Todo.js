/**
 * Created by nayunhwan on 2016. 12. 23..
 */

import React, { Component, PropTypes } from 'react';

export default class Todo extends Component{
    render(){
        return(
            <li>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired
}