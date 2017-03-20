import React from 'react';

const style = {
  listStyleType: 'none',
  margin: '2em',
}

export default (props) => {
  const discardHandler =
    () => props.onDiscard(props.location.id);

  return (
    <li style={style}>
      <h2>
        <span>{props.location.title} </span>
        <button onClick={discardHandler}>X</button>
      </h2>

      <img src={props.location.image} alt='' />
    </li>
  );
}
