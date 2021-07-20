import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Gomoku from './components/gomoku/Gomoku';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Gomoku></Gomoku>
    </div>
  );
}

export default App;
