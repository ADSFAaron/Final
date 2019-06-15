var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷",
    "HAHAHA"
];

var inputMonth = 0, inputDay = 0;
var vertifyDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//inputMonth = document.getElementById("inDate");

// while(inputMonth<1 || inputMonth>12)
//     inputMonth = window.prompt("輸入月份");

// while(inputDay<1 || inputDay>vertifyDay[inputMonth])
//     inputDay = window.prompt("輸入日期");

var startDate = new Date();

function getObject(object)
{
//  alert(object.value);
//  console.log(object);
  
  //console.log(object.value); // result 2019-01-03

  var inMonth = object.value;
  inputMonth = inMonth.slice(5,7);
  inputDay = inMonth.slice(8);
  //console.log(inputMonth);
  //console.log(inputDay);

  setMonthAndDay(inputMonth,inputDay);

  //等整份文件載入完才執行底下js
$(document).ready(function()
{
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>")

    var topicCount = topic.length;

    for(var i=0;i<topicCount;i++)
    {
        //getTime() 用毫秒來計算
        $("#courseTable").append("<tr>");
        //補0用if判斷
        $("#courseTable").append("<td" + (i%2 == 0? "" : " id = 'special'") + ">" + ((i+1)<10 ? '0'+(i+1):(i+1)) + "</td>");
        //slice(n) : 忽略n個字元
        $("#courseTable").append("<td" + (i%2 == 0? "" : " id = 'special'") + ">" + (new Date(startDate.getTime() + (i*7*24*60*60*1000))).toLocaleDateString().slice(5) + "</td>");
        $("#courseTable").append("<td" + (i%2 == 0? "" : " id = 'special'") + ">" + topic[i] + "</td>");
        $("#courseTable").append("</tr>");
    }
});
}

function setMonthAndDay(startMonth = 1, startDay = 1) {
    //一次設定好月份和日期(輸入的月份-1 要對到0-11，輸入日期)
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    // startDate.setSecond(0);
    // startDate.setMilliseconds(123);
}

//setMonthAndDay(2,30);
//setMonthAndDay(inputMonth, inputDay);

startDate.toLocaleDateString();