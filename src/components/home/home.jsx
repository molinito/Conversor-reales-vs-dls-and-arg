import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [real, setReal] = useState("");
  const [dollar, setDollar] = useState("");
  const [arg, setArg] = useState("");

  const convert = () => {
    fetch(
      "https://v6.exchangerate-api.com/v6/8f4e3211f3e3b1a49b8792c5/latest/BRL"
    )
      .then((response) => response.json())
      .then((data) => {
        const dollarValue = real * data.conversion_rates.USD;
        setDollar("$ " + dollarValue.toFixed(2));
        fetch(
          "https://v6.exchangerate-api.com/v6/8f4e3211f3e3b1a49b8792c5/latest/USD"
        )
          .then((response) => response.json())
          .then((data) => {
            const argValue = dollarValue * data.conversion_rates.ARS * 1.31;
            setArg("$ " + argValue.toFixed(2));
          });
      });
  };

  return (
    <div className="container" >
      <h1 style={{ color: "#ff7f00" }}>Real a Dolar y Pesos Arg Converter</h1>
      <input
        type="number"
        placeholder="Enter Reales"
        value={real}
        onChange={(e) => setReal(e.target.value)}
      />
      <br />
      <div className="button">
        <button onClick={convert}>Convertir</button>
        <button onClick={() => setReal("")}>Resetear</button>
      </div>
      <p>Dollar: {dollar}</p>
      <p>Pes.Arg: {arg}</p>

      <div className="dolarhoy">
        <iframe
          title="Dolar hoy"
          src="https://dolarhoy.com/i/cotizaciones/dolar-blue"
        ></iframe>
        <h6>
          Powered by: <a href="https://dolarhoy.com/">DolarHoy</a>
        </h6>
      </div>
    </div>
  );
};

export default Home;
