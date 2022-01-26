import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box>
            {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
