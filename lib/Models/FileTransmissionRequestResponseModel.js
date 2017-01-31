
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of FileTransmissionRequestResponseModel
 *
 * @constructor
 */
FileTransmissionRequestResponseModel = function (obj) {
    if(!obj) {
        this.endpointUri = null;     
        this.protocol = null;     
        this.transmissionUrn = null;     
    } else {
        this.endpointUri = (obj.endpointUri !== undefined && obj.endpointUri !== null)? obj.endpointUri : null;
        this.protocol = (obj.protocol !== undefined && obj.protocol !== null)? obj.protocol : null;
        this.transmissionUrn = (obj.transmissionUrn !== undefined && obj.transmissionUrn !== null)? obj.transmissionUrn : null;
    }
};

FileTransmissionRequestResponseModel.prototype = new BaseModel();
FileTransmissionRequestResponseModel.prototype.constructor = FileTransmissionRequestResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionRequestResponseModel.prototype.getEndpointUri = function() {
    return this.endpointUri;
};

/**
 * Setter for EndpointUri
 * 
 * @param {string} value 
 */
FileTransmissionRequestResponseModel.prototype.setEndpointUri = function(value) {
    this.endpointUri = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionRequestResponseModel.prototype.getProtocol = function() {
    return this.protocol;
};

/**
 * Setter for Protocol
 * 
 * @param {string} value 
 */
FileTransmissionRequestResponseModel.prototype.setProtocol = function(value) {
    this.protocol = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionRequestResponseModel.prototype.getTransmissionUrn = function() {
    return this.transmissionUrn;
};

/**
 * Setter for TransmissionUrn
 * 
 * @param {string} value 
 */
FileTransmissionRequestResponseModel.prototype.setTransmissionUrn = function(value) {
    this.transmissionUrn = value;
};


module.exports = FileTransmissionRequestResponseModel;
