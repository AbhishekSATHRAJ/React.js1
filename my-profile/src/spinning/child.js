import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Child(props) {
  return (
    <div className="mb-4">
      <Card className="shadow-sm rounded">
        <Card.Img
          src={props.img}
          alt={props.title}
          className="img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <Card.Body>
          <Card.Title className="mt-3">{props.title}</Card.Title>

          <Card.Text style={{ fontSize: "14px", color: "#555" }}>
            {props.desc}
          </Card.Text>

          <Button variant="primary">{props.cat}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Child;
