django.jQuery(document).ready(function(){
    // Array of the tabular inlines you want to collapse
    var tabNames = ['Персоны', 'Слайды', 'Новости'];
    for (var x in tabNames) {
	    var selector = "h2:contains(" + tabNames[x] + ")";
        if (django.jQuery(selector).parent().parent().find('input').eq(4).val() == "") {
	        django.jQuery(selector).parent().addClass("collapsed");
	        django.jQuery(selector).append(" (<a class=\"collapse-toggle\" id=\"customcollapser\""+ x + " href=\"#\"> Показать </a>)");
        }
    };
    django.jQuery(".collapse-toggle").click(function(e) {
	django.jQuery(this).parent().parent().toggleClass("collapsed");
	var text = django.jQuery(this).html();
	if (text==' Показать ') {
	    django.jQuery(this).html(' Спрятать ');
	}
	else {
	    django.jQuery(this).html(' Показать ');
	};
	e.preventDefault();
    });
});
