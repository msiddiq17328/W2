module.exports = (sequelize, Sequelize) => {

    const Job = sequelize.define("jobs", {
        job_title: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        salary_range: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        post_date: {
            type: Sequelize.DATE
        },
        apply_email: {
            type: Sequelize.STRING
        },
        leave_type: {
            type: Sequelize.STRING
        },
    });

    return Job;

    };