const buttons = document.querySelectorAll("button");
var startBtn = document.getElementById("StartBtn");
const INTERVAL = 1000;
let TIMER = 10;
const digitalTimer = document.getElementById("countdown");
let numlog = 0;
let internalScore = 10;
let isGameOver = false;
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#initials");
var submissionResponseEl = document.querySelector("#response");
var form = document.querySelector("form");
var dispSvdScore = document.getElementById("displaySvdScore");
//Start button functionality displays 1st Question 'displayFunction, timer start 'countDown' and 'numlog' to advance q
startBtn.addEventListener("click", function (event) {
  startBtn.hidden = true;
  numlog = 1;
  displayFunction(numlog);
  countDown();
});
//code block for timer, answercheck changes internalscore, includes Time<0 message and game over message
function countDown() {
  const timerdown = setInterval(function () {
    internalScore--;
    digitalTimer.textContent = internalScore;
    if (internalScore <= 0) {
      clearInterval(timerdown);
      var elfinal = document.getElementById("score");
      elfinal.textContent = "You've Lost";
      form.hidden = false;
    } else if (isGameOver === true) {
      clearInterval(timerdown);
    }
  }, INTERVAL);
}
//code block for display function
function displayFunction(x) {
  var elQuestion = document.getElementById("Question");
  elQuestion.textContent = overHead[x].question;

  var eloption1 = document.getElementById("option1");
  eloption1.textContent = overHead[x].options[0];

  var eloption2 = document.getElementById("option2");
  eloption2.textContent = overHead[x].options[1];

  var eloption3 = document.getElementById("option3");
  eloption3.textContent = overHead[x].options[2];

  var eloption4 = document.getElementById("option4");
  eloption4.textContent = overHead[x].options[3];
}

// code block to create questions
function questionCreator(question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
}

const Q0 = new questionCreator("", "", "");
const Q1 = new questionCreator(
  "Did George Washington like you? hint:no",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
const Q2 = new questionCreator(
  "Did John Adams like you? hint:maybe",
  ["yes", "no", "maybe", "on good days"],
  "maybe"
);
const Q3 = new questionCreator(
  "Did Thomas Jefferson like you? hint:no",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
const Q4 = new questionCreator(
  "Did James Madison like you? hint:yes",
  ["yes", "no", "maybe", "on good days"],
  "yes"
);
const Q5 = new questionCreator(
  "Did James Monroe like you? hint:no",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
let overHead = [Q0, Q1, Q2, Q3, Q4, Q5]; //array for question storage

// code block for answer check and time adjust
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (event.target.textContent === overHead[numlog].answer) {
      internalScore += 10;
    } else {
      internalScore -= 5;
    }
  });
});

// Code Block for advancing questions with each click, unhiding initial score
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let x = numlog;
    if ((event.target.id === "option1", "option2", "option3", "option4")) {
      x++;
      numlog = x;
    }
    if (numlog === overHead.length) {
      isGameOver = true;
      var elfinal = document.getElementById("score");
      elfinal.textContent = internalScore;
      form.hidden = false;
    }
    displayFunction(numlog);
  });
});
// Code Block for initial and score submission to local storage, unhidiing display score
submitEl.addEventListener("click", showResponse);
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  var response = "Thank you for your submission " + nameInput.value + ".";
  submissionResponseEl.textContent = response;
  localStorage.setItem("finalInitialScore", [nameInput.value, internalScore]);
  dispSvdScore.hidden = false;
}
// Code block to display saved intials and score
dispSvdScore.addEventListener("click", function (event) {
  const lclInitialScore = localStorage.getItem("finalInitialScore");
  submissionResponseEl.textContent = lclInitialScore;
});
