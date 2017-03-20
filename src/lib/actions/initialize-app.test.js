import InitializeApp from "./initialize-app";
import FakePromise from "./fake-promise";

describe("InitializeApp", () => {
  let store;
  let promisedLocations;
  let initializeApp;

  beforeEach(() => {
    promisedLocations = new FakePromise();
    store = { update: jest.fn() }

    initializeApp = InitializeApp(
      store,
      () => promisedLocations
    );
  });

  it("sends the store a FETCHING_LOCATIONS message", () => {
    initializeApp();
    expect(store.update).toHaveBeenCalledWith({
      type: 'FETCHING_LOCATIONS',
    });
  });

  describe("when the location source resolves", () => {
    it("sends the store a RECEIVED_LOCATIONS message", () => {
      initializeApp();
      expect(store.update).not.toHaveBeenCalledWith({
        type: 'RECEIVED_LOCATIONS',
        locations: expect.anything()
      });

      promisedLocations.resolveWith("some data");

      expect(store.update).toHaveBeenCalledWith({
        type: 'RECEIVED_LOCATIONS',
        locations: "some data"
      });
    });
  });

});
