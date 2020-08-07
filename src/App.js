import React from 'react';
import Nav from './navbar';
import Routes from './router'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes/>
    </Router>
  );
}

export default App;
