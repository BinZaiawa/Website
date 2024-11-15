document.addEventListener('visibilitychange', function () {
    var isHidden = document.hidden;
    if (isHidden) {
        document.title = "Bin|补药走嘛(*´д`*)";
    } else {
        setTimeout(() => {
            document.title = "Bin|好耶！泥回来了！o(*≧▽≦)ツ❤～";
        }, 1000);
        setTimeout(() => {
            document.title = "Bin|欢迎你呀!(づ￣ 3￣)づ";
        }, 2200);
    }
});

//hitokoto
fetch('https://v1.hitokoto.cn')
.then(response => response.json())
.then(data => {
    const hitokoto = document.getElementById('hitokoto_text')
    hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
    hitokoto.innerText = "“" + data.hitokoto + "”"
})
.catch(console.error)

function time() {
    var date = new Date();
    var hours = date.getHours();
    var day = date.getDay();
    var str = "";
    if (hours >= 0 && hours <= 10)
        str += "早上好";
    else if (hours > 10 && hours <= 14)
        str += "中午好";
    else if (hours > 14 && hours <= 18)
        str += "下午好";
    else if (hours > 18 && hours <= 24)
        str += "晚上好";
    str += " ~ 今天是";
    switch (day) {
        case 0:
            str += "星期天，明天又是周一呜呜呜QAQ";break;
        case 1:
            str += "星期一，怨气冲天！";break;
        case 2:
            str += "星期二喽，加油！";break;
        case 3:
            str += "星期三，加油，再撑两天就放假了！";break;
        case 4:
            str += "星期四，加油，再撑一天就放假了！";break;
        case 5:
            str += "星期五，明天终于放假了! qwq";break;
        case 6:
            str += "星期六，明天是周日噢";break;
    }
    var time = document.getElementById("time");
    time.innerHTML = str;//put the text in the element
    // 初始时间，日/月/年 时:分:秒
    X = new Date("9/9/2024 00:00:00");
    Y = new Date();
    T = (Y.getTime() - X.getTime());
    M = 24 * 60 * 60 * 1000;
    a = T / M;
    A = Math.floor(a);
    b = (a - A) * 24;
    B = Math.floor(b);
    c = (b - B) * 60;
    C = Math.floor((b - B) * 60);
    D = Math.floor((c - C) * 60);//信息写入到div中
    document.getElementById('runtime').innerHTML = "本站已运行: " + A + "天" + B + "小时" + C + "分" + D + "秒";
}
setInterval(time, 1000);//refresh(maybe too fast)
function console_welcome() {
    console.log("！！！！！");
    console.log("💡Hello!\n✅Here is the Website of @xxby!\n🌏Welcome to ask me to add your own website in 'Friendly Links'!\n🔵Use the latest Chromium kernel browser for the best experience!");
}