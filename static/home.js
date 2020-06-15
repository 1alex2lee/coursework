var username = "default"; //prompt("Enter username")
const header = "Hello " + username + ". Welcome to Absolute Music.";
document.getElementById("hiUser").innerHTML = header;

function openForm() {
    console.log("Login button pressed");
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

