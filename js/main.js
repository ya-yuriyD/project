

	var scroll = document.getElementById('scroll');
	scroll.onclick = function() {
		window.scrollTo(0,800);
	}


//============ Список команды(четвертый слайд) ============

	document.onclick = function(e) {

		if (e.target.classList.contains('open')) {
			e.target.classList.remove('open'); 
			e.target.nextElementSibling.classList.remove('open');
		return 
		}

		var names = document.querySelectorAll('.name');
		for (var i = 0; i < names.length; i++) {
			names[i].classList.remove('open');
			names[i].nextElementSibling.classList.remove('open');
			names[i].style.color = "#E6FFF6";
		}

		if (e.target.closest('.name')) {
			e.target.style.color = "#f2a62d";
			e.target.classList.add('open');
			e.target.nextElementSibling.classList.add('open');
		}
}

//============ Меню(пятый слайд) ============

;(function() {
	let elem = document.getElementById('first');
	
	elem.onfocus = function() {
		elem.style.left = "500px";
		elem.classList.remove('active');
	}
	elem.onblur = function() {
		elem.style.left = "1100px";
		elem.classList.add('active');
	}
}());

;(function() {
	let elem = document.getElementById('second');
	
	elem.onfocus = function() {
		elem.style.left = "600px";
		elem.style.boxShadow =  "-20px 0  100px 100px rgba(0,0,0,.5)";
		elem.classList.remove('active');
	}
	elem.onblur = function() {
		elem.style.left = "1200px";
		elem.classList.add('active');
		elem.style.boxShadow =  "none";
	}
}());

;(function() {
	let elem = document.getElementById('third');
	
	elem.onfocus = function() {
		elem.style.left = "700px";
		elem.style.boxShadow =  "-20px 0  100px 100px rgba(0,0,0,.5)";
		elem.classList.remove('active');
	}
	elem.onblur = function() {
		elem.style.left = "1300px";
		elem.classList.add('active');
		elem.style.boxShadow =  "none";
	}
}());
