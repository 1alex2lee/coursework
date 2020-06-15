import Ajax from "./ajax.js";

const UI = Object.create(null);
const el = (id) => document.getElementById(id);

UI.init = function () {
    const userInput = el("newComment");
    // const requestBox = el("requestBox");
    // const responseBox = el("responseBox");
    const activeuser = sessionStorage.getItem("username");

    el("postComment").onclick = function (event) {
        // if (event.key !== "Enter" || event.shiftKey) {
        //     return; // Do nothing special.
        // }
        console.log("Submit button clicked")

        event.preventDefault();

        const request = {
            user:activeuser,comment:userInput.value
        };

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
