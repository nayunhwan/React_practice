/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';
import store from '../store';

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.check = this.check.bind(this);
        store.subscribe(this.check);
    }
    check(){
        this.setState({
            todos: store.getState()
        });
    }
    render(){
        console.log(this.state);
        return(
            <ul>
                { this.state.todos.map(todo => <li>{todo.text}</li>)}
            </ul>
        )
    }
}
