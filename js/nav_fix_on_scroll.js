// When the user scrolls the page, execute myFunction
window.onscroll = function() {fixHeader()};

// Get the navbar


// Get the offset position of the navbar
// var sticky = navbar.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixHeader() {
  var navbar = document.getElementById("nav-main");

  if (document.body.scrollTop > 98 || document.documentElement.scrollTop > 98) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 