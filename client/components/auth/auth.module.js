'use strict';

angular.module('twssApp.auth', ['twssApp.constants', 'twssApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
