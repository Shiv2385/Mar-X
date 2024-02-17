function validateLogin() {
    console.log("validateLogin called");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "a" && password === "s") {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "select.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function checkAuthentication() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    console.log("Checking authentication...");

    if (!isLoggedIn) {
        console.log("User not authenticated. Redirecting to index.html");
        window.location.href = "index.html";
    } else {
        console.log("User is authenticated.");
    }
}




function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
