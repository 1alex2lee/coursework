document.getElementById("sheetMusicPageBody").onload = function() {
    document.getElementById("hiUser").innerHTML =
    "Hello" + sessionStorage.getItem("username") + ". Welcome to Absolute Music."
};