const chai = require("chai");
const chaiHttp = require("chai-http");
const expressEventify = require("../src/lib");
const server = require("./server");
const should = chai.should();

chai.use(chaiHttp);

describe("express-eventify library", () => {
    it("should export a function", (done) => {
        expressEventify.should.be.a("function");
        done();
    });
});

describe("express application", () => {
    it("should have the '$on' property", (done) => {
        server.should.have.property("$on");
        done();
    });
    
    describe("#$on", () => {
        it("should be a function", (done) => {
            server.$on.should.be.a("function");
            done();
        });
    });
});

describe("/GET", () => {
    describe("json test 1", () => {
        it("should GET a JSON object", (done) => {
            chai.request(server)
                .get("/test-1")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.an("object");
                    response.body.message.should.a("string");
                    response.body.message.should.be.eq("json test 1");
                    done();
                });
        });      
    });

    describe("json test 2", () => {
        it("should GET a JSON object", (done) => {
            chai.request(server)
                .get("/test-2")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.an("object");
                    response.body.message.should.a("string");
                    response.body.message.should.be.eq("json test 2");
                    done();
                });
        });
    });
});

describe("/POST", () => {
    describe("plain text test 1", () => {
        it("should return plain text", (done) => {
            chai.request(server)
                .post("/test-1")
                .send({ text: "This is the first plain text test string." })
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a("string");
                    response.text.should.be.eq("[test-1]: This is the first plain text test string.");
                    done();
                });
        });
    });
    describe("plain text test 2", () => {
        it("should return plain text", (done) => {
            chai.request(server)
                .post("/test-2")
                .send({ text: "This is the second plain text test string." })
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a("string");
                    response.text.should.be.eq("[test-2]: This is the second plain text test string.");
                    done();
                });
        });
    });
});