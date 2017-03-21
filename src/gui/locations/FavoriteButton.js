import React from 'react';
import ClickableIcon from '../ClickableIcon';

export default (props) =>
  <ClickableIcon
    style={{color: props.active ? '#082' : 'black'}}
    icon="star"
    onClick={props.active ? props.onUnfavorite : props.onFavorite}
    label="favorite location"/>;
