/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 6/3/13
 * Time: 7:26 PM
 * To change this template use File | Settings | File Templates.
 */
define(['config', 'properties'], function(config, properties){
    switch(properties.defaultEnvironment){
        case "development": {
            properties.restUrl = properties.development.dataSource.baseUrl +
                                properties.development.dataSource.database;
            properties.apiKey = properties.development.dataSource.apiKey;
            break;
        }
        case "test":{
            properties.restUrl = properties.test.dataSource.baseUrl +
                                properties.test.dataSource.database;
            properties.apiKey = properties.test.dataSource.apiKey;
            break;
        }
        case "production":{
            properties.restUrl = properties.production.dataSource.baseUrl +
                                properties.production.dataSource.database;
            properties.apiKey = properties.production.dataSource.apiKey;
            break;
        }
        default:{
            properties.restUrl = properties.development.dataSource.baseUrl +
                                properties.development.dataSource.database;
            properties.apiKey = properties.development.dataSource.apiKey;
        }
    }
    return properties;
});
