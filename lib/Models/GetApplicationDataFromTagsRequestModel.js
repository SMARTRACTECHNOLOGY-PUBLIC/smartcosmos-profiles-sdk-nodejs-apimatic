
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetApplicationDataFromTagsRequestModel
 *
 * @constructor
 */
GetApplicationDataFromTagsRequestModel = function (obj) {
    if(!obj) {
        this.appId = null;     
        this.tagIds = null;     
    } else {
        this.appId = (obj.appId !== undefined && obj.appId !== null)? obj.appId : null;
        this.tagIds = (obj.tagIds !== undefined && obj.tagIds !== null)? obj.tagIds : null;
    }
};

GetApplicationDataFromTagsRequestModel.prototype = new BaseModel();
GetApplicationDataFromTagsRequestModel.prototype.constructor = GetApplicationDataFromTagsRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetApplicationDataFromTagsRequestModel.prototype.getAppId = function() {
    return this.appId;
};

/**
 * Setter for AppId
 * 
 * @param {string} value 
 */
GetApplicationDataFromTagsRequestModel.prototype.setAppId = function(value) {
    this.appId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
GetApplicationDataFromTagsRequestModel.prototype.getTagIds = function() {
    return this.tagIds;
};

/**
 * Setter for TagIds
 * 
 * @param {array} value 
 */
GetApplicationDataFromTagsRequestModel.prototype.setTagIds = function(value) {
    this.tagIds = value;
};


module.exports = GetApplicationDataFromTagsRequestModel;
