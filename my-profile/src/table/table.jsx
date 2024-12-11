import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function Tables(props){
return(
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>IMAGE</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.data.id}</td>
          <td>{props.data.title}</td>
          <td><img src={props.data.image} alt={props.data.title} style={{width:"100px",height:"200px",justifyContent:"center"}}/></td>
          <td>{props.data.price}</td>
          <td>{props.data.category}</td>
        </tr>
      </tbody>
    </Table>
    </div>
)
}
export default Tables;