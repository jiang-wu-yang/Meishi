(function(){
    $(".level1").mouseover(function(){
        $(this).addClass("current").children("ul").show();
    }).mouseout(function(){
        $(this).removeClass("current").children("ul").hide();
    })
}());