/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');

var DataImportEndpointsController = {

    /**
     * TODO: type endpoint description here
     * @param {FileTransmissionReceiptRequestModel} body    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createFileTransmissionReceipt: function (body, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/batch";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SMARTCOSMOS SDK 1.0"
        };

        //Remove null values
        _APIHelper.cleanObject(body);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "createFileTransmissionReceipt");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, null, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _response.body}, null, _context);
                return;
            } else if (_response.statusCode === 401) {
                callback({errorMessage: "", errorCode: 401, errorResponse: _response.body}, null, _context);
                return;
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "createFileTransmissionReceipt");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {FileTransmissionRequestRequestModel} body    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {FileTransmissionRequestResponseModel}
     */
    updateFileTransmissionRequest: function (body, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/batch";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SMARTCOSMOS SDK 1.0"
        };

        //Remove null values
        _APIHelper.cleanObject(body);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "updateFileTransmissionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new FileTransmissionRequestResponseModel(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _response.body}, null, _context);
                return;
            } else if (_response.statusCode === 401) {
                callback({errorMessage: "", errorCode: 401, errorResponse: _response.body}, null, _context);
                return;
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "updateFileTransmissionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = DataImportEndpointsController;
