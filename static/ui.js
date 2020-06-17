import Ajax from "./ajax.js";

const UI = Object.create(null);
const el = (id) => document.getElementById(id);

UI.init = function () {
    const userInput = el("newComment");
    const activeuser = sessionStorage.getItem("username");
    sessionStorage.setItem("activevideo", null) // creates active video in storage

    // defines function that takes Ajax response and displays it on the page
    // with given request object
    function getComments(request) {
        const response = Ajax.query(request);

        response.then(function (object) {
            // console.log(object[0].user)
            var string = "<tr><th style='width: 25%'>User</th><th>Comment</th></tr>"
            // writes table element
            object.forEach(function(each) {
                // adds each user and comment to table element
                string += "<tr><td style='text-align: center'>"+each.user+"</td><td>"+each.comment+"</td></tr>"
            })
            // responseBox.textContent = string;
            el("commentSection").innerHTML = string // replaces inner HTML with table element
        });
    };

    // defines function that refreshes the comment section with any video choosen
    function refreshComments(vid) { 
        sessionStorage.setItem("activevideo", vid) // puts active video in storage
        console.log(vid+" selected")
        const request = {user:"", comment:"", vid: vid}
        // request object has empty user and comment values
        // this tells the server this is not a post comment request
        // but only a retrieve comments request
        getComments(request)
    };

    // the following all refreshes comments from choosen video when a video is choosen
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

    // defined function for user to post a comment
    el("postComment").onclick = function() {
        console.log("Submit button clicked")
        event.preventDefault();
        var activevideo = sessionStorage.getItem("activevideo") // gets active video from storage
        const request = {
            user: activeuser, comment: userInput.value, vid: activevideo
        }; // defines request to send to server via Ajax
        getComments(request); // sends request to server, gets comments back
        refreshComments(activevideo); // get comments back again to make sure new comment shows
    };

    // do the same when enter key is pressed
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
