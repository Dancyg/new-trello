import React from 'react';
import PropTypes from 'prop-types';

import './Stage.css';

function Stage(props) {
  return <div className="stage">{props.stage.name}</div>;
}

Stage.propTypes = {
  stage: PropTypes.object,
};

Stage.defaultProps = {
  stage: { name: 'dummy' },
};

export default Stage;
