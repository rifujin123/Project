$(window).scroll(function(){
    if($(this).scrollTop() !=0){
        $('#gotopbtn').show();
    }else{
        $('#gotopbtn').hide();
    }
});

$('#gotopbtn').click(function(){
    $('html').animate({
        scrollTop: 0
    },500);
});