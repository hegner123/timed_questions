
  window.onload = function() {
    questionScreenToggle();
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
    $("#start-screen").on("click", startScreenToggle);
    $("#question-screen").on("click", questionScreenToggle);

  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // // prevents the clock from being sped up unnecessarily
  var clockRunning = false;

  

  function startScreenToggle(){
    $(".start-screen-display").toggle();
    
  }

  function questionScreenToggle(){
    $(".question-screen-display").toggle();
  }
  
  // // Our stopwatch object
  var stopwatch = {
  
    time: 0,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 0;
      stopwatch.lap = 1;
      $("#display").text("00:00");
    },

    start: function() {
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },

    stop: function() {
      clearInterval(intervalId);
      clockRunning = false;
    },
    
    count: function() {
      stopwatch.time++;
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
      $("#display").text(converted);
    },

    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    }
  };


















































