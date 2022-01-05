function find() {

  editor ?.focus();
  const action = editor ?.getAction("actions.find");
  void action ?.run();

}




