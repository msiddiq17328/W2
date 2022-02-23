const db = require("../models"); // models path depend on your structure
const Job = db.jobs;
const { QueryTypes } = require('sequelize');

exports.create = (req, res) => {

  // Create a Job
  const job = {
    id:Date.now().toString(),
    job_title: req.body.job_title ?? null,
    company: req.body.company ?? null,
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
  const searchParams = req.query.input_params;

  //order by the search result
  const sortingColumns = ['post_date','location','leave_type'];
  let orderBy = req.body.order_by == null || req.body.order_by == '' ? "post_date" : req.body.order_by;
  orderBy = sortingColumns.includes(orderBy) ? orderBy : "post_date";

  //query to be used to fetch search results
  let queryToBeExecuted = null;
  let searching = '';
  if (searchParams && searchParams) {
    const myArray = searchParams.split(",");
    myArray.forEach((element,index) => {
      if(index > 0)
      {
        searching += " OR job_title like " + "'%" + element + "%'";
        if(index + 1 == myArray.length)
        {
          searching += " order by " + orderBy + " desc"
        }
      } else {
        searching += "like " + "'%" + element + "%'";
        if(myArray.length == 1)
        {
          searching += " order by " + orderBy + " desc"
        }
      }
    }); 
    queryToBeExecuted = "select * from jobs where job_title " + searching;
  } else {
    queryToBeExecuted = `select * from jobs where job_title like '%%'`;
  }

  //execute the query here
  await Job.sequelize.query(queryToBeExecuted, { type: QueryTypes.SELECT })
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