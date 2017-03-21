import React from 'react';
import ReactDOM from 'react-dom';
import App from './gui/App';
import './gui/index.css';

import Store from './lib/store';
import Actions from './lib/actions';
import stateChanges from './lib/state-changes';
import locationSource from './lib/location-sources/production-location-source';

const store = Store(stateChanges);
const actions = new Actions(store, locationSource);

ReactDOM.render(
  <App store={store} actions={actions} />,
  document.getElementById('root')
);
