module.exports = function(app) {
  app.controller('signupController', ['$scope', '$location', function ($scope, $location) {
    console.log('HelloSignupController');
  }]);
};
