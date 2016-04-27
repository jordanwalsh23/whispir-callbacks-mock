'use strict';

var url = require('url');


var Callbacks = require('./CallbacksService');


module.exports.callbacksCallbackIdDelete = function callbacksCallbackIdDelete (req, res, next) {
  Callbacks.callbacksCallbackIdDelete(req.swagger.params, res, next);
};

module.exports.callbacksCallbackIdGet = function callbacksCallbackIdGet (req, res, next) {
  Callbacks.callbacksCallbackIdGet(req.swagger.params, res, next);
};

module.exports.callbacksCallbackIdPut = function callbacksCallbackIdPut (req, res, next) {
  Callbacks.callbacksCallbackIdPut(req.swagger.params, res, next);
};

module.exports.callbacksGet = function callbacksGet (req, res, next) {
  Callbacks.callbacksGet(req.swagger.params, res, next);
};

module.exports.callbacksPost = function callbacksPost (req, res, next) {
  Callbacks.callbacksPost(req.swagger.params, res, next);
};
