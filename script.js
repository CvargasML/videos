video = $('#firsVideo')[0];
videotwo = $('#secondVideo')[0];
videothree = $('#thirdVideo')[0];
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
    	$("#call-splash").css("display", "block");
    	$(".my_audio").trigger('load');
    	play_audio('play');
    	
    });
    $('#call-splash').click(function () {
		play_audio('stop');
		playVideothree(videothree);
		$("#call-splash").css("display", "none");
		$("#thirdVideo").css("display", "block");
	})
    $('#thirdVideo').on('ended',function(){
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
function play_audio(task) {
      if(task == 'play'){
           $(".my_audio").trigger('play');
      }
      if(task == 'stop'){
           $(".my_audio").trigger('pause');
           $(".my_audio").prop("currentTime",0);
      }
}