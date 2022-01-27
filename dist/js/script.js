const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__scores-counter'),
      lines =document.querySelectorAll('.skills__scores-line span'),
      sidepanel = document.querySelectorAll('.sidepanel');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
counters.forEach((item, i) => {
    lines[i].getElementsByClassName.width = item.innerHTML;
});

