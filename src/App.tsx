import React from 'react';
import axios, { AxiosInstance } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from "@mui/material/Container";

import { GlobalHeader } from "./common/components";
import { Home } from './home/components/homeContainer';
import { Gomoku } from "./gomoku/components/gomokuContainer";
import { AxiosClientProvider } from "./common/context/axiosClientProvider";

const App: React.FC = () => {
  if (!process.env.REACT_APP_GOMOKU_API_URL) {
    throw Error("not found process.env.REACT_APP_GOMOKU_API_URL.");
  }
  const client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_GOMOKU_API_URL,
    timeout: 1000,
    headers: {},
  });
  return (
    <AxiosClientProvider axiosClient={client}>
      <GlobalHeader />
      <Container maxWidth="xl" sx={{marginTop: "80px"}}>
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/game" exact component={Gomoku}></Route>
        </Router>
      </Container>
    </AxiosClientProvider>
  );
};

export default App;
