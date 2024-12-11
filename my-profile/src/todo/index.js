import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
      editing: -1,
      
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { todos, newTodo } = this.state;
    this.setState({ todos: [...todos, newTodo], newTodo: "" });
  };
  handleChange = (e) => {
   
    this.setState(() => {
      return { newTodo: e.target.value };
    });
  };
  handleEdit = (index) => {
    this.setState({newTodo: this.state.todos[index], editing: index});}
  handleDelete=(index)=>{
    this.setState({todos: this.state.todos.filter((todo, i) => i !== index)});
    
  }


  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todos" value={this.state.newTodo} onChange={this.handleChange} />
        <button type="submit">{this.state.editing===-1 ? "Add" : "Update"}</button>
        <h1>{this.state.todos}</h1>
      </form>
      <ul>
        { this.state.todos.map((todo,index)=>{
            return <li key={index}>
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
                
            </li>
        })}
        
      </ul>
      
      </div>
    );
  }
}
export default Todo;
