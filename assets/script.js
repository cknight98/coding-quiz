var startButton = document.querySelector("#start-button");
var answerButton1 = document.querySelector("#option-one");
var answerButton2 = document.querySelector("#option-two");
var answerButton3 = document.querySelector("#option-three");
var answerButton4 = document.querySelector("#option-four");

var timerElement = document.querySelector("#time-left");

var questionCount;
var timerCount;
var quizOver;

function startQuiz() {

    questionCount = 0;
    quizOver = false;

    document.getElementById("quiz-options").style.display = '';
    document.getElementById("start-button").style.display = 'none';
    document.getElementById("quiz-instructions").style.display = 'none';
    
    //Update Questions
    updateQuestions(questionCount);

    // Start Timer
    timerCount = 75;
    startTimer();
}

function endQuiz(){
    document.getElementById("quiz-options").style.display = 'none';
    document.getElementById("quiz-question").style.display = 'none';
    quizOver = true;
}

function updateQuestions(questionCount){
    
    document.getElementById("quiz-question").textContent = questions[questionCount].question;
    document.getElementById("option-one").textContent = questions[questionCount].answer1;
    document.getElementById("option-two").textContent = questions[questionCount].answer2;
    document.getElementById("option-three").textContent = questions[questionCount].answer3;
    document.getElementById("option-four").textContent = questions[questionCount].answer4;

}

function submitAnswer(){
    
    console.log(this.textContent);
    console.log(questions[questionCount].correct)
   
    if (this.textContent != questions[questionCount].correct){
        console.log("This answer is wrong")
        timerCount = timerCount - 20;
    }
    
    questionCount = questionCount + 1;
    // If questions left continue  quiiz
    if (questionCount < questions.length)  {
    // move to the next question
        updateQuestions(questionCount);
     }
   
     // end the quiz
    else{
        endQuiz()
    }
    
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
    timerCount--;    
    timerElement.textContent = timerCount;

    
    if (quizOver) {
          // Clears interval and stops timer
          clearInterval(timer);
      }

      // Tests if time has run out
      if (timerCount <= 0) {
        
        // Dont give negative score
        timerCount = 0;
        timerElement.textContent = timerCount;


        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
}

answerButton1.addEventListener("click", submitAnswer)
answerButton2.addEventListener("click", submitAnswer)
answerButton3.addEventListener("click", submitAnswer)
answerButton4.addEventListener("click", submitAnswer)

startButton.addEventListener("click", startQuiz)

let questions = 
    [{
        question: "If we want to use a dotted border around an image, which css property are we going to use?",
        answer1: "border-line",
        answer2: "border-decoration",
        answer3: "border-color",
        answer4: "border-style",
        correct: "border-style",
    },
    {
        question: "Suppose we want to arrange three DIVs so that DIV 3 is placed above DIV1. Now, which CSS property are we going to use to control the stack order?",
        answer1: "t-index",
        answer2: "g-index",
        answer3: "p-index",
        answer4: "z-index",
        correct: "z-index",
    },
    {
        question: "If we want to place text around an image, which CSS property should we use?",
        answer1: "push",
        answer2: "align",
        answer3: "wrap",
        answer4: "float",
        correct: "float",
    },
    {
        question: "An ordered list can be represented by ______.",
        answer1: "<ul>",
        answer2: "<li>",
        answer3: "<uo>",
        answer4: "<ol>",
        correct: "<ol>",
    },
    {
        question: "Which of the following HTML tags will insert a line break?",
        answer1: "<p>",
        answer2: "<break>",
        answer3: "<line>",
        answer4: "<br>",
        correct: "<br>",
    }]
