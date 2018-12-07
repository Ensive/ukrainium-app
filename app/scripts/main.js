(function () {
  $('.js-slider').slick({
    arrow: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    prevArrow: '<a href="#" class="arrow arrow--prev"></a>',
    nextArrow: '<a href="#" class="arrow arrow--next"></a>',
  });

  const $root = $('body,html');
  const $order = $('.js-link');


  $order.on('click', scrollToBlock);

  function scrollToBlock(e) {
    e.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top;
    $root.animate({scrollTop: top}, 800);
  }
})();

