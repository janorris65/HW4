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
//code block for timer, includes answer check and time adjustment
function countDown() {
  let i = TIMER;
  const timerdown = setInterval(function () {
    digitalTimer.textContent = i;
    i--;
    // code block to check answer and adjust time
    if (
      buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
          if (event.target.textContent === overHead[numlog].answer) {
            i = Number(digitalTimer.textContent) + 10;
          } else {
            i = Number(digitalTimer.textContent - 5);
          }
        });
      })
    );
    if (i < 0) {
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
  "Did George Washington like you?",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
const Q2 = new questionCreator(
  "Did John Adams like you?",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
const Q3 = new questionCreator(
  "Did Thomas Jefferson like you?",
  ["yes", "no", "maybe", "on good days"],
  "no"
);
let overHead = [Q0, Q1, Q2, Q3]; //array for question storage

// Code Block for advancing questions with each click
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let x = numlog;
    if ((event.target.id === "option1", "option2", "option3", "option4")) {
      x++;
      numlog = x;
    }
    console.log(numlog);
    displayFunction(numlog);
  });
});

// TODO make a question maker form
