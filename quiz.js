/*
  Prompt Quizzer
  Web Dev I - Lab Assignment 4
*/

// Array holding questions and answers
var quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "Which language is used for styling web pages?",
    answer: "css"
  },
  {
    question: "Which keyword is used to create a variable in JavaScript?",
    answer: "var"
  },
  {
    question: "Which function is used to take input from the user?",
    answer: "prompt"
  },
  {
    question: "Which loop runs a fixed number of times?",
    answer: "for loop"
  }
];

// Function to run the quiz
function runQuiz() {
  var score = 0;
  var userAnswer;

  for (var i = 0; i < quizQuestions.length; i++) {

    userAnswer = prompt(
      "Question " + (i + 1) + ":\n" + quizQuestions[i].question
    );

    // Convert input to lowercase and remove spaces
    userAnswer = userAnswer.toLowerCase();
    userAnswer = userAnswer.trim();

    if (userAnswer == quizQuestions[i].answer) {
      alert("Correct Answer!");
      score = score + 1;
    } else {
      alert(
        "Wrong Answer!\nCorrect Answer is: " +
        quizQuestions[i].answer
      );
    }
  }

  alert(
    "Quiz Finished!\nYour Score: " +
    score +
    " out of " +
    quizQuestions.length
  );
}

// Call the function
runQuiz();
