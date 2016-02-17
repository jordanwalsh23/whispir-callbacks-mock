'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.callbacksCallbackIdDELETE = function callbacksCallbackIdDELETE (req, res, next) {
  Default.callbacksCallbackIdDELETE(req.swagger.params, res, next);
};
