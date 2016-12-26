/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.headerText}</h1>
                <SearchBar/>
            </div>
        )
    }
}
