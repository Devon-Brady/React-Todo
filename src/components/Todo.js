import React from 'react';
 

class Todo extends React.Component{
constructor(props){
    super()
}
handleClick = () => {
    this.handleToggle(this.props.task.id);
}

render(){
    return(
        <div onClick={this.handleClick}>
         <p>{this.props.task.task}</p>
        </div>
    )

}
}


export default Todo