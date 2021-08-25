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
		// if (winHeight )

	}h()
	window.onresize = function() {
		h()
	};

	// (function () {
	// 	const elt = $('#mood-box')[0];
	// 	const moods = Array.from(elt.querySelectorAll('.fa'))
	// 	function moodSwitch() {
	// 		const darkElts = [$('#main')]
	// 		const lightElts = [$('#page > header'), $('#ft')]
			

	// 	}
	// 	elt.addEventListener('click', fn)
	// 	function fn(e) {
	// 		function ds() {
	// 			this.o1 = function (e, val, n) {
	// 				setTimeout(()=>{
	// 					e.style.display = val
	// 				}, 300)
	// 			}
	// 			this.o2 = function(e, cls) {
	// 				setTimeout(()=>{
	// 					e.classList.remove(cls)
	// 				}, 800)
	// 			}
	// 		}
	// 		var delay = new ds()
	// 		if (e.target == moods[0]) {
	// 			e.target.classList.add('mvL')
	// 			delay.o2(e.target, 'mvL') 
	// 			moodSwitch()
	// 		 }else{
	// 			e.target.classList.add('mvR')
	// 			delay.o2(e.target, 'mvR') 
	// 		}
			
	// 		// var index = e.target
	// 		if (e.target !== elt) {
	// 			for (let i=0; i<moods.length; i+=1) {
	// 				// ds(moods[i], 'block')()
	// 				delay.o1(moods[i], 'block')
	// 				if (moods[i] == e.target) {
	// 					delay.o1(e.target, 'none')
	// 					continue
	// 				}
	// 			}
	// 		}
			
	// 	}
	// })()
})();