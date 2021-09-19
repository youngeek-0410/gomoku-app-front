import React from 'react';
import axios, { AxiosInstance } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './scss/us_component.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './home/components/homeContainer';
import { Gomoku } from "./gomoku/components/gomokuContainer";
import { Ranking } from "./ranking/components/rankingContainer";
import { AxiosClientProvider } from "./common/context/axiosClientProvider";

const App = () => {
  if (!process.env.REACT_APP_GOMOKU_API_URL) {
    throw Error("not found process.env.REACT_APP_GOMOKU_API_URL.");
  }
  fetch("http://localhost:3000/game_logs").then(r => console.log(r.json()))
  const client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_GOMOKU_API_URL,
    timeout: 1000,
    headers: {}
  });
  return (
    <AxiosClientProvider axiosClient={client}>
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
    </AxiosClientProvider>
  );
};

export default App;
