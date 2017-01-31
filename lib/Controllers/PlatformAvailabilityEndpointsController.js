/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');

var PlatformAvailabilityEndpointsController = {

    /**
     * Resource for checking the platform availability. 
     * ### HTTP result codes
     * This endpoint will respond with an appropriate HTTP status code to indicate the actual result
     * - **204 NO_CONTENT** platform is available
     * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
     * - **503 SERVICE_UNAVAILABLE** service is temporary unavailable (e.g. scheduled Platform Maintenance). Try again later.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getCheckPlatformAvailability: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/test/ping";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SMARTCOSMOS SDK 1.0"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getCheckPlatformAvailability");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _response.body}, null, _context);
                return;
            } else if (_response.statusCode === 503) {
                callback({errorMessage: "", errorCode: 503, errorResponse: _response.body}, null, _context);
                return;
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getCheckPlatformAvailability");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = PlatformAvailabilityEndpointsController;
