
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetSingleTagCodeMessageRequestModel
 *
 * @constructor
 */
GetSingleTagCodeMessageRequestModel = function (obj) {
    if(!obj) {
        this.tagCode = null;     
    } else {
        this.tagCode = (obj.tagCode !== undefined && obj.tagCode !== null)? obj.tagCode : null;
    }
};

GetSingleTagCodeMessageRequestModel.prototype = new BaseModel();
GetSingleTagCodeMessageRequestModel.prototype.constructor = GetSingleTagCodeMessageRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
GetSingleTagCodeMessageRequestModel.prototype.getTagCode = function() {
    return this.tagCode;
};

/**
 * Setter for TagCode
 * 
 * @param {int} value 
 */
GetSingleTagCodeMessageRequestModel.prototype.setTagCode = function(value) {
    this.tagCode = value;
};


module.exports = GetSingleTagCodeMessageRequestModel;
