import Ajax from "./ajax.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;
const chai = window.chai;
const expect = chai.expect;

const arbVid = fc.constantFrom(
    "grade1cmajor",
    "grade1gmajor",
    "greatestloveofall",
    "medley",
    "世上只有"
);
const arbUser = fc.lorem();
const arbComment = fc.lorem();
// const user = fc.constantFrom("user");
// const arbObj = fc.jsonObject({key: fc.constantFrom("user"), values: fc.string(), maxDepth: 0},
//                     {key: fc.constantFrom("comment"), values: fc.string(), maxDepth: 0},
//                     {key: fc.constantFrom("vid"), values: arbVid, maxDepth: 0}
//                 );

describe("Retrieving existing comments", function () {
    it(
        "Grade 1 C major scales",
        async () => {
            const obj = {user: "", comment: "", vid: "grade1cmajor"};
            const response = await Ajax.query(obj);
            // console.log(response[0].user);
            expect(response[0]).to.be.an('object');
            expect(response[0]).to.have.property("user");
            expect(response[0]).to.have.property("comment");
        },{"verbose": true}
    );
    it(
        "Grade 1 G major scales",
        async () => {
            const obj = {user: "", comment: "", vid: "grade1gmajor"};
            const response = await Ajax.query(obj);
            // console.log(response[0].user);
            expect(response[0]).to.be.an('object');
            expect(response[0]).to.have.property("user");
            expect(response[0]).to.have.property("comment");
        },{"verbose": true}
    );
    it(
        "Greatest Love of All",
        async () => {
            const obj = {user: "", comment: "", vid: "greatestloveofall"};
            const response = await Ajax.query(obj);
            // console.log(response[0].user);
            expect(response[0]).to.be.an('object');
            expect(response[0]).to.have.property("user");
            expect(response[0]).to.have.property("comment");
        },{"verbose": true}
    );
    it(
        "Medley",
        async () => {
            const obj = {user: "", comment: "", vid: "medley"};
            const response = await Ajax.query(obj);
            // console.log(response[0].user);
            expect(response[0]).to.be.an('object');
            expect(response[0]).to.have.property("user");
            expect(response[0]).to.have.property("comment");
        },{"verbose": true}
    );
    it(
        "世上只有",
        async () => {
            const obj = {user: "", comment: "", vid: "世上只有"};
            const response = await Ajax.query(obj);
            // console.log(response[0].user);
            expect(response[0]).to.be.an('object');
            expect(response[0]).to.have.property("user");
            expect(response[0]).to.have.property("comment");
        },{"verbose": true}
    );
})

describe("Posting a comment", function () {
    it(
        "Grade 1 C major scales",
        async () => {
            const arbUser = fc.lorem();
            const arbComment = "new comment";
            const obj = {user: arbUser, comment: arbComment, vid: "grade1cmajor"};
            const add = await Ajax.query(obj);
            const response = await Ajax.query({user:"", comment: "", vid: "grade1cmajor"});
            console.log(obj);
            const lastComment = response[response.length - 1];
            console.log(lastComment);
            expect(lastComment).to.be.an('object');
            expect(lastComment).to.have.property("user");
            expect(lastComment).to.have.property("comment");
            expect(lastComment.comment).to.equal(arbComment);
        }
    );
    it(
        "Grade 1 G major scales",
        async () => {
            const arbUser = fc.lorem();
            const arbComment = "new comment";
            const obj = {user: arbUser, comment: arbComment, vid: "grade1gmajor"};
            const add = await Ajax.query(obj);
            const response = await Ajax.query({user:"", comment: "", vid: "grade1gmajor"});
            console.log(obj);
            const lastComment = response[response.length - 1];
            console.log(lastComment);
            expect(lastComment).to.be.an('object');
            expect(lastComment).to.have.property("user");
            expect(lastComment).to.have.property("comment");
            expect(lastComment.comment).to.equal(arbComment);
        }
    );
    it(
        "Greatest Love of All",
        async () => {
            const arbUser = fc.lorem();
            const arbComment = "new comment";
            const obj = {user: arbUser, comment: arbComment, vid: "greatestloveofall"};
            const add = await Ajax.query(obj);
            const response = await Ajax.query({user:"", comment: "", vid: "greatestloveofall"});
            console.log(obj);
            const lastComment = response[response.length - 1];
            console.log(lastComment);
            expect(lastComment).to.be.an('object');
            expect(lastComment).to.have.property("user");
            expect(lastComment).to.have.property("comment");
            expect(lastComment.comment).to.equal(arbComment);
        }
    );
    it(
        "medley",
        async () => {
            const arbUser = fc.lorem();
            const arbComment = "new comment";
            const obj = {user: arbUser, comment: arbComment, vid: "medley"};
            const add = await Ajax.query(obj);
            const response = await Ajax.query({user:"", comment: "", vid: "medley"});
            console.log(obj);
            const lastComment = response[response.length - 1];
            console.log(lastComment);
            expect(lastComment).to.be.an('object');
            expect(lastComment).to.have.property("user");
            expect(lastComment).to.have.property("comment");
            expect(lastComment.comment).to.equal(arbComment);
        }
    );
    it(
        "世上只有",
        async () => {
            const arbUser = fc.lorem();
            const arbComment = "new comment";
            const obj = {user: arbUser, comment: arbComment, vid: "世上只有"};
            const add = await Ajax.query(obj);
            const response = await Ajax.query({user:"", comment: "", vid: "世上只有"});
            console.log(obj);
            const lastComment = response[response.length - 1];
            console.log(lastComment);
            expect(lastComment).to.be.an('object');
            expect(lastComment).to.have.property("user");
            expect(lastComment).to.have.property("comment");
            expect(lastComment.comment).to.equal(arbComment);
        }
    );
})