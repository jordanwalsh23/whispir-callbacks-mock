'use strict';

exports.callbacksCallbackIdCallsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  * status (String)
  * attemptedDate (date)
  * statusCode (BigDecimal)
  * statusMessage (String)
  * messageId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "status" : "1 to 1 of 1",
  "calls" : [ {
    "id" : "B3EDFE83DF389DFE",
    "messageId" : "ABC4857BCCF484575FCA",
    "messageLocation" : "https://api.whispir.com/messages/ABC4857BCCF484575FCA",
    "from" : {
      "name" : "Fred Waters",
      "mri" : "Fred_Waters.528798.Sandbox@Contact.whispir.com",
      "mobile" : "+1000000000",
      "email" : "",
      "voice" : ""
    },
    "responseMessage" : {
      "channel" : "SMS",
      "acknowledged" : "09/01/13 13:22",
      "content" : "Yes, I accept. Will I need to bring steel cap boots?"
    },
    "callback" : {
      "id" : "B384FD38DCBADE38",
      "name" : "My Callback Server",
      "url" : "https://www.myapplication.com/myapp",
      "attemptedDate" : "09/01/13 13:22",
      "statusCode" : 500,
      "statusMessage" : "Internal Server Error"
    },
    "link" : [ {
      "rel" : "updateCall",
      "uri" : "/callbacks/B384FD38DCBADE38/calls/B3EDFE83DF389DFE",
      "method" : "PUT"
    } ]
  } ],
  "link" : [ {
    "rel" : "next",
    "uri" : "/callbacks/B384FD38DCBADE38/calls?limit=20&offset=20",
    "method" : "GET"
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

exports.callbacksCallbackIdCallsPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * callbackId (String)
  * id (List)
  * status (CallStatus)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

