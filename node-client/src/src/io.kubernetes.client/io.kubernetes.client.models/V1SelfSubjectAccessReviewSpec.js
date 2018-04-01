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
import V1NonResourceAttributes from './V1NonResourceAttributes';
import V1ResourceAttributes from './V1ResourceAttributes';





/**
* The V1SelfSubjectAccessReviewSpec model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1SelfSubjectAccessReviewSpec
* @version 0.3-SNAPSHOT
*/
export default class V1SelfSubjectAccessReviewSpec {
    /**
    * Constructs a new <code>V1SelfSubjectAccessReviewSpec</code>.
    * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1SelfSubjectAccessReviewSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1SelfSubjectAccessReviewSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1SelfSubjectAccessReviewSpec} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1SelfSubjectAccessReviewSpec} The populated <code>V1SelfSubjectAccessReviewSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SelfSubjectAccessReviewSpec();

            
            
            

            if (data.hasOwnProperty('nonResourceAttributes')) {
                obj['nonResourceAttributes'] = V1NonResourceAttributes.constructFromObject(data['nonResourceAttributes']);
            }
            if (data.hasOwnProperty('resourceAttributes')) {
                obj['resourceAttributes'] = V1ResourceAttributes.constructFromObject(data['resourceAttributes']);
            }
        }
        return obj;
    }

    /**
    * NonResourceAttributes describes information for a non-resource access request
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1NonResourceAttributes} nonResourceAttributes
    */
    nonResourceAttributes = undefined;
    /**
    * ResourceAuthorizationAttributes describes information for a resource access request
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1ResourceAttributes} resourceAttributes
    */
    resourceAttributes = undefined;








}


