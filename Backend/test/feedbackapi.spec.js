let mongoose = require("mongoose");
let Feedback = require('../model/feedback');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let expect =chai.expect;
var should = chai.should();

chai.use(chaiHttp);

  describe('/POST feedback ', () => {
    
      it('it should not POST feedback request with invalid fields', (done) => {
        let feedback = {
          email: "Honeypatel123@gmail.com",
          name:"honey Patel",
          desc:"Nice Website"
          
        };
        let size= feedback.email.length;
       
        chai.request(server)
            .post('/api/login')
            .send(feedback)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  //res.body.should.have.property('email').eql('required');
                  expect(feedback).to.haveOwnProperty('email');
                  expect(feedback).to.haveOwnProperty('name');
                  expect(feedback).to.haveOwnProperty('desc');
                  expect(feedback.email).to.be.a('string');
                  expect(feedback.name).to.be.a('string');
                  expect(feedback.desc).to.be.a('string');
                  expect(feedback).to.have.property('email').with.lengthOf(size);
                //   expect(feedback).to.have.property('email').that.does.include('@')
                  expect(feedback).to.have.property('email').equal('Honeypatel123@gmail.com',"valid field");
                  expect(feedback.desc).to.have.lengthOf.at.least(10);
                  expect('Content-Type', /json/);
                //   res.body.errors.pages.should.have.property('kind').eql('required');
                  
              done();
            });
          
      });
  
});
