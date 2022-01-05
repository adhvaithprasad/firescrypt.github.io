function find_initial() {
  const match= document.getElementById('search-editor').value ;
  const model = editor.getModel();
  const range = model.findMatches(match)[0].range;
  editor.setSelection(range);
  console.log(range.startLineNumber);
  editor.revealLine(range.startLineNumber);


}