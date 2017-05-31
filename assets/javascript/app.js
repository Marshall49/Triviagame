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

  });

  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var answers = [];
  // var questions = [{
  // var userAnswer1 = $('input[name=a]:checked', '#answers1').html();
  // var userAnswer1= $("form :radio")
  // var check = function(){
    $("#check").click(function(event){
      event.preventdefault();
      var userAnswer1 = $("input[name='a']:checked").val();
      console.log(userAnswer1);
    });


  // check();
  var questions = [{
  question: "What year did the first halloween movie come out?",
  answers: ["1975", "1981", "1978", "1980"],
  correctAnswer: "1978"
}, {
  question: "Which Character is known for the Nightmare On Elm Street Series?",
  answers: ["Freddy Kruger", "Jason Voorhees", "Micheal Myers", "Leperchaun"],
  correctAnswer: "Freddy Kruger"
}, {
  question: "Which horror movie character is a serial killer possessing a doll?",
  answers: ["IT", "Chucky", "Preacher Kane", "Freddy Kruger"],
  correctAnswer: "Chucky"
}]


  // function gameTotal(value){
  //   if (answers.indexOf(userKey) === correctAnswer){
  //         for (var i = 0; i < answers.length; i++){
  //            = "_";
  //         }









  //     if (correctAnswer > targetScore){
  //         //LOSING
  //         alert("LOST");
  //         losses = losses + 1;
  //         $("#losses").html(losses);
  //         gameStart();
  //     }
  //
  //     if (targetScore == currentScore){
  //         alert("WIN");
  //         //WINNING
  //         wins = wins + 1;
  //         $("#wins").html(wins);
  //         gameStart();
  //     }
  // }










  // var game = {
  //   questions:questions,
  //   currentQuestion:0,
  //   counter:countStartNumber,
  //   correct:0,
  //   incorrect:0,
  //   countdown: function(){
  //     game.counter--;
  //     $('#choices').html(game.counter);
  //
  //     if (game.counter === 0){
  //       console.log('TIME UP');
  //       game.timeUp();
  //     }
  //   },












    // var intervalId;
    // //  When the stop button gets clicked, run the stop function.
    // $("#button").on("click", run);
    // //  When the resume button gets clicked, execute the run function.
    // $("#button").on("click", run);
    // //  The run function sets an interval
    // //  that runs the decrement function once a second.
    // function run () {
    //   intervalId = setInterval(decrement, 2500);
    // }
    // //  The decrement function.
    // function decrement() {
    //   //  Decrease number by one.
    //   number--;
    //   //  Show the number in the #show-number tag.
    //   $("#remaining").html("<h3>" + number + "</h3>");
    //   //  Once number hits zero...
    //   if (number === 0) {
    //     //  ...run the stop function.
    //     stop();
    //     //  Alert the user that time is up.
    //     alert("Time Up!");
    //   }
    // }
    // //  The stop function
    // function stop() {
    //   //  Clears our intervalId
    //   //  We just pass the name of the interval
    //   //  to the clearInterval function.
    //   clearInterval(intervalId);
    // }
    // //  Execute the run function.
    // run();
