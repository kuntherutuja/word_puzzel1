// ==========================================
// WORD PUZZLE - LOGIN JAVASCRIPT
// ==========================================


// Get the login form
const loginForm = document.getElementById("loginForm");


// When user clicks Login
loginForm.addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get email
    const email =
        document.getElementById("email").value.trim();


    // Get password
    const password =
        document.getElementById("password").value;


    // Get Terms checkbox
    const terms =
        document.getElementById("terms").checked;


    // Message area
    const message =
        document.getElementById("loginMessage");


    // Check Terms
    if (!terms) {

        message.innerText =
            "Please accept Terms & Conditions.";

        message.style.color = "#ed3e5b";

        return;
    }


    // Check email and password
    if (email === "" || password === "") {

        message.innerText =
            "Please enter all details.";

        message.style.color = "#ed3e5b";

        return;
    }


    // Save email in browser
    localStorage.setItem(
        "userEmail",
        email
    );


    // Save login status
    localStorage.setItem(
        "userLoggedIn",
        "true"
    );


    // Reset score
    localStorage.setItem(
        "score",
        "0"
    );


    // Reset round
    localStorage.setItem(
        "currentRound",
        "0"
    );


    // Reset question
    localStorage.setItem(
        "currentQuestion",
        "0"
    );


    // Open Dashboard
    window.location.href =
        "dashboard.html";

});


// ==========================================
// CREATE ACCOUNT
// ==========================================

function createAccount() {

    const email =
        prompt("Enter your email address:");


    if (email === null || email.trim() === "") {

        return;
    }


    // Save email
    localStorage.setItem(
        "userEmail",
        email.trim()
    );


    // Save login status
    localStorage.setItem(
        "userLoggedIn",
        "true"
    );


    // Reset game
    localStorage.setItem(
        "score",
        "0"
    );


    localStorage.setItem(
        "currentRound",
        "0"
    );


    localStorage.setItem(
        "currentQuestion",
        "0"
    );


    // Go to Dashboard
    window.location.href =
        "dashboard.html";

}