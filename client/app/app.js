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
  
  }]);