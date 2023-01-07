$(function(){
    $("#dropbox").on("dragenter",dragenter);
    $("#dropbox").on("dragleave",dragleave);
    $("#dropbox").on("dragover",dragover);
    $("#dropbox").on("drop",drop);
});

function dragenter(){
    $("#dropbox").css("background-color","red");
    $("#dropbox").text("Drop THE enter!");

}
function dragleave(){
    $("#dropbox").css("background-color","blue");
    $("#dropbox").text("Drop THE leave!");

}
function dragover(e){
    e.preventDefault();
   

}
function drop(e){
    e.preventDefault();
    let files = e.originalEvent.dataTransfer.files;
    if(files.length == 0){
        return false;
    }
    convert(files[0]);
}

function convert(file){
    //debugger;
    if(!file.type.match(/text.*/)){
        alert("請拖放文字檔");
        dragleave();
        return false;
    }

    let reader = new FileReader();
    reader.onloadend = function(){
        let s = reader.result;
        $("#preview").text(s);
        // $("#preview").append("\n"+s);
        //dragleave();
    };

    reader.readAsText(file);
};