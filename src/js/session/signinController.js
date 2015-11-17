module.exports = function(app) {
  app.controller('signinController', ['$scope', '$location', function ($scope) {
    console.log('HelloSigninController');
  }]);
};
