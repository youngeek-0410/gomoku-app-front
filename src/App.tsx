import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/us_component.scss';

import Gomoku from './components/gomoku/Gomoku';
import Ranking from './components/ranking/Ranking';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="">
        <Gomoku></Gomoku>
        <Ranking></Ranking>
      </div>
    </div>
  );
}

export default App;
