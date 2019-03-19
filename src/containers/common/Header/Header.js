import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import grey from '@material-ui/core/colors/grey';

import { TextWrapper, Dialog } from '../../../components';
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
  });

  function setState(newState) {
    setStateRow(state => ({ ...state, ...newState }));
  }
  const { classes } = props;

  // function addStage() {
  //   A.dispatchCommon({
  //     [`stages${}`]: {}
  //   });
  // }

  function toggleAddStageDialog() {
    setState({ isAddStageOpen: !state.isAddStageOpen });
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
        onConfirmClick={() => {}}
        onCancelClick={toggleAddStageDialog}
        show={state.isAddStageOpen}
        onClose={toggleAddStageDialog}
        confirmText={'OK'}
        title={'Add Stage'}
      >
        <Input />
      </Dialog>
    </Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
