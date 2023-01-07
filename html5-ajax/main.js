let thisButton1 = document.getElementById("2022/12/02");
let thisButton2 = document.getElementById("2022/12/22");
let thisButton3 = document.getElementById("2022/02/12");
let thisButton4 = document.getElementById("2022/02/02");


let showData = document.getElementById("showData");


thisButton1.addEventListener("click",loadServerData);
thisButton2.addEventListener("click",loadServerData);
thisButton3.addEventListener("click",loadServerData);
thisButton4.addEventListener("click",loadServerData);


function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("NO XMLHttpRequest!");
        return;
    }
    let thisdd = "";
    if(this.id == ""){
        thisdd = new Date();
    }else{
        thisdd = new Date(this.id);
    }
    let thisYear = thisdd.getFullYear();
    let thisMonth = thisdd.getMonth() + 1 < 10 ? "0" + (thisdd.getMonth() + 1) : thisdd.getMonth() + 1;
    let thisDay = thisdd.getDate() < 10 ? "0" + thisdd.getDate() : thisdd.getDate();
    // debugger;
    let thisDate = thisYear.toString() + thisMonth.toString() + thisDay.toString();

    //settings for XMLHttpRequest object


    xmlHttpRequest.open("GET",thisDate+".txt", true);//settings for XMLHttpRequest object
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange = function(){
        //console.log("readyState:", xmlHttpRequest.readyState);//確認是否準備好了
        //console.log("Status:", xmlHttpRequest.Status);//確認是否準備好了
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            thisButton.style.visibility = "hidden";
        }
    };
}