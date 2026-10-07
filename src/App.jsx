import { useState } from "react";
import "./index.css";
import { HeaderEntrada } from "./components/HeaderEntrada";
import { FormularioEntrada } from "./components/FormularioEntrada";
import { VistaPreviaEntrada } from "./components/VistaPreviaEntrada";

function App() {
  const [asistente, setAsistente] = useState("");
  const [category, setCategory] = useState("general");

  function capturaAsistente(evento){
    setAsistente(evento.target.value)
  }

  function definicionCategory(evento){
    setCategory(evento.target.value)
  }

  return (
    <main className="ticket-app">
      <HeaderEntrada />

      <section className="ticket-layout">
        <FormularioEntrada value={asistente} onLoquesea={capturaAsistente} onSelect={definicionCategory} />

        <VistaPreviaEntrada valueAsistant={asistente} category={category} />
      </section>
    </main>
    
  );
}

export default App;
