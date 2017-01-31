
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of UpdateTagValuesRequestModel
 *
 * @constructor
 */
UpdateTagValuesRequestModel = function (obj) {
    if(!obj) {
        this.appId = null;     
        this.tags = null;     
    } else {
        this.appId = (obj.appId !== undefined && obj.appId !== null)? obj.appId : null;
        this.tags = (obj.tags !== undefined && obj.tags !== null)? obj.tags : null;
    }
};

UpdateTagValuesRequestModel.prototype = new BaseModel();
UpdateTagValuesRequestModel.prototype.constructor = UpdateTagValuesRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
UpdateTagValuesRequestModel.prototype.getAppId = function() {
    return this.appId;
};

/**
 * Setter for AppId
 * 
 * @param {string} value 
 */
UpdateTagValuesRequestModel.prototype.setAppId = function(value) {
    this.appId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
UpdateTagValuesRequestModel.prototype.getTags = function() {
    return this.tags;
};

/**
 * Setter for Tags
 * 
 * @param {array} value 
 */
UpdateTagValuesRequestModel.prototype.setTags = function(value) {
    this.tags = value;
};


module.exports = UpdateTagValuesRequestModel;
