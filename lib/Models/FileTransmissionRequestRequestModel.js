
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of FileTransmissionRequestRequestModel
 *
 * @constructor
 */
FileTransmissionRequestRequestModel = function (obj) {
    if(!obj) {
        this.contentLength = null;     
        this.md5Checksum = null;     
        this.mimeType = null;     
        this.routingUrn = null;     
    } else {
        this.contentLength = (obj.contentLength !== undefined && obj.contentLength !== null)? obj.contentLength : null;
        this.md5Checksum = (obj.md5Checksum !== undefined && obj.md5Checksum !== null)? obj.md5Checksum : null;
        this.mimeType = (obj.mimeType !== undefined && obj.mimeType !== null)? obj.mimeType : null;
        this.routingUrn = (obj.routingUrn !== undefined && obj.routingUrn !== null)? obj.routingUrn : null;
    }
};

FileTransmissionRequestRequestModel.prototype = new BaseModel();
FileTransmissionRequestRequestModel.prototype.constructor = FileTransmissionRequestRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
FileTransmissionRequestRequestModel.prototype.getContentLength = function() {
    return this.contentLength;
};

/**
 * Setter for ContentLength
 * 
 * @param {int} value 
 */
FileTransmissionRequestRequestModel.prototype.setContentLength = function(value) {
    this.contentLength = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionRequestRequestModel.prototype.getMd5Checksum = function() {
    return this.md5Checksum;
};

/**
 * Setter for Md5Checksum
 * 
 * @param {string} value 
 */
FileTransmissionRequestRequestModel.prototype.setMd5Checksum = function(value) {
    this.md5Checksum = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionRequestRequestModel.prototype.getMimeType = function() {
    return this.mimeType;
};

/**
 * Setter for MimeType
 * 
 * @param {string} value 
 */
FileTransmissionRequestRequestModel.prototype.setMimeType = function(value) {
    this.mimeType = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
FileTransmissionRequestRequestModel.prototype.getRoutingUrn = function() {
    return this.routingUrn;
};

/**
 * Setter for RoutingUrn
 * 
 * @param {string} value 
 */
FileTransmissionRequestRequestModel.prototype.setRoutingUrn = function(value) {
    this.routingUrn = value;
};


module.exports = FileTransmissionRequestRequestModel;
