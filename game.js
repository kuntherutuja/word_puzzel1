// =====================================================
// WORD PUZZLE GAME
// =====================================================


// ---------- QUESTIONS ----------

const rounds = [

    // ROUND 1
    {
        name: "Round 1",
        difficulty: "Easy",

        questions: [

            {
                word: "APPLE",
                hint: "A fruit that can be red or green."
            },

            {
                word: "HOUSE",
                hint: "A place where people live."
            },

            {
                word: "CHAIR",
                hint: "You sit on it."
            },

            {
                word: "WATER",
                hint: "You drink it."
            },

            {
                word: "PHONE",
                hint: "You use it to call someone."
            }

        ]
    },


    // ROUND 2
    {
        name: "Round 2",
        difficulty: "Medium",

        questions: [

            {
                word: "GARDEN",
                hint: "A place where flowers and plants grow."
            },

            {
                word: "JOURNEY",
                hint: "A trip from one place to another."
            },

            {
                word: "LIBRARY",
                hint: "A place full of books."
            },

            {
                word: "PICTURE",
                hint: "Another word for an image."
            },

            {
                word: "SCIENCE",
                hint: "Study of the natural world."
            }

        ]
    },


    // ROUND 3
    {
        name: "Round 3",
        difficulty: "Hard",

        questions: [

            {
                word: "TECHNOLOGY",
                hint: "Scientific knowledge used to create tools."
            },

            {
                word: "KNOWLEDGE",
                hint: "Information gained through learning."
            },

            {
                word: "CREATIVITY",
                hint: "The ability to create new ideas."
            },

            {
                word: "CHALLENGE",
                hint: "Something difficult that tests your ability."
            },

            {
                word: "ADVENTURE",
                hint: "An exciting or unusual experience."
            }

        ]
    }

];



// ---------- GAME VARIABLES ----------

let currentRound = 0;

let currentQuestion = 0;

let score = 0;

let hintUsed = false;



// ---------- SHUFFLE WORD ----------

function shuffleWord(word) {

    let letters =
        word.split("");


    for (
        let i = letters.length - 1;
        i > 0;
        i--
    ) {

        let random =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            letters[i],
            letters[random]
        ] =
        [
            letters[random],
            letters[i]
        ];

    }


    // Make sure word is not accidentally unchanged

    if (
        letters.join("") === word &&
        word.length > 2
    ) {

        return shuffleWord(word);

    }


    return letters;

}



// ---------- DISPLAY SCRAMBLED WORD ----------

function displayScrambledWord(word) {

    const container =
        document.getElementById(
            "scrambledWord"
        );


    container.innerHTML = "";


    const letters =
        shuffleWord(word);


    letters.forEach(function(letter) {

        const tile =
            document.createElement("div");


        tile.className =
            "letter-tile";


        tile.innerText =
            letter;


        container.appendChild(tile);

    });

}



// ---------- LOAD QUESTION ----------

function loadQuestion() {

    const round =
        rounds[currentRound];


    const question =
        round.questions[currentQuestion];


    // Round name

    document.getElementById(
        "roundName"
    ).innerText =
        round.name;


    // Difficulty

    const difficulty =
        document.getElementById(
            "difficulty"
        );


    difficulty.innerText =
        round.difficulty;


    difficulty.className =
        "difficulty " +
        (
            currentRound === 0
                ? "easy"
                : currentRound === 1
                    ? "medium"
                    : "hard"
        );


    // Word

    displayScrambledWord(
        question.word
    );


    // Question number

    document.getElementById(
        "questionNumber"
    ).innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        round.questions.length;


    // Progress

    const progress =
        (
            (currentQuestion + 1)
            /
            round.questions.length
        ) * 100;


    document.getElementById(
        "progress"
    ).style.width =
        progress + "%";


    // Clear answer

    document.getElementById(
        "answer"
    ).value = "";


    // Clear result

    document.getElementById(
        "result"
    ).innerText = "";


    // Hide hint

    document.getElementById(
        "hintBox"
    ).classList.add("hidden");


    hintUsed = false;


    // Focus answer box

    document.getElementById(
        "answer"
    ).focus();

}



// ---------- CHECK ANSWER ----------

function checkAnswer() {

    const answer =
        document.getElementById(
            "answer"
        ).value
        .trim()
        .toUpperCase();


    const correctAnswer =
        rounds[currentRound]
        .questions[currentQuestion]
        .word;


    const result =
        document.getElementById(
            "result"
        );


    if (answer === "") {

        result.innerText =
            "Please enter an answer.";

        result.className =
            "answer-result wrong";

        return;

    }


    if (answer === correctAnswer) {

        // Score

        if (hintUsed) {

            score += 5;

        } else {

            score += 10;

        }


        document.getElementById(
            "score"
        ).innerText =
            score;


        result.innerText =
            "✓ Correct Answer! Great job!";


        result.className =
            "answer-result correct";


        // Go to next question

        setTimeout(
            nextQuestion,
            1000
        );

    }

    else {

        result.innerText =
            "✕ Wrong answer. Try again!";


        result.className =
            "answer-result wrong";

    }

}



// ---------- SHOW HINT ----------

function showHint() {

    const question =
        rounds[currentRound]
        .questions[currentQuestion];


    document.getElementById(
        "hint"
    ).innerText =
        question.hint;


    document.getElementById(
        "hintBox"
    ).classList.remove(
        "hidden"
    );


    hintUsed = true;

}



// ---------- NEXT QUESTION ----------

function nextQuestion() {

    currentQuestion++;


    // Check current round complete

    if (
        currentQuestion >=
        rounds[currentRound].questions.length
    ) {

        currentRound++;

        currentQuestion = 0;


        // All rounds complete

        if (
            currentRound >=
            rounds.length
        ) {

            localStorage.setItem(
                "finalScore",
                score
            );


            window.location.href =
                "result.html";


            return;
        }

    }


    loadQuestion();

}



// ---------- START GAME ----------

loadQuestion();