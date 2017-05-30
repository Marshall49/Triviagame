$( document ).ready(function() {

  var panel = $('#choices');
  var countStartNumber = 25;

  $(document).on('click', '#choices', function(e) {
    $('choices').prepend('<h3>Time Remaining: <span id="choices">25</span> Seconds</h3>');
    game.loadQuestion();
  });

  var questions = [{
  question: "What year did the first halloween movie come out?",
  answers: ["1975", "1981", "1978", "1980"],
  correctAnswer: "1978",
}, {
  question: "Which Character is known for the Nightmare On Elm Street Series?",
  answers: ["Freddy Kruger", "Jason Voorhees", "Micheal Myers", "Leperchaun"],
  correctAnswer: "Freddy Kruger",
}, {
  question: "Which horror movie character is a serial killer possessing a doll?",
  answers: ["IT", "Chucky", "Preacher Kane", "Freddy Kruger"],
  correctAnswer: "Chucky",
}, {

  var game = {
    questions:questions,
    currentQuestion:0,
    counter:countStartNumber,
    correct:0,
    incorrect:0,
    countdown: function(){
      game.counter--;
      $('#choices').html(game.counter);

      if (game.counter === 0){
        console.log('TIME UP');
        game.timeUp();
      }
    },












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
