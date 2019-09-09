
window.onload = function() {
  questionScreenToggle();
  $("#lap").on("click", timer.recordLap);
  $("#stop").on("click", timer.stop);
  $("#reset").on("click", timer.reset);
  $("#start").on("click", timer.start);
  $("#start-screen").on("click", startScreenToggle);
  $("#question-screen").on("click", questionScreenToggle);


  var game = {
  state:"",
  score:0,
  questionSet:"",
  }

};

  


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
    $("#display").text(timer.time).text(timer.countdown);

  },



  
  
};


















































