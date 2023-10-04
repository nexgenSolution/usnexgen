(function($) {
	'use strict';
		
	var categories = [
		{
			'selector' : '#c5536',
			'category' : 'Downloads Document Center',
		},
		{
			'selector' : '#c3376, #c3397, #c108',
			'category' : 'Softwaredownload CASSY Lab'
		},
		{
			'selector' : '#c3661,#c3662',
			'category' : 'Softwaredownload Computertomografie'
		},
		{
			'selector' : '#c122',
			'category' : 'Softwaredownload Kennlinien elektrischer Maschinen'
		},
		{
			'selector' : '#c126',
			'category' : 'Softwaredownload KFZ-Software'
		},
		{
			'selector' : '#c958, #c1947',
			'category' : 'Softwaredownload COM3LAB Software'
		},
		{
			'selector' : '#c1515',
			'category'  : 'Softwaredownload LEYLAB Software'
		},
		{
			'selector' : '#c121',
			'category' : 'Softwaredownload weitere Software'
		}
	];
	
	function registerEventListeners () {
	
		categories.forEach(function (category) {
			$(category.selector).on('click', 'a', handleClick);
		});
	
	}
	
	registerEventListeners();
	
	function handleClick (event) {
		
		var link = $(event.target).closest('a')[0];
		var method = '_trackEvent';
		var category = getCategory( link );
		var action = 'Download';
		var opt_label = link.href;
		
		var event = [
			method,
			category,
			action,
			opt_label
		];
		
		_gaq.push(event);
		
	}
	
	function getCategory (target) {
		
		var category;
		var lang;
		
		category = categories.filter(function (category) {
			return $(target).closest(category.selector).length > 0;
		})[0];
		
		
		lang = $('html').attr('lang');
		
		return category.category + ' (' + lang.toUpperCase() + ')';
		
	}
	
}(jQuery));