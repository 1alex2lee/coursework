import UI from "./ui.js"

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

const arbObj = fc.object({key: "user", values: fc.string(), maxDepth: 0});

describe("Posting a comment", function () {
    it(
        "Given an object with a username, comment, and active video; " +
        "After sending it to the server; " +
        "Server responds with an array with the user and comment as the last object", function () {
            fc.assert(fc.property(
                arbObj,
                
                function (obj) {
                    return UI.test(obj) === UI.test(obj);
                }
            ));
    });
});