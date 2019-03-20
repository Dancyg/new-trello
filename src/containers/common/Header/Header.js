import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import grey from '@material-ui/core/colors/grey';

import { TextWrapper, Dialog, Input } from '../../../components';
import { notify } from '../../../utils';
import { A } from '../../../index';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: grey[900],
  },
  grow: {
    flexGrow: 1,
  },
});

function Header(props) {
  const [state, setStateRow] = useState({
    isAddStageOpen: false,
    stageName: '',
    stageIndex: '',
  });

  function setState(newState) {
    setStateRow(state => ({ ...state, ...newState }));
  }
  const { classes } = props;

  function addStage() {
    A.dispatchCommon({
      [`stages.${state.stageIndex}`]: { name: state.stageName },
    });
    notify({
      status: 'info',
      message: `Stage '${state.stageName}' was added.`,
    });
    toggleAddStageDialog();
  }

  function toggleAddStageDialog() {
    setState({ isAddStageOpen: !state.isAddStageOpen });
    if (!Boolean(state.isAddStageOpen)) {
      clearInputs();
    }
  }

  function clearInputs() {
    setState({ stageName: '', stageIndex: null });
  }

  return (
    <Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <TextWrapper variant="h6" color="inherit" className={classes.grow}>
            New Trello
          </TextWrapper>

          <Button
            color="inherit"
            variant="outlined"
            onClick={toggleAddStageDialog}
          >
            add stage
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        onConfirmClick={addStage}
        onCancelClick={toggleAddStageDialog}
        show={state.isAddStageOpen}
        onClose={toggleAddStageDialog}
        confirmText={'OK'}
        title={'Add Stage'}
      >
        <Input
          label="Stage Name"
          value={state.stageName}
          onChange={e => {
            setState({ stageName: e.target.value });
          }}
        />
        <Input
          label="Stage Index"
          value={state.stageIndex}
          onChange={e => {
            setState({ stageIndex: e.target.value });
          }}
        />
      </Dialog>
    </Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
