
//initial
var ctx, thisImage;
$(function(){
$("[type='date']").on("change",showDate);
ctx = $("#myCanvas")[0].getContext("2d");
});

function showDate(){
    //debugger;查看有沒有吃到值
   
    var thisDate = this.value;
    thisDate = thisDate.replace(/-/g,""); // g代表全域搜尋 搜尋所有-號 用空白取代
    thisImage = new Image();
    thisImage.src = "flipClockNumbers.png";
    thisImage.onload = function () {
        for(var x=0;x<thisDate.length;x++){
            ctx.drawImage(thisImage,thisDate[x] * 80, 0, 90, 130,   60 * x,  0, 60, 100);
        }
    }
}

