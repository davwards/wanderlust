import React from 'react';
import DiscardButton from './DiscardButton';
import FavoriteButton from './FavoriteButton';

const style = {
  listStyleType: 'none',
  margin: '2em',
};

export default (props) => (
  <li style={style}>
    <h2>
      <FavoriteButton
        onFavorite={() => props.onFavorite(props.location.id)}
        onUnfavorite={() => props.onUnfavorite(props.location.id)}
        active={props.location.favorite} />
      <span>{props.location.title} </span>
      <DiscardButton onDiscard={() => props.onDiscard(props.location.id)}/>
    </h2>

    <img src={props.location.image} style={{maxWidth: '100%'}} alt='' />
    <p>{props.location.location}</p>
  </li>
);
