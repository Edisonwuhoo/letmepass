let player;
let nowPlay = 0;
function onYouTubeIframeAPIReady(){//當完成會自動幫你啟動
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[nowPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[nowPlay][0],
            end:playTime[nowPlay][1],
            iv_load_policy:3


        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }

    })

}

function onPlayerReady(event){
    $("#playButton").on("click", function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });

}

function onPlayerStateChange(event){
    //-1 – unstarted
    //0 – ended
    //1 – playing
    //2 – paused
    //3 – buffering
    //5 – video cued
    if(Math.floor(player.getCurrentTime())== playTime[nowPlay][1]){
        //go to next song
        if(nowPlay < playList.length -1){
            nowPlay++;
            player.loadVideoById({
                videoId:playList[nowPlay],
                startSeconds:playTime[nowPlay][0],
                endSeconds:playTime[nowPlay][1],
                suggestedQuality:"large"

            });
        }else{
            nowPlay=0;
            player.cueVideoById({videoId:playList[nowPlay],
                startSeconds:playTime[nowPlay][0],
                endSeconds:playTime[nowPlay][1],
                suggestedQuality:"large"
            });
        } 
    }
    if(event.data==1){$("h2").text(player.getVideoData().title);}}

    


