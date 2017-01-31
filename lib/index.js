/**
  * @module SMARTCOSMOSProfilesLib
  *  
  * Profiles provides full transparency into supply chain and manufacturing metadata associated with all types of RFID transponders, setting a new standard in customer self-service. By providing both Web and Web Service access to supply chain metadata, customers are managing their RFID-enabled IP and technical data in a highly efficient manner
  */

var Configuration = require('./Configuration');;
var BaseController = require('./Controllers/BaseController');
var DataImportEndpointsController = require('./Controllers/DataImportEndpointsController');
var TagDataEndpointsController = require('./Controllers/TagDataEndpointsController');
var TagDeliveryNetworkEndpointsController = require('./Controllers/TagDeliveryNetworkEndpointsController');
var TransactionEndpointsController = require('./Controllers/TransactionEndpointsController');
var TagAuthenticationEndpointsController = require('./Controllers/TagAuthenticationEndpointsController');
var TagVerificationEndpointsController = require('./Controllers/TagVerificationEndpointsController');
var PlatformAvailabilityEndpointsController = require('./Controllers/PlatformAvailabilityEndpointsController');
var GetTagMetadataResponseModel = require('./Models/GetTagMetadataResponseModel');
var GetSingleTagCodeMessageRequestModel = require('./Models/GetSingleTagCodeMessageRequestModel');
var GetSingleTagCodeMessageResponseModel = require('./Models/GetSingleTagCodeMessageResponseModel');
var GetKeysUsedForTagAuthenticationRequestModel = require('./Models/GetKeysUsedForTagAuthenticationRequestModel');
var GetKeysUsedForTagAuthenticationResponseModel = require('./Models/GetKeysUsedForTagAuthenticationResponseModel');
var GetApplicationDataFromTagsRequestModel = require('./Models/GetApplicationDataFromTagsRequestModel');
var GetApplicationDataFromTagsResponseModel = require('./Models/GetApplicationDataFromTagsResponseModel');
var UpdateTagValuesRequestModel = require('./Models/UpdateTagValuesRequestModel');
var UpdateTagValuesResponseModel = require('./Models/UpdateTagValuesResponseModel');
var GetOTPAuthenticationChallengeRequestModel = require('./Models/GetOTPAuthenticationChallengeRequestModel');
var GetTagDeliveryNetworkDataResponseModel = require('./Models/GetTagDeliveryNetworkDataResponseModel');
var TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel = require('./Models/TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel');
var TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel = require('./Models/TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel');
var GetVerificationStateMessageResponseModel = require('./Models/GetVerificationStateMessageResponseModel');
var QueryBatchesResponseModel = require('./Models/QueryBatchesResponseModel');
var QueryTagsResponseModel = require('./Models/QueryTagsResponseModel');
var VerifyNXPTagSignatureRequestModel = require('./Models/VerifyNXPTagSignatureRequestModel');
var VerifyNXPTagSignatureResponseModel = require('./Models/VerifyNXPTagSignatureResponseModel');
var FileTransmissionRequestRequestModel = require('./Models/FileTransmissionRequestRequestModel');
var FileTransmissionRequestResponseModel = require('./Models/FileTransmissionRequestResponseModel');
var FileTransmissionReceiptRequestModel = require('./Models/FileTransmissionReceiptRequestModel');
var VerifyTagsForAVerificationTypeRequestModel = require('./Models/VerifyTagsForAVerificationTypeRequestModel');
var VerifyTagsForAVerificationTypeResponseModel = require('./Models/VerifyTagsForAVerificationTypeResponseModel');
var VerifyTagsForRoundRockComplianceRequestModel = require('./Models/VerifyTagsForRoundRockComplianceRequestModel');
var VerifyTagsForRoundRockComplianceResponseModel = require('./Models/VerifyTagsForRoundRockComplianceResponseModel');
var GetVerificationStateMessageRequestModel = require('./Models/GetVerificationStateMessageRequestModel');
var GetTagMetadataRequestModel = require('./Models/GetTagMetadataRequestModel');
var GetTagMetadataDefinitionResponseModel = require('./Models/GetTagMetadataDefinitionResponseModel');
var GetOTPAuthenticationChallengeResponseModel = require('./Models/GetOTPAuthenticationChallengeResponseModel');
var ValidateOTPEncryptionResultRequestModel = require('./Models/ValidateOTPEncryptionResultRequestModel');
var ValidateOTPEncryptionResultResponseModel = require('./Models/ValidateOTPEncryptionResultResponseModel');
var APIException = require('./Exceptions/APIException');


