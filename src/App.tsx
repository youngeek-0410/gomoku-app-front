import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './scss/us_component.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Gomoku from './components/Gomoku';
import Ranking from './components/Ranking';

const App = () => {
  return (
    <div className="App">
      <Container>
        <div className="us-m-30px">
          <Row>
            <Col lg={7}>
              <Router>
                <Route path="/" exact component={Home}></Route>
                <Route path="/game" exact component={Gomoku}></Route>
              </Router>
            </Col>
            <Col lg={5}>
              <Ranking></Ranking>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
