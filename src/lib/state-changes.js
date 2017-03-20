export default {

  RECEIVED_LOCATIONS: (state, message) => {
    state.locations = message.locations;
  },

  DISCARD_LOCATION: (state, message) => {
    state.locations = state.locations.filter(location => location.id !== message.id);
  },

  FAVORITE_LOCATION: (state, message) => {
    state.locations
      .filter(location => location.id === message.id)[0]
      .favorite = true;
  },
}
