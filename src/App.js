import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      constructor(){
        super();
        this.state = {todos};
        
      }
      handleToggle = (itemId) => {
        this.setState({
          todos: this.state.todos.map(task =>{
            if (itemId === task.id) {
              return({
                ...task, completed:!task.completed
              });
            } else {
              return(task);
            }
          })
        })
      }
      handleAdd = task =>{
        this.setState({
          todos: [...this.state.todos, {task: task, id: Date.now(), completed: false}]
        })
      }
        
  

  render() {
    return (
      <div>

        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm handleAdd={this.handleAdd} handleToggle={this.handleToggle}/>
      </div>

    );
  }
}

export default App;
