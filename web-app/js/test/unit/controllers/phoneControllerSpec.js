/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 6/9/13
 * Time: 10:04 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

define(['angularMocks', 'services/services', 'controllers/controllers', 'controllers/phoneController',
        'services/phoneService'],
    function(){
            describe('PhoneCtrl', function(){
                beforeEach(module('services'));
                beforeEach(module('controllers'));

                var controller, $httpBackend, scope, phones, $rootScope,
                    mockPhoneData = function(){
                        this.$get = function() {
                            return function () {
                                return [{
                                    "_id" : "51a8864504a628aaa67ee052" ,
                                    "age" : 2 ,
                                    "imageUrl" : "img/phones/motorola-atrix-4g.0.jpg" ,
                                    "name" : "MOTOROLA ATRIX™ 4G" ,
                                    "phoneDetails" : "51a8864504a628aaa67ee053" ,
                                    "snippet" : "MOTOROLA ATRIX 4G the world's most powerful smartphone." ,
                                    "version" : 0
                                }];

                            };
                        };
                    };
                beforeEach(module(function($provide) {
                    $provide.provider('$phones', mockPhoneData);
                }));
                beforeEach(inject(function(_$httpBackend_, _$rootScope_, $controller, $phones){
                    $httpBackend = _$httpBackend_;
                    //loader = PhoneListLoader;
                    scope = _$rootScope_.$new();
                    controller = $controller;
                    phones = $phones;
                    $rootScope = _$rootScope_;
                }));
                it('should show me phone list', function(){
                    controller('PhoneCtrl', {$scope: scope, phones: phones()});
                    expect(scope.phones.length).toBe(1);

                });
            });
    });