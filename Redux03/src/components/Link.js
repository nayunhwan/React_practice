/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';

export default class Link extends Component{

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.props.onClick();
    }

    render(){
        let children = this.props.children;

        return(
            <a href="#"
               onClick={this.onClick}>
                {children}
            </a>
        )
    }
}
