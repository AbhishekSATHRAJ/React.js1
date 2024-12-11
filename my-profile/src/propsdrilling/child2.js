import React from "react";
function Child2(props){
 return props.isLoggedIn?<h1>login successfull</h1>:<h1>Unlogin successfull</h1>
}
export default Child2;