import UI from "./ui.js";

window.addEventListener("DOMContentLoaded", function () {
    UI.init();
});

// if username is stored in sessionStorage, add it to the Headers, otherwise set
// header to not include any usernames
document.getElementById("videoPageBody").onload = function() {
  var username = sessionStorage.getItem("username");
  if (username != null) {  
    document.getElementById("hiUser").innerHTML =
    "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music."
    return
  };
  document.getElementById("hiUser").innerHTML =
  "Hello. Welcome to Absolute Music."
  // checks log in status
  var status = sessionStorage.getItem("loggedin");
  if (status === "true") {
    console.log("User is logged on");
  }
  if (status === "false" || status === null) {
    console.log ("User is not logged in");
    alert("You need to log in first!")
    window.location.href = "login.html";
  }
  // redirects user to login page to log in before user can view videos
};

// defines function that changes video source when video name is clicked
function changeSource() {
      $("#grade1cmajor").click(function(){
      $("#vidSource").attr("src", "./vids/Grade 1 C major scales.mp4");
      $("#vid").load();
      document.getElementById("newComment").value = null;
      });
      $("#grade1gmajor").click(function(){
      $("#vidSource").attr("src", "./vids/Grade 1 G major scales.mp4");
      $("#vid").load();
      document.getElementById("newComment").value = null;
      });
    $("#greatestloveofall").click(function(){
      $("#vidSource").attr("src", "./vids/greatest love of all.mp4");
      $("#vid").load();
      document.getElementById("newComment").value = null;
      });
    $("#medley").click(function(){
      $("#vidSource").attr("src", "./vids/medley.mp4");
      $("#vid").load();
      document.getElementById("newComment").value = null;
      });
    $("#世上只有").click(function(){
      $("#vidSource").attr("src", "./vids/世上只有.mp4");
      $("#vid").load();
      document.getElementById("newComment").value = null;
      });
};

// runs function that changes video source
changeSource();