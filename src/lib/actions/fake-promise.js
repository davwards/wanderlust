export default class FakePromise {
  callbacks = [];

  then = (callback) => this.callbacks.push(callback);

  resolveWith = (response) => this.callbacks.reduce(
    (resultSoFar, nextCallback) => nextCallback(resultSoFar),
    response
  );
}

