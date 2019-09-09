
window.onload = function() {
  questionScreenToggle();
  $(".questions").hide();
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
  countdown: 8,


  reset: function() {
    timer.countdown = 8;
    timer.time = 0;
    
    $("#display").text("8");
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
  $(".correct-choice-one").on("click", function (){
    game.score = game.score +1;
    timer.stop();
    timer.reset();
    $(".question-screen-one").hide();
    $("#score").text(game.score);
    questionTwo();
  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
      game.score = game.score - 1;
      timer.stop();
      timer.reset();
      $(".question-screen-one").hide();
      $("#score").text(game.score);
      questionTwo();
    };
  }
};

function questionTwo (){
  $(".question-screen-two").show();
  timer.start();
  game.state = "Question Two"
  console.log(game.state);
  $(".correct-choice-two").on("click", function (){
    game.score = game.score +1;
    timer.stop();
    timer.reset();
    $(".question-screen-two").hide();
    $("#score").text(game.score);
  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
      game.score = game.score - 1;
      timer.stop();
      timer.reset();
      $(".question-screen-two").hide();
      $("#score").text(game.score);
    };
  }
};

function questionThree (){};

function questionFour (){};

function questionFive (){};

function questionSix (){};

function winState(){};















































