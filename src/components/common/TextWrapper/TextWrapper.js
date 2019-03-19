import React from 'react';
import Typography from '@material-ui/core/Typography';

const TextWrapper = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default TextWrapper;
