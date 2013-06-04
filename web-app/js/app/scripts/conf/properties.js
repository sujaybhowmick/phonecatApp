define(['properties'], function(){
    return {
        development:{
            dataSource:{
                baseUrl: "https://api.mongolab.com/api/1/databases/",
                database: "phonecatdb",
                apiKey: "apjU5hDugbRgLKeitWJT-PPTLsVuwwlW"
            }
        },
        test:{
            dataSource:{
                baseUrl: "https://api.mongolab.com/api/1/databases/",
                database: "phonecatdb",
                apiKey: "apjU5hDugbRgLKeitWJT-PPTLsVuwwlW"
            }
        },
        production:{
            dataSource:{
                baseUrl: "https://api.mongolab.com/api/1/databases/",
                database: "phonecatdb",
                apiKey: "apjU5hDugbRgLKeitWJT-PPTLsVuwwlW"
            }
        },
        defaultEnvironment:"development"
    };
});
