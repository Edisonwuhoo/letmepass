$(function(){
    $("button").on("click",go);
});

const manKeyWords = ["雄","伯","博","勃","文","志","賢","壯"]; //判讀的關鍵字列表
const grilKeyWords = ["宜","靜","郁","婷","柔","珊","妤","美"];
const monWords = ["埍","索","腦"];
const weedK = ["弦","和","謝"];
const JoWorks = ["潘","尼","懷","斯"];
const RWords = ["機","器","若","史","柯"];
const ALawords =["阿","拉","主","瓜"];
const ghostWords=["鬼","魂","靈","幽","死"];
const ForWords=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let go = ( ) =>{ // 定義gofunction  箭頭函數沒有參數必須要留著() 但是只有一個參數就可以省略() 
    let inputText = $("#userInput").val();//去拿畫面上id為userinput的value(val())
    const isMen = manKeyWords.some(thisElement => inputText.includes(thisElement));//some:只在乎後面callbackfunction尋訪(陣列)後 是否有 任何一個是否有true 
    const isGirl = grilKeyWords.some(thisElement => inputText.includes(thisElement));//include也是相同道理，只是他是針對字串?
    const isM = monWords.some(thisElement => inputText.includes(thisElement));
    const isJ = JoWorks.some(thisElement => inputText.includes(thisElement));
    const isHa = weedK.some(thisElement => inputText.includes(thisElement));
    const isRW = RWords.some(thisElement => inputText.includes(thisElement));
    const isAL = ALawords.some(thisElement => inputText.includes(thisElement));
    const isgh = ghostWords.some(thisElement => inputText.includes(thisElement));
    const isfo = ForWords.some(thisElement => inputText.includes(thisElement));
    if(isMen && isGirl){ //同時符合
        $("h1").text("😁");
    }else if(isMen){
        $("h1").text("🧑");
    }else if(isGirl){
        $("h1").text("👩");
    }else if(isM){
        $("h1").text("🧠");
    }else if(isHa){
        $("h1").text("👽");
    }else if(isJ){
        $("h1").text("🤡");
    }else if(isRW){
        $("h1").text("🤖");
    }else if(isAL){
        $("h1").text("👳");
    }else if(isgh){
        $("h1").text("👻");
    }else if(isfo){
        $("h1").text("🧙");
    }else{//以上都不符合
        $("h1").text("🤓");
    };
    
}