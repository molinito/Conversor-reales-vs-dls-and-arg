import React from "react";
import { Button, Card } from "react-bootstrap";
import "./donar.css";

const Donar = () => {
  return (
    <div id="about" className="about">
      <Card className="about-card">
        <Card.Body style={{ padding: "0" }}>
          <Card.Title>Invitame un café:</Card.Title>
          <Card.Text>
            Si bien la aplicación es gratuita, si te ha sido útil y deseas
            colaborar con el desarrollo de la misma, puedes hacerlo ya que tu
            donación será de gran ayuda. Sería bueno que pudieras valorar mi esfuerzo.
            Sino puedes colaborar, no hay problema, solo ayudame a difundirla
            para que más personas la conozcan y mi trabajo sea reconocido.
          </Card.Text>
          <Card.Text>
            <strong>Desarrollador:</strong> Marcelo Saravia
          </Card.Text>
            <Card.Text>
                Link de la aplicación:
                <a href= "https://conversor-reales-vs-dls-and-arg.vercel.app/" > Money Converter</a>
            </Card.Text>
          
          <Card.Text>
            Puedes donar desde 1 U$s o lo que desees a mi cuenta de PayPal al siguiente link:
            <a href="https://paypal.me/molinito12"> Donar</a>
            <br />
            <p>O simplemente entrando en tu cuenta de Paypal y le das enviar a la siguiente dirección: molinos456@hotmail.com</p>
          </Card.Text>
           <Card.Text>
            Tambien puedes hacerlo a mi cuenta de Banco Santander al siguiente alias:
            <p>GRAMO.CARDO.AURORA</p>
            <br />
          </Card.Text>

          <Card.Text>
          ! Gracias por tu colaboración !
          </Card.Text>
          <Card.Text>
            <strong>Correo laboral: </strong>
            <a href="mailto:molinito48@gmail.com"> molinito48@gmail.com</a>
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

export default Donar;
