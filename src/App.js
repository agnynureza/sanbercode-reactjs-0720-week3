import React from 'react';
import './App.css';
import Tugas11 from './tugas11/tugas11';
import Tugas12 from './tugas12/tugas12';

function App() {
  return (
    <div>
      <Tugas11/>
      <Tugas12 start = {5} />
    </div>
  );
}

export default App;
