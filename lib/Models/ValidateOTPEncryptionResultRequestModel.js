
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of ValidateOTPEncryptionResultRequestModel
 *
 * @constructor
 */
ValidateOTPEncryptionResultRequestModel = function (obj) {
    if(!obj) {
        this.otpRequestId = null;     
        this.otpResult = null;     
        this.timestamp = null;     
    } else {
        this.otpRequestId = (obj.otpRequestId !== undefined && obj.otpRequestId !== null)? obj.otpRequestId : null;
        this.otpResult = (obj.otpResult !== undefined && obj.otpResult !== null)? obj.otpResult : null;
        this.timestamp = (obj.timestamp !== undefined && obj.timestamp !== null)? obj.timestamp : null;
    }
};

ValidateOTPEncryptionResultRequestModel.prototype = new BaseModel();
ValidateOTPEncryptionResultRequestModel.prototype.constructor = ValidateOTPEncryptionResultRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
ValidateOTPEncryptionResultRequestModel.prototype.getOtpRequestId = function() {
    return this.otpRequestId;
};

/**
 * Setter for OtpRequestId
 * 
 * @param {string} value 
 */
ValidateOTPEncryptionResultRequestModel.prototype.setOtpRequestId = function(value) {
    this.otpRequestId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
ValidateOTPEncryptionResultRequestModel.prototype.getOtpResult = function() {
    return this.otpResult;
};

/**
 * Setter for OtpResult
 * 
 * @param {int} value 
 */
ValidateOTPEncryptionResultRequestModel.prototype.setOtpResult = function(value) {
    this.otpResult = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
ValidateOTPEncryptionResultRequestModel.prototype.getTimestamp = function() {
    return this.timestamp;
};

/**
 * Setter for Timestamp
 * 
 * @param {int} value 
 */
ValidateOTPEncryptionResultRequestModel.prototype.setTimestamp = function(value) {
    this.timestamp = value;
};


module.exports = ValidateOTPEncryptionResultRequestModel;
