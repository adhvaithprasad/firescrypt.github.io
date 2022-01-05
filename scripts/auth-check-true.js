// dashboard
var tabBar1 = new mdc.tabBar.MDCTabBar(document.querySelector('.dashboard-tab-bar'));
var contentEls1 = document.querySelectorAll('.content');
tabBar1.listen('MDCTabBar:activated', function(event) {
  // Hide currently-active content
  document.querySelector('.content--active').classList.remove('content--active');
  // Show content for newly-activated tab
  contentEls1[event.detail.index].classList.add('content--active');
});


// kanban
// var kanbanBar1 = new mdc.tabBar.MDCTabBar(document.querySelector('.kanban-tab-bar'));
// var contentEls1 = document.querySelectorAll('.kanban-content');
// kanbanBar1.listen('MDCTabBar:activated', function(event) {
//   // Hide currently-active content
//   document.querySelector('.kanban-content--active').classList.remove('kanban-content--active');
//   // Show content for newly-activated tab
//   contentEls1[event.detail.index].classList.add('kanban-content--active');
// });



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    var hash = window.location.hash.replace(/#/g, '');

    // take a look at hashes


    if (hash) {

      document.querySelector(".main--editor").style.display = "block";
      // document.querySelector(".main--nav").style.display = "none";
      document.querySelector(".dashboard--main").style.display = "none";
      init()

      var element = document.querySelector('.monaco-editor');
      if (typeof (element) != 'undefined' && element != null) {
        //  window  editor Exists.
        window.onresize = function () {
          editor.layout();
        };

      }
 

    }

    // hash does not Exist
         else {
        document.querySelector(".main--editor").style.display = "none";
        document.querySelector(".dashboard--main").style.display = "block";


       


      }
  if (user !== null) {
    user.providerData.forEach((profile) => {

      document.getElementById("user-img").src = profile.photoURL;
      // document.getElementById("user-name").innerHTML = profile.displayName;
      document.getElementById("user-image-editor").src = profile.photoURL;


      

      const fetchChat = firebase.database().ref();
      fetchChat.child("user").child(profile.displayName).on("child_added", function (snapshot) {
        const messages = snapshot.val();
        const msg = "<div class='project'><div class='project--inner-wrap'><p><b>" + messages.project + "</b></p> <div class='grp'><a target='_blank' href='../#" + messages.project + "'type='button' class='mdc-button mdc-button--raised open' >Open session</a><button class='mdc-button mdc-button--raised delete' type='button'><i class='material-icons mdc-button__icon' aria-hidden='true'>delete</i></button></div> </div></div>";
        document.getElementById('project').innerHTML += msg;

      });








    })




  }



  }







  else {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth()
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  }

});