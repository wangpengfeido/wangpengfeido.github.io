/**
 * Created by dell on 2016/8/25.
 */

$(document).ready(function () {
    var dateDaywork="a";
    var dateCalculateDay="a";

    var domChooseDaywork = $("#date_choose_daywork");
    var domCalculateDay=$("#date_calculate_day");
    var domBtnOK=$("#btn_OK");
    var domResult=$("#result");

    domChooseDaywork.val("");
    domChooseDaywork.dcalendarpicker({format: 'yyyy/mm/dd'});
    domCalculateDay.val("");
    domCalculateDay.dcalendarpicker({format:'yyyy/mm/dd'});

    domBtnOK.on("click",function(){
        var dayInterval;
        dateDaywork=new Date(domChooseDaywork.val());
        dateCalculateDay=new Date(domCalculateDay.val());
        if(isNaN(dateDaywork.getDate())===true||isNaN(dateCalculateDay.getDate())===true){
            alert("请选择日期");
            return;
        }
        if(dateDaywork.getTime()>dateCalculateDay.getTime()){
            alert("要计算的日期必须晚于选择的白班日期");
            return;
        }
        dayInterval=parseInt((dateCalculateDay.getTime()-dateDaywork.getTime())/1000/60/60/24);
        switch (dayInterval%3){
            case 0:
                domResult.html("结果：今天白班")
                break;
            case 1:
                domResult.html("结果：今天夜班")
                break;
            case 2:
                domResult.html("结果：今天休班")
                break;
        }
    });

    //console.log(new Date("2013/02/23"));

});