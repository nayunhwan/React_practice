import React, { Component } from 'react';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo';
import VisibilTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div>
          <AddTodo />
          <VisibilTodoList/>
          <Footer />
      </div>
    );
  }
}

export default App;
