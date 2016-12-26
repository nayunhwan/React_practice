/**
 * Created by nayunhwan on 2016. 12. 23..
 */

import React, { Component, PropTypes } from 'react';
import store from '../store/store';

export default class SearchBar extends Component{


    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        console.log(props);
        this.change = this.change.bind(this);
        this.buttonClick = this.buttonClick.bind(this);

    }
    buttonClick(e){
        e.preventDefault();
        this.props.add(this.state.value);


        // console.log(store.getState());
    }

    change(event){
        this.setState({value: event.target.value})

    }

    render(){
        return (
            <form>
                <input onChange={this.change} type="text" placeholder={this.props.placeholder} value={this.state.value}/>
                <button onClick={this.buttonClick} >Add it</button>
            </form>
        )
    }
}

SearchBar.propType = {
    placeholder: PropTypes.string.isRequired
}