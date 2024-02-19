import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [real, setReal] = useState("");
  const [dollar, setDollar] = useState("");
  const [arg, setArg] = useState("");

  const convert = () => {
    const dollarValue = real * 0.19;
    setDollar(dollarValue.toFixed(0));
    const argValue = dollarValue * 835 * 1.31;
    setArg(argValue.toFixed(0));
  };

  return (
    <div className="container">
      <h1>Real to Dollar and Arg Converter</h1>
      <input
        type="number"
        placeholder="Enter Reales"
        value={real}
        onChange={(e) => setReal(e.target.value)}
      />
      <br className="button" />
      <button onClick={convert}>Convert</button>
      <button onClick={() => setReal("")}>Reset</button>
      <p>Dollar: {dollar}</p>
      <p>Pes.Arg: {arg}</p>

      <div className="dolarhoy">
        <iframe title="Dolar hoy" src="https://dolarhoy.com/i/cotizaciones/dolar-blue"></iframe>
      </div>

      <div className="footer">
        <p>
          Developed by:{" "}
          <a href="zingy-puppy-bdd4d4.netlify.app/">Marcelo Saravia</a>
        </p>
      </div>
    </div>
  );
};

export default App;
