import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  render() {
    return <div>this is header</div>;
  }
}

HeaderContainer.defaultProps = {};

HeaderContainer.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HeaderContainer);
