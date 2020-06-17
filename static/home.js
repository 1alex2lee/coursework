document.getElementById("homePageBody").onload = function() {
    var username = sessionStorage.getItem("username");
    if (username != null) {  
      document.getElementById("hiUser").innerHTML =
      "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music."
      return
    };
    document.getElementById("hiUser").innerHTML =
    "Hello. Welcome to Absolute Music."
};


