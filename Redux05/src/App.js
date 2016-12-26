import React, { Component } from 'react';

import Header from './components/Header'
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
          <Header headerText="안녕하세요"></Header>
          <TodoList />
      </div>
    );
  }
}

export default App;
