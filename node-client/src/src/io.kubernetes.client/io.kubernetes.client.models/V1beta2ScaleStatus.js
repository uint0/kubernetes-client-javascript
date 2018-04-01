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
* The V1beta2ScaleStatus model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta2ScaleStatus
* @version 0.3-SNAPSHOT
*/
export default class V1beta2ScaleStatus {
    /**
    * Constructs a new <code>V1beta2ScaleStatus</code>.
    * ScaleStatus represents the current status of a scale subresource.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta2ScaleStatus
    * @class
    * @param replicas {Number} actual number of observed instances of the scaled object.
    */

    constructor(replicas) {
        

        
        

        this['replicas'] = replicas;

        
    }

    /**
    * Constructs a <code>V1beta2ScaleStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta2ScaleStatus} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta2ScaleStatus} The populated <code>V1beta2ScaleStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta2ScaleStatus();

            
            
            

            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], {'String': 'String'});
            }
            if (data.hasOwnProperty('targetSelector')) {
                obj['targetSelector'] = ApiClient.convertToType(data['targetSelector'], 'String');
            }
        }
        return obj;
    }

    /**
    * actual number of observed instances of the scaled object.
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
    * @member {Object.<String, String>} selector
    */
    selector = undefined;
    /**
    * label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
    * @member {String} targetSelector
    */
    targetSelector = undefined;








}


