import React from 'react';
import PropTypes from 'prop-types';

import './FlyBox.css';

function FlyBox({
  children,
  margin,
  padding,
  minHeight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  customStyles,
  ...props
}) {
  let styles = Object.assign(
    {},
    paddingTop && { paddingTop: '15px' },
    paddingBottom && { paddingBottom: '15px' },
    paddingLeft && { paddingLeft: '15px' },
    paddingRight && { paddingRight: '15px' },
    padding && { padding: '15px' },
    marginTop && { marginTop: '15px' },
    marginBottom && { marginBottom: '15px' },
    marginLeft && { marginLeft: '15px' },
    marginRight && { marginRight: '15px' },
    margin && { margin: '15px' },
    minHeight && { minHeight: 'calc(100vh - 100px)' },
    customStyles && customStyles,
  );
  return (
    <div className="fly-box" style={styles}>
      {React.Children.map(children, child => React.cloneElement(child, props))}
    </div>
  );
}

FlyBox.propTypes = {
  children: PropTypes.any,
  padding: PropTypes.bool,
  margin: PropTypes.bool,
  minHeight: PropTypes.bool,
  paddingTop: PropTypes.bool,
  paddingBottom: PropTypes.bool,
  paddingLeft: PropTypes.bool,
  paddingRight: PropTypes.bool,
  marginTop: PropTypes.bool,
  marginBottom: PropTypes.bool,
  marginLeft: PropTypes.bool,
  marginRight: PropTypes.bool,
  customStyles: PropTypes.object,
};

FlyBox.defaultProps = {
  customStyles: null,
};

export default FlyBox;
