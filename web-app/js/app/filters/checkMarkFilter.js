/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/29/13
 * Time: 5:00 PM
 * To change this template use File | Settings | File Templates.
 */
define(['filters/filters'],
    function(filters){
        'use strict';
        filters.filter('checkmark', function(){
           return function(input){
               return input ? '\u2713' : '\u2718';
           };
        });
    });
