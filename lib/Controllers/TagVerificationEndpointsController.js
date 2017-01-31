/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');

var TagVerificationEndpointsController = {

    /**
     * Get a message to a single verification state. Translate a numeric verification state into a human readable format. e.g. `0` into `verified`
     * ### Idempotent Behaviour
     * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
     * - **200 OK** tag found and result available
     * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
     * - **401 UNAUTHORIZED** user not authorized
     * ### Input HTTP Headers:
     * - HTTP Basic Authorization (as specified above)
     * - Accept language (as specified above)
     * ### Input parameters:
     * - verificationType (required, string, `RR`) ... Identifier of the verification type
     * - verificationState (required, number, `0`) ... State of the verification
     * ### Output parameters:
     * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
     * - message (string, `verified`) ... Result message in `Accept-Language` (see `Multi language support`)
     * @param {GetVerificationStateMessageRequestModel} body    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetVerificationStateMessageResponseModel}
     */
    createGetVerificationStateMessage: function (body, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/verification/message";
        
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
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "createGetVerificationStateMessage");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new GetVerificationStateMessageResponseModel(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _response.body}, null, _context);
                return;
            } else if (_response.statusCode === 401) {
                callback({errorMessage: "", errorCode: 401, errorResponse: _response.body}, null, _context);
                return;
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "createGetVerificationStateMessage");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Verify tags for Round Rock compliance (verification type `RR`)
     * ### Idempotent Behaviour
     * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
     * - **200 OK** tag found and Round Rock compliance result available
     * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
     * ### Input parameters:
     * - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
     * ### Output parameters:
     * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
     * - tagId (string, `0EEEE100000001`) ... RFID tag identifiers
     * - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `result codes for a tag actions`)
     * - state (Number, `0`) ... Indicates the current RoundRock compliance state (1 = Round Rock licensed; 0 = Not RoundRock licensed)
     * The output contains all desired tag records. Even if the tag is not available or the user does not have permissions. The `tagCode` indicates the result code for each tag.
     * @param {VerifyTagsForRoundRockComplianceRequestModel} body    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {VerifyTagsForRoundRockComplianceResponseModel}
     */
    createVerifyTagsForRoundRockCompliance: function (body, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/verification/tags/RR";
        
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
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "createVerifyTagsForRoundRockCompliance");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new VerifyTagsForRoundRockComplianceResponseModel(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _response.body}, null, _context);
                return;
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "createVerifyTagsForRoundRockCompliance");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Verify tags for a verification type, which is represented by an unique verification id like 'RR'
     * ### Idempotent Behaviour
     * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
     * - **200 OK** tag found and verification result available
     * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
     * - **401 UNAUTHORIZED** user not authorized
     * ### Input HTTP Headers:
     * - HTTP Basic Authorization (as specified above)
     * ### Input parameters:
     * - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
     * - verificationType (required, String, `RR`) ... Verification type
     * ### Output parameters:
     * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
     * - tagId (string, `0EEEE100000001`) ... RFID tag identifiers
     * - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `Possible result codes for a tag actions`)
     * - state (Number, `0`) ... Indicates the current verification state; Number depends on verification type; Use the message function to get a string message
     * The output contains all desired tag records. Even if the tag is not available or the user does not have permissions. The `tagCode` indicates the result code for each tag.
     * @param {VerifyTagsForAVerificationTypeRequestModel} body    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {VerifyTagsForAVerificationTypeResponseModel}
     */
    createVerifyTagsForAVerificationType: function (body, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/rest/verification/tags";
        
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
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "createVerifyTagsForAVerificationType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new VerifyTagsForAVerificationTypeResponseModel(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _response.body}, null, _context);
                return;
            } else if (_response.statusCode === 401) {
                callback({errorMessage: "", errorCode: 401, errorResponse: _response.body}, null, _context);
                return;
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "createVerifyTagsForAVerificationType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = TagVerificationEndpointsController;
