(function () {
	const body = $('#main');
	var winHeight = window.innerHeight, 
		winWidth = window.innerWidth;
	window.onload = ()=>{
		assignHeight()
		setClass()
		setTimeout(()=>{
			console.log('lala')
			$('.ld').css({position: 'initial', zIndex: 0})
		},100)
	}
	function resetBodyHeight() {
		body.css({height: 'auto', marginTop: '7em', paddingBottom: 0})
		$('#ft').css({position: 'initial', marginTop: '6.5em'})
		$('#f-rht .dp').css({backgroundPosition: '-89px 0'})
		$('#nav').css({position: 'absolute', top: '10%'})
	}
	function assignHeight() {
		winHeight = window.innerHeight
		winWidth = window.innerWidth
		if (winWidth > 704) {
			body.css({height: '100vh'})
		} else {	
			body.css({height:'auto'})
		}
		if (winHeight < 590 && winWidth > 704) {	
			resetBodyHeight()
		} 

	}
	
	window.onresize = function() {
		assignHeight()
	};
	const ele = $('#mood-box'), def = $('#mood-box span');
	// var where = 'left', fade_val=0;
	function changeClass(initClass, newClass, obj) {
		$('#mood-box span.'+initClass).fadeOut(400)
		setTimeout(()=>{
			def.removeClass('fa ' + initClass)
			def.removeClass('animate__animated animate__rollOut')
			def.addClass('fa ' + newClass)
			$('#mood-box span.'+newClass).fadeIn(500)
		}, 400)
	}
	ele.on('click', ()=>{
		var currentName = ''
		if (def.hasClass('fa fa-sun-o')) {
			def.addClass('animate__animated animate__fadeIn')

			changeClass('fa-sun-o','fa-moon-o')
			changeMood({h1: '#f9dede9c', p: '#908484', main: '#060404', ft: '#191414f0', social: '#6f6363', cta: '#000000'})
		} else {
			changeClass('fa-moon-o', 'fa-sun-o')
			changeMood({h1: '#6b3f3f', p: '#6b4d4d', main: '#fff', ft: '#0a0a15', social: '#a55454', cta: '#fe3030'})
		}
	})
	function changeMood(prop) {
		body.css({background: prop.main})
		$('.page > header h1').css({color: prop.h1})
		$('.page > header p').css({color: prop.p})
		$('#ft').css({background: prop.ft})
		$('.social span.bx').css({color: prop.social})
		$('.page #cta01 button').css({borderColor: prop.cta})
	}
	function setClass() {
		const ele = $('.page > header, #cta01')
		ele.addClass('animate__zoomIn')
		if (winWidth >= 780) {
			$('#nav').addClass('animate__slideInLeft')
		} else if (winWidth <= 704) {} 
		else {
			$('#nav').addClass('animate__slideInLeft')
			ele.addClass('animate__fadeIn')

		}
	}
	const [list1, list2] = [document.querySelectorAll('.nav ol > li')
	, document.querySelectorAll('nav#nav-resp > li')]
	
	function setActiveClass(index) {
		list2[index].classList.add('resp-active')
		list1[index].classList.add('active')

		for (let i=0; i<list1.length; i+=1) {
			if (index !== i) {
				list1[i].removeAttribute('class')
				list2[i].removeAttribute('class')
			}
		}
	}	
	Array.from(list1).forEach((el, i)=>{
		el.addEventListener('click', function() {
			setActiveClass(i)
		})
	})
	Array.from(list2).forEach((el, i)=>{
		el.addEventListener('click', function() {
			setActiveClass(i)
		})
	})
	$('.page #cta01 button:last-of-type').hover(function() {
		$(this).toggleClass('animate__headShake')
	}).on('click', function() {
		$(this).css({transform: 'scale(.95)'})
		var t = setTimeout(()=>{
			$(this).css({transform: 'scale(1)'})
		}, 500)
	})
	$('#form').on('submit', function(e) {
		if ($('#form name').text() === '')
		e.preventDefault()
		
	})
	$('#nav-resp-ico').on('click', ()=>{
		var [cls1, cls2, ele] = ['icofont-navigation-menu', 'icofont-close', $('#nav-resp-ico > span')]
		var isClicked = false
		function hide() {
			if (isClicked || ele.hasClass(cls1)) {
				$('#nav-resp-view').animate({left: '-300px'}, 400, 'linear')
				$('body').css({overflow: 'visible'})
				ele.removeClass(cls2)
				ele.addClass(cls1)
			}
		}
		if (ele.hasClass(cls1)) {
			setTimeout(()=>{$('body').css({overflow: 'hidden'}).one('click', ()=>{
				isClicked = true
				hide()
				
			})},300)
			$('#nav-resp-view').animate({left: 0}, 600, 'linear').css({display: 'block'})
			ele.removeClass(cls1)
			ele.addClass(cls2)
		} else {
			hide()
		}
	})
})();