(function(){
    $(".level1").mouseover(function(){
        $(this).addClass("current").children("ul").show();
    }).mouseout(function(){
        $(this).removeClass("current").children("ul").hide();
    })
}());


//轮播
//1.设置容器的总长度，2.向左移一步
let num= 1;
let i =0;
let timer = null;
swiper();
// 把定时器功能做一个函数封装
function swiper() {
    timer = setInterval(() => {
        // 1、图片功能
        num++;
        // 设置条件 当num大于6，num=2
        if (num > 6) {
            // num = 6的时候，其实显示  ban1  
            // 应该通过样式赋值的形式，直接变为 真正的 ban1
            $("#navs").css('left', -990)
            num = 2;
        }
        $("#navs").animate({ left: -num * 990 }, 500);

        // 2.小圆点功能
        i++;
        if (i > 4) {
            i = 0;
        }
        $("#bots li").eq(i).addClass('active').siblings().removeClass('active');

    }, 2000);
}

// 鼠标移入 清除定时器
$(".wrap").mouseover(() => {
    clearInterval(timer);
});

// 鼠标移出 开启定时器
$(".wrap").mouseout(() => {
    swiper();
});