import { Card, Button, Collapse } from "react-bootstrap";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';

export default function Item({ props }) {

  const [open, setOpen] = useState(false);

  return (
    <Card style={{ width: "18rem" }} className="item animate__animated animate__fadeIn">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Species: {props.species}
          <br></br>
          Gender: {props.gender}
          <br></br>
          Status: {props.status}
        </Card.Text>
        <Button 
          variant="dark"
          onClick={() => setOpen(!open)}
          aria-controls="details"
          aria-expanded={open}
        >
          Details
        </Button>
        <Collapse in={open}>
          <div id="details">
          <br></br>
          Location: {props.location.name}
          <br></br>
          Origin: {props.origin.name}
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

