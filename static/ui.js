import Ajax from "./ajax.js";

const UI = Object.create(null);
const el = (id) => document.getElementById(id);

UI.init = function () {
    const userInput = el("newComment");
    // const requestBox = el("requestBox");
    // const responseBox = el("responseBox");
    const activeuser = sessionStorage.getItem("username");
    sessionStorage.setItem("activevideo", null)

    function getComments(request) {
        const response = Ajax.query(request);

        response.then(function (object) {
            // console.log(object[0].user)
            var string = "<tr><th style='width: 25%'>User</th><th>Comment</th></tr>"
            object.forEach(function(each) {
                string += "<tr><td style='text-align: center'>"+each.user+"</td><td>"+each.comment+"</td></tr>"
            })
            // responseBox.textContent = string;
            el("commentSection").innerHTML = string
        });
    };

    function refreshComments(vid) { 
        sessionStorage.setItem("activevideo", vid)
        console.log(vid+" selected")
        const request = {user:"", comment:"", vid: vid}
        getComments(request)
    };

    el("grade1cmajor").onclick = function() {
        refreshComments("grade1cmajor")
    };
    el("grade1gmajor").onclick = function() {
        refreshComments("grade1gmajor")
    };
    el("greatestloveofall").onclick = function() {
        refreshComments("greatestloveofall")
    };
    el("medley").onclick = function() {
        refreshComments("medley")
    };
    el("世上只有").onclick = function() {
        refreshComments("世上只有")
    };

    el("postComment").onclick = function() {
        console.log("Submit button clicked")
        event.preventDefault();
        var activevideo = sessionStorage.getItem("activevideo")
        const request = {
            user: activeuser, comment: userInput.value, vid: activevideo
        };
        getComments(request);
        refreshComments(activevideo);
    };

    userInput.onkeydown = function() {
        if (event.key !== "Enter" || event.shiftKey) {
            return; // Do nothing special.
        };
        console.log("Submit button clicked")
        event.preventDefault();
        var activevideo = sessionStorage.getItem("activevideo")
        const request = {
            user: activeuser, comment: userInput.value, vid: activevideo
        };
        getComments(request);
        refreshComments(activevideo);
    };
};

export default Object.freeze(UI);
