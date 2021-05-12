/*
setTimeout(function(){ document.getElementById('frame1').style.display="none"; },
function showframe1(){
 document.getElementById('frame1').style.display="block";  5000);
}*/

var url = null
const editor = ace.edit('editor')
document.getElementById('editor').style.fontSize='16px';
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
require('ace/ext/language_tools');
editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        let Emmet = require("ace/ext/emmet");
ace.config.loadModule("ace/ext/searchbox", function(m) {m.Search(editor)});
function search1(){
editor.searchBox.show();
}


editor.searchBox.hide();
editor.setShowPrintMargin(false);
editor.renderer.setShowGutter(true);
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
  return editor.session.getValue()
}


// Get the modal

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

function launchpreference(){
document.getElementById('frame3').style.display="block";
}
function closeframe3(){
document.getElementById('frame3').style.display="none"; }
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


function monokai(){
document.documentElement.setAttribute("data-theme", "monokai");
editor.setTheme("ace/theme/monokai");  
}
function eclipse(){
  editor.setTheme("ace/theme/eclipse");
  document.documentElement.setAttribute("data-theme", "eclipse");
}
function chrome(){
  editor.setTheme("ace/theme/chrome");
  document.documentElement.setAttribute("data-theme", "chrome");
}
function github(){
  editor.setTheme("ace/theme/github");
  document.documentElement.setAttribute("data-theme", "github");
}
function xcode(){
  editor.setTheme("ace/theme/xcode");
  document.documentElement.setAttribute("data-theme", "xcode");
}
function server(){
  editor.setTheme("ace/theme/sqlserver");
  document.documentElement.setAttribute("data-theme", "server");
}
function terminal(){
  editor.setTheme("ace/theme/terminal");
  document.documentElement.setAttribute("data-theme", "terminal");
}
function chaos(){
  editor.setTheme("ace/theme/chaos");
  document.documentElement.setAttribute("data-theme", "chaos");
}
function sublime(){
  editor.setTheme("ace/theme/solarized_dark");
  document.documentElement.setAttribute("data-theme", "sublime");
}
function nord(){
  editor.setTheme("ace/theme/nord_dark");
  document.documentElement.setAttribute("data-theme", "nord"); 
}
function tiny(){
document.getElementById('editor').style.fontSize='14px';
}
function normal(){
document.getElementById('editor').style.fontSize='16px';
}
function medium(){
document.getElementById('editor').style.fontSize='21px';
}
function huge(){
document.getElementById('editor').style.fontSize='26px';
}
function large(){
document.getElementById('editor').style.fontSize='30px';
}

function getIframe() {
  var iframe = document.getElementById('iframe')
  return iframe
}

function setIframeUrl(url) {
  var iframe = getIframe()
  iframe.src = url
}
function buttonclick68() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  window.open(url);
}

document.getElementById("link").onclick = function(e) {
  e.preventDefault();
   var code = getEditorCode();
  removeUrl(url);
  url = createUrl(code);
  document.getElementById("popupdarkbg").style.display = "block";
  document.getElementById("popup").style.display = "block";
  document.getElementById('popupiframe').src = url;
  document.getElementById('popupdarkbg').onclick = function() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popupdarkbg").style.display = "none";
  };
  return false;
}

window.onkeydown = function(e) {
    if (e.keyCode == 27) {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popupdarkbg").style.display = "none";
      e.preventDefault();
      return;
    }
}

