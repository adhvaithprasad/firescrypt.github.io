var url = null
const editor = ace.edit('editor')
document.getElementById('editor').style.fontSize='16px';
editor.setTheme("ace/theme/monokai")

editor.session.setMode("ace/mode/html");
 
editor.setShowPrintMargin(false);
editor.renderer.setShowGutter(true);
editor.session.setUseWorker(false)
function createUrl(html) {
  var blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}


function removeUrl(url) {
  URL.revokeObjectURL(url)
}
function getIframe() {
  var iframe = document.getElementById('iframe')
  return iframe
}

function setIframeUrl(url) {
  var iframe = getIframe()
  iframe.src = url
}

function getEditorCode() {
  return editor.getValue()
}

function buttonclick() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  setIframeUrl(url)
  
}
// Get the modal
function buttonclick68() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  window.open(url);
  
}
function download_txt() {
  var save = prompt("Save file as", "Waffle");
  var textToSave = getEditorCode() ;
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = save + ".wafer";
  hiddenElement.click();
}

document.getElementById('save').addEventListener('click', download_txt);


function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}
function seiko(){
  var find = document.getElementById("search").value;
  var replace = document.getElementById("replace").value;
  if(editor.find(find)){
editor.replace(replace);
  }
  else{
    alert('no such keyword in your file  as : ' + find);
  }
  
}
function launchpreference(){
document.getElementById('frame3').style.display="block";
}
function launchsearch(){
document.getElementById('frame2').style.display="block";
document.getElementById('searchbox').style.display="block";
}
function launchconsole(){
document.getElementById('consolediv')
.style.display="block";
}
function closeframe2(){
document.getElementById('frame2').style.display="none"; }
function closeframe3(){
document.getElementById('frame3').style.display="none"; }
function closeconsole(){
document.getElementById('consolediv')
.style.display="none";  
}
if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

console.log = function(message) {
    console.olog(message);
   document.getElementById('console').innerHTML += ('<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log;

function blocks(){
  document.getElementById('editor').style.display="none";
  document.getElementById('blocks').style.display="block";
}
function blocklyclose(){
  document.getElementById('editor').style.display="block";
  document.getElementById('blocks').style.display="none"; 
}