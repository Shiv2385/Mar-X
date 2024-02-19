function validateLogin() {
    console.log("validateLogin called");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "a" && password === "s") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "select.html";
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
        if (currentPage === "/index.html") {
            window.location.href = "select.html";
        }
    } else {
        console.log("User not authenticated. Redirecting to index.html");
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
