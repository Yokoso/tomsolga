// Get values
const myNav = document.getElementById("nav");
const goals = document.getElementById("goals");

// Return the size of an element
let goalsCords = goals.getBoundingClientRect();

// console.log(goalsCords);

// Show/hide navigation when scrolled
window.onscroll = function(){
  "use strict";
  if((document.body.scrollTop >= goalsCords.top - 10) ||
    (document.documentElement.scrollTop >= goalsCords.top - 10)) {
    myNav.classList.add("scroll");
  }
  else {
    myNav.classList.remove("scroll");
  }
};
