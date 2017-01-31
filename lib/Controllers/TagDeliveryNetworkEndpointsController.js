/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');

var TagDeliveryNetworkEndpointsController = {

    /**
     * **DRAFT** - Under development
     * Get TDN data for a tag. The TDN data is proprietary and needs the SMART COSMOS TDN client
     * service on the REST client for decoding. The endpoint will report "404 Not found" for all
     * tags with no TDN data attached (so it is not possible to probe the Profiles instance for 
     * no-TDN tag IDs without authorization).
     * ### Notes
     *  - Public endpoint (no authorization needed)
     *  - If a secure endpoint is needed, it is possible to disable this endpoint and use GetTagValue with "TDN" as appId instead.
     * ### Idempotent Behaviour
     * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate
     * the actual result.
     * - **200 OK** valid TDN tag ID
     * - **404 NOT_FOUND** invalid tag ID (tag not available or no TDN data attached)
     * ### Output parameters:
     * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
     * - value (string, `54646E50726F707269657461727944617461`) ... TDN data (AsciiHex encoded)
     * @param {string} tagId    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetTagDeliveryNetworkDataResponseModel}
     */
    getTagDeliveryNetworkData: function (tagId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/tag/tdn/{tagId}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "tagId": tagId
        });

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
        		var errorResponse = _BaseController.validateResponse(_context, "getTagDeliveryNetworkData");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new GetTagDeliveryNetworkDataResponseModel(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 404) {
               callback(null, _response.body, _context);
               return;
            }
             else {
                var errorResponse = _BaseController.validateResponse(_context, "getTagDeliveryNetworkData");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = TagDeliveryNetworkEndpointsController;
