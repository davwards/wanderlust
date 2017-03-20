import React from 'react';

const style = {
  listStyleType: 'none',
  margin: '2em',
}

export default (props) =>
  <li style={style}>
    <p>{props.location.title}</p>
    <img src={props.location.image} alt='' />
  </li>
