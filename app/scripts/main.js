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
  const $anchor = $('.js-scroll');


  $anchor.on('click', scrollToBlock);

  function scrollToBlock(e) {
    e.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top - 40;
    $root.animate({scrollTop: top}, 800);
  }

  const $modal = $('.js-modal');
  const $modalTrigger = $('.js-open-modal');
  const $closeModal = $('.js-close-modal');

  $modalTrigger.on('click', showModal);
  $closeModal.on('click', hideModal);
  $(document).on('mousedown', handleDocumentClick);

  function showModal() {
    $modal.fadeIn('is-shown');
    $('body').addClass('is-static');
  }

  function hideModal() {
    $modal.fadeOut('is-shown');
    $('body').removeClass('is-static');
  }

  function handleDocumentClick(e) {
    if ($modal.has(e.target).length === 0){
      $modal.fadeOut('is-shown');
      $('body').removeClass('is-static');
    }
  }
})();

