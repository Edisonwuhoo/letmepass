$(function(){
$("[type='color']").on("change",showC);
});

function showC(){
$('body').css("background-color",this.value)
}

