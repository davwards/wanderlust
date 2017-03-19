export default () => Promise.resolve([{
    "id":83,
    "title":"A Rabbit-Hole Hideaway in NYC",
    "image":"rabbit.png",
    "location":"124 MacDougal Street, New York, 10012 ",
    "latitude":40.729905,
    "longitude":-74.000246
  },
  {
    "id":1,
    "title":"Saunter Down South Bank",
    "image":"london-south-bank-1.jpg",
    "location":"Southbank, London, UK",
    "latitude":51.504406,
    "longitude":-0.1120964
  },
  {
    "id":2,
    "title":"Kayack on the Hudson",
    "image":"Kayaks2.jpg",
    "location":"Pier 40, Manhattan, New York",
    "latitude":40.729323,
    "longitude":-74.0113997
  }
].map(location => {
  location.image = `https://travelpoker-production.s3.amazonaws.com/uploads/card/image/${location.id}/${location.image}`;
  return location;
}));
