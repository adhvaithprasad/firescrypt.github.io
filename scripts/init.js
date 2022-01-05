function init() {
  document.querySelector(".dashboard--main").style.display="none";
  document.querySelector(".main--editor").style.display="block";

  

    




 var firepadRef = getExampleRef();


  require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });
  window.MonacoEnvironment = { getWorkerUrl: () => proxy };

  let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));



  require(["vs/editor/editor.main"], function () {
    window.editor = monaco.editor.create(document.getElementById('firepad-container'), {
      language: 'python',
      theme: 'vs-dark'
    });


    Firepad.fromMonaco(firepadRef, window.editor);
  });


}

