import React, { Component } from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
          <AddTodo onAddClick={(text) =>
            console.log('Add Todo',text)
          }/>
          <TodoList onTodoClick={(todo) =>
            console.log('Todo clicked', todo)
          } todos={[
              {
                  text: 'Use Redux',
                  completed: true
              },
              {
                  text: 'Learn to connect it to React',
                  completed: false
              }



          ]}/>
          <Footer
              filter='SHOW_ALL'
              onFilterChange={filter =>
                  console.log('filter change', filter)
              } />
      </div>
    );
  }
}

export default App;
