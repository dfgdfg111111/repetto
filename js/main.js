$(document).ready(function(){  
 
   
   
   
   
    //제일 밑에 있는'페이지 위로가기'버튼
    $('.backTop').click(function(){
        $('html, body').animate({scrollTop:0},1000,'swing');
    });

    var $menuItem = $('#nav li a'); //메뉴 버튼을 변수로

    $menuItem.click(function(){
        $(this).addClass('on');
        $(this).parent().siblings().find('a').removeClass('on');

        var el = $(this).attr('href');  //클릭한 a의 속성 href의 속성값을 변수에 넣는다. 
        var $el =$(el); 
        var headerH = $('header').height();     //header의 세로길이를 변수에 넣는다
        //console.log($el);

        scrollTo($el,headerH);    //위에서 구한 섹션의 아이디명,헤더의 길이를 매개변수에 넣고 함수 실행
    }); 
    
    function scrollTo(element,hh){
        var offsetTop = element.offset().top;      //엘리먼트의 top에서 부터의 위치값
        console.log('offset의 값은?' + offsetTop);
        var scrollTotal = offsetTop-hh;            //엘리먼트의 위치값에서 hh를 배준다 

        $('html, body').animate({scrollTop:scrollTotal},1000,'swing');

    }

    

});

