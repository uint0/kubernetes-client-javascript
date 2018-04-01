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


import ApiClient from "../ApiClient";
import V1APIResourceList from '../io.kubernetes.client.models/V1APIResourceList';
import V1DeleteOptions from '../io.kubernetes.client.models/V1DeleteOptions';
import V1Status from '../io.kubernetes.client.models/V1Status';
import V1alpha1PodPreset from '../io.kubernetes.client.models/V1alpha1PodPreset';
import V1alpha1PodPresetList from '../io.kubernetes.client.models/V1alpha1PodPresetList';

/**
* Settings_v1alpha1 service.
* @module io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api
* @version 0.3-SNAPSHOT
*/
export default class Settings_v1alpha1Api {

    /**
    * Constructs a new Settings_v1alpha1Api. 
    * @alias module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api
    * @class
    * @param {module:io.kubernetes.client/ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:io.kubernetes.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~createNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~createNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset}
     */
    createNamespacedPodPreset(namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling createNamespacedPodPreset");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNamespacedPodPreset");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1alpha1PodPreset;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollectionNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~deleteCollectionNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete collection of PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts._continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {Boolean} opts.includeUninitialized If true, partially initialized resources are included in the response.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {Number} opts.limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~deleteCollectionNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1Status}
     */
    deleteCollectionNamespacedPodPreset(namespace, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling deleteCollectionNamespacedPodPreset");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'continue': opts['_continue'],
        'fieldSelector': opts['fieldSelector'],
        'includeUninitialized': opts['includeUninitialized'],
        'labelSelector': opts['labelSelector'],
        'limit': opts['limit'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1Status;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~deleteNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a PodPreset
     * @param {String} name name of the PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1DeleteOptions} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Number} opts.gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param {Boolean} opts.orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param {String} opts.propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~deleteNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1Status}
     */
    deleteNamespacedPodPreset(name, namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteNamespacedPodPreset");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling deleteNamespacedPodPreset");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteNamespacedPodPreset");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'gracePeriodSeconds': opts['gracePeriodSeconds'],
        'orphanDependents': opts['orphanDependents'],
        'propagationPolicy': opts['propagationPolicy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1Status;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIResources operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~getAPIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~getAPIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1APIResourceList}
     */
    getAPIResources(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1APIResourceList;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~listNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPresetList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts._continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {Boolean} opts.includeUninitialized If true, partially initialized resources are included in the response.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {Number} opts.limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~listNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPresetList}
     */
    listNamespacedPodPreset(namespace, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling listNamespacedPodPreset");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'continue': opts['_continue'],
        'fieldSelector': opts['fieldSelector'],
        'includeUninitialized': opts['includeUninitialized'],
        'labelSelector': opts['labelSelector'],
        'limit': opts['limit'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      let returnType = V1alpha1PodPresetList;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPodPresetForAllNamespaces operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~listPodPresetForAllNamespacesCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPresetList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind PodPreset
     * @param {Object} opts Optional parameters
     * @param {String} opts._continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {Boolean} opts.includeUninitialized If true, partially initialized resources are included in the response.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {Number} opts.limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~listPodPresetForAllNamespacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPresetList}
     */
    listPodPresetForAllNamespaces(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'continue': opts['_continue'],
        'fieldSelector': opts['fieldSelector'],
        'includeUninitialized': opts['includeUninitialized'],
        'labelSelector': opts['labelSelector'],
        'limit': opts['limit'],
        'pretty': opts['pretty'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      let returnType = V1alpha1PodPresetList;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/podpresets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~patchNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * partially update the specified PodPreset
     * @param {String} name name of the PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~patchNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset}
     */
    patchNamespacedPodPreset(name, namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling patchNamespacedPodPreset");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling patchNamespacedPodPreset");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchNamespacedPodPreset");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['application/json-patch+json', 'application/merge-patch+json', 'application/strategic-merge-patch+json'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1alpha1PodPreset;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~readNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read the specified PodPreset
     * @param {String} name name of the PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Boolean} opts.exact Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param {Boolean} opts._export Should this value be exported.  Export strips fields that a user can not specify.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~readNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset}
     */
    readNamespacedPodPreset(name, namespace, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling readNamespacedPodPreset");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling readNamespacedPodPreset");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'exact': opts['exact'],
        'export': opts['_export']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1alpha1PodPreset;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceNamespacedPodPreset operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~replaceNamespacedPodPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace the specified PodPreset
     * @param {String} name name of the PodPreset
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/Settings_v1alpha1Api~replaceNamespacedPodPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1PodPreset}
     */
    replaceNamespacedPodPreset(name, namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling replaceNamespacedPodPreset");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling replaceNamespacedPodPreset");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceNamespacedPodPreset");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1alpha1PodPreset;

      return this.apiClient.callApi(
        '/apis/settings.k8s.io/v1alpha1/namespaces/{namespace}/podpresets/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
