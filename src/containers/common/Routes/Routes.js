import React, { Component, Fragment } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { App } from '../../../containers';
import { Notify } from '../../../components';
import { pageUrl, history } from '../../../config';
import { A } from '../../../index';


class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            <Route path={pageUrl.app} component={App}  />
            <Redirect to={pageUrl.app} />
          </Switch>
        </Router>
        <Notify customDispatch={A.dispatchNotifications} />
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.common.locale,
});

export default connect(mapStateToProps)(Routes);
