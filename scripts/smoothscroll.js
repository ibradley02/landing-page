var smoothScroll = require('smoothscroll');
 
var buttons = document.querySelector('.button');
var sendto = document.querySelector('.portfolio-link');

var handleClick = function (event) {
    event.preventDefault();

    smoothScroll(sendto);
};
buttons.addEventListener('click, handleClick')

