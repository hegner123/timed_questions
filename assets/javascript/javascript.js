
window.onload = function() {
  questionScreenToggle();
  $(".question-screen-one").hide();
  $("#lap").on("click", timer.recordLap);
  $("#stop").on("click", timer.stop);
  $("#reset").on("click", timer.reset);
  $("#start").on("click", timer.start);
  $("#game-start").on("click", questionOne);
  $("#start-screen").on("click", startScreenToggle);
  $("#question-screen").on("click", questionScreenToggle);


  

};

var game = {
  state:"",
  score:0,
  questionSet:"",
  }


function startScreenToggle(){
  $(".start-screen-display").toggle();
  
}

function questionScreenToggle(){
  $(".question-screen-display").toggle();
}

var intervalId;


var clockRunning = false;


var timer = {

  time: 0,
  lap: 1,
  countdown: 30,


  reset: function() {
    timer.countdown = 30;
    timer.time = 0;
    timer.lap = 1;
    $("#display").text("30");
  },

  start: function() {
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },

  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() {
    timer.time++;
    timer.countdown--;
    $("#display").text(timer.countdown);

  },



  
  
};

var timeout;

function questionOne (){
  $(".question-screen-one").show();
  timer.start();
  game.state = "Question One"
  console.log(game.state);
  
  $("#correct-choice").on("click", function (){
    game.score++;
    timer.stop();
    timer.reset();
    $(".question-screen-one").hide();
    $("#score").text(game.score);

  })

  timeout = setInterval(checkState, 1000)

  function checkState(){

    if (timer.countdown === 0){
      game.score--;
      timer.stop();
      timer.reset();
      $(".question-screen-one").hide();
      $("#score").text(game.score);
    };
    
  }
    

  
  
};

function questionTwo (){};

function questionThree (){};

function questionFour (){};

function questionFive (){};

function questionSix (){};

function winState(){};















































