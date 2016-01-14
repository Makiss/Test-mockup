var main = function() {
	var $slideArea = $('.slide-area');
  //DROPDOWN MENU
  $('.dropdown-toggle').click(function(event) {
  	event.preventDefault();
    $('.dropdown-menu').toggle();
  });
//AUTOMATIC SLIDER CHANGING
  $($slideArea).cycle({
  	fx: 'fade',
  	timeout: '4000'
  });
//MANUAL SLIDER CHANGING
  $('.arrow-next').click(function (event) {
  	event.preventDefault();
  	$slideArea.cycle('next');
  });
  
  $('.arrow-prev').click(function (event) {
  	event.preventDefault();
  	$slideArea.cycle('prev');
  });
//MODAL POP UP 
  $('.feedback').click(function (event) {
    event.preventDefault();
    $('.form-background').fadeIn(400);
  });

  $('.modal-close').click(function (event) {
    event.preventDefault();
    $('.form-background').fadeOut(400);
  });

  $('.feedback-form').submit(function (event) {
    event.preventDefault();
  if($('input[type=text]').val().length === 0) {
    $('input[type=text]').val('Поле обязательно для заполнения').addClass('warning');
}
});

  $('input[type=text]').blur(function () {
  if($(this).val().length === 0) {
    $(this).val('Поле обязательно для заполнения').addClass('warning');
}
});

$('input[type=text]').focus(function () {
  $(this).val('').removeClass('warning');
});
};

$(document).ready(main);