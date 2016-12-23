/**
 * Created by nayunhwan on 2016. 12. 22..
 */

import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map((todo, index))}
                <Todo
                    {...Todo}
                    key={index}
                    onClick={() => this.props.onTodoClick(index)}
                />
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}).isRequired).isRequired
};