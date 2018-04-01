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


import ApiClient from '../ApiClient';





/**
* The V1ResourceQuotaStatus model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1ResourceQuotaStatus
* @version 0.3-SNAPSHOT
*/
export default class V1ResourceQuotaStatus {
    /**
    * Constructs a new <code>V1ResourceQuotaStatus</code>.
    * ResourceQuotaStatus defines the enforced hard limits and observed use.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1ResourceQuotaStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1ResourceQuotaStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1ResourceQuotaStatus} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1ResourceQuotaStatus} The populated <code>V1ResourceQuotaStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ResourceQuotaStatus();

            
            
            

            if (data.hasOwnProperty('hard')) {
                obj['hard'] = ApiClient.convertToType(data['hard'], {'String': 'String'});
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = ApiClient.convertToType(data['used'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
    * @member {Object.<String, String>} hard
    */
    hard = undefined;
    /**
    * Used is the current observed total usage of the resource in the namespace.
    * @member {Object.<String, String>} used
    */
    used = undefined;








}


