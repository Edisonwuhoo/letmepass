let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
// mapArray : map element data
// ctx : HTML5 Canvas
// currentImgMain : x, y location
// imgXXX : image object
const gridLength = 200;

function loadImages(sources, callback) {
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for (var src in sources) {
    numImages++;
  }
  for (var src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}


//Game initial
$(function(){
    // 0 - Empty, 1 - Obstacle, 2 - Final Stop, 3 - Enemy
  mapArray = [
    [0,1,1],
    [0,0,0],
    [3,1,2]
  ];

  ctx = $("#myCanvas")[0].getContext("2d");

  //把主角擺上畫面
  imgMain = new Image();
  imgMain.src = "images/spriteSheet.png";
  currentImgMain = {
    "x":0,
    "y":0
  };

  imgMain.onload = function(){
      ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y,  gridLength, gridLength);
  };








  var sources = {
    mountain: 'images/material.png',
    enemy: 'images/Enemy.png'
  };

  loadImages(sources, function (images) {
    for (var x in mapArray) {
      for (var y in mapArray[x]) {
        if (mapArray[x][y] == 1) {
          ctx.drawImage(images.mountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
        } else if (mapArray[x][y] == 3) {
          ctx.drawImage(images.enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
        }
      }
    }
  });

  // imgMountain = new Image();
  // imgMountain.src = "images/material.png";
  // imgEnemy = new Image();
  // imgEnemy.src = "images/Enemy.png";

  // imgMountain.onload = function(){
  //   imgEnemy.onload = function(){
  //       for(var x in mapArray){
  //           for(var y in mapArray[x]){
  //               if(mapArray[x][y] == 1){
  //                   ctx.drawImage(imgMountain, 32,65,32,32,y*gridLength, x*gridLength, gridLength, gridLength);
  //               }else if(mapArray[x][y] == 3){
  //                   ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
  //               }
  //           }
  //       }
  //   };
  // };
  
});

// User Event 處理使用者按下按鍵
$(document).on("keydown", function(event){
   let targetImg, targetBlock, cutIamgePositionX;
   targetImg = {//主角的目標座標
    "x":-1,
    "y":-1
   };

   targetBlock = {//主角的目標(對應2維陣列)
    "x":-1,
    "y":-1
   };

   event.preventDefault();
   //避免鍵盤預設行為發生(如捲動，放大，換頁，也就是原本鍵盤的功能無效了)。判斷使用者按下什麼病推算目標座標

   console.log(event.code);
//上下左右轉頭
   switch(event.code){
    case "ArrowLeft":
        targetImg.x = currentImgMain.x - gridLength;
        targetImg.y = currentImgMain.y; //沒變
        cutImagePositionX = 175; //face left
        break;
    case "ArrowUp":
        targetImg.x = currentImgMain.x ;
        targetImg.y = currentImgMain.y - gridLength; //沒變
        cutImagePositionX = 355; //face up
        break;
    case "ArrowRight":
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y = currentImgMain.y; //沒變
        cutImagePositionX = 540; //face right
        break;
    case "ArrowDown":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y +gridLength; //沒變
        cutImagePositionX = 0; //face down
        break;
    default: //其他按鍵的動作:沒有動作
        return;
   }
   //confirm the main role will not leave the map 確認人物不會跑出地圖
   if(targetImg.x <= 400 && targetImg.x >= 0 && targetImg.y <= 400 && targetImg.y >= 0){
    targetBlock.x = targetImg.y / gridLength;
    targetBlock.y = targetImg.x /gridLength;  
   }else{
    targetBlock.x = -1;
    targetBlock.y = -1;
   }


   //clear main role 清掉腳色
   ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength,gridLength);

   if(targetBlock.x != -1 && targetBlock.y != -1){
    //check map data
    switch(mapArray[targetBlock.x][targetBlock.y]){
      case 0: //可走
        $("#talkBox").text("");
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break
      case 1: //山 不可走
        $("#talkBox").text("撞到山");
        break
      case 2: //終點 可走
        $("#talkBox").text("首先我要感謝我爸");
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break
      case 3: //敵人
        $("#talkBox").text("珍妮佛");
        break
    }
   }else{
    $("#talkBox").text("邊界");
   }

   ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});


