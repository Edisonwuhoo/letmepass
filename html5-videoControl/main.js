$(function(){
    
  //load video:set video elemenets src
  // find video element
  //document.getElementById("myViedo")
  //上面跟下面一樣
  $("#myVideo").attr("src","sample-mp4-file.mp4");
  //set play btn <- click event ..XXXXX
  //onclick, addEventListener
  $("#playBtn").on("click",function(){
    $("#voiceDisplay").text($("#myVideo")[0].volume.toFixed(2));
    $("#progressBar")[0].max = $("#myVideo")[0].duration;
   
    //console.log("yo"); 單純用來確認我的click有無作用 有的話會console yo
    //1.play video or pause video <-check video current status
    //2.set btn text
    if($("#myVideo")[0].paused){//判斷我的影片是否為暫停狀態(paused)
        $("#myVideo")[0].play();//是的話點及按鈕，就play 然後
        $("#playBtn").text("Stop");//將playbtn字改成stop
    }else{
        $("#myVideo")[0].pause();//反之 如果不是暫停狀態，點擊就暫停(pause)
        $("#playBtn").text("Play");//然後改字樣成play
    }
  });

  //set fullscreen button
  $("#fullBtn").on("click",function(){//同上，點擊fullbtn按鈕啟動功能
    $("#myVideo")[0].webkitEnterFullscreen();//我影片 變成 fullscreen(但是只能給網站用)

  });
  $("#lowerVoice").on("click",downVolume);
  $("#higherVoice").on("click",upVolume);
  $("#myVideo").on("timeupdate",updateProgress);
  $("#progressBar").on("change",changeProgress);

});

function downVolume(){//調整音量
    var myViedo = $("#myVideo")[0];
    if(myViedo.volume == 0){
    }else if(myViedo.volume < 0.1){
        myViedo.volume = 0;
    }else{
        myViedo.volume =myViedo.volume - 0.1;
    }
    
    $("#voiceDisplay").text(myViedo.volume.toFixed(2));

}
function upVolume(){//調整音量
    var myViedo = $("#myVideo")[0];
    if(myViedo.volume == 1){
    }else if(myViedo.volume > 0.9){
        myViedo.volume = 1;
    }else{
        myViedo.volume =myViedo.volume + 0.1;
    }
    $("#voiceDisplay").text(myViedo.volume.toFixed(2));

}
function updateProgress(){
    $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));//show現在的秒數
    $("#timeDisplay").append("/"+Math.floor($("#myVideo")[0].duration)+"秒");//把秒以及總秒數加進去
    // $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`); 跟上面一樣
    $("#progressBar")[0].value = $("#myVideo")[0].currentTime;//使這條bar跟上方秒數一起跑
}   
function changeProgress(){
 
    $("#myVideo")[0].currentTime = $("#progressBar")[0].value; //根據我們拉到的時間條，來調整正確的時間條
    


}