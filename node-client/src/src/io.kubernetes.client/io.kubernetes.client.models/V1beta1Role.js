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
import V1ObjectMeta from './V1ObjectMeta';
import V1beta1PolicyRule from './V1beta1PolicyRule';





/**
* The V1beta1Role model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta1Role
* @version 0.3-SNAPSHOT
*/
export default class V1beta1Role {
    /**
    * Constructs a new <code>V1beta1Role</code>.
    * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta1Role
    * @class
    * @param rules {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1beta1PolicyRule>} Rules holds all the PolicyRules for this Role
    */

    constructor(rules) {
        

        
        

        this['rules'] = rules;

        
    }

    /**
    * Constructs a <code>V1beta1Role</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1Role} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1Role} The populated <code>V1beta1Role</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1Role();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [V1beta1PolicyRule]);
            }
        }
        return obj;
    }

    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    * @member {String} apiVersion
    */
    apiVersion = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard object's metadata.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Rules holds all the PolicyRules for this Role
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1beta1PolicyRule>} rules
    */
    rules = undefined;








}


