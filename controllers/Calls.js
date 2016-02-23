'use strict';

var url = require('url');


var Calls = require('./CallsService');


module.exports.callbacksCallbackIdCallsGet = function callbacksCallbackIdCallsGet (req, res, next) {
  Calls.callbacksCallbackIdCallsGet(req.swagger.params, res, next);
};

module.exports.callbacksCallbackIdCallsPut = function callbacksCallbackIdCallsPut (req, res, next) {
  Calls.callbacksCallbackIdCallsPut(req.swagger.params, res, next);
};
