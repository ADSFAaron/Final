//預先載入Jquery再執行這個function
//window.onload=function(){
    /*$(document).ready(function() {
        $("input").click(function()
        {
            //eq 從 0 開始跑
            $("h1").text($("li").eq(0).text());
        });
    });*/
//};

$(document).ready(function()
{
    $("input").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);

        $("#title").text($("#choices li").eq(randomChildNumber).text());

        document.getElementById("pic").setAttribute("src", randomChildNumber + ".jpg");
        document.getElementById("pic").setAttribute("alt", randomChildNumber + ".jpg");
    });
});