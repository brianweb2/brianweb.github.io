﻿
angular.module('router', ['ngRoute'])
.config(function ($routeProvider)
{ //Angular dependancy injection 
    $routeProvider
        .when('/sidsplumbing', { templateUrl: 'accordionSections/partials/projects/sidsplumbing.html' })
        .when('/almax', { templateUrl: 'accordionSections/partials/projects/almax.html' })
        .when('/woodconcepts', { templateUrl: 'accordionSections/partials/projects/woodconcepts.html' })
        .when('/metro', { templateUrl: 'accordionSections/partials/projects/metro.html' })
        .when('/hm', { templateUrl: 'accordionSections/partials/projects/hm.html' })
        .when('/mosshouse', { templateUrl: 'accordionSections/partials/projects/mosshouse.html' })
        .when('/philosophy-details', { templateUrl: 'accordionSections/partials/philosphy-details.html' })
        .when('/test', { template: '<h3>Test Page</h3>' })

    .otherwise({ templateUrl: 'accordionSections/partials/projects/almax.html' });
    reloadOnSearch: false;

    });


