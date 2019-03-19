import React from 'react';
import Grid from '@material-ui/core/Grid';

export const Row = ({ children, ...props }) => (
  <Grid container {...props}>
    {children}
  </Grid>
);

export const Col = ({ children, ...props }) => (
  <Grid item {...props}>
    {children}
  </Grid>
);
