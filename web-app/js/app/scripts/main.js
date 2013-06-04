/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/27/13
 * Time: 12:27 PM
 * To change this template use File | Settings | File Templates.
 */
require.config({
    baseUrl: 'js/app/scripts/',
    paths:{
        angular: 'vendor/angular.min',
        jquery: 'vendor/jquery.min',
        domReady: 'vendor/ready.min',
        angularResource: 'vendor/angular-resource.min',
        properties: 'conf/properties',
        config: 'conf/Config'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angularResource: {
            deps:['angular']
        }
    }
});

require([
        'angular',
        'angularResource',
        'app',
        'domReady',
        'properties',
        'config',
        'services/phoneService',
        'controllers/phoneController',
        'filters/checkMarkFilter',
        'directives/mydirective'
    ],
    function(angular, angularResource, app, domReady){
        'use strict';
        app.config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider){
                $routeProvider.when('/', {
                    controller: 'PhoneCtrl',
                    resolve:{
                        phones: function(PhoneListLoader){
                          return PhoneListLoader();
                        }
                    },
                    templateUrl: 'js/app/views/phone-list.html'
                });
                $routeProvider.when('/phone/:id',{
                    controller: 'ShowPhoneCtrl',
                    resolve:{
                        phone: function(PhoneLoader){
                            return PhoneLoader();
                        }
                    },
                    templateUrl: 'js/app/views/phone-detail.html'
                });
            }

        ]);
        domReady(function() {
            angular.bootstrap(document, ['phonecatApp']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: phonecatApp');
        });
    }
);
