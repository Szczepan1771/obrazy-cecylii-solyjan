const btnGoToUp = document.querySelector('div.goToUp');

//przewijanie menu
$('ul li').on('click', function () {
    const clickMenu = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(clickMenu).offset().top
    }, 1000)
})
//przewijanie na górę
$(btnGoToUp).on('click', function () {
    console.log('działa');
    $('body, html').animate({
        scrollTop: '0px'
    }, 1000)
})
//pojawianie/zanikanie przycisku, sekcji


$(document).on('scroll', function () {

    const scrollValue = $(document).scrollTop();
    const windowHeight = $(window).outerHeight();
    const active = (scrollValue >= $('.me').offset().top * 0.7);

    const $gallery = $('div.gallery div');

    const $vernissages = $('div.vernissages div');
    const vernissagesFromTop = $vernissages.offset().top;
    const vernissagesHeight = $vernissages.outerHeight();
    //przycisk przewijania
    if (active) {
        btnGoToUp.style.display = 'block';
    }
    else btnGoToUp.style.display = 'none';
    //sekcje
    if (scrollValue > vernissagesFromTop + vernissagesHeight ) {
        $gallery.addClass('active');
    }

    if (scrollValue > vernissagesFromTop + vernissagesHeight - windowHeight) {
        $vernissages.addClass('active');
    }

    if (scrollValue < 300) {
        $('div').removeClass('active');
    }

})