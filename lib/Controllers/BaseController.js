/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 01/31/2017
 */


var BaseController = {

    /**
     * Global error handling
     * @param	{HttpContext}	context			HttpContext containing request and response objects
     * @return	{function}		callback		Callback function in the form of function(error, response, context)
     */
	validateResponse(context, endpName) {
        var errorObj = {
            errorMessage: "",
            errorCode: "",
            errorResponse: context.response.body
        };
		var returnObj = {
            error: errorObj,
            response: null,
            context: context
        };

        returnObj.error.errorMessage = "HTTP Response Not OK";
        returnObj.error.errorCode = context.response.statusCode;

		return returnObj;
    },
};

module.exports = BaseController;
