import InitializeApp from "./actions/initialize-app";

export default class Actions {
  constructor(store, locationSource) {
    this.initializeApp = InitializeApp(store, locationSource);
  }
}
