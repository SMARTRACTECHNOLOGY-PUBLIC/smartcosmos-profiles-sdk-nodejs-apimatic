
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of VerifyTagsForAVerificationTypeResponseModel
 *
 * @constructor
 */
VerifyTagsForAVerificationTypeResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.result = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.result = (obj.result !== undefined && obj.result !== null)? obj.result : null;
    }
};

VerifyTagsForAVerificationTypeResponseModel.prototype = new BaseModel();
VerifyTagsForAVerificationTypeResponseModel.prototype.constructor = VerifyTagsForAVerificationTypeResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
VerifyTagsForAVerificationTypeResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
VerifyTagsForAVerificationTypeResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
VerifyTagsForAVerificationTypeResponseModel.prototype.getResult = function() {
    return this.result;
};

/**
 * Setter for Result
 * 
 * @param {array} value 
 */
VerifyTagsForAVerificationTypeResponseModel.prototype.setResult = function(value) {
    this.result = value;
};


module.exports = VerifyTagsForAVerificationTypeResponseModel;
