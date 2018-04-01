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
import ExtensionsV1beta1DeploymentSpec from './ExtensionsV1beta1DeploymentSpec';
import ExtensionsV1beta1DeploymentStatus from './ExtensionsV1beta1DeploymentStatus';
import V1ObjectMeta from './V1ObjectMeta';





/**
* The ExtensionsV1beta1Deployment model module.
* @module io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1Deployment
* @version 0.3-SNAPSHOT
*/
export default class ExtensionsV1beta1Deployment {
    /**
    * Constructs a new <code>ExtensionsV1beta1Deployment</code>.
    * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1Deployment
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ExtensionsV1beta1Deployment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1Deployment} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1Deployment} The populated <code>ExtensionsV1beta1Deployment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionsV1beta1Deployment();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = ExtensionsV1beta1DeploymentSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ExtensionsV1beta1DeploymentStatus.constructFromObject(data['status']);
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
    * Standard object metadata.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Specification of the desired behavior of the Deployment.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1DeploymentSpec} spec
    */
    spec = undefined;
    /**
    * Most recently observed status of the Deployment.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1DeploymentStatus} status
    */
    status = undefined;








}


