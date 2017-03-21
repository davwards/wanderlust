import React from 'react';
import ClickableIcon from '../controls/ClickableIcon';

export default (props) =>
  <ClickableIcon
    style={{color: props.active ? '#082' : 'black', float: "left"}}
    icon="star"
    onClick={props.active ? props.onUnfavorite : props.onFavorite}
    label="favorite location"/>;
