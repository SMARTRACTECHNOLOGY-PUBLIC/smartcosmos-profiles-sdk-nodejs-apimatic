
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetVerificationStateMessageRequestModel
 *
 * @constructor
 */
GetVerificationStateMessageRequestModel = function (obj) {
    if(!obj) {
        this.verificationState = null;     
        this.verificationType = null;     
    } else {
        this.verificationState = (obj.verificationState !== undefined && obj.verificationState !== null)? obj.verificationState : null;
        this.verificationType = (obj.verificationType !== undefined && obj.verificationType !== null)? obj.verificationType : null;
    }
};

GetVerificationStateMessageRequestModel.prototype = new BaseModel();
GetVerificationStateMessageRequestModel.prototype.constructor = GetVerificationStateMessageRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
GetVerificationStateMessageRequestModel.prototype.getVerificationState = function() {
    return this.verificationState;
};

/**
 * Setter for VerificationState
 * 
 * @param {int} value 
 */
GetVerificationStateMessageRequestModel.prototype.setVerificationState = function(value) {
    this.verificationState = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetVerificationStateMessageRequestModel.prototype.getVerificationType = function() {
    return this.verificationType;
};

/**
 * Setter for VerificationType
 * 
 * @param {string} value 
 */
GetVerificationStateMessageRequestModel.prototype.setVerificationType = function(value) {
    this.verificationType = value;
};


module.exports = GetVerificationStateMessageRequestModel;
