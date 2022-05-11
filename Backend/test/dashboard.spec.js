let mongoose = require("mongoose");
let User = require('../model/usermodel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let expect =chai.expect;
var should = chai.should();

chai.use(chaiHttp);

  describe('/get Dashboard data', () => {
    
      it('it should not POST login request without invalid fields', (done) => {
        
       
       
        chai.request(server)
            .get('/image/:file')
            .end((err, res) => {
                  res.should.have.status(200);
                //   res.body.should.be.a('object');
                  //res.body.should.have.property('email').eql('required');
                  
              done();
            });
      });

      

  });

 

