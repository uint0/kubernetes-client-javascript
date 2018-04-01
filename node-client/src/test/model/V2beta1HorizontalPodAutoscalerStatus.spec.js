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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V2beta1HorizontalPodAutoscalerStatus', function() {
    it('should create an instance of V2beta1HorizontalPodAutoscalerStatus', function() {
      // uncomment below and update the code to test V2beta1HorizontalPodAutoscalerStatus
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus);
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be();
    });

    it('should have the property currentMetrics (base name: "currentMetrics")', function() {
      // uncomment below and update the code to test the property currentMetrics
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be();
    });

    it('should have the property currentReplicas (base name: "currentReplicas")', function() {
      // uncomment below and update the code to test the property currentReplicas
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be();
    });

    it('should have the property desiredReplicas (base name: "desiredReplicas")', function() {
      // uncomment below and update the code to test the property desiredReplicas
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastScaleTime (base name: "lastScaleTime")', function() {
      // uncomment below and update the code to test the property lastScaleTime
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be();
    });

    it('should have the property observedGeneration (base name: "observedGeneration")', function() {
      // uncomment below and update the code to test the property observedGeneration
      //var instane = new KubernetesJsClient.V2beta1HorizontalPodAutoscalerStatus();
      //expect(instance).to.be();
    });

  });

}));
