import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { StartModal } from "./StartModal";
import { GameLog } from "../../gameLog/components/GameLogContainer";

export const Home: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <StartModal />
          </Grid>
          <Grid item xs={4}>
            <GameLog />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

