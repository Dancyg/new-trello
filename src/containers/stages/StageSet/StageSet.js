import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';

import { Stage } from '../../../containers';

import './StageSet.css';

function StageSet(props) {
  return (
    <div className="stage-set">
      {map(props.stages, (stage, index) => {
        return <Stage stage={stage} index={index} key={index} />;
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  stages: state.common.stages,
});

export default connect(mapStateToProps)(StageSet);
