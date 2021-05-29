import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main style={{ minHeight: 900 }}>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
