/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {

    handleClick(e){
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render(){
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>

            </div>
        )
    }
}
