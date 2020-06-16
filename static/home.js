document.getElementById("homePageBody").onload = function() {
    document.getElementById("hiUser").innerHTML =
    "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music."
};

function openForm() {
    console.log("Login button pressed");
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

