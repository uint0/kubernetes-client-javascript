/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.10.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import VersionInfo from '../io.kubernetes.client.models/VersionInfo';

/**
* Version service.
* @module io.kubernetes.client/io.kubernetes.client.apis/VersionApi
* @version 0.3-SNAPSHOT
*/
export default class VersionApi {

    /**
    * Constructs a new VersionApi. 
    * @alias module:io.kubernetes.client/io.kubernetes.client.apis/VersionApi
    * @class
    * @param {module:io.kubernetes.client/ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:io.kubernetes.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCode operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/VersionApi~getCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/VersionInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get the code version
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/VersionApi~getCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/VersionInfo}
     */
    getCode(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VersionInfo;

      return this.apiClient.callApi(
        '/version/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
