document.getElementById("hiUser").innerHTML =
"Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music.";

document.getElementById("videoPageBody").onload = function() {
  var status = sessionStorage.getItem("loggedin");
  if (status === "true") {
    console.log("User is logged on");
  }
  if (status === "false" || status === null) {
    console.log ("User is not logged in");
    window.location.href = "login.html";
  }
};

function loadComments(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      writeComments(this);
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

function writeComments(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  xmlDoc.documentElement.innerHTML += "<comments><user>eid</user><comment>i just said this</comment></comments>"
  console.log(xmlDoc.documentElement.innerHTML)
  var table="<tr><th>Username</th><th>Comment</th></tr>";
  var x = xmlDoc.getElementsByTagName("comments");
  for (i = 0; i <x.length; i+=1) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("user")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("comment")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("commentSection").innerHTML = null;
  document.getElementById("commentSection").innerHTML += table;
}

// document.getElementById("postComment").onclick = function () {
//   var newComment = document.getElementById("newComment").value
//   if (newComment != null) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         writeFile(this, newComment);
//       }
//     };
//     xhttp.open("GET", "./comments.xml", true);
//     xhttp.send();
//   }
// }

// function writeFile(xml, newComment) {
//   var newComment = document.getElementById("newComment").value
//   console.log(newComment)
//   var xmlDoc = xml.responseXML;
//   var newel = xmlDoc.createElement("user");
//   var x = xmlDoc.getElementsByTagName("comments")[0];
//   x.appendChild(newel);
//   document.getElementById("newComment").value = null
// }

document.getElementById("postComment").onclick = function() {
  console.log("submit comment pressed");
  var newComment = document.getElementById("newComment").value;
  var string = "<tr><td>"+$.trim(sessionStorage.getItem("username"))+"</td><td>"+newComment+"</td></tr>";
  console.log(string);
  document.getElementById("commentSection").innerHTML += string;
  document.getElementById("newComment").value = null;
};

function changeSource() {
      $("#g1cmscales").click(function(){
      $("#vidSource").attr("src", "./vids/Grade 1 C major scales.MOV");
      $("#vid").load();
      loadComments("./comments/g1cmscales.xml");
      });
      $("#g1gmscales").click(function(){
      $("#vidSource").attr("src", "./vids/Grade 1 G major scales.MOV");
      $("#vid").load();
      loadComments("./comments/g1gmscales.xml");
      });
    $("#greatestloveofall").click(function(){
      $("#vidSource").attr("src", "./vids/greatest love of all.MOV");
      $("#vid").load();
      loadComments("./comments/greatestloveofall.xml");
      });
    $("#medley").click(function(){
      $("#vidSource").attr("src", "./vids/medley.MOV");
      $("#vid").load();
      loadComments("./comments/medley.xml");
      });
    $("#世上只有").click(function(){
      $("#vidSource").attr("src", "./vids/世上只有.MOV");
      $("#vid").load();
      loadComments("./comments/世上只有.xml");
      });
};

changeSource();