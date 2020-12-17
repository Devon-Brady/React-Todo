import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          textInput:"" 
        }
      }

    handleChanges = e => {
        this.setState({
          textInput:e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.textInput);
        this.setState({
            textInput:''
        })
    }
    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange = {this.handleChanges}value={this.state.textInput} type='text' name='task'/>
                <button>Add Task</button>    
            </form>
        )
    }
}

 export default TodoForm;