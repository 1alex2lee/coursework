/// if username is stored in sessionStorage, add it to the Headers, otherwise set
// header to not include any usernames
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

// the logout function when the logout button is pressed
// also removes username from header
document.getElementById("logout").onclick = function() {
  console.log("logout button pressed")
  sessionStorage.setItem("loggedin", "false")
  sessionStorage.setItem("username", "")
  console.log(sessionStorage.getItem("loggedin"))
  document.getElementById("hiUser").innerHTML =
  "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music.";
}

// send and verifies verification code with EmailJS API
document.getElementById("getCode").onclick = function() {
    const userEmail = document.getElementById("userEmail").value;
    console.log(userEmail);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      // checks if email is in a valid email format
      const code = Math.floor(Math.random() * 8999 + 1000);
      // generates code between 1000 and 9999 (4 digits)
      console.log(code);
      var templateParams = {
        "email": userEmail,
        "content": "Your verification code is " + code
      }; // sets email content to send to user
      console.log(templateParams);
      emailjs.send("verification_code", "verification_code", templateParams, "user_vERfr3UYJ1cNXynK5XsmL");
      // send email
      // compares user entered code with code generated
      document.getElementById("submitCode").onclick = function() {
        if (document.getElementById("enteredCode").value == code) {
          var username = prompt("Please enter your name.")
          sessionStorage.setItem("username", " " + username)
          // asks for and store username in session
          sessionStorage.setItem("loggedin", "true");
          // stores logged in status in session
          console.log(sessionStorage.getItem("loggedin"))
          var frm = document.getElementsByName('loginForm')[0];
          window.location.href = "index.html";
        } else {
          // code to run when there is a verification code mismatch
          alert("Verification code mismatch! Please try again.")
          sessionStorage.setItem("loggedin", "false");
        }
      }
    } else {
      // code to run when email entered is invalid
      alert("You have entered an invalid email address! Please try again.")
      sessionStorage.setItem("loggedin", "false");
    }
  }
  