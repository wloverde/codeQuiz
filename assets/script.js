// Variables for each HTML element to Hide/Show
var startPage = document.querySelector(".startPage");
var quizPage = document.querySelector(".quiz");
var endPage = document.querySelector(".endPage");
var timerEl = document.querySelector(".timer");

// Variables for functioning buttons for answering questions/starting game
var startButton = document.querySelector("#startButton");
var questionEl = document.querySelector("#question");
var buttonA = document.querySelector("#a");
var buttonA = document.querySelector("#b");
var buttonA = document.querySelector("#c");
var buttonA = document.querySelector("#d");

// function to start quiz and hide Start Page
function startQuiz(){
    startPage.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: block;");
    quizInit();
}

// function that randomizes questions and has a timer
function quizInit(){
    // built in Timer, time penalty on incorrect answer
}



// When I click the Start Button, the Timer Starts and the Quiz Displays
startButton.addEventListener("click", startQuiz);
