/**
 * Created by nayunhwan on 2016. 12. 22..
 */

import React, { Component, PropTypes } from 'react';
import { connect }from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';


class App extends Component{
    render(){
        const {dispatch, visibleTodos, visibilitFilter } = this.props;
        return(
            <div>
                <AddTodo onAddClick={(text) => dispatch(addTodo(text))}/>
                <TodoList onTodoClick={(index) => dispatch(completeTodo(index))} todos={visibleTodos}/>
                <Footer onFilterChange={(nextFilter) => dispatch(setVisibilityFilter(nextFilter))} filter={visibilitFilter}/>
            </div>
        )
    }
}

App.prototype = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired

}

function selectTodos(todos, filter){
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return;
    }
}

function select(state){
    return{
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(App);