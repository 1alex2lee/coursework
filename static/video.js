import UI from "./ui.js";

window.addEventListener("DOMContentLoaded", function () {
    UI.init();
});

document.getElementById("videoPageBody").onload = function() {
  document.getElementById("hiUser").innerHTML =
  "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music.";
  var status = sessionStorage.getItem("loggedin");
  if (status === "true") {
    console.log("User is logged on");
  }
  if (status === "false" || status === null) {
    console.log ("User is not logged in");
    alert("You need to log in first!")
    window.location.href = "login.html";
  }
};

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

changeSource();