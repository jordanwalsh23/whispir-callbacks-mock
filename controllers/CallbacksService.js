'use strict';

exports.callbacksGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "status" : "1 to 1 of 1",
  "callbacks" : [ {
    "id" : "B3EDFE83DF389DFE",
    "name" : "My Callback Server",
    "url" : "https://www.myapplication.com/myapp",
    "auth" : {
      "authType" : "querystring",
      "key" : ""
    },
    "contentType" : "json",
    "removeHTML" : "disabled",
    "email" : "jwalsh@whispir.com",
    "callbacks" : {
      "reply" : "enabled",
      "undeliverable" : "enabled"
    },
    "links" : [ {
      "rel" : "update",
      "uri" : "/callbacks/B3EDFE83DF389DFE",
      "method" : "put"
    }, {
      "rel" : "self",
      "uri" : "/callbacks/B3EDFE83DF389DFE",
      "method" : "get"
    }, {
      "rel" : "calls",
      "uri" : "/callbacks/B3EDFE83DF389DFE/calls",
      "method" : "get"
    } ]
  } ]
};
  
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
  examples['application/json'] = {
  "id" : "B3EDFE83DF389DFE",
  "name" : "My Callback Server",
  "url" : "https://www.myapplication.com/myapp",
  "auth" : {
    "authType" : "querystring",
    "key" : ""
  },
  "contentType" : "json",
  "removeHTML" : "disabled",
  "email" : "jwalsh@whispir.com",
  "callbacks" : {
    "reply" : "enabled",
    "undeliverable" : "enabled"
  },
  "links" : [ {
    "rel" : "update",
    "uri" : "/callbacks/B3EDFE83DF389DFE",
    "method" : "put"
  }, {
    "rel" : "self",
    "uri" : "/callbacks/B3EDFE83DF389DFE",
    "method" : "get"
  }, {
    "rel" : "calls",
    "uri" : "/callbacks/B3EDFE83DF389DFE/calls",
    "method" : "get"
  } ]
};
  
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
  examples['application/json'] = {
  "id" : "B3EDFE83DF389DFE",
  "name" : "My Callback Server",
  "url" : "https://www.myapplication.com/myapp",
  "auth" : {
    "authType" : "querystring",
    "key" : ""
  },
  "contentType" : "json",
  "removeHTML" : "disabled",
  "email" : "jwalsh@whispir.com",
  "callbacks" : {
    "reply" : "enabled",
    "undeliverable" : "enabled"
  },
  "links" : [ {
    "rel" : "update",
    "uri" : "/callbacks/B3EDFE83DF389DFE",
    "method" : "put"
  }, {
    "rel" : "self",
    "uri" : "/callbacks/B3EDFE83DF389DFE",
    "method" : "get"
  }, {
    "rel" : "calls",
    "uri" : "/callbacks/B3EDFE83DF389DFE/calls",
    "method" : "get"
  } ]
};
  
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

