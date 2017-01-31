
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of QueryBatchesResponseModel
 *
 * @constructor
 */
QueryBatchesResponseModel = function (obj) {
    if(!obj) {
        this.batchUrns = null;     
        this.code = null;     
    } else {
        this.batchUrns = (obj.batchUrns !== undefined && obj.batchUrns !== null)? obj.batchUrns : null;
        this.code = (obj.code !== undefined && obj.code !== null)? obj.code : null;
    }
};

QueryBatchesResponseModel.prototype = new BaseModel();
QueryBatchesResponseModel.prototype.constructor = QueryBatchesResponseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
QueryBatchesResponseModel.prototype.getBatchUrns = function() {
    return this.batchUrns;
};

/**
 * Setter for BatchUrns
 * 
 * @param {array} value 
 */
QueryBatchesResponseModel.prototype.setBatchUrns = function(value) {
    this.batchUrns = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
QueryBatchesResponseModel.prototype.getCode = function() {
    return this.code;
};

/**
 * Setter for Code
 * 
 * @param {int} value 
 */
QueryBatchesResponseModel.prototype.setCode = function(value) {
    this.code = value;
};


module.exports = QueryBatchesResponseModel;
