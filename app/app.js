/*eslint-env jquery*/




$(document).ready(function(){

/*
  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $( '#menu' ).toggleClass('is-active');
  });
*/
/* MENUSCROLL */


/*
    $(url).waypoint({
      handler: function() {
        $('a.is-active').removeClass('is-active');
        $('a[href^="'+url+'"]').addClass('is-active');
      }, offset: $('.navbar').height()
    });

    $(url).waypoint({
      handler: function() {
        $('a.is-active').removeClass('is-active');
        $('a[href^="'+url+'"]').addClass('is-active');
      }, offset: -$('.navbar').height()
    });

  });



  $('[data-modal]').click(function(){
    var open = $(this).attr('data-modal');
    $(open).addClass('is-active');
    $('.carousel').slick();
  });

  $('.modal-close').click(function(){
    $(this).closest('.modal').removeClass('is-active');
    $('.carousel').slick('unslick');
  });


  $('.slider').slick({ });


  $(".navbar").sticky({topSpacing:0});
*/
$('.scroll').each(function(){
    var url = this.hash;
    $(this).on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        'scrollTop':$(url).offset().top
      }, 400, 'swing');
    });
  });

  $('.knowmore').click(function(e){
    e.preventDefault();
    var open = $(this).attr('href');
    $(open).slideDown();
    $(this).slideUp();
  });



  window.sr = ScrollReveal({
    distance : '10%',
    duration : 1800,

    reset    : true
  });
  sr.reveal( 'h2', { origin: 'left' } );
  ScrollReveal().reveal('h1, .hr', { delay: 500, rotate   : { y: 180 }, });
  ScrollReveal().reveal('.card', {  });



  $('form').submit(function(e){
    $('form button').addClass('is-loading');
    e.preventDefault();
      var data = $(this).serialize();
      $.get('https://dragonbarbudo.com/api/email.php?'+data, function(d){
        $('form').slideUp();
        $('.notification').slideDown();
      })

  });


  });
