(function($) {
    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();
        var wScrollReverse = 1-(wScroll/200);

        //console.log(wScroll/2);
        $('.header__box--h1').css({
            'transform': 'translate(0px, -' + wScroll/2 + '%)'
        });

        $('.header__box--h1').css({
            'opacity': wScrollReverse.toFixed(2)
        });

    })

})(jQuery);
