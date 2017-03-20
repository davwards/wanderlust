import React from 'react';

const style = {
  listStyleType: 'none',
  margin: '2em',
};

const buttonStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
};

export default (props) => {
  const discardHandler =
    () => props.onDiscard(props.location.id);

  return (
    <li style={style}>
      <h2>
        <span>{props.location.title} </span>
        <button
          style={buttonStyle}
          onClick={discardHandler}
          className="fa fa-times"
          aria-label="discard location"></button>
      </h2>

      <img src={props.location.image} alt='' />
    </li>
  );
}
