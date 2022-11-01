const buttons = document.querySelectorAll("button");
const startBtn = document.getElementById("StartBtn");
const INTERVAL = 1000;
const TIMER = 10;
const digitalTimer = document.getElementById("countdown");
let numlog = 0;
//Start button functionality includes 1st Q, timer and numlog to advance q
startBtn.addEventListener("click", function (event) {
  startBtn.textContent = "";
  numlog = 1;
  var elQuestion = document.getElementById("Question");
  elQuestion.textContent = overHead[1].question;

  var eloption1 = document.getElementById("option1");
  eloption1.textContent = overHead[1].options[0];

  var eloption2 = document.getElementById("option2");
  eloption2.textContent = overHead[1].options[1];

  var eloption3 = document.getElementById("option3");
  eloption3.textContent = overHead[1].options[2];

  var eloption4 = document.getElementById("option4");
  eloption4.textContent = overHead[1].options[3];

  function countDown() {
    let i = TIMER;
    const timerdown = setInterval(function () {
      digitalTimer.textContent = i;
      i--;
      if (i < 0) {
        clearInterval(timerdown);
      }
    }, INTERVAL);
  }
  countDown();
});
const Q0 = {
  //number: "Start",
  question: "",
  options: "",
  answer: "",
};

const Q1 = {
  //number: 1,
  question: "Did George Washington like you?",
  options: ["yes", "no", "maybe", "on good days"],
  answer: "no",
};

const Q2 = {
  //number: 2,
  question: "Did John Adams like you?",
  options: ["yes", "no", "maybe", "on good days"],
  answer: "no",
};
let overHead = [Q0, Q1, Q2];
// Code Block for advancing questions with each click

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let x = numlog;
    if ((event.target.id === "option1", "option2", "option3", "option4")) {
      x++;
      numlog = x;
    }
    console.log(numlog);
    var elQuestion = document.getElementById("Question");
    elQuestion.textContent = overHead[numlog].question;

    var eloption1 = document.getElementById("option1");
    eloption1.textContent = overHead[numlog].options[0];

    var eloption2 = document.getElementById("option2");
    eloption2.textContent = overHead[numlog].options[1];

    var eloption3 = document.getElementById("option3");
    eloption3.textContent = overHead[numlog].options[2];

    var eloption4 = document.getElementById("option4");
    eloption4.textContent = overHead[numlog].options[3];
  });
});

/*var elnumber = document.getElementById("StartBtn");
elnumber.textContent = overHead[1].number;*/

/*var elQuestion = document.getElementById("Question");
elQuestion.textContent = overHead[numlog].question;

var eloption1 = document.getElementById("option1");
eloption1.textContent = overHead[numlog].options[0];

var eloption2 = document.getElementById("option2");
eloption2.textContent = overHead[numlog].options[1];

var eloption3 = document.getElementById("option3");
eloption3.textContent = overHead[numlog].options[2];

var eloption4 = document.getElementById("option4");
eloption4.textContent = overHead[numlog].options[3];*/

// make a question maker form
