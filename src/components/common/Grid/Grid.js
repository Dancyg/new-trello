import React from 'react';
import Grid from '@material-ui/core/Grid';

export function Row({ children, ...props }) {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
}

export function Col({ children, ...props }) {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
}
