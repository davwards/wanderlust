import React from 'react';

const style = (props) => ({
  background: 'none',
  border: 'none',
  textTransform: 'uppercase',
  fontFamily: 'sans-serif',
  textDecoration: props.active ? 'underline' : 'none',
  cursor: 'pointer',
  fontSize: '2em',
});

export default (props) =>
  <button style={style(props)} onClick={props.onSelect}>{props.children}</button>;
