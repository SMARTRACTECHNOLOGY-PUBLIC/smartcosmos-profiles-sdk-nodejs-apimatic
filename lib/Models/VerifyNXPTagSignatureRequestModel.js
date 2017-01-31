
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of VerifyNXPTagSignatureRequestModel
 *
 * @constructor
 */
VerifyNXPTagSignatureRequestModel = function (obj) {
    if(!obj) {
        this.signature = null;     
        this.tagId = null;     
        this.tagVersion = null;     
    } else {
        this.signature = (obj.signature !== undefined && obj.signature !== null)? obj.signature : null;
        this.tagId = (obj.tagId !== undefined && obj.tagId !== null)? obj.tagId : null;
        this.tagVersion = (obj.tagVersion !== undefined && obj.tagVersion !== null)? obj.tagVersion : null;
    }
};

VerifyNXPTagSignatureRequestModel.prototype = new BaseModel();
VerifyNXPTagSignatureRequestModel.prototype.constructor = VerifyNXPTagSignatureRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
VerifyNXPTagSignatureRequestModel.prototype.getSignature = function() {
    return this.signature;
};

/**
 * Setter for Signature
 * 
 * @param {string} value 
 */
VerifyNXPTagSignatureRequestModel.prototype.setSignature = function(value) {
    this.signature = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
VerifyNXPTagSignatureRequestModel.prototype.getTagId = function() {
    return this.tagId;
};

/**
 * Setter for TagId
 * 
 * @param {string} value 
 */
VerifyNXPTagSignatureRequestModel.prototype.setTagId = function(value) {
    this.tagId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
VerifyNXPTagSignatureRequestModel.prototype.getTagVersion = function() {
    return this.tagVersion;
};

/**
 * Setter for TagVersion
 * 
 * @param {string} value 
 */
VerifyNXPTagSignatureRequestModel.prototype.setTagVersion = function(value) {
    this.tagVersion = value;
};


module.exports = VerifyNXPTagSignatureRequestModel;
