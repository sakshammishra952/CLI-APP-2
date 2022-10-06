var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " + userName );

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You were right!");
    score++;
  }
  else {
    console.log("No, correct answer is: " + answer);
    score--;
  }
  console.log("Current score: " + score);
  console.log("----------");
}
{
  var questionOne =
  {
    question: " Which is the highest imdb rated film of all time ? ",
    answer: "The Shawshank Redemption"
  }
  var questionTwo =
  {
    question: "For which film did Damien Chazelle win the oscar for best director? ",
    answer: "La La Land"
  }
  var questionThree =
  {
    question: "Which Danish film won the oscar for best international feature in 2021 ",
    answer: "Realme"
  }
  var questionFour =
  {
    question: "What was the name of Stanley Kubrick's Last film  ",
    answer: "Eyes Wide Shut"
  }
  var questionFive =
  {
    question: "Jordan Peele won the Oscar for best Screenplay for this horror-mystery  ",
    answer: "Get Out"
  }
}
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log("Your final score is: " + score);