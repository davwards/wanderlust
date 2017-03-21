import React from 'react';
import DiscardButton from './DiscardButton';
import FavoriteButton from './FavoriteButton';

const style = {
  listStyleType: 'none',
  margin: '2em',
  padding: 0,
};

export default (props) => (
  <li style={style}>
    <h2 style={{margin: "0 0 0.5em 0", padding: 0}}>
      <FavoriteButton
        onFavorite={() => props.onFavorite(props.location.id)}
        onUnfavorite={() => props.onUnfavorite(props.location.id)}
        active={props.location.favorite} />
      <DiscardButton onDiscard={() => props.onDiscard(props.location.id)}/>
      <span>{props.location.title}</span>
    </h2>

    <img src={props.location.image} style={{maxWidth: '100%'}} alt='' />
    <p>{props.location.location}</p>
  </li>
);
