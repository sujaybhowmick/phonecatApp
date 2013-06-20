# App demonstrating the use of with AngularJS + RequireJS + Grails

* AngularJS - Angular.js is an open-source Javascript MVC (Model-View-Controller) framework developed by
            Google. It gives Javascript developers a highly structured approach to developing rich browser-based
            applications which leads to very high productivity.
* RequireJS - RequireJS is a JavaScript file and module loader.
* Grails    - Server side rest endpoint

## Directory Layout

    %phonecatApp%
        + grails-app
            + conf                 ---> location of configuration artifacts
            + controllers          ---> location of controller artifacts
            + domain               ---> location of domain classes
            + i18n                 ---> location of message bundles for i18n
            + services             ---> location of services
            + taglib               ---> location of tag libraries
            + util                 ---> location of special utility classes
            + views                ---> location of views
                + layouts          ---> location of layouts
        + lib
        + scripts                  ---> scripts
        + src
            + groovy               ---> optional; location for Groovy source files
            + java                 ---> optional; location for Java source files
        + test                     ---> generated test classes
        + web-app
            + css                 ---> css style files
            + js                  ---> javascript files
                + app             ---> AngularJS app files
                + scripts         ---> AngularJS controllers, services js files
                    + conf
                    + controllers
                    + directives
                    + filters
                    + services
                    + vendor
                    + views       ---> AngularJS view html files
                + test
                    + unit        ---> Karma unit test files
                    + e2e         ---> Karma e2e test files
            + WEB-INF



