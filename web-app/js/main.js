/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/27/13
 * Time: 12:27 PM
 * To change this template use File | Settings | File Templates.
 */
require.config({
    paths:{
        angular: 'vendor/angular.min',
        jquery: 'vendor/jquery.min',
        domReady: 'vendor/ready.min',
        angularResource: 'vendor/angular-resource.min'
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
        'services/phoneService',
        'controllers/phoneController',
        'filters/checkMarkFilter',
        'directives/mydirective'

    ],
    function(angular, angularResource, app, domReady){
        'use strict';
        app.config(['$routeProvider',
            function($routeProvider){
                $routeProvider.when('/', {
                    controller: 'PhoneCtrl',
                    resolve:{
                        phones: function(PhoneListLoader){
                          return PhoneListLoader();
                        }
                    },
                    templateUrl: 'views/phone-list.html'
                });
                $routeProvider.when('/phone/:id',{
                    controller: 'ShowPhoneCtrl',
                    resolve:{
                        phone: function(PhoneLoader){
                            return PhoneLoader();
                        }
                    },
                    templateUrl: 'views/phone-detail.html'
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
