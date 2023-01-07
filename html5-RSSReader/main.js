$(function(){
    $("button").on("click",loadServerData);
    });

function loadServerData(){
    let rss2json ="https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html")//加上衛服部的資料網址 //只要換這邊的RSS 就可以自動貼出來
    .done(function(data){
        //debugger;
        for(let x = 0; x <data.items.length; x++){
            // let thisRow =`<tr><td><a target="_blank" href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data
            //     .items[x].pubDate.split(" ")[0]}'</td></tr>`
            //     $("#dataTable").append(thisRow);
                ///or////
            let thisRow = '<tr>';
            thisRow +=`<td><a target="_blank" href='${data.items[x].link}'>${data.items[x].title}</a></td>`;
            thisRow += `<td>${data.items[x].pubDate.split(" ")[0]}</td>`;//pubdate是抓出來的
            thisRow += '</tr>';
            //整段就是 抓出一筆資料 for每一項(針對第一項，第一項.連結 第一項.標題 第一項.出版時間(用split來改善 )) 丟出來 以table樣式
            
            $("#dataTable").append(thisRow);
        }
    })
    .fail(function(){console.log("Error la");})
    .always(function(){console.log("allllways");})
}