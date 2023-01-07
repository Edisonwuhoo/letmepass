//先宣告一堆全域變數 事件觸發
let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray : map element data
//ctx : HTML5 Canvas
//currentImgMain : x, y, location
// imgXXX : image object

const gridLength = 200;  //長寬600的九宮格 一格就是200



//Game initial
$(function(){
    // 0-empty可走  1-obdtacle障礙  2-final stop終點    3-enemy敵人
    mapArray = [
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];

    ctx = $("#myCanvas")[0].getContext("2d"); //getContext 是canvas的屬性 這句話有點像在畫面上割出600*600的畫布

    //把主角丟上畫布
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        "x":0,
        "y":0
    }
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0, /*往右剪*/80, /*往下剪*/130,currentImgMain.x, currentImgMain.y, gridLength, gridLength); //把甚麼東西()畫到畫布上
    };/*左上角是原點*/                                                                  /*上方這些就是將圖案縮放到圖裡面*/







     
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";

    imgMountain.onload =function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray[x]){
                    if(mapArray[x][y] == 1){
                        ctx.drawImage(imgMountain, 32,65,32,32, y * gridLength, x * gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y] ==3){
                        ctx.drawImage(imgEnemy, 7,40,104,135, y * gridLength, x * gridLength, gridLength,gridLength)
                    }
                }
            }
        }
    }
});
 
//User Event
$(document).on("keydown",function(event){ //event可以自訂 為 e eo ejoigf 都可以

}); 