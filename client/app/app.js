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






   }]);