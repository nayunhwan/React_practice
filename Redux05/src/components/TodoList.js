/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../store';

class TodoList extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         todos: []
    //     }
    //     this.check = this.check.bind(this);
    //     store.subscribe(this.check);
    // }
    // check(){
    //     this.setState({
    //         todos: store.getState()
    //     });
    // }
    render(){
        console.log(this.props);
        return(
            <ul>
                { this.props.todos.map(todo => <li>{todo.text}</li>)}
            </ul>
        )
    }
}

const select = (state) => {
    return{
        todos: state
    }
}

TodoList = connect(select)(TodoList)

export default TodoList;