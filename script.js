'use strict';

let btn = document.querySelectorAll('.btn');
let modal= document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnClose = document.querySelector('.btn-close')
modal.classList.add('hidden');
overlay.classList.add('hidden');
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btn.length; i++)
btn[i].addEventListener('click', function(){
   modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
btnClose.addEventListener('click', close)
overlay.addEventListener("click", close);