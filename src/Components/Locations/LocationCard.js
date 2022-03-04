import { Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Location.css'

export default function LocationCard({ props }) {
  return (
    
      <Card style={{ width: '18rem' }} className="item animate__animated animate__fadeIn">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>

            Type: {props.type}
            <br></br>
            Dimension: {props.dimension}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    
  );
}

