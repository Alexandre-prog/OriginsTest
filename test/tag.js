process.env.NODE_ENV = 'test';

const Tag = require('../app/models/Tag')

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

describe('Tags', () => {
    beforeEach((done) => {
        Tag.removeAttribute({}, (err) => {
            done();
        });
    });
});

describe('/GET tags', () => { // test de la route GET pour les tags
    it('should get all tags', (done) => {
        chai.request(server).get('/tags').end((err, res) => {
            res.should.have.status(200);
            done();
        });
    
    });
});