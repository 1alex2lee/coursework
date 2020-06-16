import Ajax from "./ajax.js";

const UI = Object.create(null);
const el = (id) => document.getElementById(id);
var activevideo = null

UI.init = function () {
    const userInput = el("newComment");
    // const requestBox = el("requestBox");
    // const responseBox = el("responseBox");
    const activeuser = sessionStorage.getItem("username");

    function getComments(request) {
        const response = Ajax.query(request);

        response.then(function (object) {
            console.log(object[0].user)
            var string = "<tr><th style='width: 25%'>User</th><th>Comment</th></tr>"
            object.forEach(function(each) {
                string += "<tr><td style='text-align: center'>"+each.user+"</td><td>"+each.comment+"</td></tr>"
            })
            // responseBox.textContent = string;
            el("commentSection").innerHTML = string
        });
    }

    el("grade1cmajor").onclick = function() {
        activevideo = "grade1cmajor"
        const request = {
            user: "", comment: "", vid: "grade1cmajor"
        };

        getComments(request);
    };
    el("grade1gmajor").onclick = function() {
        activevideo = "grade1gmajor"
        const request = {
            user: "", comment: "", vid: "grade1gmajor"
        };

        getComments(request);
    };
    el("greatestloveofall").onclick = function() {
        activevideo = "greatestloveofall"
        const request = {
            user: "", comment: "", vid: "greatestloveofall"
        };

        getComments(request);
    };
    el("medley").onclick = function() {
        activevideo = "medley"
        const request = {
            user: "", comment: "", vid: "medley"
        };

        getComments(request);
    };
    el("世上只有").onclick = function() {
        activevideo = "世上只有"
        const request = {
            user: "", comment: "", vid: "世上只有"
        };

        getComments(request);
    };

    el("postComment").onclick = function(event) {
        // if (event.key !== "Enter" || event.shiftKey) {
        //     return; // Do nothing special.
        // }
        console.log("Submit button clicked")

        event.preventDefault();

        const request = {
            user: activeuser, comment: userInput.value, vid: activevideo
        };

        getComments(request);

        // response.then(function(object) {
        //     return object.json();x
        // }).then(function (data) {
        //     console.log(data);
        // });

        // const responseMessage = response.then((res) => res.message);

        // responseMessage.then(function (msg) {
        //     display.textContent = msg;
        // });

    };
};

export default Object.freeze(UI);
