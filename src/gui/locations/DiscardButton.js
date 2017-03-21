import React from 'react';
import ClickableIcon from '../controls/ClickableIcon';

export default (props) =>
  <ClickableIcon
    style={{float: "right"}}
    onClick={props.onDiscard}
    icon="close"
    label="discard location"/>;
