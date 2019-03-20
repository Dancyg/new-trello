import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  input: {
    minWidth: '100%',
    margin: '10px 0 15px',
  },
});

function Input({ classes, ...props }) {
  return <TextField className={classes.input} {...props} />;
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Input);
