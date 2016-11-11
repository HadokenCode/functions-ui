var express = require('express');
var router = express.Router();
var helpers = require('../helpers/app-helpers.js');

router.get('/:app/routes', function(req, res) {
  successcb = function(data){
    res.json(data.routes);
  }

  helpers.getApiEndpoint(req, "/v1/apps/" + encodeURIComponent(req.params.app) + "/routes", {}, successcb, helpers.standardErrorcb)
});

// Create New Route
router.post('/:app/routes', function(req, res) {
  successcb = function(data){
    //console.log("success!", data);
    res.json(data);
  }

  helpers.postApiEndpoint(req, "/v1/apps/" + encodeURIComponent(req.params.app) + "/routes", {}, {route: {path: req.body.path, image: req.body.image}}, successcb, helpers.standardErrorcb);
});

// Update Route
router.patch('/:app/routes/:route', function(req, res) {
  successcb = function(data){
    //console.log("success!", data);
    res.json(data);
  }

  helpers.execApiEndpoint('PUT', req,  "/v1/apps/" + encodeURIComponent(req.params.app)+ "/routes/" + encodeURIComponent(req.params.route), {}, {route: {path: req.body.path, image: req.body.image}}, successcb, helpers.standardErrorcb);
});

// Delete Route
router.delete('/:app/routes/:route', function(req, res) {
  successcb = function(data){
    //console.log("success!", data);
    res.json(data);
  }

  helpers.execApiEndpoint('DELETE', req,  "/v1/apps/" + encodeURIComponent(req.params.app)+ "/routes/" + encodeURIComponent(req.params.route) , {}, {}, successcb, helpers.standardErrorcb);
});


module.exports = router;
