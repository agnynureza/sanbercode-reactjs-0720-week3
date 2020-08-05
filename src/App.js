import React from 'react';
import './App.css';
import Tugas13 from './tugas13/tugas13';
import Tugas12 from './tugas12/tugas12';

function App() {
  return (
    <div>
      <Tugas12 start={100}/>
      <Tugas13 />
    </div>
  );
}

export default App;
