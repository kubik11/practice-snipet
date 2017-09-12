$(function() {

window.onload = function(){
	var tabContent = document.querySelectorAll('.tab-content');
	var tabs = document.querySelectorAll('.tab');

	for (var i = 1; i < tabs.length; i++) {
		tabContent[i].classList.add('hidden');
	}

	var eventBlock = document.querySelector('.wrap-tab');
	eventBlock.onclick = tabHandler;

	function tabHandler(e){
		var target = e.target;
		if(target.className == 'tab'){
			for (var i = 0; i < tabs.length; i++) {
				tabs[i].classList.remove('active');
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hidden');
				if(target == tabs[i]){
					tabs[i].classList.add('active');
					tabContent[i].classList.remove('hidden');
					tabContent[i].classList.add('show');
				}
			}
		}
	}


	var button = document.querySelector('.button');

	button.onclick = function(){
		var modal = document.querySelector('.modal');
		modal.style.display = 'block';
	}

	window.onclick = function(e){
		var target = e.target;
		var modal = document.querySelector('.modal');
		if (target.className == 'modal'){
			modal.style.display = 'none';
		}
	}



	var slidePosition = 1;
	move(slidePosition);

	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	var dots = document.querySelectorAll('.dot');


	// Array.prototype.forEach = dots.forEach;
	
	//dots.onclick = function(e){
	//	for (var i = 0; i < dots.length; i++) {
	//		if(e.target == dots[i]){
	//		showSlide(i);
	//		}
	//	}		
	//}

	Array.prototype.forEach.call(dots, function(elem, i){
		elem.onclick = function(){
			if(!dots[i].classList.contains('active')){
			 	slidePosition = i;
				move(slidePosition);
			}
		}
	});


	prev.onclick = function(){
		showSlide(-1);
	}

	next.onclick = function(){
		showSlide(1);
	}

	function showSlide(n){
	//	alert("hail");
		move(slidePosition += n);
	}

	function move(n){
		var slides = document.querySelectorAll('.mySlide');
		var dots = document.querySelectorAll('.dot');

		if(n < 0){
			slidePosition = slides.length-1;
		}
		if(n >= slides.length){
			slidePosition = 0;
		}

		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
			slides[slidePosition].style.display = 'block';
		}
		for (var i = 0; i < dots.length; i++) {
			dots[i].classList.remove('active');	
			dots[slidePosition].classList.add('active');
		}

	}
}



});
