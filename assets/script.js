// Variables for each HTML element to Hide/Show
var startPage = document.querySelector(".startPage");
var quizPage = document.querySelector(".quiz");
var endPage = document.querySelector(".endPage");
var highScoresEl = document.querySelector(".highScores")
var timerEl = document.querySelector(".timer");

// Variables for functioning buttons for answering questions/starting game
var startButton = document.querySelector("#startButton");
var questionEl = document.querySelector("#question");
var choicesEl = document.getElementById("choices");
console.log(choicesEl);
// Variable for timer visible on global scope
var timeCount = 05;
var timer;
var score = 0;
var counter = 0;

var questions = [
    {
        question: "are you having a GREAT time?",
        answers: ["yes", "nah", "nope", "never"],
        correct: "yes"
    },
    {
        question: "this is neat?",
        answers: ["very", "kinda", "sorta", "Most Definitely"],
        correct: "Most Definitely"
    }

];

// function to start quiz and hide Start Page
function startQuiz() {
    startPage.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: block;");

    // Starts quiz and timer functions
    startTimer();
    renderQuestion(); // calling counter before allowing user to answer

}

// displays game score screen and highscores list
function endGame() {
    var highScore = [];
    quizPage.setAttribute("style", "display: none");
    endPage.setAttribute("style", "display: flex;justify-content: space-around;align-items: center;");
    nameInput = prompt("Your score is: " + score + "\r\nEnter Name here: ")
    endPage.children[0].children[1].textContent = "Thanks for playing " + nameInput + "\nYour score is: " + score;
    //push local storage scores
    highScore = (JSON.parse(localStorage.getItem("highScore")));
    if (highScore === null) {
        highScore = [];
    }
    // adds new score to local storage
    var newScore = {
        name: nameInput,
        score: score
    }
    highScore.push(newScore);
    console.log(highScore);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    getHighScore();
}

function renderQuestion() {
    questionEl.textContent = questions[counter].question;
    choicesEl.innerHTML = "";
    for (var i = 0; i < questions[counter].answers.length; i++) {
        var option = questions[counter].answers[i];
        var optionButton = document.createElement("button");
        optionButton.setAttribute("value", option);
        optionButton.textContent = (i + 1) + ". " + questions[counter].answers[i];
        choicesEl.appendChild(optionButton);
    }
}

function quizClick(event) {
    var buttonEl = event.target;
    console.log(buttonEl);
    console.log("button pressed: " + buttonEl.value + "\nAnswer: " + questions[counter].correct);
    if (questions[counter].correct === buttonEl.value) {
        counter++;
        score++;
        renderQuestion();
    }
}


// add score to high score Object, sort by highest score to lowest
function getHighScore() {
    var highScore = (JSON.parse(localStorage.getItem("highScore")));
    if (highScore === null) {
        highScore = [];
    }
    highScore.sort(function (a, b) {
        return b.score - a.score
    });
    for (var i = 0; i < highScore.length; i++) {
        highScoresEl.children[i].textContent = highScore[i].name + " | " + highScore[i].score;
    }
}

// timer function for quiz. 
function startTimer() {
    timer = setInterval(function () {
        // decrements time and displays current time on page
        timeCount--;
        timerEl.textContent = "Seconds Remaining: " + timeCount;

        if (timeCount >= 0) {

        } else {
            clearInterval(timer);
            endGame();
        }

    }, 1000);
}


// When I click the Start Button, the Timer Starts and the Quiz Displays
startButton.addEventListener("click", startQuiz);
choicesEl.onclick = quizClick;