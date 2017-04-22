requirejs.config({
	paths: {
		jquery: 'jquery-1.12.1.min'
	}
});

requirejs(['jquery', 'backtop'], function ($, backtop) {
	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'go',
	// 	pos: 0,
	// 	speed: 800
	// });
	$('#backTop').backtop({
		mode: 'go',
		pos: 0,
		speed: 800
	});
});