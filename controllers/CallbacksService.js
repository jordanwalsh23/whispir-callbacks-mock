'use strict';

exports.callbacksGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.callbacksPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callback (CallbackRequest)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.callbacksCallbackIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.callbacksCallbackIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  * callback (CallbackRequest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.callbacksCallbackIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

