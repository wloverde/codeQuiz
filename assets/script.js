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
var buttonA = document.querySelector("#b");
var buttonA = document.querySelector("#c");
var buttonA = document.querySelector("#d");

// Variable for timer visible on global scope
var timeCount = 05;
var timer;

// Objects for Questions and Highscores
var highScore = [
    {
        name: "andrew",
        score: 69
    },
    {
        name: "william",
        score: 420
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

}

// add score to high score Object, create a Listed item for each key within object
function getHighScore(){
    console.log(highScore);
    for ( var i = 0; i < highScore.length; i++ ){
        console.log(highScore[i]);
        highScoresEl.appendChild(document.createElement("li").textContent = highScore[i]);
    }

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
