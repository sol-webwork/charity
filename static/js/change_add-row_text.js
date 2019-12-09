/*
django.jQuery( document ).ready(function() {
django.jQuery('#site-name').text('asd')

        django.jQuery('.add-row td a').eq(0).text('Добавить еще одну Персону');
alert('asf');        django.jQuery('.add-row td a').eq(1).text('Добавить еще одну Персону');
alert('asff');
});
*/
(function($) {
    $(document).ready(function($) {
        $('#site-name').text('asd');
        $('.add-row td a').eq(0).text('Добавить еще одну Персону');
        $('.add-row td a').eq(1).text('Добавить еще одну Персону');
        
    });
})(django.jQuery);
