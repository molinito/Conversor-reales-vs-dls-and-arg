import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [real, setReal] = useState("");
  const [dollar, setDollar] = useState("");
  const [arg, setArg] = useState("");

  const convert = async () => {
    try {
      const responseUSD = await fetch(
        "https://v6.exchangerate-api.com/v6/8f4e3211f3e3b1a49b8792c5/latest/BRL"
      );
      const dataUSD = await responseUSD.json();
      const dollarValue = real * dataUSD.conversion_rates.USD;
      setDollar("$ " + dollarValue.toFixed(2));

      const responseBlue = await fetch("https://dolarapi.com/v1/dolares/blue");

      const dataBlue = await responseBlue.json();
      const argValue = dollarValue * dataBlue.venta; // Usa la cotización "venta" del dólar blue
      setArg("$ " + argValue.toFixed(2));
    } catch (error) {
      console.error("Error al obtener las cotizaciones:", error);
      // Maneja el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="container">
      <h1 style={{ color: "#ff7f00" }}>Real a Dolar y a Pesos Arg Converter</h1>
      <input
        type="number"
        placeholder="Ingrese Reales"
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
        <br />
        <h6>
          Powered by: <a href="https://dolarhoy.com/">DolarHoy</a>
        </h6>
      </div>
    </div>
  );
};

export default Home;
