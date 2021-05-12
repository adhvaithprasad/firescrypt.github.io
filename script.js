var i = 0;
var txt = 'IoT for  everyone   (^ Δ ^)';
var speed = 170;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var v = 0;
var txt1 = 'Firestudio';
var speed1 = 170;
function studio() {
  if (v < txt1.length) {
    document.getElementById("demo-studio").innerHTML += txt1.charAt(v);
    v++;
    setTimeout(studio, speed1);
  }
}
// Wait for document to load
  document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");

    // Get our button switcher
    var themeSwitcher = document.getElementById("theme-switcher");

    // When our button gets clicked
    themeSwitcher.onclick = function() {
      // Get the current selected theme, on the first run
      // it should be `light`
      var currentTheme = document.documentElement.getAttribute("data-theme");

      // Switch between `dark` and `light`
      var switchToTheme = currentTheme === "dark" ? "light" : "dark"

      // Set our currenet theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });
 function myFunction(x) {
  if (x.matches) { // If media query matches
    alert('Tilt you phone for a better experience');
  } else {
   
  }
}

var x = window.matchMedia("(max-width: 311px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
