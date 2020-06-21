const db = require ("..");
const path  = require('path');
const mainRouter = require('express').Router();


  //This route renders the homepage
  mainRouter.get("/", function(req,res){
      res.sendFile(path.join(__dirname, "..","..","booksearch", "build", 'index.html'));
  });
  mainRouter.get("/books", function(req,res) {
    db.Books.find({}).then(results => res.json (results))
  });
  
  mainRouter.get("/saved",
   function(req, res) {
    console.log(db.Books);
    db.Books.find({})
        .then(function(result){
         
        res.status(200).json({Books: result});
    }).catch(function(err){ 
      console.log(err)
      res.status(404).json({error: err.toString()}) });
  });
  // Posts saved Books 
  mainRouter.put("/saved/:id", function(req, res) {
    db.Books.findOneAndUpdate({"_id": req.params.id}, {"$set": {"saved": true}})
    .then(function(result) {
        res.json(result);
    }).catch(function(err){ res.json(err) });
  })
  
  mainRouter.post("/saved", function(req, res) {
    db.Books.create(req.body)
    .then(function(result) {
        res.json(result);
    }).catch(function(err){ res.json(err) });
  })
  

  module.exports  = mainRouter;