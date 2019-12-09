(function($) {
    $(document).ready(function($) {
        $('#id_content_type option').each(function() {
            //alert ($(this).text());
            cur_text = $(this).text();
            if ((cur_text != 'Фонд') && (cur_text != '---------') && (cur_text != 'Частное лицо') && (cur_text != 'Корпорация')) {
                $(this).remove();
            }
        });
    });
})(django.jQuery);
