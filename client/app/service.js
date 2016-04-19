angular.module('app.service', [])

.factory('Utility', function () {
  // this function generate a view to display the restaurant image and link
  var renderView = function(i, places) {
      var description = '<div class="descriptionDiv">' +
          '<a href="'+places[i].url +'" target="_blank">' + '<h1 class="place-name">' + places[i].name + '</h1></a>' +
          '<div style="padding:5px;font-weight:bold;">' + 'Yelp Rating:&nbsp;&nbsp;' +
          '<img style="vertical-align:middle;" src="'+ places[i].rating_img_url +'"/>' + '</div>' +
          '<img src="'+ places[i].image_url +'"/>' +
          '<div class="snippet">' + places[i].snippet_text + '</div>' +
          '<a href="' + places[i].url +'" target="_blank"> Visit on Yelp</a>' +
          '</div>';
      return description;
  };
});