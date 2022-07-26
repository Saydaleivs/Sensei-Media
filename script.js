$(document).ready(function(){
    AOS.init();

    $('.display-changer').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        dots: true
    });


    let options = {
        strings: [
            'Студия дизайна ПОЛНОГО ЦИКЛА',
            'НАШИ УСЛУГИ...', 
            'МЫ ЗНАЕМ ТОЛК В ДИЗАЙНЕ!'],
        typeSpeed: 60,
        showCursor: false,
        loop: true,
        loopCount: Infinity,
        backSpeed: 100,
      };
      
      let typed = new Typed('.element', options);
  })