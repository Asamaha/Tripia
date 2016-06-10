angular.module('app', ['autofill-directive', 'app.service'])
.controller('mapCtrl', ['$scope', '$element', 'Maps', 'Favorites', 'Utility', function($scope, $element, Maps, Favorites, Utility) {
  // initialize the user input option selector
  $scope.optionSelections = [
    {name: 'Everything',  value: ''},
    {name: 'Food',        value: 'food'},
    {name: 'Arts',        value: 'arts'},
    {name: 'Nightlife',   value: 'nightlife'},
    {name: 'Parks',       value: 'parks'},
    {name: 'Shopping',    value: 'shopping'},
    {name: 'Hotels',      value: 'hotels'}
  ];

 

$scope.limitSelections = [
  {name: 'Top 10', value: 10},
  {name: 'Top 20', value: 20}
  ];

  $scope.optionFilter;
  $scope.limitFilter;

  // initialize the geoCodeNotSuccessful to be used for determining valid continental destination or not
  $scope.geoCodeNotSuccessful = false;


  // geolocation search

  $scope.useCurrentLocation = function(){
    $('#start').val("Searching for current location...");
    navigator.geolocation.getCurrentPosition(function(position){
    $('#start').val([position.coords.latitude, position.coords.longitude]);
    }, function(){
    $('#start').val("Error retrieving location.");
    });
  };


// save label selection to scope
  $scope.chooseFilter = function(option) {
    $scope.optionFilter = option.value;
  };

  $scope.chooseLimit = function(limit) {
    $scope.limitFilter = limit.value;
  };

  $scope.appendWarningMsg = function(isInvalid) {
    // invalid message template
    var pInvalid = angular.element("<p id='warningMsg'/>");
    pInvalid.text("Please choose two continental locations");
    // valid message template
    var pValid = angular.element("<p id='warningMsg'/>");
    pValid.text("");
    // check to see if the location entered is invalid
    // if location is invalid, then append invalid message
    // else, append a blank message
    if (isInvalid) {
      $element.find("main-area").append(pInvalid);
    } else {
      $element.find("main-area").append(pValid);
    }
  };

   $scope.submit = function(city) {
    $scope.geoCodeNotSuccessful = false;  // every time when submit button is pressed, reset the geoCodeNotSuccessful to false
    $element.find("main-area").empty();   // clear out the warning messages from previous location input
    console.log("SCOPE ENTIRE: ", $scope.location);
    var startGeo, endGeo;

    calcRoute();

    function calcRoute() {
      // New directionsService object to interact with google maps API
      var directionsService = new google.maps.DirectionsService();
      // clear markers whenever new search
      for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null);
      }


   }]);