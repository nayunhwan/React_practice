/**
 * Created by nayunhwan on 2016. 12. 22..
 */

import React, { Component } from 'react';

export default class ProductCategoryRow extends Component{
    render(){
        return(
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}
