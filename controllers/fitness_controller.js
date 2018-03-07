var express = require("express");

var router = express.Router();

// import model
var fitnessModel = require("../models/fitness.js");


// create all routes
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      workout: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/workout", function(req, res) {
  workout.create([
    "name", "skiing"
  ], [
    //req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/workout/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  workout.update({
    //sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
