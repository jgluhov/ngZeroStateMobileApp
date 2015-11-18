module.exports = function(app) {
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('/', {
            url: '/',
            templateUrl: "templates/home.html",
            controller: "homeController"
          })
          .state("signin", {
            url: '/signin',
            templateUrl: "templates/signin.html",
            controller: "signinController"
          })
          .state("signup", {
            url: '/signup',
            templateUrl: "templates/signup.html",
            controller: "signupController"
          })

      }
    ]
  );
};