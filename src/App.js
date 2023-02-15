import Navigation from './Components/Navigation';
import './App.css';
import Contents from './Components/Contents'
import Dowm from './Components/Dowm'
import { useState } from 'react';

function App() {
 

  return (
    <div className="App" >
      {/* hello world */}
      <Navigation/>
      <Contents />
      <Dowm/> 

    </div>
  );
}

export default App;
