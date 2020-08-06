import React from 'react';
import './App.css';
import Tugas14 from './tugas14/tugas14';
import Tugas12 from './tugas12/tugas12';

function App() {
  return (
    <div>
      <Tugas12 start={100}/>
      <Tugas14 />
    </div>
  );
}

export default App;
