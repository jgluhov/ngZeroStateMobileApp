module.exports = function(home) {
  home.controller('homeController', ['$scope', '$location', function ($scope) {
    console.log('homeController');
  }]);
};
