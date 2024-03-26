/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from './V1LabelSelector';
import { HttpFile } from '../http/http';

/**
* ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
*/
export class V1ClusterTrustBundleProjection {
    'labelSelector'?: V1LabelSelector;
    /**
    * Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
    */
    'name'?: string;
    /**
    * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
    */
    'optional'?: boolean;
    /**
    * Relative path from the volume root to write the bundle.
    */
    'path': string;
    /**
    * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
    */
    'signerName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "signerName",
            "baseName": "signerName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ClusterTrustBundleProjection.attributeTypeMap;
    }

    public constructor() {
    }
}

