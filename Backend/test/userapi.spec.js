let mongoose = require("mongoose");
let User = require('../model/usermodel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let expect =chai.expect;
var should = chai.should();

chai.use(chaiHttp);

  describe('/POST user login', () => {
      it('it should not POST login request without valid fields', (done) => {
        let newUser = {
          name: "honey Patel",
          email: "Honeypatel123@gmail.com",
          
        };
        chai.request(server)
            .post('/api/login')
            .send(newUser)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  //res.body.should.have.property('email').eql('required');
                  expect(newUser).to.haveOwnProperty('email');
                  expect(newUser.email).to.be.a('string');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

      it('it should not POST login request without valid datatypes of fields', (done) => {
        var newUser = {
         
          email: "Honeypatel123@gmail.com",
          password: "Honey@2342"
          
        };
        chai.request(server)
            .post('/api/login')
            .send(newUser)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  newUser.doINeed.suncream(email).should.equal(true);
                  expect(newUser.email).to.be.a('String');
                  expect(newUser.password).to.be.a('string');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

  });

  describe('/POST user signup', () => {
    it('it should not POST signup request without valid fields', (done) => {
      var newUser = {
        name: "honey Patel",
        email: "Honeypatel12378@gmail.com",
        password: "HoneyPatel@1234"
      };
      chai.request(server)
          .post('/api/signup')
          .send(newUser)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                //res.body.should.have.property('email').eql('required');
                expect(newUser).to.haveOwnProperty('email');
                expect(newUser.email).to.be.a('string');
              //   res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });

});
