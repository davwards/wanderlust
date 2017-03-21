import React from 'react';
import ClickableIcon from '../ClickableIcon';

export default (props) =>
  <ClickableIcon
    onClick={props.onDiscard}
    icon="close"
    label="discard location"/>;
