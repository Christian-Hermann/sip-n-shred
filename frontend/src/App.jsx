import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Sip n' Shred</h1>
      <p>Compare Utah skit resorts, conditions, and aprés-ski spots.</p>
    </>
  );
}

export default App;
