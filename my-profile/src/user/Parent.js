import React from "react";
import User from "./user";
import Admin from "./admin";
function Parent(props){
    return  props.isLoggedIn==="true"?<User/>:<Admin/>
} 
export default Parent;