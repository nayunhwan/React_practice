import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import store from './store/store';
import * as Action from './actions/action';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';


var actions = bindActionCreators(Action, store.dispatch);

console.log("Console Log");
console.log(actions);
class App extends Component {
    constructor(props, context){
        super(props, context);
        store.subscribe(this._onChange.bind(this));
        console.log(store.getState())
    }
    _onChange() {
        this.forceUpdate();
    }

    render() {
        console.log('app');
        return (
            <div>
                <Header add={actions.addTodo} title="할 일 목록"/>
                <TodoList todos={store.getState()} actions={actions}/>
            </div>

        );
    }
}

export default App;
