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
    instance = new KubernetesJsClient.V2alpha1CronJobSpec();
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

  describe('V2alpha1CronJobSpec', function() {
    it('should create an instance of V2alpha1CronJobSpec', function() {
      // uncomment below and update the code to test V2alpha1CronJobSpec
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V2alpha1CronJobSpec);
    });

    it('should have the property concurrencyPolicy (base name: "concurrencyPolicy")', function() {
      // uncomment below and update the code to test the property concurrencyPolicy
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property failedJobsHistoryLimit (base name: "failedJobsHistoryLimit")', function() {
      // uncomment below and update the code to test the property failedJobsHistoryLimit
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property jobTemplate (base name: "jobTemplate")', function() {
      // uncomment below and update the code to test the property jobTemplate
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property startingDeadlineSeconds (base name: "startingDeadlineSeconds")', function() {
      // uncomment below and update the code to test the property startingDeadlineSeconds
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property successfulJobsHistoryLimit (base name: "successfulJobsHistoryLimit")', function() {
      // uncomment below and update the code to test the property successfulJobsHistoryLimit
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

    it('should have the property suspend (base name: "suspend")', function() {
      // uncomment below and update the code to test the property suspend
      //var instane = new KubernetesJsClient.V2alpha1CronJobSpec();
      //expect(instance).to.be();
    });

  });

}));
