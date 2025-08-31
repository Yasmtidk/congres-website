// menu responsive

let menuBtn = document.querySelector('.btn-burger');
let menu = document.querySelector('.menu-responsive');
let CroixNav= document.querySelector('.closing-cross-nav');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

CroixNav.addEventListener('click', function(){
	menu.classList.remove('active');
})

// changement de langues 

let btnlangue= document.querySelector('.flag');
let langages= document.querySelector('.languages-container');
btnlangue.addEventListener('click', function(){
	langages.classList.toggle('active');
})

