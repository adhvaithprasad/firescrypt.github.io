function beautify(){
     var val = window.editor.getValue()
  //Remove leading spaces
    var array = val.split(/\n/);
    array[0] = array[0].trim();
    val = array.join("\n"); 
  //Actual beautify (prettify) 
    val = js_beautify(val);
  //Change current text to formatted text
    editor.setValue(val);
    var y = document.getElementById("snackbar-text");
 y.innerHTML="document beautified";
    var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}