import React from 'react';
import axios, { AxiosInstance } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "@mui/material/Container";

import { GlobalHeader } from "./common/components";
import { AxiosClientProvider } from "./common/context/axiosClientProvider";
import AppRouter from './AppRouter';

const App: React.FC = () => {
  if (!process.env.REACT_APP_GOMOKU_API_URL) {
    throw Error("not found process.env.REACT_APP_GOMOKU_API_URL.");
  }
  const client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_GOMOKU_API_URL,
    timeout: 3000,
    headers: {},
  });
  return (
    <AxiosClientProvider axiosClient={client}>
      <GlobalHeader />
      <Container maxWidth="xl" sx={{marginTop: "60px"}}>
        <AppRouter />
      </Container>
    </AxiosClientProvider>
  );
};

export default App;
