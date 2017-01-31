
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of FileTransmissionReceiptRequestModel
 *
 * @constructor
 */
FileTransmissionReceiptRequestModel = function (obj) {
    if(!obj) {
        this.transmissionResult = null;     
        this.transmissionUrn = null;     
    } else {
        this.transmissionResult = (obj.transmissionResult !== undefined && obj.transmissionResult !== null)? obj.transmissionResult : null;
        this.transmissionUrn = (obj.transmissionUrn !== undefined && obj.transmissionUrn !== null)? obj.transmissionUrn : null;
    }
};

FileTransmissionReceiptRequestModel.prototype = new BaseModel();
FileTransmissionReceiptRequestModel.prototype.constructor = FileTransmissionReceiptRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionReceiptRequestModel.prototype.getTransmissionResult = function() {
    return this.transmissionResult;
};

/**
 * Setter for TransmissionResult
 * 
 * @param {string} value 
 */
FileTransmissionReceiptRequestModel.prototype.setTransmissionResult = function(value) {
    this.transmissionResult = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionReceiptRequestModel.prototype.getTransmissionUrn = function() {
    return this.transmissionUrn;
};

/**
 * Setter for TransmissionUrn
 * 
 * @param {string} value 
 */
FileTransmissionReceiptRequestModel.prototype.setTransmissionUrn = function(value) {
    this.transmissionUrn = value;
};


module.exports = FileTransmissionReceiptRequestModel;
