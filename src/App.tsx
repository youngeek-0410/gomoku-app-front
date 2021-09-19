import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './scss/us_component.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './home/components/homeContainer';
import { Gomoku }from './gomoku/components/gomokuContainer';
import { Ranking } from './ranking/components/rankingContainer';

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
