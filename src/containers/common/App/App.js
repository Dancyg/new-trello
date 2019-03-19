import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../../../containers';
import { FlyBox } from '../../../components';
import { pageUrl } from '../../../config';
import { Row, Col } from '../../../components';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <FlyBox
          customStyles={{ minWidth: '1150px', overflow: 'inherit' }}
          marginBottom
        >
          <Header />
        </FlyBox>

        <Row spacing={16}>
          <Col item xs={10}>
            <Switch>
              <Route path={pageUrl.main} component={props => <div>main</div>} />
              <Redirect to={pageUrl.main} />
            </Switch>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
