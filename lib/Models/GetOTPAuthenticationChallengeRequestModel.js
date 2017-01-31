
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetOTPAuthenticationChallengeRequestModel
 *
 * @constructor
 */
GetOTPAuthenticationChallengeRequestModel = function (obj) {
    if(!obj) {
        this.appId = null;     
        this.tagId = null;     
    } else {
        this.appId = (obj.appId !== undefined && obj.appId !== null)? obj.appId : null;
        this.tagId = (obj.tagId !== undefined && obj.tagId !== null)? obj.tagId : null;
    }
};

GetOTPAuthenticationChallengeRequestModel.prototype = new BaseModel();
GetOTPAuthenticationChallengeRequestModel.prototype.constructor = GetOTPAuthenticationChallengeRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetOTPAuthenticationChallengeRequestModel.prototype.getAppId = function() {
    return this.appId;
};

/**
 * Setter for AppId
 * 
 * @param {string} value 
 */
GetOTPAuthenticationChallengeRequestModel.prototype.setAppId = function(value) {
    this.appId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetOTPAuthenticationChallengeRequestModel.prototype.getTagId = function() {
    return this.tagId;
};

/**
 * Setter for TagId
 * 
 * @param {string} value 
 */
GetOTPAuthenticationChallengeRequestModel.prototype.setTagId = function(value) {
    this.tagId = value;
};


module.exports = GetOTPAuthenticationChallengeRequestModel;
