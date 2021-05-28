import React from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main style={{ minHeight: 900 }}></main>
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
