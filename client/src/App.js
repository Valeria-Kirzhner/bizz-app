import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/signup";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main style={{ minHeight: 900 }}>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
