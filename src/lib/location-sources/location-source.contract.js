import 'whatwg-fetch';

export default (buildLocationSource) => {

  it("provides a list of locations", () => {
    const locationSource = buildLocationSource();
    const promisedLocations = locationSource();

    return promisedLocations.then(locations => {
      expect(locations.length).toBeGreaterThan(0)
      expect(Object.keys(locations[0])).toEqual(expect.arrayContaining([
        "id",
        "title",
        "image",
        "location",
        "latitude",
        "longitude"
      ]));
    });
  });

  it("includes valid image URLs for each location", () => {
    const locationSource = buildLocationSource();
    const promisedLocations = locationSource();

    return promisedLocations
      .then(locations => locations[0].image)
      .then(imageUrl =>
        expect(imageUrl).toMatch(/https:\/\/.*\.(jpg|png|gif)/)
      )
  });
}
