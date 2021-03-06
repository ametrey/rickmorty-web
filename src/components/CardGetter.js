import { useEffect, useState } from "react";
import { TraerPersonaje } from "../services/api";
import { Card, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CardGetter.css';

const CardGetter = () => {
  const [personaje, setPersonaje] = useState();

  useEffect(() => {
    CallAPI();
  }, [])


  async function CallAPI() {
    const res = await TraerPersonaje();
    setPersonaje(res);
  }

  if (personaje == null) {
    return <div>No hay nada</div>;
  } else {
    return (
      <div className="CardGet">

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={personaje.image} />
          <Card.Body>
            <Card.Title>{personaje.name}</Card.Title>
            <Card.Text>
              Species: {personaje.species}
              <br></br>
              Genre: {personaje.gender}
              <br></br>
              Status: {personaje.status}
            </Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export { CardGetter }