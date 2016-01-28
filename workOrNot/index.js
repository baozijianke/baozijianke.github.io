
// TR 每上两天班,就会休息一天.但是我并无法记住到底是哪一天.所以我想依靠这个程序来帮助我.
window.onload = function(){
    var startDate = "2016-01-28"; //这一天没上班
    var endDate = getNowFormatDate();
    console.log(GetDateDiff(startDate,endDate));
    console.log(getNowFormatDate());

    var element=document.getElementById("date");
    element.innerHTML="今天是" + getNowFormatDate();
    if((GetDateDiff(startDate,endDate) % 3) ==0 ){
        console.log("今天不上班.所以请不要打电话,让她多睡会儿嘛.");
        var element=document.getElementById("workOrNot");
        element.innerHTML="今天不上班.所以请不要打电话,让TR多睡会儿嘛.";
    }else{
        console.log("今天要上班.所以要打电话叫床的.");
        var element=document.getElementById("workOrNot");
        element.innerHTML="今天要上班.所以要打电话叫床的.";
    }
}

function GetDateDiff(startDate,endDate)
{
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);
    return  dates;
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}