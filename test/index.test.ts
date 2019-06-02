import app from '../src/index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

console.log('1234');
console.log(chai.request);

describe("Index", () => {
  describe("GET /", () => {
    it('should return "Hello World"', (done) => {
      return chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    })
  })
})
