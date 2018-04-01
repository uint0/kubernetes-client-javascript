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
import V1PersistentVolumeClaimSpec from './V1PersistentVolumeClaimSpec';
import V1PersistentVolumeClaimStatus from './V1PersistentVolumeClaimStatus';





/**
* The V1PersistentVolumeClaim model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaim
* @version 0.3-SNAPSHOT
*/
export default class V1PersistentVolumeClaim {
    /**
    * Constructs a new <code>V1PersistentVolumeClaim</code>.
    * PersistentVolumeClaim is a user&#39;s request for and claim to a persistent volume
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaim
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1PersistentVolumeClaim</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaim} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaim} The populated <code>V1PersistentVolumeClaim</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PersistentVolumeClaim();

            
            
            

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
                obj['spec'] = V1PersistentVolumeClaimSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1PersistentVolumeClaimStatus.constructFromObject(data['status']);
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
    * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimSpec} spec
    */
    spec = undefined;
    /**
    * Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimStatus} status
    */
    status = undefined;








}


