/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */

 /**
 * Creates an instance of APIException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	context			HttpContext containing request and response objects
 */
APIException = function(reason, context) {
	this.reason = reason;
	this.context = context;
};

APIException.prototype.constructor = APIException;

/**
 * Represents the message for error cause
 *
 * @return {string}
 */
APIException.prototype.getReason = function() {
    return this.reason;
};

/**
 * Setter for reason
 * 
 * @param {string} value 
 */
APIException.prototype.setReason = function(value) {
    this.reason = value;
};

/**
 * Represents the HttpContext containing request and response objects
 *
 * @return {object}
 */
APIException.prototype.getContext = function() {
    return this.context;
};

/**
 * Setter for context
 * 
 * @param {object} value 
 */
APIException.prototype.setContext = function(value) {
    this.context = value;
};

module.exports = APIException;
