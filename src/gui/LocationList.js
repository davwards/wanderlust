import React from 'react';
import Location from './Location';

const style = {
  padding: 0,
  textAlign: 'center',
}

export default (props) =>
  <ul style={style}>
    {
      props.locations.map(location =>
        <Location
          key={location.id}
          location={location}
        />
      )
    }
  </ul>
