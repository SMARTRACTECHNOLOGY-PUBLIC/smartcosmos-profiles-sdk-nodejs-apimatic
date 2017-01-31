
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of GetTagMetadataDefinitionResponseModel
 *
 * @constructor
 */
GetTagMetadataDefinitionResponseModel = function (obj) {
    if(!obj) {
        this.code = null;     
        this.properties = null;     
        this.tagId = null;     
    } else {
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
        this.properties = (obj.properties !== undefined && obj.properties !== null)? obj.properties : null;
        this.tagId = (obj.tagId !== undefined && obj.tagId !== null)? obj.tagId : null;
    }
};

GetTagMetadataDefinitionResponseModel.prototype = new BaseModel();
GetTagMetadataDefinitionResponseModel.prototype.constructor = GetTagMetadataDefinitionResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
GetTagMetadataDefinitionResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
GetTagMetadataDefinitionResponseModel.prototype.setCode = function(value) {
    this.code = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
GetTagMetadataDefinitionResponseModel.prototype.getProperties = function() {
    return this.properties;
};

/**
 * Setter for Properties
 * 
 * @param {array} value 
 */
GetTagMetadataDefinitionResponseModel.prototype.setProperties = function(value) {
    this.properties = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetTagMetadataDefinitionResponseModel.prototype.getTagId = function() {
    return this.tagId;
};

/**
 * Setter for TagId
 * 
 * @param {string} value 
 */
GetTagMetadataDefinitionResponseModel.prototype.setTagId = function(value) {
    this.tagId = value;
};


module.exports = GetTagMetadataDefinitionResponseModel;
