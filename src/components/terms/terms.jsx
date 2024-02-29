// create a simple component called Terms & Conditions

import React from "react";
import { Card } from "react-bootstrap";
import "./terms.css";

const Terms = () => {
    return (
        <div id="terms-of-service">
        <Card className="terms-card">
            <Card.Body>
            <Card.Title>Terms of Service</Card.Title>
            <Card.Text>
                Money Converter is a simple web application that allows you to convert money from one currency to another.
            </Card.Text>
            
            </Card.Body>
        </Card>
        </div>
    );
}

export default Terms;

