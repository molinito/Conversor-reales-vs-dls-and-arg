import React from "react";
import { Card, CardText, CardTitle, Button } from "react-bootstrap";
import "./terms.css";

const Terms = () => {
  return (
    <div id="terms-of-service" className="terms">
      <Card className="terms-card">
        <Card.Body>
          <Card.Title>Terminos y Condiciones</Card.Title>
          <Card.Title>Introducción</Card.Title>

          <Card.Text className="small-text">
            Estos Términos y Condiciones (en adelante los "Términos") rigen el
            uso del Conversor de Moneda (el "Servicio"), un proyecto de React y
            JavaScript propiedad y operado por Marcelo Saravia. Al acceder o
            utilizar el Servicio, usted acepta estar sujeto a estos Términos. Si
            no está de acuerdo con estos Términos, no utilice el Servicio.
          </Card.Text>
          <br />
          <CardTitle>Propósito del Servicio</CardTitle>
          <Card.Text className="small-text">
            El Servicio está diseñado para proporcionar una conversión de moneda
            rápida y precisa entre diferentes divisas. El Servicio utiliza datos
            de fuentes fiables y se actualiza regularmente para garantizar la
            precisión.
          </Card.Text>
          <br />

          <CardTitle>Uso del Servicio </CardTitle>
          <Card.Text className="small-text">
            Puede utilizar el Servicio para convertir cantidades de una divisa a
            otra. Para utilizar el Servicio, simplemente introduzca la cantidad
            y las divisas deseadas en los campos correspondientes y haga clic en
            el botón "Convertir". El Servicio mostrará el resultado de la
            conversión.
          </Card.Text>
          <br />
          <CardTitle>Exactitud de la Información</CardTitle>
          <Card.Text className="small-text">
            Aunque nos esforzamos por garantizar la exactitud de la información
            proporcionada por el Servicio, no podemos garantizarla. Los tipos de
            cambio pueden fluctuar rápidamente y el Servicio puede no reflejar
            siempre los tipos de cambio más actualizados.
          </Card.Text>
          <br />
          <CardTitle>Responsabilidad</CardTitle>
          <Card.Text className="small-text">
            Usted es el único responsable de las decisiones que tome basándose
            en la información proporcionada por el Servicio. No seremos
            responsables de ninguna pérdida o daño que pueda resultar del uso
            del Servicio.
          </Card.Text>
          <br />
          <CardTitle>Propiedad Intelectual</CardTitle>
          <Card.Text className="small-text">
            El Servicio y todo el contenido, incluidas las imágenes, los textos
            y los datos, son propiedad de Marcelo Saravia. No puede utilizar,
            copiar, modificar o distribuir ninguna parte del Servicio sin
            nuestro permiso expreso por escrito.
          </Card.Text>
          <br />
          <CardTitle>Fuentes externas</CardTitle>
          <Card.Text className="small-text">
            El Servicio puede contener enlaces a sitios web o servicios de
            terceros que no son propiedad ni están operados por Marcelo Saravia.
            No tenemos control sobre el contenido, la privacidad o las prácticas
            de los sitios web o servicios de terceros y no asumimos ninguna
            responsabilidad por ellos. Hago mencion a la API de conversión de
            moneda dentro del código y asi como el uso de datos de DolarHoy y el
            logo del proyecto que fue creado con DesignEvo.
          </Card.Text>
          <br />
          <CardTitle>Modificaciones</CardTitle>
          <CardText className="small-text">
            Podemos modificar estos Términos en cualquier momento publicando los
            Términos modificados en esta página. Los Términos modificados
            entrarán en vigor inmediatamente después de su publicación.
          </CardText>
          <br />

          <CardTitle>Contacto</CardTitle>
          <CardText className="small-text">
            Si tiene alguna pregunta sobre estos Términos, póngase en contacto
            con nosotros en
            <a href="mailto:molinito48@gmail.com"> molinito48@gmail.com</a>
          </CardText>
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

export default Terms;
