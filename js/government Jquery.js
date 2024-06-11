$(function () {
    $("#newbannerwrap #newbanner").fadeIn(3000);

    /*     $("#").fadeOut(2000) //서서히 사라짐
        $("#").fadeTo(2000,0.3)// 투명도  */

    /*   $('.boxes .box1').hover(
          function () {
              $(this).find('img').stop().animate({ top: '-20px' }, 1000)
          }, function () {
              $(this).find('img').stop().animate({ top: '0px' }, 1000)
          }
      ); */


    $('.boxes .box2').hover(
        function () {
            $(this).find('img').stop().animate({ top: '-20px' }, 1000)
        }, function () {
            $(this).find('img').stop().animate({ top: '0px' }, 1000)
        }
    );
    /*
        offset 함수 : 지정객체의 좌표인식( top , left ).document 안에서의 위치 값을 반환.
        scrollTop : 브라우저 상단 위치 속성 ( scrollLeft:브라우저 좌측 위치 속성)
    */

    $('#btnDown').click(function () {
        $('html,body').animate({ scrollTop: $('#box1').offset().top - 0 }, 800);
    })

    $('#banner3 >.container >div').hover(
        function () {
            $(this).find('img').stop().animate({ left: '-20%', width: '120%', height: '120%' }, 500)
        }, function () {
            $(this).find('img').stop().animate({ left: 0, width: '100%', height: '100%' }, 500)
        }
    );


    /*     햄버거 메뉴 모달 팝업 부분  */
    $('#hamburgerarea').click(function () {
        $('.pop').css('display', 'block')
    })

    $('.pop button').click(function () {
        $('.pop').css('display', 'none')
    })

    /*     모달팝업 + 버튼 부분  */

    $('.morepop').click(function () {
        $('.buttonarea').css('display', 'block')
    })

    $('.buttonarea #close').click(function () {
        $('.buttonarea').css('display', 'none')
    })


    //슬라이드 배너  좌에서 우로 
    var banner = $('#newbanner div')
    var current = 0;

    setInterval(function () {
        var prev = banner.eq(current)
        move(prev, 0, '-100%')

        current++
        if (current == banner.size()) { current = 0 }

        var next = banner.eq(current)
        move(next, '100%', 0)
    }, 2000)


    function move(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 400)
    }


    $(".box1").on({
        mouseover: function () {
            swiper1.autoplay.stop(); 
        },
        mouseout: function () {
            swiper1.autoplay.start();
        },
    });

    //버튼 변경되는 부분 

    $('.sd_stop').click(function(){   //stop 버튼 클릭하면 
        $('.sd_stop').hide(); //stop 버튼 감추기 
        $('.sd_start').show(); //start 버튼 보이기 
        swiper1.autoplay.stop(); //반복 취소하고 
    })

    //playbutton click 
    $('.sd_start').click(function(){
        $('.sd_stop').show();   //stop 버튼 보여지기 
        $('.sd_start').hide();   //start 버튼 감추기 
        swiper1.autoplay.start();    
    })













});
