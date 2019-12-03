import React from 'react';
import './App.css';
import SpinningWheelContainer from './components/SpinningWheelContainer.js'

function App() {
  const items = ['Els','Paul','Hans','Niki','Kees','Frank','Iris','        Arianne','Tom','Cas','Helen']
  return (
    <div className="App">
      <header className="App-header--container">
        <h1 className="App-header">Welkom bij het Sint Systeem</h1>
        <p className="App-header__sub">Hét digitale distributiecentrum voor Sinterklaasavond</p>
      </header>

        <SpinningWheelContainer spinningTime={5000} items={items}/>

    </div>
  );
}

export default App;
