var firebaseConfig = {
	apiKey: "AIzaSyC-3XDB0vSiQlbGL-Sa9rOiteFYitYfstw",
	authDomain: "firescrypt-web.firebaseapp.com",
	databaseURL: "https://firescrypt-web-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "firescrypt-web",
	storageBucket: "firescrypt-web.appspot.com",
	messagingSenderId: "276701233302",
	appId: "1:276701233302:web:5e513b1d8c681e830082b7",
	measurementId: "G-T12DZ6GPNN"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var storage = firebase.storage();
var storageRef = storage.ref();
var metadata = {
	contentType: 'text/html'
};
var id = "id" + Math.random().toString(16).slice(2) 
var blob = new Blob(['adhvaith is great'], {
	type: 'text/html'
});

function upload_file() {
	firebase.storage().ref('code/' + id).put(blob).then(snapshot => {
		console.log('Uploaded.');
		
	});
}