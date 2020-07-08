video = $('#firsVideo')[0];
videotwo = $('#secondVideo')[0];
videothree = $('#thirdVideo')[0];
videofour = $('#fourthVideo')[0];
$(document).ready(function () {
	$('#play').click(function () {
		playVideo(video);
    	$("#play").css("display", "none");
	});
	$('#firsVideo').on('ended',function(){
    	$("#firsVideo").css("display", "none");
    	$("#secondVideo").css("display", "block");
    	playVideotwo(videotwo);
    });
    $('#secondVideo').on('ended',function(){
    	$("#secondVideo").css("display", "none");
      $("#thirdVideo").css("display", "block");
      playVideothree(videothree);
    });
    $('#thirdVideo').on('ended',function(){
      $("#thirdVideo").css("display", "none");
      $("#call-splash").css("display", "block");
      $(".my_audio").trigger('load');
      play_audio('play');
    });
    $('#call-splash').click(function () {
      $("#call-splash").css("display", "none");
      $("#fourthVideo").css("display", "block");
      play_audio('stop');
      playVideofour(videofour);
    });
    $('#fourthVideo').on('ended',function(){
      window.location.href = 'https://www.mymarketlogic.com/';
    });
    
    
    
});
function playVideo(video) {
    promisePlay(video);
}
function  promisePlay(video) {
    var playPromise = video.play();
}

function playVideotwo(videotwo) {
    promisePlaytwo(videotwo);
}
function  promisePlaytwo(videotwo) {
    var playPromisetwo = videotwo.play();
}
function playVideothree(videothree) {
    promisePlaythree(videothree);
}
function  promisePlaythree(videothree) {
    var playPromisethree = videothree.play();
}
function playVideofour(videofour) {
    promisePlayfour(videofour);
}
function  promisePlayfour(videofour) {
    var playPromisefour = videofour.play();
}

function play_audio(task) {
      if(task == 'play'){
           $(".my_audio").trigger('play');
      }
      if(task == 'stop'){
           $(".my_audio").trigger('pause');
           $(".my_audio").prop("currentTime",0);
      }
}

// Get the video element with id="thirdVideo"
var vid = document.getElementById("thirdVideo");

// Attach a "timeupdate" event to the video
vid.addEventListener("timeupdate", getCurTime);

// Display the current playback position of the video in a p element with id="timevideoget"
function getCurTime() { 
  if (vid.currentTime >= 1 && vid.currentTime <= 10) {
    $(".namebox").css("display", "block");
  } else{
    $(".namebox").css("display", "none");
  }
  /*document.getElementById("timevideoget").innerHTML = "The current playback position is " + vid.currentTime + " seconds.";*/
}

