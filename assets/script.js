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
var timeCount = 60;
var timer;
var score = 0;
var counter = 0;

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<javascript>", "<js>", "<script>", "<scripting>"],
        correct: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to write \"Hello World\"?",
        answers: ["response.write(\"Hello World\")", "\"Hello World\"", "document.write(\"Hello World\")", "(\"Hello World\")"],
        correct: "document.write(\"Hello World\")"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["It is never correct", "Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section"],
        correct: "Both the <head> section and the <body> section are correct"
    },
    {
        question: "An external JavaScript must contain the <script> tag",
        answers: ["False", "True"],
        correct: "False"
    },
    {
        question: "How do you create a function?",
        answers: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function"],
        correct: "function myFunction()"
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
        correct: "myFunction()"
    },
    {
        question: "How do you write a conditional statement for executing some statements only if \"i\" is equal to 5?",
        answers: ["if i=5", "if i=5 then", "if (i==5)", "if i==5 then"],
        correct: "if (i==5)"
    },
    {
        question: "How do you write a conditional statement for executing some statements only if \"i\" is NOT equal to 5?",
        answers: ["if (i != 5)", "if =! 5 then", "if (i <> 5)", "if <>5"],
        correct: "if (i != 5)"
    },

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
    } else {
        timeCount = timeCount - 5;
    }
}

// add score to high score Object, sort by highest score to lowest
function getHighScore() {
    // checking local storage for highscore data, returning empty array if none found
    var highScore = (JSON.parse(localStorage.getItem("highScore")));
    if (highScore === null) {
        highScore = [];
    }
    highScore.sort(function (a, b) {
        return b.score - a.score
    });
    for (var i = 0; (i < highScore.length) && (i<5); i++) {
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
            timeCount--;
        } else {
            clearInterval(timer);
            endGame();
        }

    }, 1000);
}

// When I click the Start Button, the Timer Starts and the Quiz Displays
startButton.addEventListener("click", startQuiz);
choicesEl.onclick = quizClick;