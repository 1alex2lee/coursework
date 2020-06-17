document.getElementById("loginPageBody").onload = function() {
  var username = sessionStorage.getItem("username");
  if (username != null) {  
    document.getElementById("hiUser").innerHTML =
    "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music."
    return
  };
  document.getElementById("hiUser").innerHTML =
  "Hello. Welcome to Absolute Music."
};

document.getElementById("logout").onclick = function() {
  console.log("logout button pressed")
  sessionStorage.setItem("loggedin", "false")
  sessionStorage.setItem("username", "")
  console.log(sessionStorage.getItem("loggedin"))
  document.getElementById("hiUser").innerHTML =
  "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music.";
}

document.getElementById("getCode").onclick = function() {
    const userEmail = document.getElementById("userEmail").value;
    console.log(userEmail);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      const code = Math.floor(Math.random() * 8999 + 1000);
      console.log(code);
      var templateParams = {
        "email": userEmail,
        "content": "Your verification code is " + code
      };
      console.log(templateParams);
      emailjs.send("verification_code", "verification_code", templateParams, "user_vERfr3UYJ1cNXynK5XsmL");
      document.getElementById("submitCode").onclick = function() {
        if (document.getElementById("enteredCode").value == code) {
          var username = prompt("Please enter your name.")
          sessionStorage.setItem("username", " " + username)
          // alert("You have logged in.");
          sessionStorage.setItem("loggedin", "true");
          console.log(sessionStorage.getItem("loggedin"))
          var frm = document.getElementsByName('loginForm')[0];
          window.location.href = "index.html";
        } else {
          alert("Verification code mismatch! Please try again.")
          sessionStorage.setItem("loggedin", "false");
        }
      }
    } else {
      alert("You have entered an invalid email address! Please try again.")
      sessionStorage.setItem("loggedin", "false");
    }
  }
  