/**
 * Created by dell on 2016/4/20.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var aqiCityInput=document.getElementById('aqi-city-input');
    var aqiValueInput=document.getElementById('aqi-value-input');
    var aqicity=aqiCityInput.value.trim();
    var aqivalue=aqiValueInput.value.trim();
    var regexCity=/^[\u4e00-\u9fa5a-zA-Z]*$/;
    var regxValue=/^[1-9]+\d*$/;
    if(aqicity==""||aqivalue==""){
        alert("输入不能为空")
    }else if(!regexCity.test(aqicity)){
        alert("城市名不合法");
    }else if(!regxValue.test(aqivalue)){
        alert("空气质量必须为正整数");
    }else {
        aqiData[aqicity]=aqivalue;
    }

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable=document.getElementById('aqi-table');
    var text="<tr><td>城市</td><td>空气质量</td><td>操作</td> </tr>";
    for(var v in aqiData){
        text+="<tr><td>"+v+"</td><td>"+aqiData[v]+"</td><td><button>删除</button></td></tr>"
    }
    aqiTable.innerHTML=text;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    delete aqiData[city];

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var button=document.getElementById('add-btn');
    button.onclick=addBtnHandle;

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table=document.getElementById('aqi-table');
    table.addEventListener('click',function(event){
        var target=event.target;
       if(target.nodeName.toLocaleLowerCase()=='button'){
            delBtnHandle(target.parentNode.parentNode.firstChild.innerHTML);
       }
    });

}

init();