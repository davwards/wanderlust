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

const favoriteButtonStyle = (favorited) =>
  Object.assign({}, buttonStyle, {
    color: favorited ? '#082' : 'black',
  });

export default (props) => {
  const discardHandler =
    () => props.onDiscard(props.location.id);

  const favoriteHandler =
    () =>
      props.location.favorite
        ? props.onUnfavorite(props.location.id)
        : props.onFavorite(props.location.id);

  return (
    <li style={style}>
      <h2>
        <button
          style={favoriteButtonStyle(props.location.favorite)}
          className="fa fa-star"
          onClick={favoriteHandler}
          aria-label="favorite location">
        </button>
        <span>{props.location.title} </span>
        <button
          style={buttonStyle}
          onClick={discardHandler}
          className="fa fa-close"
          aria-label="discard location">
        </button>
      </h2>

      <img src={props.location.image} style={{maxWidth: '100%'}} alt='' />
    </li>
  );
}
