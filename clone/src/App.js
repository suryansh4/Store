import React from "react";
import "./App.css";
import Prenavbar from "./component/prenavbar";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
    </Router>
  );
}

export default App;
