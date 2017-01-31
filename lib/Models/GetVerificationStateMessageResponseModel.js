
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetVerificationStateMessageResponseModel
 *
 * @constructor
 */
GetVerificationStateMessageResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.message = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.message = (obj.message !== undefined && obj.message !== null)? obj.message : null;
    }
};

GetVerificationStateMessageResponseModel.prototype = new BaseModel();
GetVerificationStateMessageResponseModel.prototype.constructor = GetVerificationStateMessageResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
GetVerificationStateMessageResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
GetVerificationStateMessageResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetVerificationStateMessageResponseModel.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string} value 
 */
GetVerificationStateMessageResponseModel.prototype.setMessage = function(value) {
    this.message = value;
};


module.exports = GetVerificationStateMessageResponseModel;
