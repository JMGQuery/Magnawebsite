$(".menu .menucontainer .login").on("click",function ()
{
    $(".modalcontainer").fadeIn("slow",function(){
    $(".modalcontainer").css('display','block');
})
})

$(".modalcontainer .modal .closecontainer .closebtn").on("click",function ()
{
    $(".modalcontainer").fadeOut("slow",function(){
    $(".modalcontainer").css('display','none');
})
})


setTimeout(function(){$(':password').val('');},10); //este pedo
