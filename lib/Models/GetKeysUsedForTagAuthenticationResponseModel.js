
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetKeysUsedForTagAuthenticationResponseModel
 *
 * @constructor
 */
GetKeysUsedForTagAuthenticationResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.result = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.result = (obj.result !== undefined && obj.result !== null)? obj.result : null;
    }
};

GetKeysUsedForTagAuthenticationResponseModel.prototype = new BaseModel();
GetKeysUsedForTagAuthenticationResponseModel.prototype.constructor = GetKeysUsedForTagAuthenticationResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
GetKeysUsedForTagAuthenticationResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
GetKeysUsedForTagAuthenticationResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
GetKeysUsedForTagAuthenticationResponseModel.prototype.getResult = function() {
    return this.result;
};

/**
 * Setter for Result
 * 
 * @param {array} value 
 */
GetKeysUsedForTagAuthenticationResponseModel.prototype.setResult = function(value) {
    this.result = value;
};


module.exports = GetKeysUsedForTagAuthenticationResponseModel;
