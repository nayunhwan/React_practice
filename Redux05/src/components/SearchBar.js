/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';
import store from '../store';
import {addTodo} from '../actions/action'

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            value: e.target.value
        })

    }

    onClick(e){
        e.preventDefault();
        store.dispatch(addTodo(this.state.value));
    }


    render(){
        return(
            <form>
                <input onChange={this.onChange} value={this.state.value} placeholder="값을 입력하세요"/>
                <button onClick={this.onClick}>Add it</button>
            </form>

        )
    }
}
