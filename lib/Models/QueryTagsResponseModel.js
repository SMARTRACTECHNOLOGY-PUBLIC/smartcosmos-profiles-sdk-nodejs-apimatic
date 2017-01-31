
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of QueryTagsResponseModel
 *
 * @constructor
 */
QueryTagsResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.tagIds = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.tagIds = (obj.tagIds !== undefined && obj.tagIds !== null)? obj.tagIds : null;
    }
};

QueryTagsResponseModel.prototype = new BaseModel();
QueryTagsResponseModel.prototype.constructor = QueryTagsResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
QueryTagsResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
QueryTagsResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
QueryTagsResponseModel.prototype.getTagIds = function() {
    return this.tagIds;
};

/**
 * Setter for TagIds
 * 
 * @param {array} value 
 */
QueryTagsResponseModel.prototype.setTagIds = function(value) {
    this.tagIds = value;
};


module.exports = QueryTagsResponseModel;
