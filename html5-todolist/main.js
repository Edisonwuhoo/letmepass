$(function(){
    $("[type='checkbox']").on("change",updateProgress);
    });

function updateProgress() {
    let hasChecked = 0;
    for (let x = 0; x < $("[type='checkbox']").length; x++) {
        if ($("[type='checkbox']")[x].checked) {
            hasChecked += 1;
        }
    }
   // $("meter").attr("min",0);
    //$("meter").attr("max", $("[type='checkbox']").length);//最大長度 就是 所有勾選箱的長度同最下
    $("meter").attr("value",hasChecked/$("[type='checkbox']").length);//值=已經勾選的勾選箱數 /

    $("progress").attr("value",hasChecked/$("[type='checkbox']").length); //值 就是所有勾選箱/勾選箱數 因為progress的值是0~1


    $("#myRange").attr("max", $("[type='checkbox']").length);//更改最大長度(預設是0~100) 就是 所有勾選箱的長度 此為3
    $("#myRange").attr("value",hasChecked) //值=已經勾選的勾選箱數 每勾1， 填滿1/3
}