
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__scores-counter'),
      lines =document.querySelectorAll('.skills__scores-line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 130 ){
            $(".sidepanel__link-svg path").css("fill", "black");
			$(".sidepanel__divider").css("background-color", "black");
			$(".sidepanel__text").css("color", "black");
		}  else {
			$(".sidepanel__link-svg path").css("fill", "white");
			$(".sidepanel__divider").css("background-color", "white");
			$(".sidepanel__text").css("color", "white");
		} 
    });
});  

