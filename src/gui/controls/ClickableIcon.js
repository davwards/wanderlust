import React from 'react';

const defaultStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "inline-block",
  margin: "0",
  width: "1em",
  padding: 0,
};

export default (props) =>
  <button
    style={Object.assign({}, defaultStyle, props.style)}
    onClick={props.onClick}
    className={`fa fa-${props.icon}`}
    aria-label={props.label}>
  </button>;

