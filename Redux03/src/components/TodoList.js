/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
    render(){
        let todos = this.props.todos;
        let onTodoClick = this.props.onTodoClick;

        return(
            <ul>
                {todos.map(todo =>
                    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
                )}
            </ul>
        )
    }
}