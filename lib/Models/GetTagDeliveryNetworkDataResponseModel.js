
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetTagDeliveryNetworkDataResponseModel
 *
 * @constructor
 */
GetTagDeliveryNetworkDataResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.value = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.value = (obj.value !== undefined && obj.value !== null)? obj.value : null;
    }
};

GetTagDeliveryNetworkDataResponseModel.prototype = new BaseModel();
GetTagDeliveryNetworkDataResponseModel.prototype.constructor = GetTagDeliveryNetworkDataResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
GetTagDeliveryNetworkDataResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
GetTagDeliveryNetworkDataResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetTagDeliveryNetworkDataResponseModel.prototype.getValue = function() {
    return this.value;
};

/**
 * Setter for Value
 * 
 * @param {string} value 
 */
GetTagDeliveryNetworkDataResponseModel.prototype.setValue = function(value) {
    this.value = value;
};


module.exports = GetTagDeliveryNetworkDataResponseModel;
