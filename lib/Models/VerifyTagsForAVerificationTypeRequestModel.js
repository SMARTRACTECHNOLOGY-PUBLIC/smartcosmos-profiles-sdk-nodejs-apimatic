
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of VerifyTagsForAVerificationTypeRequestModel
 *
 * @constructor
 */
VerifyTagsForAVerificationTypeRequestModel = function (obj) {
    if(!obj) {
        this.tagIds = null;     
        this.verificationType = null;     
    } else {
        this.tagIds = (obj.tagIds !== undefined && obj.tagIds !== null)? obj.tagIds : null;
        this.verificationType = (obj.verificationType !== undefined && obj.verificationType !== null)? obj.verificationType : null;
    }
};

VerifyTagsForAVerificationTypeRequestModel.prototype = new BaseModel();
VerifyTagsForAVerificationTypeRequestModel.prototype.constructor = VerifyTagsForAVerificationTypeRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
VerifyTagsForAVerificationTypeRequestModel.prototype.getTagIds = function() {
    return this.tagIds;
};

/**
 * Setter for TagIds
 * 
 * @param {array} value 
 */
VerifyTagsForAVerificationTypeRequestModel.prototype.setTagIds = function(value) {
    this.tagIds = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
VerifyTagsForAVerificationTypeRequestModel.prototype.getVerificationType = function() {
    return this.verificationType;
};

/**
 * Setter for VerificationType
 * 
 * @param {string} value 
 */
VerifyTagsForAVerificationTypeRequestModel.prototype.setVerificationType = function(value) {
    this.verificationType = value;
};


module.exports = VerifyTagsForAVerificationTypeRequestModel;
