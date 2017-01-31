
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of VerifyNXPTagSignatureResponseModel
 *
 * @constructor
 */
VerifyNXPTagSignatureResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.message = null;     
        this.tagId = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.message = (obj.message !== undefined && obj.message !== null)? obj.message : null;
        this.tagId = (obj.tagId !== undefined && obj.tagId !== null)? obj.tagId : null;
    }
};

VerifyNXPTagSignatureResponseModel.prototype = new BaseModel();
VerifyNXPTagSignatureResponseModel.prototype.constructor = VerifyNXPTagSignatureResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
VerifyNXPTagSignatureResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
VerifyNXPTagSignatureResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
VerifyNXPTagSignatureResponseModel.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string} value 
 */
VerifyNXPTagSignatureResponseModel.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
VerifyNXPTagSignatureResponseModel.prototype.getTagId = function() {
    return this.tagId;
};

/**
 * Setter for TagId
 * 
 * @param {string} value 
 */
VerifyNXPTagSignatureResponseModel.prototype.setTagId = function(value) {
    this.tagId = value;
};


module.exports = VerifyNXPTagSignatureResponseModel;
