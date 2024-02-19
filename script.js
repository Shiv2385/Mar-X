function validateLogin() {
    console.log("validateLogin called");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "a" && password === "s") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function checkAuthentication() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("Checking authentication...");

    if (isLoggedIn) {
        console.log("User is already authenticated.");
        const currentPage = window.location.pathname;
        if (currentPage === "/select.html") {
            window.location.href = "index.html";
        }
    } else {
        console.log("User not authenticated. Redirecting to select.html");
        window.location.href = "select.html";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "select.html";
}
