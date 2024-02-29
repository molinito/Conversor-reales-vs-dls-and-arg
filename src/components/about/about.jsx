import React from "react";
import { Button, Card } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about">
      <Card className="about-card">
        <Card.Body style={{ padding: "0" }}>
          <Card.Title>Acerca de:</Card.Title>
          <Card.Text>
            Money Converter nace de una necesidad que tuve cuando hice un viaje
            por Brasil. No encontré, (al menos que alguien si lo haya hecho),
            una app que pudiera convertir el valor del Real Brasileño a Dólar
            pero el blue argentino y de ésos Dólares, obtener los pesos
            argentinos que corresponden. Esto era para saber el valor verdadero
            de un producto o servicio que adquiriera en reales, basado en el
            dólar Blue, y no en el oficial que de eso sí hay material de
            consulta. Espero les sea útil.
          </Card.Text>
          <Card.Text>
            <strong>Desarrollador:</strong> Marcelo Saravia
          </Card.Text>
          <Card.Text>
            <strong>Version:</strong> 1.0.0
          </Card.Text>
          <Card.Text>
            <strong>Fecha:</strong> Febrero 2024
          </Card.Text>
          <Card.Text>
            <strong>Licencia:</strong> MIT
          </Card.Text>
          <Card.Text>
            <strong>Correo:</strong>
            <a href="mailto:molinito48@gmail.com"> molinito48@gmail.com</a>
          </Card.Text>
          <Card.Text>
            <strong>GitHub:</strong>
            <a href="https://github.com/molinito"> molinito</a>
          </Card.Text>
          <Card.Text>
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/marcelo-saravia-27128092">
              {" "}
              Marcelo Saravia
            </a>
          </Card.Text>

          <Button
            variant="primary"
            href="/"
            style={{ backgroundColor: "#ff7f00" }}
          >
            Volver
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
