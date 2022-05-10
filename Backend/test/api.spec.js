let mongoose = require("mongoose");
let Book = require('../model/usermodel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let expect =chai.expect;

chai.use(chaiHttp);

// describe('Books', () => {
//     beforeEach((done) => {
//         Book.remove({}, (err) => { 
//            done();           
//         });        
//     });
//   describe('/GET book', () => {
//       it('it should GET all the books', (done) => {
//         chai.request(server)
//             .get('/book')
//             .end((err, res) => {
//                   res.should.have.status(200);
//                   res.body.should.be.a('array');
//                   res.body.length.should.be.eql(0);
//               done();
//             });
//       });
//   });
  /*
  * Test the /POST route
  */
  describe('/POST user login', () => {
      it('it should not POST a book without pages field', (done) => {
          let user = {
              email: "test124@gmail.com",
              password: "honey@1234",
             
          }
        chai.request(server)
            .post('/api/login')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  //res.body.should.have.property('email').eql('required');
                  expect(user).to.haveOwnProperty('email');
                  expect(user.email).to.be.a('String');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

  });
