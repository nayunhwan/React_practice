/**
 * Created by nayunhwan on 2016. 12. 22..
 */

import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component{
    render(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
                return;
            }
            if (product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRow product={product} key={product.name}/>)
            lastCategory = product.category;
        })

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }

}
