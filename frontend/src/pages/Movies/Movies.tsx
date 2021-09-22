import React from "react";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1)
}))
const Movies = () => {
    return(
        <div>
          <Div>{"Hope you liked our collection of moveis 😊."}</Div>;
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
        </div>
    );
}

export default Movies