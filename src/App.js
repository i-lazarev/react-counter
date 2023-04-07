import React from "react";
import Counter from "./Counter";
import logo from "./logo.svg";
import "./App.css";
//React-counter by persona

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-couter</h1>
        <Counter start={23} />
      </header>
    </div>
  );
}

export default App;
