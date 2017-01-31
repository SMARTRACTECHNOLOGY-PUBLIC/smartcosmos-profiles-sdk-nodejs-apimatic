
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel
 *
 * @constructor
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel = function (obj) {
    if(!obj) {
        this.account = null;     
        this.metadata = null;     
        this.objectAddresses = null;     
        this.objects = null;     
        this.relationships = null;     
    } else {
        this.account = (obj.account !== undefined && obj.account !== null)? obj.account : null;
        this.metadata = (obj.metadata !== undefined && obj.metadata !== null)? obj.metadata : null;
        this.objectAddresses = (obj.objectAddresses !== undefined && obj.objectAddresses !== null)? obj.objectAddresses : null;
        this.objects = (obj.objects !== undefined && obj.objects !== null)? obj.objects : null;
        this.relationships = (obj.relationships !== undefined && obj.relationships !== null)? obj.relationships : null;
    }
};

TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype = new BaseModel();
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.constructor = TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {object}
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getAccount = function() {
    return this.account;
};

/**
 * Setter for Account
 * 
 * @param {object} value 
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setAccount = function(value) {
    this.account = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getMetadata = function() {
    return this.metadata;
};

/**
 * Setter for Metadata
 * 
 * @param {array} value 
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setMetadata = function(value) {
    this.metadata = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getObjectAddresses = function() {
    return this.objectAddresses;
};

/**
 * Setter for ObjectAddresses
 * 
 * @param {array} value 
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setObjectAddresses = function(value) {
    this.objectAddresses = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getObjects = function() {
    return this.objects;
};

/**
 * Setter for Objects
 * 
 * @param {array} value 
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setObjects = function(value) {
    this.objects = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getRelationships = function() {
    return this.relationships;
};

/**
 * Setter for Relationships
 * 
 * @param {array} value 
 */
TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setRelationships = function(value) {
    this.relationships = value;
};


module.exports = TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel;
