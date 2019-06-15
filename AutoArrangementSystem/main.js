//等整份文件載入完才執行底下js
$(document).ready(function()
{
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>")

    var topicCount = topic.length;

    for(var i=0;i<topicCount;i++)
    {
        //getTime() 用毫秒來計算
        $("#courseTable").append("<tr>");
        //補0用if判斷
        $("#courseTable").append("<td" + (i%2 == 0? "" : " id = 'special'") + ">" + ((i+1)<10 ? '0'+(i+1):(i+1)) + "</td>");
        //slice(n) : 忽略n個字元
        $("#courseTable").append("<td" + (i % 2 == 0 ? "" : " id = 'special'") + ">" + (new Date(startDate.getTime() + (i * 7 * 24 * 60 * 60 * 1000))).toLocaleDateString().slice(5) + "</td>");
        $("#courseTable").append("<td" + (i%2 == 0? "" : " id = 'special'") + ">" + topic[i] + "</td>");
        $("#courseTable").append("</tr>");
    }
});