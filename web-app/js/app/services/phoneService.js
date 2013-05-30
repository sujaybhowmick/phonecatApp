/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/28/13
 * Time: 4:12 PM
 * To change this template use File | Settings | File Templates.
 */
define(['services/services'],
    function(services){
        'use strict';
        services.factory('Phone', ['$resource',
            function($resource){
                return $resource('rest/phones/:id', {id: '@id'});
            }]);

        services.factory('PhoneListLoader', ['Phone', '$q',
            function(Phone, $q){
                return function(){
                    var delay = $q.defer();
                    Phone.query(function(phones){
                        delay.resolve(phones);
                    }, function(){
                        delay.reject('Unable to load phone list')

                    }, {isArray: true});
                    return delay.promise;
                }

            }]);
        services.factory('PhoneLoader', ['Phone', '$route','$q',
                function(Phone, $route, $q){
                    return function(){
                        var delay = $q.defer();
                        Phone.get({id:$route.current.params.id, isArray: false}, function(phone){
                            delay.resolve(phone);

                        }, function(){
                            delay.reject('Unable to load Phone');
                        });
                        return delay.promise;
                    }
                }
            ]);
    });