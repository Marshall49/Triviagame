$( document ).ready(function() {
  var number = 25;
  var intervalId;
    $("#submit").on("click", stop);
    $("#remaining").on("click", run);
    function run () {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#remaining").html("<h3>" + number + "</h3>");
        if (number === 0) {
        stop();
          alert("Time Up!");
      }
    }
    function stop() {
      clearInterval(intervalId);
    }
    run();
var userAnswer1;
var userAnswer2;
var userAnswer3;
var answer1 = "1978";
var answer2 = "Freddy Kruger";
var answer3 = "Chucky";
var correctAnswers = 0;
var incorrectAnswer = 0;
// var checkAnswers = function(){
//   if(userAnswer1 == answer1){
//    correctAnswers = correctAnswers +1;
//   }else{
//   }
//   if(userAnswer2 == answer2){
//     correctAnswers = correctAnswers +1;
//   }
//   if(userAnswer3 == answer3){
//    correctAnswers = correctAnswers +1;
//   }
//   console.log(correctAnswers)
// }
  // var correctAnswer = 0;
  // var incorrectAnswer = 0;
  // var answers = [];
$('#answers1').submit(function(event){
      //stop the form from submitting!
    event.preventDefault();
    userAnswer1 = $('input[name=a]:checked', '#answers1').val();
    console.log(userAnswer1);
    if(userAnswer1 == answer1){
      correctAnswers = correctAnswers +1;
    $("#correctAnswers").html("correct Answers:" + correctAnswers);
        console.log(correctAnswers)
      }
      else if(userAnswer1 != answer1){
        incorrectAnswer = incorrectAnswer +1;
        $("#incorrectAnswer").html("incorrect Answer:" + incorrectAnswer);
        console.log(incorrectAnswer)
      }

})

$('#answers2').submit(function(event){
      //stop the form from submitting!
    event.preventDefault();
    userAnswer2 = $('input[name=b]:checked', '#answers2').val();
    console.log(userAnswer2)
    if(userAnswer2 == answer2){
    correctAnswers = correctAnswers +1;
    $("#correctAnswers").html("correct Answers:" + correctAnswers);
    console.log(correctAnswers)
    }
      else if(userAnswer2 != answer2){
      incorrectAnswer = incorrectAnswer +1;
      $("#incorrectAnswer").html("incorrect Answer:" + incorrectAnswer);
      console.log(incorrectAnswer)
    }

    })


$('#answers3').submit(function(event){
      //stop the form from submitting!
    event.preventDefault();
    userAnswer3 = $('input[name=c]:checked', '#answers3').val();
    console.log(userAnswer3)
    if(userAnswer3 == answer3){
   correctAnswers = correctAnswers +1;
  $("#correctAnswers").html("correct Answers:" + correctAnswers);
   console.log(correctAnswers)
    }
      else if(userAnswer3 != answer3){
     incorrectAnswer = incorrectAnswer +1;
       $("#incorrectAnswer").html("incorrect Answer:" + incorrectAnswer);
     console.log(incorrectAnswer)
   }


})

});
  // var userAnswer1= $("form :radio")
  // var questions = [{
  //   question: "What year did the first halloween movie come out?",
  //   answers: ["1975", "1981", "1978", "1980"],
  //   correctAnswer: "1978"
  //   }, {
  //     question: "Which Character is known for the Nightmare On Elm Street Series?",
  //     answers: ["Freddy Kruger", "Jason Voorhees", "Micheal Myers", "Leperchaun"],
  //     correctAnswer: "Freddy Kruger"
  //   }, {
  //     question: "Which horror movie character is a serial killer possessing a doll?",
  //     answers: ["IT", "Chucky", "Preacher Kane", "Freddy Kruger"],
  //     correctAnswer: "Chucky"
  //   }]
// var answers= ["answer1", "answer2", "answers3"]
// checkAnswers();
