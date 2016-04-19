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