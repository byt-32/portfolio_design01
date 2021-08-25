(function () {
	const body = $('#main');
	function h() {

		const winHeight = window.innerHeight, 
			winWidth = window.innerWidth;

		if (winWidth > 644) {
			body.css({height: winHeight})
		} else {
			body.css({height:'auto'})
		}
		// if (winHeight > 590) {	}

	}h()
	window.onresize = function() {
		h()
	};
	const ele = $('#mood-box'), def = $('#mood-box span');
	// var where = 'left', fade_val=0;
	function changeClass(initClass, newClass) {
		$('#mood-box span.'+initClass).fadeOut(100)
		setTimeout(()=>{
			def.removeClass('fa ' + initClass)
			def.addClass('fa ' + newClass)
			$('#mood-box span.'+newClass).fadeIn(100)
		}, 400)
	}
	ele.on('click', ()=>{
		if (def.hasClass('fa fa-moon-o')) {
			changeClass('fa-moon-o','fa-lightbulb-o')
			changeMood({color: '#fff', bg: '#000'})
		} else {
			changeClass('fa-lightbulb-o', 'fa-moon-o')
			changeMood({color: '#000', bg: '#fff'})
		}
	})
	function changeMood(prop) {
		body.css({background: prop.bg})
		$('#page > header').css({color: prop.color})
		$('#ft').css({background: prop.color})
		$('.form-group > legend').css({color: prop.bg})
	}
})();