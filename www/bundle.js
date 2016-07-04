/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	angular.module('starter', ['ionic']).run(function ($ionicPlatform) {
	  $ionicPlatform.ready(function () {
	    if (window.cordova && window.cordova.plugins.Keyboard) {
	      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	      // for form inputs)
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	
	      // Don't remove this line unless you know what you are doing. It stops the viewport
	      // from snapping when text inputs are focused. Ionic handles this internally for
	      // a much nicer keyboard experience.
	      cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  });
	}).config(_app2.default).controller('appCtrl', function ($scope) {
	  console.log(12312);
	  $scope.hello = "dima";
	}); // Ionic Starter App

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function AppConfig($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('tabs', {
	        url: "/tab",
	        abstract: true,
	        template: __webpack_require__(2)
	    }).state('tabs.first', {
	        url: "/first",
	        views: {
	            'home-tab': {
	                template: __webpack_require__(3)
	            }
	        }
	    });
	    $urlRouterProvider.otherwise('/tab/first');
	}
	
	exports.default = AppConfig;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n        <ion-tabs class=\"tabs-icon-top tabs-positive\" >\n\n          <ion-tab title=\"Home\" icon=\"ion-home\" href=\"#/tab/home\">\n            <ion-nav-view name=\"home-tab\"></ion-nav-view>\n          </ion-tab>\n\n          <ion-tab title=\"About\" icon=\"ion-ios7-information\" href=\"#/tab/about\">\n            <ion-nav-view name=\"about-tab\"></ion-nav-view>\n          </ion-tab>\n\n          <ion-tab title=\"Contact\" icon=\"ion-ios7-world\" ui-sref=\"tabs.contact\">\n            <ion-nav-view name=\"contact-tab\"></ion-nav-view>\n          </ion-tab>\n\n        </ion-tabs>\n      </ion-view>\n"

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<ion-view show-tabs=\"true\">\n      <ion-content>\n\n        <br />\n        <a ui-sref=\"tabs.home\" class=\"button\">\n          got to tabs page\n        </a>\n      </ion-content>\n    </ion-view>\n"

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map