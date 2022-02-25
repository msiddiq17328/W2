const db = require("../models"); // models path depend on your structure
const Job = db.jobs;
const { QueryTypes } = require('sequelize');
const generateQuery = require('./helpers/generateQuery');

exports.create = (req, res) => {
  // Create a Job
  const job = {
    id:Date.now().toString(),
    job_title: req.body.job_title ?? null,
    company: req.body.company ?? null,
    salary_range: `Rs ${req.body.salary_range_1} - Rs ${req.body.salary_range_2} a month` ?? null,
    location: req.body.location ?? null, 
    post_date: new Date() ?? null,
    apply_email: req.body.apply_email ?? null,
    leave_type: req.body.leave_type ?? null
  };

  // Save Job in the database
  Job.create(job)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      status:"fail",
      message: err.message || "Some error occurred while creating the Tutorial."
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.query.id;

  Job.findByPk(id)
  .then(data => {
    if (data != null) {
      res.send(data);
    } else {
      res.send({
        status:"fail",
        message: `Cannot get job with id=${id}. Maybe job does not exist!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      status:"fail",
      message: "Some error occurred while retrieving tutorials."
    });
  });
};

exports.delete = (req, res) => {

  const id = req.body.id;

  console.log(id);
  Job.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "job was deleted successfully!"
      });
    } else {
      res.send({
        status:"fail",
        message: `Cannot delete job with id=${id}. Maybe job was not found!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      status:"fail",
      message: err.message || "Could not delete job with id=" + id
    });
  });
};

exports.findAll = async (req, res) => {
  const offset = parseInt(req.query.offset);
  const limit = parseInt(req.query.limit);


  let queryString = generateQuery(req);
  await Job.sequelize.query(queryString, {replacements: { limiter: limit,offset: offset }, type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      status:"fail",
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};