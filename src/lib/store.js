import cloneDeep from 'lodash.clonedeep';

export default (stateChanges) => {
  const subscribers = [];
  let state = {
    locations: [],
  };

  return {
    subscribe: (subscriber) => subscribers.push(subscriber),
    getState: () => cloneDeep(state),
    update: (message) => {
      if(stateChanges[message.type]) {
        stateChanges[message.type](state, message);
        subscribers.forEach(subscriber => subscriber());
      }
    }
  }
}
