function Questions(Question, option1, option2, option3, option4, answer) {
  this.Question = Question;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.answer = answer;
  return Questions;
}

let Q1 = Questions(
  "What kind of beard did Lincoln have?",
  "GoatTee",
  "Full Board",
  "Chin Beard",
  "Mustache",
  "Chin Beard"
);

var elQuestion = document.getElementById("Question");
elQuestion.textContent = Questions.Question;
console.log(Q1.Question);
