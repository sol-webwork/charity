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
      .closest('.phst_personalarea_setting_block').find('.phst_personalarea_setting_content').addClass('phst_personalarea_setting_content_none').eq($(this).index()).removeClass('phst_personalarea_setting_content_none');
  });
});
})(jQuery);
// personal area end