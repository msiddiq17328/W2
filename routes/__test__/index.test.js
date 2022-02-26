const app = require('../../app');
const request = require('supertest');


describe('register',() => {
    it('create a job status code - 200',async()=>{
        const res = await request(app)
        .post('/jobs/create')
        .send({
            id:Date.now().toString(),
            job_title: "backend",
            company: "ga",
            salary_range1: "25000",
            salary_range2: "30000",
            location:  "lahore",
            post_date: new Date(),
            apply_email: "Test@gmail.com",
            leave_type: "Weekly"
        });
        expect(res.statusCode).toEqual(200);
    });

    it('return find by id - code 200',async()=>{
        const res = await request(app)
        .get('/jobs/find')
        .send([{id:"1645877748513"}]);
        expect(res.statusCode).toEqual(200);
    });

    it('delete user by id', async () => {
        const res = await request(app)
        .delete('/jobs/delete')
        .send({
            id:"1645877748587"
        });
        expect(res.statusCode).toEqual(200);
      });
});