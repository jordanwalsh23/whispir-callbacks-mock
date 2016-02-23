'use strict';

exports.callbacksCallbackIdCallsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  * searchCriteria (String)
  * searchValue (String)
  * criteriaFromDate (String)
  * criteriaFromTime (String)
  * criteriaToDate (String)
  * criteriaToTime (String)
  * limit (String)
  * offset (String)
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

exports.callbacksCallbackIdCallsPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  * id (List)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

