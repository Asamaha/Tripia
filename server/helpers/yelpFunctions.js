var yelp = require('./yelp');
var coord = require('./coordinateHelpers');

if (!process.env.KEY) {
  var key = require('../api/api_key');
}

// create yelp client using Oauth
var yelpClient = yelp.createClient({
  consumer_key: process.env.KEY || key.consumer_key,
  consumer_secret: process.env.CONSUMER_SECRET || key.consumer_secret,
  token: process.env.TOKEN || key.token,
  token_secret: process.env.TOKEN_SECRET || key.token_secret,
  ssl: process.env.SSL || key.ssl
});

// Yelp search parameter configuration defaults
var yelpProperty = {
  term: "food",             // Type of business (food, restaurants, bars, hotels, etc.)
  limit: 10,                // Number of entries returned from each call
  sort: 2,                  // Sort mode: 0=Best matched (default), 1=Distance, 2=Highest Rated
  radius_filter: 5*1609.34  // Search radius: 1 mile = 1609.3 meters, 5 miles is good for rural areas
};

function isAlreadyInArray(array, target) {
  for (var i = 0 ; i < array.length; i++) {
    if (array[i].name === target.name) {
      return true;
    }
  }
  return false;
}
