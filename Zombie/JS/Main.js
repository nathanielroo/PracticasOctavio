$(document).ready(function(){
 
    //Mostrar el menu :3
    $('#button-menu').click(function(){
        
        if($('#button-menu').attr('class') == 'fa fa-bars'){
            $('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close');
            $('.navegacion .menu').css({'left':'0px'});
            $('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,.3)'});
        }else{
            $('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');
            $('.navegacion .menu').css({'left':'-320px'});
            $('.navegacion .submenu').css({'left':'-320px'});
            $('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,.0)'});
        }
    });

    //Mostrar submenus :D
    $('.navegacion .menu > .item-submenu a').click(function(){
        var positionMenu = $(this).parent().attr('menu');
        
        $('.item-submenu[menu='+positionMenu+'] .submenu').css({'left': '0'});
    });

    //Ocultando Submenu
    $('.navegacion .submenu li.go-back').click(function(){
        $(this).parent().css({'left':'-320px'})
    });
    //Slider
    $('.slider').bxSlider({
        mode:'fade',
        slideWidth: 700,
        captions: true,
        auto:true,
        autoControls: false,
        infiniteLoop: true,
        responsive: true
    });
});