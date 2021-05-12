var i = 0;

  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.location.href="studio.html";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

