import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { consultarHora } from "./api/Rule_prueba";

function App() {
  const [time, setTime] = useState("");

  const getTime = async () => {
    await consultarHora()
      .then((respuesta) => {
        setTime(respuesta);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/YazimelNiclis"
          target="_blank"
          rel="noopener noreferrer"
        >
          {time && <p>{time.time.toString()}</p>}
        </a>
      </header>
    </div>
  );
}

export default App;
