import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Store from '../lib/store';
import Actions from '../lib/actions';
import stateChanges from '../lib/state-changes';
import locationSource from '../lib/location-sources/hardcoded-location-source';

const store = Store(stateChanges);
const actions = new Actions(store, locationSource);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App store={store} actions={actions}/>,
    div
  );
});
