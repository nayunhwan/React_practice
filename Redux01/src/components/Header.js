/**
 * Created by nayunhwan on 2016. 12. 23..
 */

import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.save = this.save.bind(this);
    }
    save(text){
        this.props.add(text);
    }
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <SearchBar add={this.save} placeholder="할 일을 입력하세요"/>
            </div>

        )
    }
}

Header.propType = {
    title: PropTypes.string.isRequired
}