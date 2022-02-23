module.exports = app => {

    const jobs = require("../controller/jobs.controller");

    console.log(jobs);
  
    var router = require("express").Router();
  
    // Create a new job
    router.post("/create", jobs.create);

    // Delete a job with id
    router.delete("/delete", jobs.delete);
  
    // Retrieve all jobs
    router.get("/search", jobs.findAll);

    //find a single job
    router.get("/find", jobs.findOne);
  
    app.use('/jobs',router);
  };