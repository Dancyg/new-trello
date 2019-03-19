import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ModalM from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import './Dialog.css';

const getModalStyle = () => ({
  top: `${50}%`,
  left: `${50}%`,
  transform: `translate(-${50}%, -${50}%)`,
});

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '600px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius: '4px',
  },
  buttonOk: {
    marginLeft: '20px',
  },
});

function Dialog(props) {
  return (
    <ModalM
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.show}
      onClose={props.onClose}
      {...props.modalProps}
    >
      <div style={getModalStyle()} className={props.classes.paper}>
        <div className="title-container">
          <Typography variant="title">{props.title}</Typography>
        </div>

        {props.children}

        <div className="controls">
          {props.onCancelClick && (
            <Button
              onClick={props.onCancelClick}
              className="control-cancel"
              variant="outlined"
            >
              {props.cancelText}
            </Button>
          )}
          {props.onConfirmClick && (
            <Button
              onClick={props.onConfirmClick}
              className={props.classes.buttonOk}
              variant="outlined"
            >
              {props.confirmText}
            </Button>
          )}
        </div>
      </div>
    </ModalM>
  );
}

Dialog.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  innerComponent: PropTypes.any,
  confirmText: PropTypes.string,
  title: PropTypes.string,
  modalProps: PropTypes.object,
  onCancelClick: PropTypes.func,
  onConfirmClick: PropTypes.func,
  cancelText: PropTypes.string,
  children: PropTypes.any,
};

Dialog.defaultProps = {
  confirmText: 'ok',
  cancelText: 'cancel',
  modalProps: {},
  title: 'Title',
};

export default withStyles(styles)(Dialog);
