import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store,
      actions: props.actions,
      storeState: props.store.getState(),
    };

    props.store.subscribe(() => {
      this.setState({
        storeState: props.store.getState()
      })
    });

    props.actions.initializeApp();
  }

  render = () =>
    <div className="App">
      <ul>
        {
          this.state.storeState.locations.map(location =>
            <li key={location.id}>{location.title}</li>
          )
        }
      </ul>
    </div>;
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

export default App;
