//  Interactions and Animations
let navbar = document.querySelector('.navbar');
let homeTitle = document.querySelector('#parallax');
let banner = document.querySelector('#banner');

// Checking if the element exists before take it's offsetTop
if (typeof (banner) != 'undefined' && banner != null) {
   banner = banner.offsetTop;
}

window.onscroll = function(){
  //  Change the background of the menu
  if(document.documentElement.scrollTop >= 150) {
    navbar.classList.add('colorfullNavbar');  // put colorful background
  }else {
    navbar.classList.remove('colorfullNavbar'); // remove background color
  }

  //  Parallax effect on the home page title
  if(document.documentElement.scrollTop < banner){
    homeTitle.style.top = (window.pageYOffset / 8) + '%';
  }
}
