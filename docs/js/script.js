const $header__open_menu = $('.header__open_menu'),
      $header__close_menu = $('.header__close_menu'),
      $main_nav = $('.header__main_nav_row');

$header__open_menu.on('click', function(evt) {
  evt.preventDefault();

  $main_nav.addClass('open');
})

$header__close_menu.on('click', function(evt) {
  evt.preventDefault();

  $main_nav.removeClass('open');
})



$(document).ready(function(){
  $('.draggable').owlCarousel({
    stageElement: 'ul',
    itemElement: 'li',
    autoWidth: true
  });
});


const $catalog__categories_wrapper = $('.catalog__categories_wrapper'),
      $catalog__categories_open = $catalog__categories_wrapper.find('.catalog__categories_open'),
      $catalog__categories = $catalog__categories_wrapper.find('.catalog__categories'),
      $categories__items = $catalog__categories.find('.categories__item');
let catalog__categories_height = 0;

$.each($categories__items, function() {
  const $item = $(this),
        $btn = $item.find('.categories__btn');

  catalog__categories_height += $item.height();

  $btn.on('click', function(evt) {
    evt.preventDefault();
  
    $catalog__categories_open.removeClass('open');
  })
})

$catalog__categories_open.on('click', function(evt) {
  evt.preventDefault();

  $catalog__categories_open.toggleClass('open');
  console.log('catalog__categories_height: ' + catalog__categories_height)
  console.log('$catalog__categories.height(): ' + $catalog__categories.height())
  if($catalog__categories.height() !== catalog__categories_height) {
    $catalog__categories.height(catalog__categories_height);
  } else {
    $catalog__categories.height(0);
  }
})



/* temp */

$('.catalog__sections').hide();

$('.categories__btn[href="pools.html"]').on('click', function(evt) {
  evt.preventDefault();
  
  $('.catalog__sections').show();
})