(function () {
	function h() {
		const body = document.querySelector('#main');

		const winHeight = window.innerHeight, 
			winWidth = window.innerWidth;

		if (winWidth > 644) {
			body.style.height = winHeight + 'px';
		} else {
			body.style.height = 'auto'
		}
		// if (winHeight > 590) {	}

	}h()
	window.onresize = function() {
		h()
	};
	const ele = $('#mood-box'), def = $('#mood-box span');
	// var where = 'left', fade_val=0;
	function changeClass(initClass, newClass) {
		setTimeout(()=>{
			def.removeClass('fa ' + initClass)
			def.addClass('fa ' + newClass)
			$('#mood-box span.'+newClass).fadeIn(200)
		}, 400)
	}
	ele.on('click', ()=>{
		if (def.hasClass('fa fa-moon-o')) {
			$('#mood-box span.fa-moon-o').fadeOut(200)
			changeClass('fa-moon-o','fa-lightbulb-o')
		} else {
			$('#mood-box span.fa-lightbulb-o').fadeOut(200)
			changeClass('fa-lightbulb-o', 'fa-moon-o')
		}
	})
	function changeMood() {
		
	}
})();