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
import V1NodeSelectorTerm from './V1NodeSelectorTerm';





/**
* The V1PreferredSchedulingTerm model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1PreferredSchedulingTerm
* @version 0.3-SNAPSHOT
*/
export default class V1PreferredSchedulingTerm {
    /**
    * Constructs a new <code>V1PreferredSchedulingTerm</code>.
    * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it&#39;s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1PreferredSchedulingTerm
    * @class
    * @param preference {module:io.kubernetes.client/io.kubernetes.client.models/V1NodeSelectorTerm} A node selector term, associated with the corresponding weight.
    * @param weight {Number} Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
    */

    constructor(preference, weight) {
        

        
        

        this['preference'] = preference;this['weight'] = weight;

        
    }

    /**
    * Constructs a <code>V1PreferredSchedulingTerm</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1PreferredSchedulingTerm} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1PreferredSchedulingTerm} The populated <code>V1PreferredSchedulingTerm</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PreferredSchedulingTerm();

            
            
            

            if (data.hasOwnProperty('preference')) {
                obj['preference'] = V1NodeSelectorTerm.constructFromObject(data['preference']);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
    * A node selector term, associated with the corresponding weight.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1NodeSelectorTerm} preference
    */
    preference = undefined;
    /**
    * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
    * @member {Number} weight
    */
    weight = undefined;








}


