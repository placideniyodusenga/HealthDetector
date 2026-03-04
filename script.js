
document.addEventListener("DOMContentLoaded", function() {
    let loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if(username === "" || password === "") {
            alert("Please enter username and password");
            return;
        }

        if(username === "admin" && password === "1234") {
            window.location.href = "homepage.html";
        } else {
            alert("Wrong login details");
        }
    });
});