import FakePromise from "../actions/fake-promise";
import Actions from "../actions";
import Store from "../store";
import stateChanges from "../state-changes";

test("Main workflow", () => {
  const promisedLocations = new FakePromise();
  const locations = [
    {
    "id":83,
    "title":"A Rabbit-Hole Hideaway in NYC",
    "image":"https://www.example.com/rabbit.png",
    "location":"124 MacDougal Street, New York, 10012 ",
    "latitude":40.729905,
    "longitude":-74.000246
    },
    {
      "id":1,
      "title":"Saunter Down South Bank",
      "image":"https://www.example.com/london-south-bank-1.jpg",
      "location":"Southbank, London, UK",
      "latitude":51.504406,
      "longitude":-0.1120964
    },
  ]

  const store = Store(stateChanges);
  const actions = new Actions(store, () => promisedLocations);

  actions.initializeApp();
  expect(store.getState().locations).toEqual([]);

  promisedLocations.resolveWith(locations);
  expect(store.getState().locations).toEqual(locations);

  actions.discardLocation(83);
  expect(
    store.getState()
      .locations
      .filter(location => location.id === 83)
  ).toEqual([]);
});
