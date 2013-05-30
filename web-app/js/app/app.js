define(['angular', 'controllers/controllers',
        'services/services', 'filters/filters', 'directives/directives'], function(angular){
    return angular.module('phonecatApp', ['ngResource', 'controllers', 'services',
                                            'filters', 'directives']);
});
