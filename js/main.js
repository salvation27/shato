$('a[data-anchor][href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });


$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(400).fadeOut('slow');
});

// длябургера анимация


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


$(function(){
  $('.arct').click(function(){
    $('#exampleModal').arcticmodal();
    
  });
});



// появление меню по нажатии на кнопку

$(document).ready(function(){
 $(".burger_test").click(function(){
    $(".brger_menu").toggleClass("vis");
  });

});







$(document).ready(function(){
  $('[data-submit]').on('click', function(e){
      e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
     
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Надо заполнить',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Надо заполнить',
            },
            email:{
              required:'Надо заполнить', 
              email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch($formId){
            case'goToNewPage':
              $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://wayup.in/lm/landing-page-marathon/success';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
          yaCounter27714603.reachGoal('lm17lead');
              });
          break;        
          case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {                    
                setTimeout(function (){

                 $(".js-form").trigger('reset'); 
                   $('#overlay').fadeOut();
                },233333100);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                },100);
                $('#overlay').on('click', function(e) {
        $('#overlay').fadeOut();
    });
                    
            });
        break;          
        }       
return false; 
    }                           
  })
 }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
    $('[data-scroll]').on('click', function(){
      $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })             
   });




// таймер

   jQuery(function($){
   $("#phone").mask("+7(999) 999-9999");
   });


  



  


  

 // $(".menu_hidden").click(function(){
 //    $(".menu_menu").toggleClass("mobileMenu");
 //  });





// слайдер оффера


$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
   arrows: true,



  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
   
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.resp').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
   arrows: true,

  // asNavFor: '.slider-nav',
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// слайдер на первом экране


$('.tip1').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
   arrows: true,

  // asNavFor: '.slider-nav',
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.about1').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
   arrows: true,

  // asNavFor: '.slider-nav',
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.pot1').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 3,
  slidesToShow: 3,
   arrows: true,
  responsive: [
    {
      breakpoint: 1210,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
    responsive: [
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// плавная прокрутка








$(document).ready(function(){
  $(".partners_sistem_more").on('click',function(){
    $(this).parents(".partners_sistem_card").find(".podrobno").toggleClass("choose");
    
  });

});


$(document).ready(function(){
  $(".furnit_sistem_more").on('click',function(){
    $(this).parents(".furnit_sistem_card").find(".podrobno").toggleClass("choose");
    
  });

});

