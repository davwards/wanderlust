export default {

  RECEIVED_LOCATIONS: (state, message) => {
    state.locations = message.locations;
  },

}