function initializer () { }

//Main functional components of SMARTCOSMOSProfilesLib
initializer.Configuration = Configuration;
initializer.BaseController = BaseController;
initializer.DataImportEndpointsController = DataImportEndpointsController;
initializer.TagDataEndpointsController = TagDataEndpointsController;
initializer.TagDeliveryNetworkEndpointsController = TagDeliveryNetworkEndpointsController;
initializer.TransactionEndpointsController = TransactionEndpointsController;
initializer.TagAuthenticationEndpointsController = TagAuthenticationEndpointsController;
initializer.TagVerificationEndpointsController = TagVerificationEndpointsController;
initializer.PlatformAvailabilityEndpointsController = PlatformAvailabilityEndpointsController;

//Main Models of SMARTCOSMOSProfilesLib
initializer.GetTagMetadataResponseModel = GetTagMetadataResponseModel;
initializer.GetSingleTagCodeMessageRequestModel = GetSingleTagCodeMessageRequestModel;
initializer.GetSingleTagCodeMessageResponseModel = GetSingleTagCodeMessageResponseModel;
initializer.GetKeysUsedForTagAuthenticationRequestModel = GetKeysUsedForTagAuthenticationRequestModel;
initializer.GetKeysUsedForTagAuthenticationResponseModel = GetKeysUsedForTagAuthenticationResponseModel;
initializer.GetApplicationDataFromTagsRequestModel = GetApplicationDataFromTagsRequestModel;
initializer.GetApplicationDataFromTagsResponseModel = GetApplicationDataFromTagsResponseModel;
initializer.UpdateTagValuesRequestModel = UpdateTagValuesRequestModel;
initializer.UpdateTagValuesResponseModel = UpdateTagValuesResponseModel;
initializer.GetOTPAuthenticationChallengeRequestModel = GetOTPAuthenticationChallengeRequestModel;
initializer.GetTagDeliveryNetworkDataResponseModel = GetTagDeliveryNetworkDataResponseModel;
initializer.TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel = TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel;
initializer.TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel = TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel;
initializer.GetVerificationStateMessageResponseModel = GetVerificationStateMessageResponseModel;
initializer.QueryBatchesResponseModel = QueryBatchesResponseModel;
initializer.QueryTagsResponseModel = QueryTagsResponseModel;
initializer.VerifyNXPTagSignatureRequestModel = VerifyNXPTagSignatureRequestModel;
initializer.VerifyNXPTagSignatureResponseModel = VerifyNXPTagSignatureResponseModel;
initializer.FileTransmissionRequestRequestModel = FileTransmissionRequestRequestModel;
initializer.FileTransmissionRequestResponseModel = FileTransmissionRequestResponseModel;
initializer.FileTransmissionReceiptRequestModel = FileTransmissionReceiptRequestModel;
initializer.VerifyTagsForAVerificationTypeRequestModel = VerifyTagsForAVerificationTypeRequestModel;
initializer.VerifyTagsForAVerificationTypeResponseModel = VerifyTagsForAVerificationTypeResponseModel;
initializer.VerifyTagsForRoundRockComplianceRequestModel = VerifyTagsForRoundRockComplianceRequestModel;
initializer.VerifyTagsForRoundRockComplianceResponseModel = VerifyTagsForRoundRockComplianceResponseModel;
initializer.GetVerificationStateMessageRequestModel = GetVerificationStateMessageRequestModel;
initializer.GetTagMetadataRequestModel = GetTagMetadataRequestModel;
initializer.GetTagMetadataDefinitionResponseModel = GetTagMetadataDefinitionResponseModel;
initializer.GetOTPAuthenticationChallengeResponseModel = GetOTPAuthenticationChallengeResponseModel;
initializer.ValidateOTPEncryptionResultRequestModel = ValidateOTPEncryptionResultRequestModel;
initializer.ValidateOTPEncryptionResultResponseModel = ValidateOTPEncryptionResultResponseModel;

//Main Exceptions of SMARTCOSMOSProfilesLib
initializer.APIException = APIException;

module.exports = initializer;
