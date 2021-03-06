var models = require('../models');
var bluebird = require('bluebird');
var utils = require('./utils')


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results){
        utils.sendResponse(res, results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
        console.log("in post req.body", req.body);
        models.messages.post(req.body, function(){
        utils.sendResponse(res, req.body, 201);
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


//Needed?
  // 'OPTIONS': function(request, response){
  //   utils.sendResponse(response);
  // }


