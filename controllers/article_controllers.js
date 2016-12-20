//require express , path, models 

var express = require('express');
var path = require('path');

var Article = require("../models/article.js");


var router  = express.Router();



router.get('/',function(req,res){
	 // Grab every doc in the Articles array
	 console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
  Article.find({}).limit(5).exec(function(err, doc) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });

});



  // This is the route we will send POST requests to save each search.
router.post("/", function(req, res) {
  console.log("BODY: " + req.body.title + "   "+ req.body.url+"  "+req.body.pub_date);
  var newNews= {}

	newNews.title = req.body.title;
	newNews.url= req.body.url;
	newNews.pub_date= Date.now()
  var entry = new Article(newNews);
  
  // entry.save({}, function(err,data) {
   Article.create(newNews, function(err,data) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
})

 // This is the route we will send POST requests to save each search.
router.delete("/:id", function(req, res) {
  console.log("param: " + req.params.id);
 
    Article.remove({_id : req.params.id }, function(err,data) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
})

module.exports = router;