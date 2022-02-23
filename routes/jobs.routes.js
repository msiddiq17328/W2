module.exports = app => {

    const jobs = require("../controller/jobs.controller");

    console.log(jobs);
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", jobs.create);

    // Delete a Tutorial with id
    router.delete("/delete", jobs.delete);
  
    // Retrieve all Tutorials
    router.get("/search", jobs.findAll);
  
    app.use('/jobs',router);
  };