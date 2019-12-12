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



var id_geo_of_activity = $('#id_geo_of_activity');
id_geo_of_activity.selectize({
  plugins: ['remove_button']
});

var id_field_of_activity = $('#id_field_of_activity');
id_field_of_activity.selectize({
  plugins: ['remove_button']
});

});




// $(document).ready(function() {

//Fraud
// var $ = {
//    get: function(selector){ 
//       var ele = document.querySelectorAll(selector);
//       for(var i = 0; i < ele.length; i++){
//          this.init(ele[i]);
//       }
//       return ele;
//    },
//    template: function(html){
//       var template = document.createElement('div');
//       template.innerHTML = html.trim();
//       return this.init(template.childNodes[0]);
//    },
//    init: function(ele){
//       ele.on = function(event, func){ this.addEventListener(event, func); }
//       return ele;
//    }
// };

// //Build the plugin
// var drop = function(info){var o = {
//    options: info.options,
//    selected: info.selected || [],
//    preselected: info.preselected || [],
//    open: false,
//    html: {
//       select: $.get(info.selector)[0],
//       options: $.get(info.selector + ' option'),
//       parent: undefined,
//    },
//    init: function(){
//       //Setup Drop HTML
//       this.html.parent = $.get(info.selector)[0].parentNode
//       this.html.drop = $.template('<div class="drop"></div>')
//       this.html.dropDisplay = $.template('<div class="drop-display">Display</div>')
//       this.html.dropOptions = $.template('<div class="drop-options">Options</div>')
//       this.html.dropScreen = $.template('<div class="drop-screen"></div>')
      
//       //Getting interesting
//       this.html.parent.insertBefore(this.html.drop, this.html.select)
//       this.html.drop.appendChild(this.html.dropDisplay)
//       this.html.drop.appendChild(this.html.dropOptions)
//       this.html.drop.appendChild(this.html.dropScreen)
//       //Hide old select
//       this.html.drop.appendChild(this.html.select);
      
//       //Core Events
//       var that = this;
//       this.html.dropDisplay.on('click', function(){ that.toggle() });
//       this.html.dropScreen.on('click', function(){ that.toggle() });
//       //Run Render
//       this.load()
//       this.preselect()
//       this.render();
//    },
//    toggle: function(){
//       this.html.drop.classList.toggle('open');
//    },
//    addOption: function(e, element){ 
//       var index = Number(element.dataset.index);
//       this.clearStates()
//       this.selected.push({
//          index: Number(index),
//          state: 'add',
//          removed: false
//       })
//       this.options[index].state = 'remove';
//       this.render()
//    },
//    removeOption: function(e, element){
//       e.stopPropagation();
//       this.clearStates()
//       var index = Number(element.dataset.index);
//       this.selected.forEach(function(select){
//          if(select.index == index && !select.removed){
//             select.removed = true
//             select.state = 'remove'
//          }
//       })
//       this.options[index].state = 'add'
//       this.render();
//    },
//    load: function(){
//       this.options = [];
//       for(var i = 0; i < this.html.options.length; i++){
//          var option = this.html.options[i]
//          this.options[i] = {
//             html:  option.innerHTML,
//             value: option.value,
//             selected: option.selected,
//             state: ''
//          }
//       }
//    },
//    preselect: function(){
//       var that = this;
//       this.selected = [];
//       this.preselected.forEach(function(pre){
//          that.selected.push({
//             index: pre,
//             state: 'add',
//             removed: false
//          })
//          that.options[pre].state = 'remove';
//       })
//    },
//    render: function(){
//       this.renderDrop()
//       this.renderOptions()
//    },
//    renderDrop: function(){ 
//       var that = this;
//       var parentHTML = $.template('<div></div>')
//       this.selected.forEach(function(select, index){ 
//          var option = that.options[select.index];
//          var childHTML = $.template('<span class="item '+ select.state +'">'+ option.html +'</span>')
//          var childCloseHTML = $.template(
//             '<i class="dropdown_close" data-index="'+select.index+'">&#xf00d;</i></span>')
//          childCloseHTML.on('click', function(e){ that.removeOption(e, this) })
//          childHTML.appendChild(childCloseHTML)
//          parentHTML.appendChild(childHTML)
//       })
//       this.html.dropDisplay.innerHTML = ''; 
//       this.html.dropDisplay.appendChild(parentHTML)
//    },
//    renderOptions: function(){  
//       var that = this;
//       var parentHTML = $.template('<div></div>')
//       this.options.forEach(function(option, index){
//          var childHTML = $.template(
//             '<a data-index="'+index+'" class="'+option.state+'">'+ option.html +'</a>')
//          childHTML.on('click', function(e){ that.addOption(e, this) })
//          parentHTML.appendChild(childHTML)
//       })
//       this.html.dropOptions.innerHTML = '';
//       this.html.dropOptions.appendChild(parentHTML)
//    },
//    clearStates: function(){
//       var that = this;
//       this.selected.forEach(function(select, index){ 
//          select.state = that.changeState(select.state)
//       })
//       this.options.forEach(function(option){ 
//          option.state = that.changeState(option.state)
//       })
//    },
//    changeState: function(state){
//       switch(state){
//          case 'remove':
//             return 'hide'
//          case 'hide':
//             return 'hide'
//          default:
//             return ''
//        }
//    },
//    isSelected: function(index){
//       var check = false
//       this.selected.forEach(function(select){ 
//          if(select.index == index && select.removed == false) check = true
//       })
//       return check
//    }
// }; o.init(); return o;}


// //The loot you are acutally looking for
// //Run Please
// var myDrop = new drop({
//    selector:  '#id_geo_of_activity',
   
// });
// });

// option multiple end