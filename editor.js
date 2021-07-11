
	const editor = ace.edit('editor');
    require('ace/ext/language_tools');
    require('ace/ext/statusbar');
    editor.setOptions({
                  enableBasicAutocompletion: true,
                  enableSnippets: false,
                  enableLiveAutocompletion: true,
                //  useWrapMode: true,
                  highlightActiveLine: true,
                  showPrintMargin: false,
                  
                  mode:'ace/mode/text'
  
    });
  
  editor.getSession().setUseWorker(false);
  editor.setTheme('ace/theme/cobalt');




function setlang(){
    var x = document.getElementById("mode-selector").selectedIndex;
    var lang = document.getElementsByTagName("option")[x].value;
    editor.session.setMode("ace/mode/"+lang);
   document.getElementById('setlang').innerHTML= " language set to : " + lang;
  }
  
  function settheme(){
    var theme = document.getElementById("theme-selector").value;
    editor.setTheme("ace/theme/"+theme);
   document.getElementById('settheme').innerHTML= " Theme set to : " + theme;
  }
  function setsize(){
    var size = document.getElementById("font-size-selector").value;
  document.getElementById('editor').style.fontSize=size+'px';
   document.getElementById('setsize').innerHTML= " Size set to : " + size + 'px';
  }
  function r(){
    new mdc.dialog.MDCDialog(document.querySelector('.luck-4')).open();
  
  }
  
  function w(){
    new mdc.dialog.MDCDialog(document.querySelector('.luck-2')).open();
  
  }
  function e(){
    new mdc.dialog.MDCDialog(document.querySelector('.luck-3')).open();
  
  }
  
  function beatify() {
    var val = editor.session.getValue();
  //Remove leading spaces
    var array = val.split(/\n/);
    array[0] = array[0].trim();
    val = array.join("\n"); 
  //Actual beautify (prettify) 
    val = js_beautify(val);
  //Change current text to formatted text
    editor.session.setValue(val);
  }
  
  function saveTextAsFile(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    }
     
    downloadLink.click();
  }
  var write_text = editor.session.getValue();
  function save(){
    saveTextAsFile(write_text,'download.txt')
  }