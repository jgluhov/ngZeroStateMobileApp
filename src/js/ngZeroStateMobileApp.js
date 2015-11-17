'use strict';

require('./session');
require('./home');

var app = angular.module('ngZeroStateMobileApp', ['ui.router', 'zsSession', 'zsHome']);

require('./routes')(app);

