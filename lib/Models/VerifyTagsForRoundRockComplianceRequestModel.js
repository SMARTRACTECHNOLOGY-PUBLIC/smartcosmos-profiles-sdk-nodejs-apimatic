
/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of VerifyTagsForRoundRockComplianceRequestModel
 *
 * @constructor
 */
VerifyTagsForRoundRockComplianceRequestModel = function (obj) {
    if(!obj) {
        this.tagIds = null;     
    } else {
        this.tagIds = (obj.tagIds !== undefined && obj.tagIds !== null)? obj.tagIds : null;
    }
};

VerifyTagsForRoundRockComplianceRequestModel.prototype = new BaseModel();
VerifyTagsForRoundRockComplianceRequestModel.prototype.constructor = VerifyTagsForRoundRockComplianceRequestModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
VerifyTagsForRoundRockComplianceRequestModel.prototype.getTagIds = function() {
    return this.tagIds;
};

/**
 * Setter for TagIds
 * 
 * @param {array} value 
 */
VerifyTagsForRoundRockComplianceRequestModel.prototype.setTagIds = function(value) {
    this.tagIds = value;
};


module.exports = VerifyTagsForRoundRockComplianceRequestModel;
