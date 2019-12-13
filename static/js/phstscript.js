// меню
//  jQuery('.phst_header_navmenu_item').click(function(event){
//       jQuery(this).find('.phst_header_navmenu_sub').toggleClass('phst_header_navmenu_sub_vsbl');
//  });



//  jQuery(function($){
//   $(document).mouseup(function (e){ // событие клика по веб-документу
//     var div = $(".phst_header_navmenu_sub_vsbl"); // тут указываем class элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         && div.has(e.target).length === 0) { // и не по его дочерним элементам
//       div.toggleClass('phst_header_navmenu_sub_vsbl'); // скрываем его
//     }
//   });
// });



// $(document).ready(function(){
//   $('.phst_header_navmenu_item').hover(
//     function() {
//       $( this ).addClass('activ_submenu');
//     }, function() {
//       $( this ).removeClass('activ_submenu');
//     }
//   );
// });

 $(document).ready(function(){
$('.phst_header_navmenu_item').mouseover(function(){
$(this).addClass('activ_submenu');
});
$('.phst_header_navmenu_item').mouseleave(function(){
$(this).removeClass('activ_submenu');
});
});
// меню end



   // partners
   var swiper = new Swiper('.phst_partners_swiper', {
      slidesPerView: 1,
      spaceBetween: 5,
      watchOverflow:true,
      grabCursor: true,
      pagination: {
        el: '.phst_partners_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.phst_partners_pagination_next',
        prevEl: '.phst_partners_pagination_prev',
      },

       breakpoints: {
        640: {
          slidesPerView: 3.4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }

    });

   // organizators
    var swiper = new Swiper('.phst_organizators_swiper', {
      slidesPerView: 1,
      spaceBetween: 5,
      watchOverflow:true,
      grabCursor: true,
      pagination: {
        el: '.phst_organizators_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.phst_organizators_pagination_next',
        prevEl: '.phst_organizators_pagination_prev',
      },
       breakpoints: {
        640: {
          slidesPerView: 3.4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }
    });


  // hamburger
    jQuery('.phst_header_hamburger_box').click(function(event){
      jQuery('.phst_header_main').toggleClass('phst_header_main_mobile');
      jQuery('body').toggleClass('body_ow_hdn');
    });


  // table wrap
    $('table').wrap('<div class="phst_kit_table_wrapper"></div>');

  /* active link */
type="text/javascript">jQuery(document).ready(function($) {
    $('.phst_header_navmenu a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).parent().addClass('activelink');
        }
        else {
            $(this).parent().removeClass('activelink');
        }
    });
    $('.phst_header_navmenu_item').has('.activelink').addClass('activelink_parent');
});
/* active link END*/






// personal area
(function($) {
$(function() {
  $('.phst_personalarea_setting_tabs').on('click', '.phst_personalarea_setting_tab:not(.phst_setting_tab_active)', function() {
    $(this)
      .addClass('phst_setting_tab_active').siblings().removeClass('phst_setting_tab_active')
      .closest('.phst_personalarea_setting_block').find('.phst_personalarea_setting_content').removeClass('phst_personalarea_setting_content_active').eq($(this).index()).addClass('phst_personalarea_setting_content_active');
  });
});
})(jQuery);
// personal area end






/* form registration */
$(document).ready(function() {
  //material contact form animation
$('.form_registration').find('.registration_input').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(this).parent().find('label').css({color: "#ac7100"});
    $(targetItem).find('label').css({
      'top': '5px',
      'fontSize': '14px',
      'z-index': '2'
    });
  }
})
$('.form_registration').find('.registration_input').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').css({color: "#ac7100"});
  $(this).parent().find('label').animate({
    'top': '5px',
    'fontSize': '14px',
    'z-index': '2'
  }, 300);
})
$('.form_registration').find('.registration_input').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
     $(this).parent().find('label').css({color: "#1a1919"});
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '19px',
      'z-index': '0'
    }, 300);
  }
})
});
/** auto-size textarea **/
$(document).ready(function() {
$('textarea').on('paste input', function () {
    if ($(this).outerHeight() > this.scrollHeight){
        $(this).height(1)
    }
    while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))){
        $(this).height($(this).height() + 1)
    }
});
});
/** auto-size textarea end **/
/** send form **/
$(document).ready(function() {

  //E-mail Ajax Send
  $(".form_registration").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
/** send form end **/
/* form registration end */



$(document).ready(function() {

// option multiple



});

$('#id_geo_of_activity').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});

$('#id_field_of_activity').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});


// $(document).ready(function() {

// option multiple end