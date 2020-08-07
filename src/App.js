import React, {createContext, useState }  from 'react';
import Nav from './navbar';
import Routes from './router'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("#563d7c");
  
  return (
    <Router>
      <ThemeContext.Provider value = {[theme]}>
        <Nav/>
      </ThemeContext.Provider>
      <Routes/>
    </Router>
  );
}

export default App;
