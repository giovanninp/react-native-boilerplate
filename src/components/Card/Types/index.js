import React from 'react';
import CommonType from './CommonType';

const Types = {
  common: CommonType,
  default: CommonType,
};

export default (props) => {
  const {type} = props;

  const Render = Types[type] || null;

  return Render ? <Render {...props} /> : <Types.common {...props} />;
};
