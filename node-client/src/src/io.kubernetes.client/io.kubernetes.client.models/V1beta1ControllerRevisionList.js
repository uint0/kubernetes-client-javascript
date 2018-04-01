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
import V1ListMeta from './V1ListMeta';
import V1beta1ControllerRevision from './V1beta1ControllerRevision';





/**
* The V1beta1ControllerRevisionList model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta1ControllerRevisionList
* @version 0.3-SNAPSHOT
*/
export default class V1beta1ControllerRevisionList {
    /**
    * Constructs a new <code>V1beta1ControllerRevisionList</code>.
    * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta1ControllerRevisionList
    * @class
    * @param items {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1beta1ControllerRevision>} Items is the list of ControllerRevisions
    */

    constructor(items) {
        

        
        

        this['items'] = items;

        
    }

    /**
    * Constructs a <code>V1beta1ControllerRevisionList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1ControllerRevisionList} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1ControllerRevisionList} The populated <code>V1beta1ControllerRevisionList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1ControllerRevisionList();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [V1beta1ControllerRevision]);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ListMeta.constructFromObject(data['metadata']);
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
    * Items is the list of ControllerRevisions
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1beta1ControllerRevision>} items
    */
    items = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1ListMeta} metadata
    */
    metadata = undefined;








}


