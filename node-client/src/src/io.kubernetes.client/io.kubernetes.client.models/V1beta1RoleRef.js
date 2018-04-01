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
* The V1beta1RoleRef model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta1RoleRef
* @version 0.3-SNAPSHOT
*/
export default class V1beta1RoleRef {
    /**
    * Constructs a new <code>V1beta1RoleRef</code>.
    * RoleRef contains information that points to the role being used
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta1RoleRef
    * @class
    * @param apiGroup {String} APIGroup is the group for the resource being referenced
    * @param kind {String} Kind is the type of resource being referenced
    * @param name {String} Name is the name of resource being referenced
    */

    constructor(apiGroup, kind, name) {
        

        
        

        this['apiGroup'] = apiGroup;this['kind'] = kind;this['name'] = name;

        
    }

    /**
    * Constructs a <code>V1beta1RoleRef</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1RoleRef} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1RoleRef} The populated <code>V1beta1RoleRef</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1RoleRef();

            
            
            

            if (data.hasOwnProperty('apiGroup')) {
                obj['apiGroup'] = ApiClient.convertToType(data['apiGroup'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * APIGroup is the group for the resource being referenced
    * @member {String} apiGroup
    */
    apiGroup = undefined;
    /**
    * Kind is the type of resource being referenced
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Name is the name of resource being referenced
    * @member {String} name
    */
    name = undefined;








}


