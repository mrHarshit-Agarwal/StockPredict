let mongoose = require("mongoose");
let User = require('../model/usermodel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let expect =chai.expect;
var should = chai.should();

chai.use(chaiHttp);

  describe('/POST user login', () => {
    
      it('it should not POST login request without invalid fields', (done) => {
        let newUser = {
          email: "Honeypatel123@gmail.com",
          password:"Honey@123"
          
        };
        let size= newUser.email.length;
       
        chai.request(server)
            .post('/api/login')
            .send(newUser)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  //res.body.should.have.property('email').eql('required');
                  expect(newUser).to.haveOwnProperty('email');
                  expect(newUser).to.haveOwnProperty('password');
                  expect(newUser.email).to.be.a('string');
                  expect(newUser.password).to.be.a('string');
                  expect(newUser).to.have.property('email').with.lengthOf(size);
                  expect(newUser).to.have.property('email').that.does.include('@');
                  expect(newUser).to.have.property('email').equal('Honeypatel123@gmail.com',"valid field");
                  expect('Content-Type', /json/);
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

      

  });

  describe('/POST user signup', () => {
    var newUser = {
      name: "honey Patel",
      email: "Honeypatel12378@gmail.com",
      password: "HoneyPatel@1234"
    };
    let size= newUser.name.length;
    
    it('it should not POST signup request without valid fields', (done) => {
      
      chai.request(server)
          .post('/api/signup')
          .send(newUser)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            //res.body.should.have.property('email').eql('required');
            expect(newUser).to.haveOwnProperty('email');
            expect(newUser).to.haveOwnProperty('password');
            expect(newUser).to.haveOwnProperty('name');
            expect(newUser.email).to.be.a('string');
            expect(newUser.password).to.be.a('string');
            expect(newUser.name).to.be.a('string');
            expect(newUser).to.have.property('name').with.lengthOf(size);
            expect(newUser.name).to.have.lengthOf.at.least(3);
            expect(newUser.email).contain.oneOf(['@gmail.com', '@yahoo.com']);
            expect(newUser.password).to.have.lengthOf.at.least(6);
            expect(newUser).to.have.property('name').equal('honey Patel',"valid field");
            expect('Content-Type', /json/);
            done();
          });
    });

});
