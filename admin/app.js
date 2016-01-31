require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routesConfig from 'config/routes.config.js';

angular.module('zhufengMall',[uiRouter,ngResource])
config(routesConfig);