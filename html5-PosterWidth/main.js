function asyncProcess(imageID, imageURL){
    return new Promise((resolve, reject)=>{
        $(imageID).attr('src',imageURL);//針對每一個img去設定他的src
        $(imageID).on('load',function(){//等到load之後執行function去拿到當下那個圖的原始寬度
            resolve($(this)[0].naturalWidth);//promise的事情如果成功 就會跑來resolve 否則應該還有一條reject這條路
        });
    });
}

$(function(){
    $("button").on("click",go);//把button綁定click go事件
});
 
function go(){//開始定義go function
    Promise.all([//promise.all 是三件事情都完成，才去做.then的事件
        asyncProcess("#image1","./06恐懼大街1666.jpg"),
        asyncProcess("#image2","./12恐懼大街1978.png"),
        asyncProcess("#image3","./18恐懼大街1994.png")
    ])
    .then(
        response => {
            var totalWidth = 0; //一開始寬度是0
            for(var x=0;x<response.length;x++){ //跑一個迴圈，看看有幾張圖，並且相加
                $("span").append(response[x]);
                totalWidth += response[x];
                if(x<response.length-1){ //如果還不是最後一張
                    $("span").append(" + ");
                }else{
                    $("span").append(" = " + totalWidth +"!   三張海報總共寬度是 "+totalWidth+"px.");
                }
            }
        },
        error => { //如果有錯誤 就跑這邊
            console.log(`Error:${error}`);
        }
    );
}