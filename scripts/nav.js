function nav() {
  var x = document.querySelector(".main--nav");

  if (x.style.display === "flex") {
    x.style.display = "none";
   document.querySelector(".chat-content").style.marginLeft="0px";
  } else {
    x.style.display = "flex";
  }
}