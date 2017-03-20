export default (store, locationSource) =>
  () => {
    store.update({
      type: 'FETCHING_LOCATIONS',
    });

    locationSource()
      .then(locations => store.update({
        type: 'RECEIVED_LOCATIONS',
        locations: locations
      }));
  };
