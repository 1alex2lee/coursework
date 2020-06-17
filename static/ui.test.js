import Ajax from "./ajax.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;
const chai = window.chai;

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
        "Given an object with only an arbitrary active video; " +
        "after sending it to the server; " +
        "server responds with an array with at least 1 user comment pair", function () {
            fc.assert(fc.property(
                arbVid,

                function (vid) {
                    const obj = {user:"",comment:"",vid:vid};
                    const response = Ajax.query(obj);
                    return response.then(function (object) {
                        if (object[0].user != null && object[0].comment != null) {
                            return true;
                        }
                        else {
                            return false;
                        }   
                    });
                }
            ), {"verbose": true})
        }
    );
});

describe("Posting a comment", function () {
    it(
        "Given an object with arbitrary user, comment, and active video; " +
        "after sending it to the server; " +
        "server responds with an array with the send user and comment; " +
        "as the last object in the array", function () {
            fc.assert(fc.property(
                arbUser,
                arbComment,
                arbVid,

                function (user, comment, vid) {
                    const obj = {user:user,comment:comment,vid:vid};
                    // console.log(obj)
                    const response = Ajax.query(obj);
                    return response.then(function (object){
                        if (object[object.length - 1].user == user && object[object.length - 1].comment == comment) {
                            return true;
                        }
                        return false;
                    });
                }
            ), {"verbose": true});
    });
});