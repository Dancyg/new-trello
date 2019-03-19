import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const statusIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 15,
  },
});

class ConsecutiveSnackbars extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.keyProp !== this.props.keyProp) {
      const { message, keyProp } = this.props;
      this.handleClick(message, keyProp);
    }
  }

  queue = [];

  handleClick = (message, key) => {
    this.queue.push({ message, key });

    if (this.props.open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.props.customDispatch({ open: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      let oldestMessage = this.queue.shift();
      this.props.customDispatch({
        message: oldestMessage.message,
        key: oldestMessage.key,
        open: true,
      });
    }
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.customDispatch({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const {
      message,
      key,
      vertical,
      horizontal,
      classes,
      status,
      autoHideDuration,
    } = this.props;

    const Icon = statusIcon[status];
    return (
      <div>
        <Snackbar
          key={key}
          anchorOrigin={{ vertical, horizontal }}
          open={this.props.open}
          autoHideDuration={autoHideDuration}
          onClose={this.handleClose}
          onExited={this.handleExited}
        >
          <SnackbarContent
            className={`${classes[status]} ${classes.margin}`}
            aria-describedby="message-id"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Icon className={`${classes.icon} ${classes.iconVariant}`} />
                {message}
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Snackbar>
      </div>
    );
  }
}

ConsecutiveSnackbars.propTypes = {
  classes: PropTypes.object,
  customDispatch: PropTypes.func,
  open: PropTypes.bool,
  keyProp: PropTypes.number,
  message: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  status: PropTypes.string,
  autoHideDuration: PropTypes.number,
};

const mapStateToProps = state => ({
  open: state.notifications.open,
  keyProp: state.notifications.key,
  message: state.notifications.message,
  vertical: state.notifications.vertical,
  horizontal: state.notifications.horizontal,
  status: state.notifications.status,
  autoHideDuration: state.notifications.autoHideDuration,
});

export default connect(mapStateToProps)(
  withStyles(styles)(ConsecutiveSnackbars),
);
