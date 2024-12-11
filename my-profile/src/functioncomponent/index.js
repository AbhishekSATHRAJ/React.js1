import React,{useState} from "react";
function FuncLifeCycle(){
     const [text, settext]=useState("hii");
     const [count,setCount]=useState(0)
     const handleButton=()=>{
        settext("bye")
     }
    const Increment=()=>{
      setCount((prevcount)=>{ return prevcount+1})
     }
    const Decrement=()=>{
        setCount((prevcount)=>{ return prevcount-1})
    }
    return(
        <div>
            <h1>{text}{count}</h1>
           <button onClick={handleButton}>Click me</button>
           <button onClick={Increment}>increment</button>
           <button onClick={Decrement}>decrement</button>


        </div>
    )

}
export default FuncLifeCycle;