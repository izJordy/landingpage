let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorALL('nav_links li');

window.addEventListener("mousemove", cursor);

function cursor(e){
  mouseCursor.getElementsByClassName.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}