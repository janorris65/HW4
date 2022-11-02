const buttons = document.querySelectorAll("button");
const startBtn = document.getElementById("StartBtn");
const INTERVAL = 1000;
let TIMER = 10;
const digitalTimer = document.getElementById("countdown");
let numlog = 0;

//Start button functionality displays 1st Question 'displayFunction, timer start 'countDown' and 'numlog' to advance q
startBtn.addEventListener("click", function (event) {
  startBtn.textContent = "";
  numlog = 1;
  displayFunction(numlog);
  countDown();
});
//code block for timer, answercheck changes TIMER, includes Time<0 message
function countDown() {
  const timerdown = setInterval(function () {
    digitalTimer.textContent = TIMER;
    TIMER--;
    if (TIMER < 0) {
      clearInterval(timerdown);
      var elfinal = document.getElementById("score");
      elfinal.textContent = "You've Lost";
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
  "Did George Washington like you?",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
const Q2 = new questionCreator(
  "Did John Adams like you?",
  ["yes", "no", "maybe", "on good days"],
  "maybe"
);
const Q3 = new questionCreator(
  "Did Thomas Jefferson like you?",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
const Q4 = new questionCreator(
  "Did James Madison like you?",
  ["yes", "no", "maybe", "on good days"],
  "yes"
);
const Q5 = new questionCreator(
  "Did James Monroe like you?",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
let overHead = [Q0, Q1, Q2, Q3, Q4, Q5]; //array for question storage
// code block for answer check and time adjust
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (event.target.textContent === overHead[numlog].answer) {
      TIMER = Number(digitalTimer.textContent) + 10;
    } else {
      TIMER = Number(digitalTimer.textContent - 5);
    }
  });
});
// code block to display score and save when called
function finalScore() {
  var elfinal = document.getElementById("score");
  elfinal.textContent = digitalTimer.textContent;
}
// Code Block for advancing questions with each click
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let x = numlog;
    if ((event.target.id === "option1", "option2", "option3", "option4")) {
      x++;
      numlog = x;
    }
    if (numlog === overHead.length) {
      setTimeout(function () {
        var elfinal = document.getElementById("score");
        elfinal.textContent = digitalTimer.textContent;
      }, 2000);
    }
    displayFunction(numlog);
  });
});

//TODO save the score and initials

// TODO make a question maker form
