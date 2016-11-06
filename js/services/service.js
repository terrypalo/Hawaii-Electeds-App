/*
 * Services
 */

var GetNearestAddress = new Apperyio.RestService({
    'url': 'http://api.geonames.org/findNearestAddressJSON',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {
            "formatted": "true",
            "username": "terrylp",
            "style": "full"
        },
        "body": null
    }
});

var GetProfileService = new Apperyio.RestService({
    'url': 'http://kohoike.org/api/elected/',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {},
        "body": null
    }
});
var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var RecordVisit = new Apperyio.RestService({
    'url': 'PATH/TO/record_visit.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {},
        "body": null
    }
});

var GetElectedsService = new Apperyio.RestService({
    'url': 'http://kohoike.org/api/ballot/',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {},
        "body": null
    }
});

var ReturnVisits = new Apperyio.RestService({
    'url': 'PATH/TO/return_visits.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {},
        "body": null
    }
});
