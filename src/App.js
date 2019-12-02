import React from 'react';
import './App.css';
import SpinningWheelContainer from './components/SpinningWheelContainer.js'

function App() {
  const items = ['Els','Paul','Hans','Niki','Kees','Frank','Iris','Arianne','Tom','Cas','Helen']
  return (
    <div className="App">
      <header className="App-header">
        <SpinningWheelContainer spinningTime={4000} items={items}/>
      </header>
    </div>
  );
}

export default App;
