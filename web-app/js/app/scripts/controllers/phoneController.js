/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/28/13
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

define(['controllers/controllers'],
    function(controllers){
        'use strict';

        /* Fetch phone by @id */
        controllers.controller('ShowPhoneCtrl',['$scope', 'phone', function($scope, phone){
            $scope.phone = phone;
            $scope.mainImageUrl = phone.images[0];
            $scope.setImage = function(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            }
        }]);

        /* Fetch all phones */
        controllers.controller('PhoneCtrl',['$scope', 'phones', function($scope, phones){
            $scope.phones = phones;
        }]);

    });
