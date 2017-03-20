import InitializeApp from "./actions/initialize-app";

export default class Actions {
  constructor(store, locationSource) {
    this.initializeApp = InitializeApp(store, locationSource);
    this.discardLocation = id => store.update({type: 'DISCARD_LOCATION', id: id});
    this.favoriteLocation = id => store.update({type: 'FAVORITE_LOCATION', id: id});
  }
}
