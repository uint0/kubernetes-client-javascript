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
    instance = new KubernetesJsClient.Policy_v1beta1Api();
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

  describe('Policy_v1beta1Api', function() {
    describe('createNamespacedPodDisruptionBudget', function() {
      it('should call createNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test createNamespacedPodDisruptionBudget
        //instance.createNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPodSecurityPolicy', function() {
      it('should call createPodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test createPodSecurityPolicy
        //instance.createPodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedPodDisruptionBudget', function() {
      it('should call deleteCollectionNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedPodDisruptionBudget
        //instance.deleteCollectionNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionPodSecurityPolicy', function() {
      it('should call deleteCollectionPodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionPodSecurityPolicy
        //instance.deleteCollectionPodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedPodDisruptionBudget', function() {
      it('should call deleteNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedPodDisruptionBudget
        //instance.deleteNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePodSecurityPolicy', function() {
      it('should call deletePodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test deletePodSecurityPolicy
        //instance.deletePodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedPodDisruptionBudget', function() {
      it('should call listNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test listNamespacedPodDisruptionBudget
        //instance.listNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPodDisruptionBudgetForAllNamespaces', function() {
      it('should call listPodDisruptionBudgetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listPodDisruptionBudgetForAllNamespaces
        //instance.listPodDisruptionBudgetForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPodSecurityPolicy', function() {
      it('should call listPodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test listPodSecurityPolicy
        //instance.listPodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedPodDisruptionBudget', function() {
      it('should call patchNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedPodDisruptionBudget
        //instance.patchNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedPodDisruptionBudgetStatus', function() {
      it('should call patchNamespacedPodDisruptionBudgetStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedPodDisruptionBudgetStatus
        //instance.patchNamespacedPodDisruptionBudgetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchPodSecurityPolicy', function() {
      it('should call patchPodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test patchPodSecurityPolicy
        //instance.patchPodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedPodDisruptionBudget', function() {
      it('should call readNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test readNamespacedPodDisruptionBudget
        //instance.readNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedPodDisruptionBudgetStatus', function() {
      it('should call readNamespacedPodDisruptionBudgetStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedPodDisruptionBudgetStatus
        //instance.readNamespacedPodDisruptionBudgetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readPodSecurityPolicy', function() {
      it('should call readPodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test readPodSecurityPolicy
        //instance.readPodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedPodDisruptionBudget', function() {
      it('should call replaceNamespacedPodDisruptionBudget successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedPodDisruptionBudget
        //instance.replaceNamespacedPodDisruptionBudget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedPodDisruptionBudgetStatus', function() {
      it('should call replaceNamespacedPodDisruptionBudgetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedPodDisruptionBudgetStatus
        //instance.replaceNamespacedPodDisruptionBudgetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replacePodSecurityPolicy', function() {
      it('should call replacePodSecurityPolicy successfully', function(done) {
        //uncomment below and update the code to test replacePodSecurityPolicy
        //instance.replacePodSecurityPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
