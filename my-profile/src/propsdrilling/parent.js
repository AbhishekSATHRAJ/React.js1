import React from "react";
import Child1 from "./child1";

function Parent(){
    return(
        <div>
         <Child1  isLoggedIn={true}/>
        </div>
    )
} 
export default Parent;