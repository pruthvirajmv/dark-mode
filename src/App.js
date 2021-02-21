import "./styles.css";
import React, { useState } from "react";

function DarkMode() {
  const [darkmode, setDarkMode] = useState(false);
  let bgType = "App";
  let display = "Darkmode";

  if (darkmode) {
    bgType = "DarkMode";
    display = "LightMode";
  }

  return (
    <div>
      <button onClick={() => setDarkMode(() => !darkmode)}>{display}</button>
      <h1 className={bgType}> Dark Mode Text </h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <DarkMode />
    </div>
  );
}
