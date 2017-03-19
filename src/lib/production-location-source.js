import "whatwg-fetch";
const locationsUrl = 'https://gist.githubusercontent.com/shreyansb/678d35d7efaa4cbfb81d/raw/7e04c3d88f6c06d7a794ae570f39a96107b18457/gistfile1.json';

export default () => fetch(locationsUrl)
  .then(response => response.json())
  .then(locations =>
    locations.map(location => {
      location.image = `https://travelpoker-production.s3.amazonaws.com/uploads/card/image/${location.id}/${location.image}`;
      return location;
    })
  );
