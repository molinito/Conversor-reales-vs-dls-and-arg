// crea un componente que se encargue de mostrar un link para donar dinero a la causa. Agregar un texto que diga que la aplicación es gratuita pero ....(lo dejo a trucritertio al resto)

import React from "react";
import { Card } from "react-bootstrap";

const Donar = () => {
    return (
        <div id="donar">
        <Card className="donar-card">
            <Card.Body>
            <Card.Title>Donar</Card.Title>
            <Card.Text>
                Money Converter es una aplicación gratuita, pero si quieres colaborar con la causa, puedes hacerlo a través de este link.
            </Card.Text>
            
            </Card.Body>
        </Card>
        </div>
    );
}

export default Donar;
