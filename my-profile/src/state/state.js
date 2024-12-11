import React,{Component} from "react";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
            }
            }
            increment = () => {
                this.setState((prevState) => ({ count:prevState.count + 5 }));
              };
            
              decrement = () => {
                this.setState((prevState) => ({ count: prevState.count - 1 }));
              };
    render(){
        return (
            <>
            <button onClick={this.decrement}>-1</button>
            {this.state.count}
            <button onClick={this.increment}>+1</button>

            </>
        )
    }
    
}
export default Counter;