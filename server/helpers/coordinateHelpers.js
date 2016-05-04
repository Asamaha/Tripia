// define the to Radian function
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  };
}

// calculate the distance between 2 waypoints, given their latitudes and longitudes, return distance in miles
module.exports.calcDistance = function(pt1, pt2) {

  if (!pt1.location.coordinate || !pt2.location.coordinate){
    console.log('UNDEFINED COORDINATE');
    return 50;
  }
};