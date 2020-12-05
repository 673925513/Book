// JavaScript Document$(function(){
$(function() {
    //弹出广告
    window.open("open.html", "", "top=100,left=300,width=500,height=327,scrollbars=0,resizable=0");

    //广告
    $(window).scroll(function() {
        var a = $(this).scrollTop() + 50;
        $("#right").css("top", a);
    });
    $("#right a").click(function() {
        $("#right").hide();
    });
    //鼠标移进移出
    /*$("#bookTab .book_type").mouseover(function(){
    $(this).addClass("book_type_out").siblings().removeClass("book_type_out");
    $(".book_class dl").hide();
    var i=$("bookTab .book_type").index(this);
    $(".boo*/
    $("#bookTab").find(".book_class dl:first").show(); //为每个BOX的第一个元素显示        
    //Tab切换
    $("#bookTab").children(".book_new").find("[id]").mouseover(function() {
            var id = "#book_" + $(this).attr("id");
            $("#bookTab").children(".book_class").find("[id]").hide();
            $(this).addClass("book_type_out").siblings().removeClass("book_type_out");
            $(id).show();
            $(this).parent().next().find(".box").hide().eq(index).show();
            $(this).addClass("hover").siblings().removeClass("hover");
        })
        //轮播图
    var index = 1; //用来控制自动切换的索引
    //要求1 自动切换图片和数字 通过定时每间隔几秒轮换
    function tu() {
        //右侧的数字会自动更换背景
        $("#scroll_number  li").eq(index).addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
        //图片跟着数字走
        $("#scroll_img li").eq(index).fadeIn().siblings().fadeOut();
        index++; //索引自增
        //当索引到li标签最大值时清零重新开始
        if (index >= $("#scroll_number  li").length) {
            index = 0;
        }
    }
    var a = window.setInterval(tu, 2000);
    //要求2 手动切换数字 鼠标移进数字书进行轮换
    $("#scroll_number li").hover(
            function() { //移进
                //关闭定时器
                window.clearInterval(a);
                $(this).addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
                //获取当前操作数字的索引 更新自动切换的索引
                index = $(this).index();
                $("#scroll_img li").eq(index).fadeIn().siblings().fadeOut();
            },
            function() { //移出
                a = window.setInterval(tu, 2000);

            }
        )
        //书讯快递循环垂直向上滚动
    var top = 0;

    function shu() {
        $("#express").children("li").first().animate({ marginTop: top-- }, 0, function() {
            if ((-top) > $(this).height()) {
                $(this).css("margin-top", 0).appendTo($("#express"));
                top = 0;
            }
        });
    }
    var id = window.setInterval(shu, 50);

})