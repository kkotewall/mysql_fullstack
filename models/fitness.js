// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var workout = {
  all: function(cb) {
    orm.all("workout", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays. (using table name: workout)
  create: function(cols, vals, cb) {
    orm.create("workout", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("workout", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("workout", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = fitnessModel;
