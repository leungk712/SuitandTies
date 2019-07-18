const navlinks = document.querySelectorAll('.nav-content a');
const content = document.querySelectorAll('.content');
const aboutSection = document.querySelector('#about');
const selectionsSection = document.querySelector('#selections');
const rentalsSection = document.querySelector('#rentals');
const contactSection = document.querySelector('#contact');

// Images

let i = 0;
let images = [];
let time = 5000;

images[0] = 'https://images.unsplash.com/photo-1555109908-7a9253984b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1010&q=80';
images[1] = 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
images[2] = 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
images[3] = 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
images[4] = 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

function changeImg(){
  document.slide.src = images[i];
  
  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

// Content

for(let i = 0; i < navlinks.length; i++){
  navlinks[i].addEventListener('click', () => {
    console.log('clicked!');
  });
}

function hideContent(){
  content.classList.add('hide');
}

function hideImages(){
  images.classList.add('hide');
}
