///*
// * Licensed to the Apache Software Foundation (ASF) under one
// * or more contributor license agreements.  See the NOTICE file
// * distributed with this work for additional information
// * regarding copyright ownership.  The ASF licenses this file
// * to you under the Apache License, Version 2.0 (the
// * "License"); you may not use this file except in compliance
// * with the License.  You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing,
// * software distributed under the License is distributed on an
// * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// * KIND, either express or implied.  See the License for the
// * specific language governing permissions and limitations
// * under the License.
// */
//var app = {
//    // Application Constructor
//    initialize: function() {
//        console.log('Hello')
//        this.bindEvents();
//    },
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//    bindEvents: function() {
//        document.addEventListener('deviceready', this.onDeviceReady, false);
//    },
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicitly call 'app.receivedEvent(...);'
//    onDeviceReady: function() {
//        app.receivedEvent('deviceready');
//    },
//    // Update DOM on a Received Event
//    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);
//    }
//
//};
//
//app.initialize();

'use strict';

//var sampleApp = angular.module('sampleApp', ['ui.router']);
//
//sampleApp.controller('sampleController', ['$scope', '$location', function ($scope, $location) {
//  console.log('SampleController');
//}]);
//
//sampleApp.controller('signinController', ['$scope', '$location', function ($scope, $location) {
//  console.log('HelloSigninController');
//}]);
//
//sampleApp.controller('signupController', ['$scope', '$location', function ($scope, $location) {
//  console.log('HelloSignupController');
//}]);
/////platforms/ios/www/index.html
//sampleApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
//    function ($stateProvider, $urlRouterProvider, $locationProvider) {
//      $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//      });
//
//      $urlRouterProvider.otherwise('/');
//
//        $stateProvider
//          .state('/', {
//            url: '/',
//            templateUrl: "templates/home.html",
//            controller: "sampleController"
//          })
//        .state("signin", {
//          url: '/signin',
//          templateUrl: "templates/signin.html",
//          controller: "signinController"
//        })
//        .state("signup", {
//          url: '/signup',
//          templateUrl: "templates/signup.html",
//          controller: "signupController"
//        })
//
//    }
//  ]
//);

var CordovaInit = function () {

  var onDeviceReady = function () {
    receivedEvent('deviceready');
  };

  var receivedEvent = function (event) {
    console.log('Start event received, bootstrapping application setup.');
    angular.bootstrap($('body'), ['ngZeroStateMobileApp']);
  };

  this.bindEvents = function () {
    document.addEventListener('deviceready', onDeviceReady, false);
  };

  //If cordova is present, wait for it to initialize, otherwise just try to
  //bootstrap the application.
  if (window.cordova !== undefined) {
    console.log('Cordova found, wating for device.');
    this.bindEvents();
  } else {
    console.log('Cordova not found, booting application');
    receivedEvent('manual')
  }
};

$(function () {
  console.log('Bootstrapping!');
  new CordovaInit();
});