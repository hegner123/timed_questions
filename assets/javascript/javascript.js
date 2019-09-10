
window.onload = function() {
  $(".questions").hide();
  
  $("#lap").on("click", timer.recordLap);
  $("#stop").on("click", timer.stop);
  $("#reset").on("click", timer.reset);
  $("#start").on("click", timer.start);
  $("#game-start").on("click", questionOne);
  $("#start-screen").on("click", startScreenToggle);

  


  

};

var game = {
  state:"",
  correctAnswers: 0,
  incorrectAnswers: 0,
  questionSet:"",
  }


function startScreenToggle(){
  $(".start-screen-display").toggle();
}



var intervalId;


var clockRunning = false;


var timer = {

  time: 0,
  countdown: 8,


  reset: function() {
    timer.countdown = 8;
    timer.time = 0;
    $(".display").text("8");
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
    $(".display").text(timer.countdown);

  },
  
};

var timeout;

function questionOne (){
  $(".game-controls").hide();
  $(".question-screen-one").show();
  timer.start();
  game.state = "Question One"
  console.log(game.state);
  $(".correct-choice-one").on("click", function (){
    game.correctAnswers = game.correctAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-one").hide();
    $(".question-one-win-screen").show();
    $("#score").text(game.score);
    setTimeout(questionTwo, 5000);
  })
  $(".incorrect-choice-one").on("click", function (){
   game.incorrectAnswers = game.incorrectAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-one").hide();
    $("#score").text(game.score);
    setTimeout(questionTwo, 5000);
  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
     game.incorrectAnswers = game.incorrectAnswers + 1;
      timer.stop();
      timer.reset();
      $(".question-screen-one").hide();
      $("#score").text(game.score);
      setTimeout(questionTwo, 5000);
    };
  }
};

function questionTwo (){
  $(".question-one-win-screen").hide();
  clearTimeout();
  $(".question-screen-two").show();
  timer.start();
  game.state = "Question Two"
  console.log(game.state);
  $(".correct-choice-two").on("click", function (){
    game.correctAnswers = game.correctAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-two").hide();
    $("#score").text(game.score);
    $(".question-two-win-screen").show();
    setTimeout(questionThree, 5000);
    
  })
  $(".incorrect-choice-two").on("click", function (){
   game.incorrectAnswers = game.incorrectAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-two").hide();
    $("#score").text(game.score);
    setTimeout(questionThree, 5000);
  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
     game.incorrectAnswers = game.incorrectAnswers + 1;
      timer.stop();
      timer.reset();
      $(".question-screen-two").hide();
      $("#score").text(game.score);
      setTimeout(questionThree, 5000);
    };
  }
};

function questionThree (){
  $(".question-two-win-screen").hide();
  clearTimeout();
  $(".question-screen-three").show();
  timer.start();
  game.state = "Question Three"
  console.log(game.state);
  $(".correct-choice-three").on("click", function (){
    game.correctAnswers = game.correctAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-three").hide();
    $("#score").text(game.score);
    $(".question-three-win-screen").show();
    setTimeout(questionFour, 5000);
   
  })
  $(".incorrect-choice-three").on("click", function (){
   game.incorrectAnswers = game.incorrectAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-three").hide();
    $("#score").text(game.score);
    setTimeout(questionFour, 5000);

  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
     game.incorrectAnswers = game.incorrectAnswers + 1;
      timer.stop();
      timer.reset();
      $(".question-screen-three").hide();
      $("#score").text(game.score);
      setTimeout(questionFour, 5000);

    };
  }
};

function questionFour (){
  $(".question-three-win-screen").hide();
  clearTimeout();
  $(".question-screen-four").show();
  timer.start();
  game.state = "Question Four"
  console.log(game.state);
  $(".correct-choice-four").on("click", function (){
    game.correctAnswers = game.correctAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-four").hide();
    $("#score").text(game.score);
    $(".question-four-win-screen").show();
    setTimeout(questionFive, 5000);
    
  })
  $(".incorrect-choice-four").on("click", function (){
   game.incorrectAnswers = game.incorrectAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-four").hide();
    $("#score").text(game.score);
    setTimeout(questionFive, 5000);

  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
     game.incorrectAnswers = game.incorrectAnswers + 1;
      timer.stop();
      timer.reset();
      $(".question-screen-four").hide();
      $("#score").text(game.score);
      setTimeout(questionFive, 5000);

    };
  }
};

function questionFive (){
  $(".question-four-win-screen").hide();
  clearTimeout();
  $(".question-screen-five").show();
  timer.start();
  game.state = "Question Five"
  console.log(game.state);
  $(".correct-choice-five").on("click", function (){
    game.correctAnswers = game.correctAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-five").hide();
    $("#score").text(game.score);
    $(".question-five-win-screen").show();
    setTimeout(resultState, 5000);
    
  })
  $(".incorrect-choice-five").on("click", function (){
   game.incorrectAnswers = game.incorrectAnswers + 1;
    timer.stop();
    timer.reset();
    $(".question-screen-five").hide();
    $("#score").text(game.score);
    setTimeout(resultState, 5000);

  })
  timeout = setInterval(checkState, 1000)
  function checkState(){
    if (timer.countdown === 0){
     game.incorrectAnswers = game.incorrectAnswers + 1;
      timer.stop();
      timer.reset();
      $(".question-screen-five").hide();
      $("#score").text(game.score);
      setTimeout(resultState, 5000);

    };
  }
};



function winState(){};

function resultState(){
  console.log("Result State");
  $(".question-five-win-screen").hide();
  $(".results-screen").show();
  $("#correct-answers").text("Correct Answers: " + game.correctAnswers);
  $("#incorrect-answers").text("Incorrect Answers: " + game.incorrectAnswers);
};















































