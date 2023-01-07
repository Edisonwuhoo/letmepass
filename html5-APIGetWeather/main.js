function getLocation(){
    //check geolocation exist
    if(navigator.geolocation == undefined){
        alert("something Wrong");
        return;
    }
    let settings = {
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(result, error, settings);
}
let a = "";
let b = "";
function result(position){
    //debugger;
    let thisCoords =  position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    let a = thisCoords.latitude;
    let b = thisCoords.longitude;
    console.log(a);
    console.log(b);
    //window.location.href =`https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
    
}

function error(err){
     alert(err);
}



let cityData=[
    {name:"",lat:"",lon:""},
    {name:"台北",lat:25.0856513,lon:121.421409},
    {name:"台中",lat:24.1852333,lon:120.4946381},
    {name:"高雄",lat:22.7000444,lon:120.0508691},
    {name:"玉山",lat:23.4751818,lon:120.9593216},
    {name:"台灣最南點",lat:21.899499975439507, lon:120.85809711283625},
    {name:"台灣最西點",lat:23.101817734138862, lon:120.03591532657862},
    {name:"台灣最北點",lat:25.300077631594732, lon:121.53696365799676},
    {name:"台灣最東點",lat:25.06245631834819, lon:122.00594342026672},


];

$(function(){
    for( let w = 0; w<cityData.length; w++){
        $("#citySelect").append(`<option value='${w}'>${cityData[w].name}</option>`);
    }
    $("#citySelect").on("change", loadServerData);




});



function loadServerData(){
    $("#result").empty();
    if(this.value == 0) return;
    let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey ="75c77a6fb14ddaf8e27f2d6b62b8c412";
    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric', //度C
        lang:'zh_tw' //中文
    })
    .done(function(data) {
        $("#result").append(`<p>氣溫: ${data.main.temp_min}~ ${data.main.temp_max}</p>`);
        $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
    })
    .fail(function(){ console.log("Error");
})
    .always(function(){ console.log("Always");
});
}