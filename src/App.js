import React from "react";
import Counter from "./Counter";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter start={23} />
      </header>
    </div>
  );
}

export default App;
