// Variables for each HTML element to Hide/Show
var startPage = document.querySelector(".startPage");
var quizPage = document.querySelector(".quiz");
var endPage = document.querySelector(".endPage");
var highScoresEl = document.querySelector(".highScores")
var timerEl = document.querySelector(".timer");

// Variables for functioning buttons for answering questions/starting game
var startButton = document.querySelector("#startButton");
var questionEl = document.querySelector("#question");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");

// Variable for timer visible on global scope
var timeCount = 05;
var timer;

// Objects for Questions and Highscores
var highScore = [
    {
        name: "william",
        score: 420
    },
    {
        name: "andrew",
        score: 69
    },
    {
        name: "robert",
        score: 360
    }

];

var questions = [
    {
        question : "are you having a GREAT time?",
        correct: "yes",
        incorrect: ["nah", "nope", "never"]
    }
];

// function to start quiz and hide Start Page
function startQuiz(){
    startPage.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: block;");

    // Starts quiz and timer functions
    startTimer();
    quizInit();
}

// displays game score screen and highscores list
function endGame(){
    quizPage.setAttribute("style", "display: none");
    endPage.setAttribute("style", "display: flex;justify-content: space-around;align-items: center;");
    getHighScore();
}

function quizInit(){
    questionEl.textContent = questions[0].question;
    buttonA.textContent = "A: " + questions[0].correct;
    buttonB.textContent = "B: " + questions[0].incorrect[0];
    buttonC.textContent = "C: " + questions[0].incorrect[1];
    buttonD.textContent = "D: " + questions[0].incorrect[2];


}


// add score to high score Object, sort by highest score to lowest
function getHighScore(){
    highScore.sort((a,b) => b.score - a.score);
    console.log(highScore);

}

// timer function for quiz. 
function startTimer() {
    timer = setInterval(function() {
        // decrements time and displays current time on page
        timeCount --;
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
