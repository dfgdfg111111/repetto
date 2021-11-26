$(document).ready(function(){  
 
   
   
   
   
    //제일 밑에 있는'페이지 위로가기'버튼
    $('.backTop').click(function(){
        $('html, body').animate({scrollTop:0},1000,'swing');
    });

    var $menuItem = $('#nav li a'); //메뉴 버튼을 변수로

    $menuItem.click(function(){
        $(this).addClass('on');
        $(this).parent().siblings().find('a').removeClass('on');

        var el = $(this).attr('href');  
        var $el =$(el); 
        var headerH = $('header').height();    

        scrollTo($el,headerH);    
    }); 
    
    function scrollTo(element,hh){
        var offsetTop = element.offset().top;      
        console.log('offset의 값은?' + offsetTop);
        var scrollTotal = offsetTop-hh;           

        $('html, body').animate({scrollTop:scrollTotal},1000,'swing');

    }

    

});

