import React from 'react';
import PropTypes from 'prop-types';
import DialogM from '@material-ui/core/Dialog';
import Fade from '@material-ui/core/Fade';

const Dialog = ({
  children,
  handleClose,
  isOpen,
  fullScreen,
  ...props
}) => {
  return (
    <div>
      <DialogM
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
        {...props}
      >
        {children}
      </DialogM>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Dialog;
