function create(){

  
   init()
    const user = firebase.auth().currentUser;
    user.providerData.forEach((profile) => {
      
      const timestamp = Date.now();
      var hash = window.location.hash.replace(/#/g, '');
      var ref = firebase.database().ref("user/"+profile.displayName+"/"+timestamp);


ref.set({
  project: hash
});



    });
 location.reload();



}