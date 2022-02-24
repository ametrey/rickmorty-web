import { Card, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';

export default function Item({ character }) {
  return (
    <Card style={{ width: "18rem" }} className="item animate__animated animate__fadeIn">
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          Species: {character.species}
          <br></br>
          Genre: {character.gender}
          <br></br>
          Status: {character.status}
        </Card.Text>
        <Button variant="dark">Details</Button>
      </Card.Body>
    </Card>
  );
}

