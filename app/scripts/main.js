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
  const $anchor = $('.js-link');


  $anchor.on('click', scrollToBlock);

  function scrollToBlock(e) {
    e.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top - 40;
    $root.animate({scrollTop: top}, 800);
  }

  const $popUp = $('.js-pop-up');
  const $popUpTrigger = $('.js-pop-up-button');
  const $closePopup = $('.js-close');

  $popUpTrigger.on('click', showPopUp);
  $closePopup.on('click', hidePopUp);
  $(document).on('mousedown', hidePopUp);

  function showPopUp() {
    $popUp.fadeIn('is-shown');
    $('body').addClass('static');
  }

  function hidePopUp(e) {
    $popUp.fadeOut('is-shown');
    $('body').removeClass('static');

    if ($popUp.has(e.target).length === 0){
      $popUp.removeClass('is-shown');
    }
  }
})();

