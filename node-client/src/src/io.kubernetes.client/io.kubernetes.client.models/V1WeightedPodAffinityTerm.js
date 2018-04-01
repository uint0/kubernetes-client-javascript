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
import V1PodAffinityTerm from './V1PodAffinityTerm';





/**
* The V1WeightedPodAffinityTerm model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1WeightedPodAffinityTerm
* @version 0.3-SNAPSHOT
*/
export default class V1WeightedPodAffinityTerm {
    /**
    * Constructs a new <code>V1WeightedPodAffinityTerm</code>.
    * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1WeightedPodAffinityTerm
    * @class
    * @param podAffinityTerm {module:io.kubernetes.client/io.kubernetes.client.models/V1PodAffinityTerm} Required. A pod affinity term, associated with the corresponding weight.
    * @param weight {Number} weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
    */

    constructor(podAffinityTerm, weight) {
        

        
        

        this['podAffinityTerm'] = podAffinityTerm;this['weight'] = weight;

        
    }

    /**
    * Constructs a <code>V1WeightedPodAffinityTerm</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1WeightedPodAffinityTerm} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1WeightedPodAffinityTerm} The populated <code>V1WeightedPodAffinityTerm</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1WeightedPodAffinityTerm();

            
            
            

            if (data.hasOwnProperty('podAffinityTerm')) {
                obj['podAffinityTerm'] = V1PodAffinityTerm.constructFromObject(data['podAffinityTerm']);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Required. A pod affinity term, associated with the corresponding weight.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1PodAffinityTerm} podAffinityTerm
    */
    podAffinityTerm = undefined;
    /**
    * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
    * @member {Number} weight
    */
    weight = undefined;








}


