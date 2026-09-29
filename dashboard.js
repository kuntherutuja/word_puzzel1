// =====================================================
// DASHBOARD JAVASCRIPT
// =====================================================


// Check whether user is logged in

if (
    localStorage.getItem("userLoggedIn")
    !== "true"
) {

    window.location.href =
        "index.html";
}



// Display user email

const email =
    localStorage.getItem("userEmail");


document.getElementById("userEmail")
    .innerText = email || "Player";



// Start game

function startGame() {

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


    window.location.href =
        "game.html";
}



// Logout

function logout() {

    localStorage.removeItem(
        "userLoggedIn"
    );


    localStorage.removeItem(
        "userEmail"
    );


    window.location.href =
        "index.html";
}