/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 6/6/13
 * Time: 7:28 PM
 * To change this template use File | Settings | File Templates.
 */

var tests = Object.keys(window.__karma__.files).filter(function (file) {
    // run tests - only files ending with "Spec.js"
    return /Spec\.js$/.test(file);
});

require.config({
    baseUrl: '/base/app/scripts',
    paths:{
        angular: 'vendor/angular.min',
        angularResource: 'vendor/angular-resource.min',
        angularMocks: 'vendor/angular-mocks',
        unitTest: 'unit'

    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularResource: {
            deps:['angular'],
            exports : 'ngResource'
        },
        angularMocks:{
            deps:['angular'],
            exports : 'angularMocks'
        }
    },
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
