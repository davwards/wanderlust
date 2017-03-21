import React from 'react';

const defaultStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
};

export default (props) =>
  <button
    style={Object.assign({}, defaultStyle, props.style)}
    onClick={props.onClick}
    className={`fa fa-${props.icon}`}
    aria-label={props.label}>
  </button>;

