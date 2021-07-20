import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './scss/us_component.scss';

import Gomoku from './components/gomoku/Gomoku';
import Ranking from './components/ranking/Ranking';

const App = () => {
  return (
    <div className="App">
      <Container>
        <div className="us-m-30px">
          <Row>
            <Col lg={8}>
              <Gomoku></Gomoku>
            </Col>
            <Col lg={4}>
              <Ranking></Ranking>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
