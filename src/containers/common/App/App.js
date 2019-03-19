import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header, StageSet } from '../../../containers';
// import { FlyBox } from '../../../components';
import { pageUrl } from '../../../config';
// import { Row, Col } from '../../../components';

import './App.css';

export function App(props) {
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route path={pageUrl.main} component={StageSet} />
        <Redirect to={pageUrl.main} />
      </Switch>
    </Fragment>
  );
}

App.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
